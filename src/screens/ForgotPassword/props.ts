import { StackScreenProps, StackNavigationProp } from '@react-navigation/stack';

import { StackParams } from '../../navigation/stacks/AuthStack';

type NavigationProps = StackNavigationProp<StackParams, 'ForgotPassword'>;
type RouteProps = StackScreenProps<StackParams, 'ForgotPassword'>;

export interface ScreenProps extends NavigationProps, RouteProps {}
