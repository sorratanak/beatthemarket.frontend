import { StackScreenProps, StackNavigationProp } from '@react-navigation/stack';

import { StackParams } from '../../navigation';

type NavigationProps = StackNavigationProp<StackParams, 'Home'>;
type RouteProps = StackScreenProps<StackParams, 'Home'>;

export interface ScreenProps extends NavigationProps, RouteProps {}
