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
import BG from '../../../assets/couponBG.png';
import Used from '../../../assets/couponUsed.png';
import Expired from '../../../assets/expired.png';
import Empty from '../../../assets/couponEmpty.png';

class CouponForQueue extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tab1: false,
      tab2: false,
      tab3: true,
    }
  }

  handleUse =()=> {

  }

  handleTab = (idx)=> {
    switch (idx) {
      case 1:
        this.setState({
          tab1: true,
          tab2: false,
          tab3: false,
        });
        break;
      case 2:
        this.setState({
          tab1: false,
          tab2: true,
          tab3: false,
        });
        break;
      case 3:
        this.setState({
          tab1: false,
          tab2: false,
          tab3: true,
        });
        break;
      default:
        this.setState({
          tab1: true,
          tab2: false,
          tab3: false,
        });
        break;
    }
  }

  render() {
    const { tab1, tab2, tab3 } = this.state;
    return (
      <Container style={{backgroundColor: '#000'}}>
        <Header style={s.header}>
          <Left>
            <Button transparent onPress={() => this.props.navigation.navigate("DrawerOpen")}>
              <Icon style={s.wordCol} name="arrow-back" />
            </Button>
          </Left>
          <Body>
          <Title style={s.wordBig}>我的排单券</Title>
          </Body>
          <Right/>
        </Header>

        <Content>
          <View style={s.tabs}>
            <View style={s.tab}>
              <Text style={tab1 ? s.tabTxtOn : s.tabTxt} onPress={()=>this.handleTab(1)}>未使用</Text>
            </View>
            <View style={s.tab}>
              <Text style={tab2 ? s.tabTxtOn : s.tabTxt} onPress={()=>this.handleTab(2)}>已使用</Text>
            </View>
            <View style={s.tab}>
              <Text style={tab3 ? s.tabTxtOn : s.tabTxt} onPress={()=>this.handleTab(3)}>已过期</Text>
            </View>
          </View>
          {tab1 &&
          <View>
            <View style={s.card}>
              <Image
                style={{
                  position: 'absolute',
                  width: '100%',
                  height: '100%',
                }}
                source={BG}
              />
              <View style={s.upper}>
                <View style={s.left}>
                  <View style={s.numPart}>
                    <Text style={s.symbol}>￥</Text>
                    <Text style={s.amt}>18</Text>
                  </View>
                  <View style={s.txtPart}>
                    <Text style={s.rowOne}>新用户专属</Text>
                    <Text style={s.rowTwo}>无门槛</Text>
                  </View>
                </View>
                <View style={s.right}>
                  <Button block bordered onPress={this.handleUse} style={s.btn}>
                    <Text style={s.btnTxt}>立即使用</Text>
                  </Button>
                </View>
              </View>
              <View style={s.lower}>
                <Text style={s.lowerText}>2018-4-21至2019-6-12</Text>
              </View>
            </View>
            <View style={s.card}>
              <Image
                style={{
                  position: 'absolute',
                  width: '100%',
                  height: '100%',
                }}
                source={BG}
              />
              <View style={s.upper}>
                <View style={s.left}>
                  <View style={s.numPart}>
                    <Text style={s.symbol}>￥</Text>
                    <Text style={s.amt}>28</Text>
                  </View>
                  <View style={s.txtPart}>
                    <Text style={s.rowOne}>生日小惊喜</Text>
                    <Text style={s.rowTwo}>满100元可用</Text>
                  </View>
                </View>
                <View style={s.right}>
                  <Button block bordered onPress={this.handleUse} style={s.btn}>
                    <Text style={s.btnTxt}>立即使用</Text>
                  </Button>
                </View>
              </View>
              <View style={s.lower}>
                <Text style={s.lowerText}>2018-4-21至2019-6-12</Text>
              </View>
            </View>
          </View>}

          {tab2 &&
          <View>
            <View style={s.card}>
              <Image
                style={{
                  position: 'absolute',
                  width: '100%',
                  height: '100%',
                }}
                source={BG}
              />
              <View style={s.upper}>
                <View style={s.left}>
                  <View style={s.numPart}>
                    <Text style={s.symbolGray}>￥</Text>
                    <Text style={s.amtGray}>18</Text>
                  </View>
                  <View style={s.txtPart}>
                    <Text style={s.rowOneGray}>新用户专属</Text>
                    <Text style={s.rowTwoGray}>无门槛</Text>
                  </View>
                </View>
                <View style={s.rightImg}>
                  <Image
                    style={{
                      width: '100%',
                      height: '100%'
                    }}
                    resizeMode="contain"
                    source={Used}
                  />
                </View>
              </View>
              <View style={s.lower}>
                <Text style={s.lowerTextGray}>2018-4-21至2019-6-12</Text>
              </View>
            </View>
            <View style={s.card}>
              <Image
                style={{
                  position: 'absolute',
                  right: 0,
                  width: '100%',
                  height: '100%',
                }}
                source={BG}
              />
              <View style={s.upper}>
                <View style={s.left}>
                  <View style={s.numPart}>
                    <Text style={s.symbolGray}>￥</Text>
                    <Text style={s.amtGray}>28</Text>
                  </View>
                  <View style={s.txtPart}>
                    <Text style={s.rowOneGray}>生日小惊喜</Text>
                    <Text style={s.rowTwoGray}>满100元可用</Text>
                  </View>
                </View>
                <View style={s.rightImg}>
                  <Image
                    style={{
                      width: '100%',
                      height: '100%',
                    }}
                    resizeMode="contain"
                    source={Used}
                  />
                </View>
              </View>
              <View style={s.lower}>
                <Text style={s.lowerTextGray}>2018-4-21至2019-6-12</Text>
              </View>
            </View>
          </View>}

          {tab3 &&
          <View>
            <View style={s.card}>
              <Image
                style={{
                  position: 'absolute',
                  width: '100%',
                  height: '100%',
                }}
                source={BG}
              />
              <View style={s.upper}>
                <View style={s.left}>
                  <View style={s.numPart}>
                    <Text style={s.symbolGray}>￥</Text>
                    <Text style={s.amtGray}>18</Text>
                  </View>
                  <View style={s.txtPart}>
                    <Text style={s.rowOneGray}>新用户专属</Text>
                    <Text style={s.rowTwoGray}>无门槛</Text>
                  </View>
                </View>
                <View style={s.rightImg}>
                  <Image
                    style={{
                      width: '100%',
                      height: '100%'
                    }}
                    resizeMode="contain"
                    source={Expired}
                  />
                </View>
              </View>
              <View style={s.lower}>
                <Text style={s.lowerTextGray}>2018-4-21至2019-6-12</Text>
              </View>
            </View>
            <View style={s.card}>
              <Image
                style={{
                  position: 'absolute',
                  right: 0,
                  width: '100%',
                  height: '100%',
                }}
                source={BG}
              />
              <View style={s.upper}>
                <View style={s.left}>
                  <View style={s.numPart}>
                    <Text style={s.symbolGray}>￥</Text>
                    <Text style={s.amtGray}>28</Text>
                  </View>
                  <View style={s.txtPart}>
                    <Text style={s.rowOneGray}>生日小惊喜</Text>
                    <Text style={s.rowTwoGray}>满100元可用</Text>
                  </View>
                </View>
                <View style={s.rightImg}>
                  <Image
                    style={{
                      width: '100%',
                      height: '100%',
                    }}
                    resizeMode="contain"
                    source={Expired}
                  />
                </View>
              </View>
              <View style={s.lower}>
                <Text style={s.lowerTextGray}>2018-4-21至2019-6-12</Text>
              </View>
            </View>
          </View>
          }
          <View style={s.emptyWrapper}>
            <Image
              style={{
                width: "100%",
                height: "100%"
              }}
              resizeMode="contain"
              source={Empty}
            />
            <Text style={s.emptyTxt}>您没有排单券</Text>
          </View>
        </Content>
      </Container>
    );
  }
}


export default CouponForQueue;
