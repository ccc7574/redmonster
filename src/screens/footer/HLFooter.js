import React, { Component } from "react";
import {
  Button,
  Text,
  View,
  Footer,
  FooterTab,
} from "native-base";
import { Image } from "react-native";
import { Dimensions, Platform } from 'react-native';
import fs from './styles';
const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');

class HLFooter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tab1: true,
      tab2: false,
      tab3: false,
      tab4: false,
    };
  }

  render() {
    return (
        <Footer style={fs.footerTab}>
          <FooterTab style={fs.footerTab}>
            <View>footer</View>
          </FooterTab>
        </Footer>
    );
  }
}

export default HLFooter;
