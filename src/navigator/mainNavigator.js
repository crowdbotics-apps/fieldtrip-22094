import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Tutorial164734Navigator from '../features/Tutorial164734/navigator';
import NotificationList164706Navigator from '../features/NotificationList164706/navigator';
import Settings164705Navigator from '../features/Settings164705/navigator';
import Settings164697Navigator from '../features/Settings164697/navigator';
import UserProfile164695Navigator from '../features/UserProfile164695/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Tutorial164734: { screen: Tutorial164734Navigator },
NotificationList164706: { screen: NotificationList164706Navigator },
Settings164705: { screen: Settings164705Navigator },
Settings164697: { screen: Settings164697Navigator },
UserProfile164695: { screen: UserProfile164695Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
