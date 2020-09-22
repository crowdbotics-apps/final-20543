import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Maps105163Navigator from '../features/Maps105163/navigator';
import Settings105141Navigator from '../features/Settings105141/navigator';
import Settings105126Navigator from '../features/Settings105126/navigator';
import NotificationList105125Navigator from '../features/NotificationList105125/navigator';
import Maps105124Navigator from '../features/Maps105124/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Maps105163: { screen: Maps105163Navigator },
Settings105141: { screen: Settings105141Navigator },
Settings105126: { screen: Settings105126Navigator },
NotificationList105125: { screen: NotificationList105125Navigator },
Maps105124: { screen: Maps105124Navigator },

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
