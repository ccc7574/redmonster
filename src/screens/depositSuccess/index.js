import React, { Component } from "react";
import { Image } from "react-native";
import {
  Container,
  Header,
  Title,
  Content,
  Text,
  Button,
  Left,
  Right,
  Body,
  Form,
  Item,
  Label,
  List,
  ListItem,
  View,


} from "native-base";

import s from "./styles";
import Img from '../../../assets/success.png';

class DepositSuccess extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  handleBtn = ()=> {

  }

  render() {
    const {  } = this.state;
    return (
      <Container style={{backgroundColor: '#000'}}>
        <Header style={s.header}>
          <Left />
          <Body>
          <Title />
          </Body>
          <Right/>
        </Header>

        <Content >
          <View style={s.upper}>
            <View style={s.imgWrapper}>
              <Image
                style={{
                  width: '100%',
                  height: '100%',
                }}
                source={Img}
              />
            </View>
            <Text style={s.sucTxt}>储值成功</Text>
            <Text style={{ marginTop: 17, fontSize: 18, color: '#A5A5A5', fontWeight: 'bold', textAlign: 'center'}}>支付金额 ￥120.00</Text>
            <Text style={{ marginTop: 17, fontWeight: 'bold', fontSize: 18, color: '#A5A5A5', textAlign: 'center'}}>优惠金额 ￥5.00</Text>
            <Text style={{marginTop: 17, fontSize: 13, color: '#7f7f7f', textAlign: 'center'}}>当前账户余额：￥123.00</Text>
          </View>

          <View style={{marginTop: 85}}>
            <Button block onPress={this.handleBtn} style={{ margin: 15, backgroundColor: '#D1B27A', borderRadius:28}}>
              <Text style={{color: '#000',}}>储值优惠</Text>
            </Button>
          </View>
        </Content>
      </Container>
    );
  }
}


export default DepositSuccess;
