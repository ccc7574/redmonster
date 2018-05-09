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
  Input,
  Form,
  Item,
  Thumbnail,
  Label,
} from "native-base";

import s from "./styles";

class Wallet extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }


  render() {
    const {  } = this.state;
    return (
      <Container style={{backgroundColor: '#141414'}}>
        <Header style={s.header}>
          <Left>
            <Button transparent onPress={() => this.props.navigation.navigate("DrawerOpen")}>
              <Icon style={s.wordCol} name="arrow-back" />
            </Button>
          </Left>
          <Body>
          <Title style={s.wordBig}>我的钱包</Title>
          </Body>
          <Right>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Text style={s.wordCol}>账单</Text>
            </Button>
          </Right>
        </Header>
        <Content style={{marginTop: 160}}>
          <Text style={{marginBottom: 10, textAlign: 'center'}}>账户余额</Text>
          <Text style={{fontSize: 32, textAlign: 'center'}}>￥{'189.23'}</Text>
        </Content>
        <Content >
          <Button block primary style={{ margin: 15, marginTop: 120 }}>
            <Text>储值优惠</Text>
          </Button>
          <Button bordered block primary style={{ margin: 15, marginTop: 10 }}>
            <Text>提现</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}


export default Wallet;
