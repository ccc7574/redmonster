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
      // todo

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
          <Title style={s.wordBig}>填写银行卡信息</Title>
          </Body>
          <Right/>
        </Header>

        <Content>
          <View >
            <Form style={s.form}>
              <Item fixedLabel style={s.formItem}>
                <Text style={{flexDirection: 'row', color: '#7f7f7f', width: 75}}>卡类型</Text>
                <Text style={{flexDirection: 'row', color: '#a5a5a5'}}>交通银行 储蓄卡</Text>
              </Item>
              <Item fixedLabel style={s.formItem}>
                <Text style={{color: '#a5a5a5'}}>1234567890</Text>
              </Item>
            </Form>
          </View>

          <View style={{marginTop: 42}}>
            <Button block onPress={this.handleBtn} style={s.btnAble}>
              <Text style={s.btnAbleTxt}>下一步</Text>
            </Button>
          </View>
        </Content>
      </Container>
    );
  }
}


export default AddCard;
