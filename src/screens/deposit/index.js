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
  List,
  ListItem,
  Form,
  Item,
  View,
  Label,
} from "native-base";

import s from "./styles";
import Img from '../../../assets/goldCheck.png';
import Checked from '../../../assets/checkedCircle.png';
import UnChecked from '../../../assets/uncheckedCircle.png';

const DATA = [
  {
    amount: '120',
    bonus: '送5元优惠券'
  },
  {
    amount: '300',
    bonus: '送15元优惠券'
  },
  {
    amount: '600',
    bonus: '送45元优惠券'
  },
  {
    amount: '1200',
    bonus: '送100元优惠券'
  },
];

class Deposit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      radio1: true,
      radio2: false,
      radio3: false,
    }
  }

  handleRadio1 = ()=> {
    this.setState({
      radio1: true,
      radio2: false,
      radio3: false,
    })
  }

  handleRadio2 = ()=> {
    this.setState({
      radio1: false,
      radio2: true,
      radio3: false,
    })
  }

  handleRadio3 = ()=> {
    this.setState({
      radio1: false,
      radio2: false,
      radio3: true,
    })
  }

  handleCard = (key)=> {
    alert(key);
  }

  renderCard = ()=> {
    return DATA.map((item, key)=> (
      <View button={true} bordered borderColor={'#D1B27A'} borderWidth style={s.couponItem} key={key} onPress={()=>this.handleCard(key)}>
        <View style={s.imgWrapper}>
          <Image
            style={{
              width: '100%',
              height: '100%',
            }}
            source={Img}
          />
        </View>
        <View style={s.cardTilWrapper}>
          <Text style={s.cardTil}>储值</Text>
        </View>
        <View>
          <Text style={s.amount}>{item.amount}</Text>
        </View>
        <View>
          <Text style={s.bonus}>{item.bonus}</Text>
        </View>
      </View>
    ))
  }


  render() {
    const { radio1, radio2, radio3 } = this.state;
    return (
      <Container style={{backgroundColor: '#000', }}>
        <Header style={s.header}>
          <Left>
            <Button transparent onPress={() => this.props.navigation.navigate("DrawerOpen")}>
              <Icon style={s.wordCol} name="arrow-back" />
            </Button>
          </Left>
          <Body>
          <Title style={s.wordBig}>储值优惠</Title>
          </Body>
          <Right/>
        </Header>

        <Content>
          <View style={{margin: 15, }}>
            <View style={{ flexDirection:'row', alignItems: "center" }}>
              <View style={s.goldBlock} />
              <Text style={s.txtAfterBlock}>请选择储值金额</Text>
            </View>

            <View style={s.couponWrapper}>
              {this.renderCard()}
            </View>
          </View>

          <View>
            <View style={{ flexDirection:'row', alignItems: "center", marginLeft: 15 }}>
              <View style={s.goldBlock} />
              <Text style={s.txtAfterBlock}>请选择支付方式</Text>
            </View>

            <Form style={s.form}>
              <Item fixedLabel style={s.formItem} onPress={this.handleRadio1}>
                <Label style={{color: '#a5a5a5'}}>银行卡</Label>
                <View style={s.checkWrapper}>
                  <Image
                    style={{
                      width: '100%',
                      height: '100%',
                    }}
                    source={radio1 ? Checked : UnChecked}
                  />
                </View>
              </Item>
              <Item fixedLabel style={s.formItem}>
                <Label style={{color: '#a5a5a5'}}>银行卡</Label>
                <Button transparent onPress={() => this.props.navigation.navigate("bankCard")}>
                  <Icon style={s.arrowRight} name="arrow-forward"/>
                </Button>
              </Item>

              <Item fixedLabel style={s.formItemWithMt} onPress={this.handleRadio2}>
                <Label style={{color: '#a5a5a5'}}>支付宝</Label>
                <View style={s.checkWrapper}>
                  <Image
                    style={{
                      width: '100%',
                      height: '100%',
                    }}
                    source={radio2 ? Checked : UnChecked}
                  />
                </View>
              </Item>

              <Item fixedLabel style={s.formItemWithMt} onPress={this.handleRadio3}>
                <Label style={{color: '#a5a5a5'}}>微信</Label>
                <View style={s.checkWrapper}>
                  <Image
                    style={{
                      width: '100%',
                      height: '100%',
                    }}
                    source={radio3 ? Checked : UnChecked}
                  />
                </View>
              </Item>
            </Form>
          </View>

          <Button full style={{height: 55, backgroundColor: '#D1B27A',}}>
            <Text style={{color: '#000',}}>确定</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}


export default Deposit;
