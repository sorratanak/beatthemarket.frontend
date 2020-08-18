import { StackScreenProps, StackNavigationProp } from '@react-navigation/stack';

import { StackParams } from '../../navigation/stacks/SettingsStack';

type NavigationProps = StackNavigationProp<StackParams, 'Settings'>;
type RouteProps = StackScreenProps<StackParams, 'Settings'>;

export interface ScreenProps extends NavigationProps, RouteProps {}
