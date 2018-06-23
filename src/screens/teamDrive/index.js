import React, { Component } from "react";
import {
  Container,
  Content,
  Button,
  Body,
  Left,
  Right,
  Icon,
  Text,
} from "native-base";
import { View } from "react-native";
import Header from "../../components/Header/index";
import s from "./styles";

class FixedLabel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected1: undefined,
      selected2: undefined,
      countAmt: 35,
      activeTab: 1,
    };
  }

  handleTab = (key) => {
    this.setState({
      activeTab: key
    });
  };

  render() {
    return (
      <Container style={s.container}>
        <Header
          title="历史记录"
          needBack
          navigation={this.props.navigation}
        />

        <Content style={s.content}>
          <View style={s.viewBlock}>
            <View style={s.content}>
              <View style={s.rowTop}>
                <View>
                  <Text style={[s.fontWhite, s.topLine, s.userName]}>李大路</Text>
                  <Text style={s.fontWhite}>账号 15098098432</Text>
                </View>
                <View style={s.rightBox}>
                  <View style={s.flexBottom}>
                    <Text style={[s.fontGold, s.topLine, s.textRight]}>￥534</Text>
                    <Text style={[s.fontWhite, s.fontSmall]}>本月消费</Text>
                  </View>
                  <View>
                    <Text style={[s.fontGold, s.topLine, s.textRight]}>￥239</Text>
                    <Text style={[s.fontWhite, s.fontSmall]}>本月业绩</Text>
                  </View>
                </View>
              </View>
              <View style={s.rowBottom}>
                <Text style={s.fontWhite}>总业绩 ￥234</Text>
                <Text style={[s.fontWhite, s.left20]}>佣金 ￥234</Text>
              </View>
            </View>
          </View>

          <View style={s.viewBlock}>
            <View style={s.content}>
              <View style={s.rowTop}>
                <View>
                  <Text style={[s.fontWhite, s.topLine, s.userName]}>李小路</Text>
                  <Text style={s.fontWhite}>账号 15098098432</Text>
                </View>
                <View style={s.rightBox}>
                  <View style={s.flexBottom}>
                    <Text style={[s.fontGold, s.topLine, s.textRight]}>￥534</Text>
                    <Text style={[s.fontWhite, s.fontSmall]}>本月消费</Text>
                  </View>
                  <View>
                    <Text style={[s.fontGold, s.topLine, s.textRight]}>￥239</Text>
                    <Text style={[s.fontWhite, s.fontSmall]}>本月业绩</Text>
                  </View>
                </View>
              </View>
              <View style={s.rowBottom}>
                <Text style={s.fontWhite}>总业绩 ￥234</Text>
                <Text style={[s.fontWhite, s.left20]}>佣金 ￥234</Text>
              </View>
            </View>
          </View>

          <View style={s.viewBlock}>
            <View style={s.content}>
              <View style={s.rowTop}>
                <View>
                  <Text style={[s.fontWhite, s.topLine, s.userName]}>王晓晓</Text>
                  <Text style={s.fontWhite}>账号 15098098432</Text>
                </View>
                <View style={s.rightBox}>
                  <View style={s.flexBottom}>
                    <Text style={[s.fontGold, s.topLine, s.textRight]}>￥534</Text>
                    <Text style={[s.fontWhite, s.fontSmall]}>本月消费</Text>
                  </View>
                  <View>
                    <Text style={[s.fontGold, s.topLine, s.textRight]}>￥239</Text>
                    <Text style={[s.fontWhite, s.fontSmall]}>本月业绩</Text>
                  </View>
                </View>
              </View>
              <View style={s.rowBottom}>
                <Text style={s.fontWhite}>总业绩 ￥234</Text>
                <Text style={[s.fontWhite, s.left20]}>佣金 ￥234</Text>
              </View>
            </View>
          </View>
          <Text style={s.bottomTip}>已显示全部</Text>
        </Content>
      </Container>
    );
  }
}

export default FixedLabel;
