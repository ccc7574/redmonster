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
  Thumbnail,
  Label,
  View
} from "native-base";

import s from "./styles";
import Img from '../../../assets/wallet.png';

class Wallet extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }


  render() {
    const {  } = this.state;
    return (
      <Container style={{backgroundColor: '#000',}}>
        <Header style={s.header}>
          <Left>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon style={s.wordCol} name="arrow-back" />
            </Button>
          </Left>
          <Body>
          <Title style={s.wordBig}>消息详情</Title>
          </Body>
          <Right />
        </Header>
        <Content>
          <View style={{backgroundColor: '#1a1a1a', height: 224,}}>
            <Text style={s.title}>主打商品</Text>
            <View style={s.imgWrapper}>
              <Image
                style={{
                  width: '100%',
                  height: '100%',
                }}
                source={Img}
              />
            </View>
          </View>
        </Content>
      </Container>
    );
  }
}


export default Wallet;
