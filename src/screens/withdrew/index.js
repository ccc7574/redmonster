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

class Withdraw extends Component {
  constructor(props) {
    super(props);
    this.state = {
      iptVal: '',
      totalAmt: 3000,

    }
  }

  handleSelectCard = ()=> {
    alert(111);
  }

  handleIpt = (txt)=> {
    this.setState({
      iptVal: txt,
    })
  }

  handleBtn = ()=> {
    let { iptVal, totalAmt } = this.state;
    if(iptVal&&iptVal<totalAmt) {
      // todo
    }
  }

  render() {
    const { iptVal, totalAmt } = this.state;
    return (
      <Container style={{backgroundColor: '#000'}}>
        <Header style={s.header}>
          <Left>
            <Button transparent onPress={() => this.props.navigation.navigate("DrawerOpen")}>
              <Icon style={s.wordCol} name="arrow-back" />
            </Button>
          </Left>
          <Body>
          <Title style={s.wordBig}>提现</Title>
          </Body>
          <Right/>
        </Header>

        <Content>
          <View>
            <View style={{height: 55, margin: 10, marginTop: 22, backgroundColor: '#141414', borderRadius: 4}}>
              <Form style={s.form}>
                <Item fixedLabel style={s.formItem} onPress={this.handleSelectCard}>
                  <Label style={{fontSize: 15, color: '#7f7f7f'}}>提现至</Label>
                  <Text style={{fontSize: 15, color: '#a5a5a5', }}>交通银行 储蓄卡</Text>
                  <Icon style={s.arrowRight} name="arrow-forward"/>
                </Item>
              </Form>
            </View>

            <View style={s.withdrewUpper}>
              <Text style={s.withdrewUpperTxt}>提现金额(元)</Text>
              <Form>
                {/*<Item fixedLabel style={{fontSize: 20}}>*/}
                  {/*<Label style={{fontSize: 26}}>￥</Label>*/}
                  {/*<Input style={{fontSize: 26}}/>*/}
                {/*</Item>*/}
                <Item style={{borderBottomWidth: 0, height: 90}}>
                  <Input style={{fontSize: 64, color: '#D1B27A'}} onChangeText={(txt)=> this.handleIpt(txt)}/>
                </Item>
              </Form>
            </View>

            <View style={s.withdrewLower}>
              <Text style={iptVal>totalAmt ? s.withdrewLowerTxtWarning : s.withdrewLowerTxt}>
                {iptVal>totalAmt ? '金额已超出可提现余额' : `可提现余额 ¥ ${totalAmt}`}
              </Text>
            </View>
          </View>

          <Text style={{color: '#3d3d3d', fontSize: 12, marginLeft: 10, marginTop: 15, }}>*此处为提现规则，如到账时间，金额限制等</Text>

          <View style={{marginTop: 42}}>
            <Button block onPress={this.handleBtn} style={iptVal ? s.btnAble : s.btnDisable}>
              <Text style={(iptVal&&iptVal<totalAmt) ? s.btnAbleTxt : s.btnDisableTxt}>确认提现</Text>
            </Button>
          </View>
        </Content>
      </Container>
    );
  }
}


export default Withdraw;
