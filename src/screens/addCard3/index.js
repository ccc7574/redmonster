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
  Label,
  View,
} from "native-base";
import s from './styles';

class AddCard3 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      iptVal1: '',
      phoneNum:''

    }
  }

  handleIpt1 = (txt)=> {
    this.setState({
      iptVal1: txt,
    })
  }

  handleCode = ()=> {
    let {} = this.state;

  }

  handleBtn = ()=> {
    let { iptVal, } = this.state;
      // todo
  }

  render() {
    const { iptVal1, phoneNum } = this.state;
    return (
      <Container style={{backgroundColor: '#000'}}>
        <Header style={s.header}>
          <Left>
            <Button transparent onPress={() => this.props.navigation.navigate("DrawerOpen")}>
              <Icon style={s.wordCol} name="arrow-back" />
            </Button>
          </Left>
          <Body>
          <Title style={s.wordBig}>填写验证码</Title>
          </Body>
          <Right/>
        </Header>

        <Content>
          <View >
            <Text style={s.tip}>请输入手机{phoneNum}收到的短信验证码</Text>
            <Form style={s.form}>
              <Item fixedLabel style={s.formItem}>
                <Input style={s.ipt} onChangeText={(txt)=> this.handleIpt1(txt)} placeholder={'输入验证码'}/>
                <Button block bordered onPress={this.handleCode} style={s.code}>
                  <Text style={s.codeTxt}>获取验证码</Text>
                </Button>
              </Item>
            </Form>
          </View>

          <View style={{marginTop: 42}}>
            <Button block onPress={this.handleBtn} style={(iptVal1) ? s.btnAble : s.btnDisable}>
              <Text style={(iptVal1) ? s.btnAbleTxt : s.btnDisableTxt}>完成</Text>
            </Button>
          </View>
        </Content>
      </Container>
    );
  }
}


export default AddCard3;
