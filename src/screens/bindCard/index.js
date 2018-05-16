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
import CCB from '../../../assets/bankcard/ccb.png';
import BOCCOM from '../../../assets/bankcard/boccom.png';

class BindCard extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  handleAdd =()=> {

  }

  render() {
    const { iptVal, totalAmt } = this.state;
    return (
      <Container style={{backgroundColor: '#000'}}>
        <Header style={s.header}>
          <Left>
            <Button transparent onPress={() => this.props.navigation.navigate("DrawerOpen")}>
              <Icon style={s.wordCol} name="arrow-back" />
            </Button>
          </Left>
          <Body>
          <Title style={s.wordBig}>绑卡管理</Title>
          </Body>
          <Right>
            <Button transparent onPress={() => this.handleAdd}>
              <Icon style={s.wordCol} name="add" />
            </Button>
          </Right>
        </Header>

        <Content>
          <View style={s.card}>
            <Image
              style={{
                position: 'absolute',
                width: '100%',
                height: '100%',
              }}
              source={CCB}
            />
            <View style={s.upper}>
              <Text style={s.rowOne}>建设银行</Text>
              <Text style={s.rowTwo}>储蓄卡</Text>
            </View>
            <View style={s.lower}>
              <Text style={s.lowerText}>**** **** **** 2345</Text>
            </View>
          </View>
          <View style={s.card}>
            <Image
              style={{
                position: 'absolute',
                width: '100%',
                height: '100%',
              }}
              source={BOCCOM}
            />
            <View style={s.upper}>
              <Text style={s.rowOne}>交通银行</Text>
              <Text style={s.rowTwo}>储蓄卡</Text>
            </View>
            <View style={s.lower}>
              <Text style={s.lowerText}>**** **** **** 2345</Text>
            </View>
          </View>

        </Content>
      </Container>
    );
  }
}


export default BindCard;
