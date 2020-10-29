import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile164806Navigator from '../features/UserProfile164806/navigator';
import Tutorial164805Navigator from '../features/Tutorial164805/navigator';
import NotificationList164777Navigator from '../features/NotificationList164777/navigator';
import Settings164776Navigator from '../features/Settings164776/navigator';
import Settings164768Navigator from '../features/Settings164768/navigator';
import UserProfile164766Navigator from '../features/UserProfile164766/navigator';
import UserProfile164735Navigator from '../features/UserProfile164735/navigator';
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
UserProfile164806: { screen: UserProfile164806Navigator },
Tutorial164805: { screen: Tutorial164805Navigator },
NotificationList164777: { screen: NotificationList164777Navigator },
Settings164776: { screen: Settings164776Navigator },
Settings164768: { screen: Settings164768Navigator },
UserProfile164766: { screen: UserProfile164766Navigator },
UserProfile164735: { screen: UserProfile164735Navigator },
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
