import React, { Component } from "react";
import { Image,TouchableOpacity } from "react-native";
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
  View
} from "native-base";

import s from "./styles";

class Message extends Component {
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
          <Title style={s.wordBig}>消息</Title>
          </Body>
          <Right />
        </Header>
        <Content>
          <TouchableOpacity style={s.listItemWrapper} onPress={()=>this.props.navigation.navigate('Article1')}>
            <View style={s.redDot} />
            <Text style={s.title}>主打商品</Text>
            <Text style={s.date}>2018-9-7 19:30</Text>
          </TouchableOpacity>
          <TouchableOpacity style={s.listItemWrapper} onPress={()=>this.props.navigation.navigate('Article2')}>
            <Text style={s.title}>品牌介绍</Text>
            <Text style={s.date}>2018-9-7 19:30</Text>
          </TouchableOpacity>
        </Content>
      </Container>
    );
  }
}


export default Message;
