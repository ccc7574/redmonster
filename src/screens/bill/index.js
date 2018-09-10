import React, { Component } from "react";
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
} from "native-base";

import s from "./style";

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

class Bill extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {

    return (
      <Container style={{backgroundColor: '#fff'}}>
        <Header style={s.header}>
          <Left>
            <Button transparent onPress={() => this.props.navigation.navigate("DrawerOpen")}>
              <Icon style={s.wordCol} name="arrow-back" />
            </Button>
          </Left>
          <Body>
          <Title style={s.wordBig}>账单</Title>
          </Body>
          <Right/>
        </Header>

        <Content style={{marginTop: 0, backgroundColor: '#000'}}>
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
        </Content>
      </Container>
    );
  }
}


export default Bill;
