import React, {
  useContext,
  useMemo,
  useState,
  useEffect,
  useCallback,
} from 'react';
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
} from 'react-share';
import { View, Text, TouchableOpacity } from 'react-native';
import Slider from '@react-native-community/slider';
import _ from 'lodash';

import { IPoint, IStockChange } from '../../types';
import { LineChart } from '../LineChart';
import {
  GameContext,
  ThemeContext,
  PortfolioContext,
  IapContext,
  UserContext,
} from '../../contexts';
import { getThemedStyles, MODAL_CONTAINER_STYLE } from './styles.web';
import { getStockChanges } from '../../utils/parsing';
import { StockList } from '../StockList';
import { COLORS } from '../../themes/colors';
import {
  STOCK_CHANGE_TYPE,
  ACCOUNT_BALANCE_TYPE,
  PURCHASE_TYPE,
  SUBSCRIPTION_TYPE,
  MAIN_URL,
  SHARE_DESCRIPTION,
  HASHTAG_BEATTHEMARKET,
} from '../../constants';
import { getMoneyFormat, isActiveMarginTradingSubscription } from '../../utils';
import { SwitchRow } from '../SwitchRow';
import { DefaultModal } from '../DefaultModal';
import { BuySubscriptionModal } from '../BuySubscriptionModal';
import { styles } from '../Container/styles';

interface ChartHeaderProps {
  themedStyles: any;
  data: IPoint[];
}
function ChartHeader({ themedStyles, data }: ChartHeaderProps) {
  const { user, userInfo, onGetUserInfo } = useContext(UserContext);
  const { profit, profitsRealized, balance } = useContext(PortfolioContext);
  const { activeStock } = useContext(GameContext);
  const { onSelectSubscription } = useContext(IapContext);

  const activeProfit = useMemo(() => profit?.[activeStock?.id], [
    profit,
    activeStock,
  ]);
  const activeBalance = useMemo(
    () =>
      balance
        ? _.find(
          Object.values(balance),
          (someBalance) => someBalance.name === ACCOUNT_BALANCE_TYPE.CASH,
        )
        : null,
    [balance],
  );
  const profitsRealizedValue = useMemo(
    () =>
      _.reduce(
        profitsRealized?.[activeStock?.id],
        (accum, el) => accum + el.profitLoss,
        0,
      ),
    [profitsRealized, activeStock],
  );

  const [prelastItem, lastItem] = useMemo(() => {
    const [prelast, last] = data.slice(-2);
    return !last ? [null, prelast] : [prelast, last];
  }, [data]);

  const [stockChange, setStockChange] = useState<IStockChange>(null);

  const [isCashBoost, setIsCashBoost] = useState<boolean>(
    isActiveMarginTradingSubscription(userInfo?.user?.subscriptions),
  );
  useEffect(() => {
    setIsCashBoost(
      isActiveMarginTradingSubscription(userInfo?.user?.subscriptions),
    );
  }, [userInfo]);

  const [isCashBoostModalVisible, setIsCashBoostModalVisible] = useState<
    boolean
  >(false);
  const onCashBoostChange = useCallback(() => {
    setIsCashBoost(!isCashBoost);
  }, [isCashBoost, setIsCashBoost]);

  useEffect(() => {
    setStockChange(getStockChanges(prelastItem, lastItem));
  }, [prelastItem, lastItem]);

  return (
    <>
      <View style={themedStyles.chartHeaderContainer}>
        <View style={themedStyles.chartHeaderSubcontainer}>
          <Text style={themedStyles.chartHeaderTitle}>
            {activeStock?.name}{' '}
          </Text>
          <Text style={themedStyles.chartHeaderTitleAbbr}>
            {activeStock?.symbol && `[${activeStock?.symbol}]`}
          </Text>
        </View>
        {stockChange && (
          <View style={themedStyles.chartHeaderNumberContainer}>
            <Text style={themedStyles.chartHeaderStockProfitLoss}>
              {getMoneyFormat(stockChange.currentValue || 0)}
            </Text>
            <Text
              style={
                stockChange.percent > 0
                  ? themedStyles.chartHeaderStockChangePositivePercent
                  : themedStyles.chartHeaderStockChangeNegativePercent
              }>
              {stockChange.difference}
              {`    `}({stockChange.percent}%)
            </Text>
          </View>
        )}
        <View style={themedStyles.userBalanceContainer}>
          <Text style={themedStyles.chartHeaderStockProfitLoss}>
            {getMoneyFormat(
              profitsRealizedValue + (activeProfit?.profitLoss || 0),
            )}
          </Text>
          <Text style={themedStyles.chartHeaderCashBalance}>
            {getMoneyFormat(activeBalance?.balance || 0)}
          </Text>
        </View>
      </View>
      <View style={themedStyles.cashShareRow}>
        <TouchableOpacity
          disabled={isCashBoost}
          onPress={() => {
            onSelectSubscription(SUBSCRIPTION_TYPE.MARGIN_TRADING);
            setIsCashBoostModalVisible(true);
          }}>
          <View pointerEvents="none">
            <SwitchRow
              title="10x Cash Boost"
              switchValue={isCashBoost}
              onSwitchValueChange={onCashBoostChange}
              style={{
                container: themedStyles.cashBoost10xContainer,
              }}
            />
          </View>
        </TouchableOpacity>
        {isCashBoost && (
          <View style={themedStyles.cashBoostLevelContainer}>
            <Text style={themedStyles.cashBoostLevelText}>
              Cash Boost Level {getMoneyFormat(1000000)}
            </Text>
          </View>
        )}

        <View style={themedStyles.shareRowContainer}>
          <FacebookShareButton
            url={MAIN_URL}
            quote={`${SHARE_DESCRIPTION} ${profitsRealizedValue}\n`}
            hashtag={HASHTAG_BEATTHEMARKET}>
            <FacebookIcon size={36} />
          </FacebookShareButton>
          <TwitterShareButton
            url={MAIN_URL}
            title={`${SHARE_DESCRIPTION} ${profitsRealizedValue}\n`}
            hashtags={[HASHTAG_BEATTHEMARKET]}>
            <TwitterIcon size={36} />
          </TwitterShareButton>
        </View>
      </View>

      <DefaultModal
        modalId="cash-boost-pay-modal"
        style={MODAL_CONTAINER_STYLE}
        isVisible={isCashBoostModalVisible}
        isBackdrop
        onBackdropPress={() => {
          setIsCashBoostModalVisible(false);
          setIsCashBoost(false);
        }}>
        <BuySubscriptionModal
          paymentCallback={() => {
            setIsCashBoostModalVisible(false);
            onGetUserInfo(user);
          }}
          purchaseType={PURCHASE_TYPE.SUBSCRIPTION}
        />
      </DefaultModal>
    </>
  );
}

interface ChartFooterProps {
  themedStyles: any;
}
function ChartFooter({ themedStyles }: ChartFooterProps) {
  const { onBuyStock, onSellStock } = useContext(GameContext);

  const SHARES_CHANGE_STEP = 20;
  const SLIDER_MIN_VALUE = 1;
  const SLIDER_MAX_VALUE = 500;

  const [sliderValue, setSliderValue] = useState(SLIDER_MIN_VALUE);

  const onChangeSliderByButton = useCallback(
    (type: string) => {
      if (type === STOCK_CHANGE_TYPE.SELL) {
        if (sliderValue > SHARES_CHANGE_STEP) {
          setSliderValue(sliderValue - SHARES_CHANGE_STEP);
        } else {
          setSliderValue(SLIDER_MIN_VALUE);
        }
      } else if (sliderValue + SHARES_CHANGE_STEP < SLIDER_MAX_VALUE) {
        setSliderValue(sliderValue + SHARES_CHANGE_STEP);
      } else {
        setSliderValue(SLIDER_MAX_VALUE);
      }
    },
    [sliderValue, setSliderValue],
  );

  return (
    <View style={themedStyles.chartFooterContainer}>
      <View style={themedStyles.chartFooterCell}>
        <TouchableOpacity
          onPress={() => onChangeSliderByButton(STOCK_CHANGE_TYPE.SELL)}
          style={themedStyles.chartFooterSliderButtonContainer}>
          <Text style={themedStyles.chartFooterSliderButtonTitle}>-</Text>
        </TouchableOpacity>
        <View style={themedStyles.chartFooterSliderContainer}>
          <Text style={themedStyles.chartFooterSharesTitle}>
            {Math.round(sliderValue)} shares
          </Text>
          <Slider
            value={sliderValue}
            onValueChange={setSliderValue}
            minimumValue={SLIDER_MIN_VALUE}
            maximumValue={SLIDER_MAX_VALUE}
            thumbTintColor={COLORS.WHITE}
            minimumTrackTintColor={COLORS.GRAY}
            maximumTrackTintColor={COLORS.GRAY}
          />
        </View>
        <TouchableOpacity
          onPress={() => onChangeSliderByButton(STOCK_CHANGE_TYPE.BUY)}
          style={themedStyles.chartFooterSliderButtonContainer}>
          <Text style={themedStyles.chartFooterSliderButtonTitle}>+</Text>
        </TouchableOpacity>
      </View>
      <View style={themedStyles.chartFooterCell}>
        <TouchableOpacity
          onPress={() => onSellStock(sliderValue)}
          style={[
            themedStyles.chartFooterButtonContainer,
            themedStyles.chartFooterButtonFall,
          ]}>
          <Text style={themedStyles.chartFooterButtonText}>Sell</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => onBuyStock(sliderValue)}
          style={[
            themedStyles.chartFooterButtonContainer,
            themedStyles.chartFooterButtonRise,
          ]}>
          <Text style={themedStyles.chartFooterButtonText}>Buy</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

interface Props {
  chartData: IPoint[];
}
export function GameChartBoard({ chartData }: Props) {
  const { theme } = useContext(ThemeContext);
  const { gameId, onSetActiveStock, stocks, activeStock } = useContext(
    GameContext,
  );
  const themedStyles = useMemo(() => getThemedStyles(theme), [theme]);

  const [isChart, setIsChart] = useState(false);

  useEffect(() => {
    setIsChart(false);
    setTimeout(() => setIsChart(true), 50);
  }, [activeStock]);

  return (
    <View style={themedStyles.container}>
      <View style={themedStyles.chartArea}>
        <ChartHeader themedStyles={themedStyles} data={chartData} />
        <View style={themedStyles.chartContainer}>
          {isChart && <LineChart data={chartData} />}
        </View>
      </View>
      <View style={themedStyles.infoArea}>
        {gameId && <ChartFooter themedStyles={themedStyles} />}
        <StockList
          data={stocks}
          activeStock={activeStock}
          onItemPress={onSetActiveStock}
        />
      </View>
    </View>
  );
}
