import { StackScreenProps, StackNavigationProp } from '@react-navigation/stack';

import { StackParams } from '../../navigation/stacks/SettingsStack';

type NavigationProps = StackNavigationProp<StackParams, 'Music'>;
type RouteProps = StackScreenProps<StackParams, 'Music'>;

export interface ScreenProps extends NavigationProps, RouteProps {}
