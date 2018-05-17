import React, { Component } from "react";
import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Body,
  Left,
  Right,
  Icon,
  Text,
} from "native-base";
import { View } from "react-native";
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
        <Header style={{backgroundColor: "#1A1A1A", borderBottomWidth: 0}}>
          <Left>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon name="arrow-back" style={s.fontWhite}/>
            </Button>
          </Left>
          <Body>
          <View style={s.title}>
            <Button small style={s.tabBtn} onPress={() => this.handleTab(1)}>
              <Text style={s.fontWhite}>直推</Text>
            </Button>
            <Button small onPress={() => this.handleTab(2)}>
              <Text style={s.fontWhite}>团队</Text>
            </Button>
          </View>
          </Body>
          <Right />
        </Header>

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
