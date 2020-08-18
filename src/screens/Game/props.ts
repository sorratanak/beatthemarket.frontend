import { StackScreenProps, StackNavigationProp } from '@react-navigation/stack';

import { StackParams } from '../../navigation/stacks/GameStack';

type NavigationProps = StackNavigationProp<StackParams, 'Game'>;
type RouteProps = StackScreenProps<StackParams, 'Game'>;

export interface ScreenProps extends NavigationProps, RouteProps {}
