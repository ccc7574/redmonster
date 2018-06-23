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
  List,
  ListItem,
  View,
  Form,
  Item,
  Label,
} from "native-base";

import s from "./styles";
import Empty from '../../../assets/emptyList.png';

const datas = [
  {
    text: "卖出普洱茶叶*3",
    note: "余额：1035",
    time: "2017-07-26 17:30:12",
    amount: '+100'
  },
  {
    text: "买入普洱茶叶*3",
    note: "余额：315 (微信)",
    time: "2017-07-26 17:30:12",
    amount: '-900'
  },
  {
    text: "余额储值",
    note: "余额：315 (银行卡)",
    time: "2017-07-26 17:30:12",
    amount: '300+15'
  }
];

class Points extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 2100,

    }
  }

  render() {
    const { total } = this.state;
    return (
      <Container>
        <Header style={s.header}>
          <Left>
            <Button transparent onPress={() => this.props.navigation.navigate("DrawerOpen")}>
              <Icon style={s.wordCol} name="arrow-back" />
            </Button>
          </Left>
          <Body>
          <Title style={s.wordBig}>积分记录</Title>
          </Body>
          <Right/>
        </Header>

        <Content style={{marginTop: 0, backgroundColor: '#000'}}>
          <View style={s.form}>
            <View style={s.formItem}>
              <View style={s.formLeft}>
                <Text style={s.formTxt}>当前红积分：{total}</Text>
              </View>
              <View style={s.formRight}>
                <Text style={s.formTxtRight}>红积分</Text>
                <Button transparent onPress={() => this.props.navigation.navigate("DrawerOpen")}>
                  <Icon style={s.arrowRight} name="arrow-forward"/>
                </Button>
              </View>
            </View>
          </View>
          <List
            dataArray={datas}
            renderRow={data =>
              <ListItem style={s.listItem}>
                <View style={s.left}>
                  <Text style={{color: '#818181', width: '100%', fontSize: 16, }}>{data.text}</Text>
                  <Text style={{color: '#818181', width: '100%', marginTop: 10, fontSize: 12, }}>{data.time}</Text>
                </View>
                <View style={s.right}>
                  <Text style={{color: '#D1B27A', width: '100%', fontSize: 20, textAlign:'right'}}>{data.amount}</Text>
                </View>
              </ListItem>
            }
          />

          <View style={s.empty}>
            <View style={s.emptyWrapper}>
              <Image
                style={{
                  width: "100%",
                  height: "100%"
                }}
                resizeMode="contain"
                source={Empty}
              />
              <Text style={s.emptyTxt}>没有记录</Text>
            </View>
          </View>
        </Content>
      </Container>
    );
  }
}


export default Points;
