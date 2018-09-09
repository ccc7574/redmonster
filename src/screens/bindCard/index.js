import React, { Component } from "react";
import { Image, Alert } from "react-native";
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
  View,
} from "native-base";
import s from './styles';
import CCB from '../../../assets/bankcard/ccb.png';
import BOCCOM from '../../../assets/bankcard/boccom.png';
import noOrder from "../../../assets/noOrder.png";

const NoOrder = () => {
  return (
    <View style={s.noRecord}>
      <Image
        style={{
          width: "100%",
          height: "100%"
        }}
        resizeMode={"contain"}
        source={noOrder}
      />
      <Text style={s.noRecordTxt}>暂未绑卡</Text>
    </View>
  );
};

const CardItem = ({ bank, bankImg, type, lastNum }) => {
  return(
    <View style={s.card}>
      <Image
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
        }}
        source={bankImg}
      />
      <View style={s.upper}>
        <Text style={s.rowOne}>{bank}</Text>
        <Text style={s.rowTwo}>{type}</Text>
      </View>
      <View style={s.lower}>
        <Text style={s.lowerText}>**** **** **** {lastNum}</Text>
      </View>
    </View>
  )
};

class BindCard extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  handleAdd = () => {
    Alert.alert("暂不可用");
  };

  render() {
    const { iptVal, totalAmt } = this.state;

    return (
      <Container style={{backgroundColor: '#000'}}>
        <Header style={s.header}>
          <Left>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon style={s.wordCol} name="arrow-back" />
            </Button>
          </Left>
          <Body>
          <Title style={s.wordBig}>绑卡管理</Title>
          </Body>
          <Right>
            <Button transparent onPress={() => this.handleAdd()}>
              <Icon style={s.wordCol} name="add" />
            </Button>
          </Right>
        </Header>

        <Content>
          <NoOrder />
          {/*<CardItem bank={'建设银行'} bankImg={CCB} type={'储蓄卡'} lastNum={'2345'} />*/}
          {/*<CardItem bank={'交通银行'} bankImg={BOCCOM} type={'储蓄卡'} lastNum={'1517'} />*/}
        </Content>
      </Container>
    );
  }
}


export default BindCard;
