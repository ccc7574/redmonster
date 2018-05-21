import React, { Component } from "react";
import { Image } from "react-native";
import {
  Container,
  Header,
  Title,
  Content,
  Text,
  Button,
  Icon,
  Left,
  Right,
  Body,
  Input,
  Form,
  Item,
  Label,
  View,
} from "native-base";
import s from './styles';
import BG from '../../../assets/couponBG.png';
import styles from "../buy/styles";

class BindCard extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  handleUse =()=> {

  }

  render() {
    const {  } = this.state;
    return (
      <Container style={{backgroundColor: '#000'}}>
        <Header style={s.header}>
          <Left>
            <Button transparent onPress={() => this.props.navigation.navigate("DrawerOpen")}>
              <Icon style={s.wordCol} name="arrow-back" />
            </Button>
          </Left>
          <Body>
          <Title style={s.wordBig}>我的优惠券</Title>
          </Body>
          <Right/>
        </Header>

        <Content>
          <View style={s.tabs}>
            <View style={s.tab}>
              <Text style={s.tabTxtOn}>未使用</Text>
            </View>
            <View style={s.tab}>
              <Text style={s.tabTxt}>已使用</Text>
            </View>
            <View style={s.tab}>
              <Text style={s.tabTxt}>已过期</Text>
            </View>
          </View>
          <View style={s.card}>
            <Image
              style={{
                position: 'absolute',
                width: '100%',
                height: '100%',
              }}
              source={BG}
            />
            <View style={s.upper}>
              <View style={s.left}>
                <View style={s.numPart}>
                  <Text style={s.symbol}>￥</Text>
                  <Text style={s.amt}>18</Text>
                </View>
                <View style={s.txtPart}>
                  <Text style={s.rowOne}>新用户专属</Text>
                  <Text style={s.rowTwo}>无门槛</Text>
                </View>
              </View>
              <View style={s.right}>
                <Button block bordered onPress={this.handleUse} style={s.btn}>
                  <Text style={s.btnTxt}>立即使用</Text>
                </Button>
              </View>
            </View>
            <View style={s.lower}>
              <Text style={s.lowerText}>2018-4-21至2019-6-12</Text>
            </View>
          </View>
          <View style={s.card}>
            <Image
              style={{
                position: 'absolute',
                width: '100%',
                height: '100%',
              }}
              source={BG}
            />
            <View style={s.upper}>
              <View style={s.left}>
                <View style={s.numPart}>
                  <Text style={s.symbol}>￥</Text>
                  <Text style={s.amt}>28</Text>
                </View>
                <View style={s.txtPart}>
                  <Text style={s.rowOne}>生日小惊喜</Text>
                  <Text style={s.rowTwo}>满100元可用</Text>
                </View>
              </View>
              <View style={s.right}>
                <Button block bordered onPress={this.handleUse} style={s.btn}>
                  <Text style={s.btnTxt}>立即使用</Text>
                </Button>
              </View>
            </View>
            <View style={s.lower}>
              <Text style={s.lowerText}>2018-4-21至2019-6-12</Text>
            </View>
          </View>

        </Content>
      </Container>
    );
  }
}


export default BindCard;
