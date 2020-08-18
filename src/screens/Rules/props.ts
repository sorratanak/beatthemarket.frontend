import { StackScreenProps, StackNavigationProp } from '@react-navigation/stack';

import { StackParams } from '../../navigation/stacks/RulesStack';

type NavigationProps = StackNavigationProp<StackParams, 'Rules'>;
type RouteProps = StackScreenProps<StackParams, 'Rules'>;

export interface ScreenProps extends NavigationProps, RouteProps {}
