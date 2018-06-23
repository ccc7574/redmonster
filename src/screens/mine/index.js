import React, { Component } from "react";
import { Image, ScrollView } from "react-native";
import {
  Container,
  Header,
  Text,
  Button,
  Icon,
  Left,
  Right,
  Body,
  View,
  Footer,
  FooterTab,
} from "native-base";
import s from './styles';
import BG from '../../../assets/mine/mineBG.png';
import QR from '../../../assets/mine/qrcode.png';
import Wallet from '../../../assets/mine/walletIcon.png';
import Money from '../../../assets/mine/moneyIcon.png';
import Avatar from '../../../assets/mine/avatar.png';
import Coupon from '../../../assets/mine/coupon.png';
import Coupon2 from '../../../assets/mine/coupon2.png';
import Transfer from '../../../assets/mine/transfer.png';
import Points from '../../../assets/mine/points.png';
import Record from '../../../assets/mine/record.png';
import Address from '../../../assets/mine/address.png';
import Service from '../../../assets/mine/service.png';
import Feedback from '../../../assets/mine/feedback.png';
import Rules from '../../../assets/mine/rules.png';
import fs from "../footer/styles";

class Mine extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 0,
      nickName: '',
      type: '旗舰店',
    }
  }



  render() {
    const { iptVal, totalAmt } = this.state;
    return (
      <Container style={{backgroundColor: '#000'}}>
        <ScrollView>
          <View style={s.upper}>
            <Image
              style={{
                position: 'absolute',
                width: "120%",
                height: "100%"
              }}
              resizeMode={'cover'}
              source={BG}
            />

            <Header style={s.header}>
              <Left style={s.left}>
                <Button transparent onPress={() => this.props.navigation.navigate("DrawerOpen")}>
                  <Icon style={s.leftIcon} name="settings" />
                </Button>
              </Left>
              <Body/>
              <Right style={s.right}>
                <Button transparent onPress={() => this.props.navigation.navigate("DrawerOpen")}>
                  <Text style={s.rightIcon}>分享</Text>
                </Button>
              </Right>
            </Header>

            <View style={s.middlePart}>
              <View style={s.avatar}>
                <Image
                  style={{
                    position: 'absolute',
                    width: "100%",
                    height: "100%"
                  }}
                  resizeMode={'cover'}
                  source={Avatar}
                />
              </View>
              <View style={s.disc}>
                <View style={s.row1}><Text style={{fontSize: 16, color: '#d1b27a'}}>ID: {12345678}</Text></View>
                <View style={s.row2}><Text style={{fontSize: 13, color: '#a5a5a5'}}>昵称 {'Leonardo Watch'}</Text></View>
                <View style={s.row3}><Text style={{fontSize: 12, color: '#a5a5a5'}}>{this.state.type}</Text></View>
              </View>
              <View style={s.qr}>
                <Image
                  style={{
                    width: "100%",
                    height: "100%",
                  }}
                  resizeMode={'contain'}
                  source={QR}
                />
              </View>
            </View>

            <View style={s.lower}>
              <View style={s.lowItem}>
                <View style={s.lowImgWrapper}>
                  <Image
                    style={{
                      width: "100%",
                      height: "100%",
                    }}
                    resizeMode={'contain'}
                    source={Money}
                  />
                </View>
                <Text style={s.lowTxt}>我的钱包</Text>
              </View>
              <View style={s.lowItem}>
                <View style={s.lowImgWrapper}>
                  <Image
                    style={{
                      width: "100%",
                      height: "100%",
                    }}
                    resizeMode={'contain'}
                    source={Wallet}
                  />
                </View>
                <Text style={s.lowTxt}>银行卡</Text>
              </View>
            </View>
          </View>

          <View style={s.lists}>
            <View style={s.listItem}>
              <View style={s.listItemLeft}>
                <View style={s.listItemLeftImgWrapper}>
                  <Image
                    style={{
                      width: "100%",
                      height: "100%",
                    }}
                    resizeMode={'contain'}
                    source={Coupon}
                  />
                </View>
                <Text style={s.listItemLeftTxt}>我的优惠券</Text>
              </View>
              <View style={s.listItemRight}>
                <Text style={s.listItemRightTxt}>2张可用</Text>
                <Icon style={s.arrowRight} name="arrow-forward"/>
              </View>
            </View>
            <View style={s.listItem}>
              <View style={s.listItemLeft}>
                <View style={s.listItemLeftImgWrapper}>
                  <Image
                    style={{
                      width: "100%",
                      height: "100%",
                    }}
                    resizeMode={'contain'}
                    source={Coupon}
                  />
                </View>
                <Text style={s.listItemLeftTxt}>我的排单券</Text>
              </View>
              <View style={s.listItemRight}>
                <Text style={s.listItemRightTxt}>2张可用</Text>
                <Icon style={s.arrowRight} name="arrow-forward"/>
              </View>
            </View>
            <View style={s.listItem}>
              <View style={s.listItemLeft}>
                <View style={s.listItemLeftImgWrapper}>
                  <Image
                    style={{
                      width: "100%",
                      height: "100%",
                    }}
                    resizeMode={'contain'}
                    source={Coupon2}
                  />
                </View>
                <Text style={s.listItemLeftTxt}>我的排单券</Text>
              </View>
              <View style={s.listItemRight}>
                <Icon style={s.arrowRight} name="arrow-forward"/>
              </View>
            </View>
            <View style={s.listItem}>
              <View style={s.listItemLeft}>
                <View style={s.listItemLeftImgWrapper}>
                  <Image
                    style={{
                      width: "100%",
                      height: "100%",
                    }}
                    resizeMode={'contain'}
                    source={Transfer}
                  />
                </View>
                <Text style={s.listItemLeftTxt}>我要转账</Text>
              </View>
              <View style={s.listItemRight}>
                <Icon style={s.arrowRight} name="arrow-forward"/>
              </View>
            </View>
            <View style={s.listItem}>
              <View style={s.listItemLeft}>
                <View style={s.listItemLeftImgWrapper}>
                  <Image
                    style={{
                      width: "100%",
                      height: "100%",
                    }}
                    resizeMode={'contain'}
                    source={Points}
                  />
                </View>
                <Text style={s.listItemLeftTxt}>积分记录</Text>
              </View>
              <View style={s.listItemRight}>
                <Icon style={s.arrowRight} name="arrow-forward"/>
              </View>
            </View>
            <View style={s.listItem}>
              <View style={s.listItemLeft}>
                <View style={s.listItemLeftImgWrapper}>
                  <Image
                    style={{
                      width: "100%",
                      height: "100%",
                    }}
                    resizeMode={'contain'}
                    source={Record}
                  />
                </View>
                <Text style={s.listItemLeftTxt}>提货记录</Text>
              </View>
              <View style={s.listItemRight}>
                <Icon style={s.arrowRight} name="arrow-forward"/>
              </View>
            </View>
            <View style={s.listItem}>
              <View style={s.listItemLeft}>
                <View style={s.listItemLeftImgWrapper}>
                  <Image
                    style={{
                      width: "100%",
                      height: "100%",
                    }}
                    resizeMode={'contain'}
                    source={Address}
                  />
                </View>
                <Text style={s.listItemLeftTxt}>地址管理</Text>
              </View>
              <View style={s.listItemRight}>
                <Icon style={s.arrowRight} name="arrow-forward"/>
              </View>
            </View>
            <View style={s.listItem}>
              <View style={s.listItemLeft}>
                <View style={s.listItemLeftImgWrapper}>
                  <Image
                    style={{
                      width: "100%",
                      height: "100%",
                    }}
                    resizeMode={'contain'}
                    source={Service}
                  />
                </View>
                <Text style={s.listItemLeftTxt}>我的客服</Text>
              </View>
              <View style={s.listItemRight}>
                <Icon style={s.arrowRight} name="arrow-forward"/>
              </View>
            </View>
            <View style={s.listItem}>
              <View style={s.listItemLeft}>
                <View style={s.listItemLeftImgWrapper}>
                  <Image
                    style={{
                      width: "100%",
                      height: "100%",
                    }}
                    resizeMode={'contain'}
                    source={Feedback}
                  />
                </View>
                <Text style={s.listItemLeftTxt}>我要反馈</Text>
              </View>
              <View style={s.listItemRight}>
                <Icon style={s.arrowRight} name="arrow-forward"/>
              </View>
            </View>
            <View style={s.listItem}>
              <View style={s.listItemLeft}>
                <View style={s.listItemLeftImgWrapper}>
                  <Image
                    style={{
                      width: "100%",
                      height: "100%",
                    }}
                    resizeMode={'contain'}
                    source={Rules}
                  />
                </View>
                <Text style={s.listItemLeftTxt}>平台规则</Text>
              </View>
              <View style={s.listItemRight}>
                <Icon style={s.arrowRight} name="arrow-forward"/>
              </View>
            </View>
          </View>

          <View style={s.logoutBtnWrapper}>
            <Button full style={{height: 50, backgroundColor: '#1a1a1a',}}>
              <Text style={{color: '#a5a5a5',}}>退出登录</Text>
            </Button>
          </View>
        </ScrollView>
        <Footer style={fs.footerTab}>
          <FooterTab style={fs.footerTab}>
            <Button style={fs.footerButton}
                    onPress={() => this.props.navigation.navigate("Home")}
                    vertical
            >
              <View style={fs.footerView}>
                <Image style={fs.footerImageHL} source={require('../../../assets/home/hl.png')}/>
                <Text style={fs.footerText}>红炉</Text>
              </View>
            </Button>
            <Button vertical style={fs.footerButton}
                    onPress={() => this.props.navigation.navigate("WareHouse")}>
              <View style={fs.footerView}>
                <Image style={fs.footerImage} source={require('../../../assets/home/storage.png')}/>
                <Text style={fs.footerText}>仓库</Text>
              </View>
            </Button>
            <Button style={fs.footerButton}
                    active={this.state.tab3}
                    onPress={() => this.props.navigation.navigate("History")}
                    vertical
            >
              <View style={fs.footerView}>
                <Image style={fs.footerImage} source={require('../../../assets/home/team.png')}/>
                <Text style={fs.footerText}>团队</Text>
              </View>
            </Button>
            <Button style={fs.footerButton}
                    active={this.state.tab4}
                    onPress={() => this.props.navigation.navigate("Mine")}
                    vertical
            >
              <View style={fs.footerView}>
                <Image style={fs.footerImage} source={require('../../../assets/home/mine-active.png')}/>
                <Text style={fs.footerText}>我的</Text>
              </View>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}


export default Mine;
