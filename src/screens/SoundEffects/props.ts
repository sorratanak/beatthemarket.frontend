import { StackScreenProps, StackNavigationProp } from '@react-navigation/stack';

import { StackParams } from '../../navigation/stacks/SettingsStack';

type NavigationProps = StackNavigationProp<StackParams, 'SoundEffects'>;
type RouteProps = StackScreenProps<StackParams, 'SoundEffects'>;

export interface ScreenProps extends NavigationProps, RouteProps {}
