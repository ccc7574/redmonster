import React from "react";
import {Root} from "native-base";
import {StackNavigator, DrawerNavigator} from "react-navigation";

import Default from "./screens/button/default";
import Outline from "./screens/button/outline";
import Rounded from "./screens/button/rounded";
import Block from "./screens/button/block";
import Custom from "./screens/button/custom";
import Transparent from "./screens/button/transparent";
import Disabled from "./screens/button/disabled";
import BasicFab from "./screens/fab/basic";
import History from "./screens/history/";
import WareHouse from "./screens/warehouse";
import Register from "./screens/register";
import Login from "./screens/login";
import Settings from "./screens/settings";
import Nickname from './screens/nickname';
import Wallet from './screens/wallet';
import HomeScreen from "./screens/homeScreen";
import PickUp from "./screens/pickUp";
import PickUpAddress from "./screens/pickUpAddress";
import Buy from "./screens/buy";
import Bill from './screens/bill';
import Withdrew from './screens/withdrew';
import TeamDrive from "./screens/teamDrive";
import Team from "./screens/team";
import BindCard from './screens/bindCard';
import Coupon from './screens/coupon';
import PickHouse from "./screens/pickHouse";
import PickUpOrderManagement from "./screens/pickUpOrderManagement";
import IntegrationRecord from './screens/integrationRecord';
import CouponForQueue from './screens/couponForQueue';
import Points from './screens/points';
import Mine from './screens/mine';
import Article1 from './screens/article1';
import Article2 from './screens/article2';
import Message from './screens/message';
import Products from './screens/products';

const Drawer = DrawerNavigator(
  {
    Home: {screen: Article2},
  },
  {
    initialRouteName: "Home",
    contentOptions: {
      activeTintColor: "#e91e63"
    },
    navigationOptions: {
      drawerLockMode: 'locked-closed'
    },
    contentComponent: props => <HomeScreen/>
  }
);

const AppNavigator = StackNavigator(
  {
    Drawer:
      {screen: Drawer,
        navigationOptions: () => ({
          drawerLockMode: 'locked-closed'
        })},
    // HomeScreen: {screen: HomeScreen},
    Default: {screen: Default},
    Outline: {screen: Outline},
    Rounded: {screen: Rounded},
    Block: {screen: Block},
    Custom: {screen: Custom},
    Transparent: {screen: Transparent},
    Disabled: {screen: Disabled},
    BasicFab: {screen: BasicFab},
    WareHouse: {screen: WareHouse},
    Register: {screen: Register},
    Login: {screen: Login},
    History: {screen: History},
    Settings: {screen: Settings},
    Nickname: {screen: Nickname},
    Wallet: {screen: Wallet},
    PickUp: {screen: PickUp},
    PickUpAddress: {screen: PickUpAddress},
    Buy: {screen: Buy},
    Bill: {screen: Bill},
    Withdrew: {screen: Withdrew},
    TeamDrive: {screen: TeamDrive},
    Team: {screen: Team},
    BindCard: {screen: BindCard},
    Coupon: {screen: Coupon},
    PickHouse: {screen: PickHouse},
    PickUpOrderManagement: {screen: PickUpOrderManagement},
    CouponForQueue: {screen: CouponForQueue},
    Points: {screen: Points},
    Mine: {screen: Mine},
    IntegrationRecord: {screen: IntegrationRecord},
    Article1: {screen: Article1},
    Article2: {screen: Article2},
    Message: {screen: Message},
    Products: {screen: Products},
  },
  {
    initialRouteName: "Drawer",
    headerMode: "none",
  }
);

export default () =>
  <Root>
    <AppNavigator/>
  </Root>;
