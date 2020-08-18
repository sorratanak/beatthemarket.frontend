import { StackScreenProps, StackNavigationProp } from '@react-navigation/stack';

import { StackParams } from '../../navigation/stacks/SettingsStack';

type NavigationProps = StackNavigationProp<StackParams, 'Subscriptions'>;
type RouteProps = StackScreenProps<StackParams, 'Subscriptions'>;

export interface ScreenProps extends NavigationProps, RouteProps {}
