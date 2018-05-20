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
import Succ from '../../../assets/success.png';

class AddCard3 extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    const { iptVal1, phoneNum } = this.state;
    return (
      <Container style={{backgroundColor: '#000'}}>
        <Header style={s.header}>
          <Left/>
          <Body/>
          <Right>
            <Button transparent onPress={() => this.props.navigation.navigate("DrawerOpen")}>
              <Text style={{color: '#a5a5a5'}}>完成</Text>
            </Button>
          </Right>
        </Header>

        <Content>
          <View style={s.wrapper}>
            <View style={s.imgWrapper}>
              <Image
                style={{
                  width: '100%',
                  height: '100%',
                }}
                source={Succ}
              />
            </View>
            <Text style={s.txt}>绑定成功</Text>
          </View>

        </Content>
      </Container>
    );
  }
}


export default AddCard3;
