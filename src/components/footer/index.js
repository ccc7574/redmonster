import React, {Component} from "react";
import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Body,
  Left,
  Right,
  Text,
  View,
  Footer,
  FooterTab,
} from "native-base";
import {Image} from "react-native";
import fs from "./styles";

const SLIDER_1_FIRST_ITEM = 1;



class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      switchFlag: false,
      checkbox: true,
      slider1ActiveSlide: SLIDER_1_FIRST_ITEM,
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
          <Button style={fs.footerButton}
                  onPress={() => this.props.navigation.navigate("Settings")}
                  vertical
          >
            <View>
              <Image style={fs.footerImageHL} source={require('../../../assets/home/hl-active.png')}/>
              <Text style={fs.footerText}>红炉</Text>
            </View>
          </Button>
          <Button vertical style={fs.footerButton}
                  onPress={() => this.props.navigation.navigate("WareHouse")}>
            <View>
              <Image style={fs.footerImage} source={require('../../../assets/home/storage.png')}/>
              <Text style={fs.footerText}>仓库</Text>
            </View>
          </Button>
          <Button style={fs.footerButton}
                  active={this.state.tab3}
                  onPress={() => this.props.navigation.navigate("History")}
                  vertical
          >
            <View>
              <Image style={fs.footerImage} source={require('../../../assets/home/team.png')}/>
              <Text style={fs.footerText}>团队</Text>
            </View>
          </Button>
          <Button style={fs.footerButton}
                  active={this.state.tab4}
                  onPress={() => this.props.navigation.navigate("Mine")}
                  vertical
          >
            <View>
              <Image style={fs.footerImage} source={require('../../../assets/home/mine.png')}/>
              <Text style={fs.footerText}>我的</Text>
            </View>
          </Button>
        </FooterTab>
      </Footer>
    );
  }
}

export default Footer;
