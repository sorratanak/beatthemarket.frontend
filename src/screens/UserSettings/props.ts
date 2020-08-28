import { StackScreenProps, StackNavigationProp } from '@react-navigation/stack';

import { StackParams } from '../../navigation/stacks/SettingsStack';

type NavigationProps = StackNavigationProp<StackParams, 'UserSettings'>;
type RouteProps = StackScreenProps<StackParams, 'UserSettings'>;

export interface ScreenProps extends NavigationProps, RouteProps {}
