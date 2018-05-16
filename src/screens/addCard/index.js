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

class AddCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      iptVal1: '',
      iptVal2: '',

    }
  }

  handleIpt1 = (txt)=> {
    this.setState({
      iptVal1: txt,
    })
  }

  handleIpt2 = (txt)=> {
    this.setState({
      iptVal2: txt,
    })
  }

  handleBtn = ()=> {
    let { iptVal, totalAmt } = this.state;
    if(iptVal&&iptVal<totalAmt) {
      // todo
    }
  }

  render() {
    const { iptVal1, iptVal2 } = this.state;
    return (
      <Container style={{backgroundColor: '#000'}}>
        <Header style={s.header}>
          <Left>
            <Button transparent onPress={() => this.props.navigation.navigate("DrawerOpen")}>
              <Icon style={s.wordCol} name="arrow-back" />
            </Button>
          </Left>
          <Body>
          <Title style={s.wordBig}>添加银行卡</Title>
          </Body>
          <Right/>
        </Header>

        <Content>
          <View >
            <Text style={s.tip}>请绑定持卡人本人的银行卡</Text>
            <Form style={s.form}>
              <Item fixedLabel style={s.formItem}>
                <Input style={s.ipt} onChangeText={(txt)=> this.handleIpt1(txt)} placeholder={'输入持卡人姓名'}/>
              </Item>
              <Item fixedLabel style={s.formItem}>
                <Input style={s.ipt} onChangeText={(txt)=> this.handleIpt2(txt)} placeholder={'输入银行卡号'}/>
              </Item>
            </Form>
          </View>

          <View style={{marginTop: 42}}>
            <Button block onPress={this.handleBtn} style={(iptVal1&&iptVal2) ? s.btnAble : s.btnDisable}>
              <Text style={(iptVal1&&iptVal2) ? s.btnAbleTxt : s.btnDisableTxt}>下一步</Text>
            </Button>
          </View>
        </Content>
      </Container>
    );
  }
}


export default AddCard;
