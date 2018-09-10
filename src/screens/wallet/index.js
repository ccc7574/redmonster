import React, { Component } from "react";
import { Image,Alert } from "react-native";
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

  handleSaveMoney = () => {
    Alert.alert('暂未开通')
  };

  handleWithdraw = () => {
    Alert.alert('暂未开通')
  };

  render() {

    return (
      <Container style={{backgroundColor: '#000',}}>
        <Header style={s.header}>
          <Left>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon style={s.wordCol} name="arrow-back" />
            </Button>
          </Left>
          <Body>
          <Title style={s.wordBig}>我的钱包</Title>
          </Body>
          <Right>
            {/*<Button transparent onPress={() => this.props.navigation.goBack()}>*/}
              {/*<Text style={s.wordCol}>账单</Text>*/}
            {/*</Button>*/}
          </Right>
        </Header>
        <Content>
          <View style={{backgroundColor: '#1a1a1a', height: 224,}}>
            <View style={s.imgWrapper}>
              <Image
                style={{
                  width: '100%',
                  height: '100%',
                }}
                source={Img}
              />
            </View>
            <Text style={s.amtText}>账户余额(元)</Text>
            <Text style={s.amt}>0.00</Text>
          </View>

          <View style={{marginTop: 85}}>
            <Button block style={{ margin: 15, backgroundColor: '#D1B27A', borderRadius:28}} onPress={this.handleSaveMoney}>
              <Text style={{color: '#000',}}>储值优惠</Text>
            </Button>
            <Button
              bordered
              borderColor={'#D1B27A'}
              borderWidth
              block
              style={{ margin: 15, marginTop: 10,  backgroundColor: '#000', borderRadius:28,borderWidth:3, borderColor:'#D1B27A' }}
              onPress={this.handleWithdraw}
            >
              <Text style={{color:'#D1B27A',}}>提现</Text>
            </Button>
          </View>
        </Content>
      </Container>
    );
  }
}


export default Wallet;
