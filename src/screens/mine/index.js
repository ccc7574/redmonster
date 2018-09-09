import React, { Component } from "react";
import { Image, ScrollView, AsyncStorage, Alert, TouchableHighlight } from "react-native";
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
// import QR from '../../../assets/mine/qrcode.png';
import Wallet from '../../../assets/mine/walletIcon.png';
import Money from '../../../assets/mine/moneyIcon.png';
import Avatar from '../../../assets/mine/avatar.png';
// import Coupon from '../../../assets/mine/coupon.png';
// import Coupon2 from '../../../assets/mine/coupon2.png';
// import Transfer from '../../../assets/mine/transfer.png';
import Points from '../../../assets/mine/points.png';
import Record from '../../../assets/mine/record.png';
import Address from '../../../assets/mine/address.png';
// import Service from '../../../assets/mine/service.png';
// import Feedback from '../../../assets/mine/feedback.png';
// import Rules from '../../../assets/mine/rules.png';
import fs from "../footer/styles";

class Mine extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 0,
      nickName: '',
      type: '旗舰店',
      userInfo: ''
    }
  }

  componentWillMount(){
    AsyncStorage.getItem("user_status").then((value) => {
      let userInfo = JSON.parse(value);
      this.setState({userInfo: userInfo})
    })
      .then(res => {
        //do something else
      });
  }

  render() {
    const { iptVal, totalAmt, userInfo, type } = this.state;
    const { phone,name } = userInfo && userInfo;

    return (
      <Container style={{backgroundColor: '#000'}}>
        <ScrollView>
          <View style={s.upper}>


            <Header style={s.header}>
              <Left style={s.left}>
                {/*<Button transparent onPress={() => this.props.navigation.navigate("DrawerOpen")}>*/}
                  {/*<Icon style={s.leftIcon} name="settings" />*/}
                {/*</Button>*/}
              </Left>
              <Body/>
              <Right style={s.right}>
                {/*<Button transparent onPress={() => this.props.navigation.navigate("DrawerOpen")}>*/}
                  {/*<Text style={s.rightIcon}>分享</Text>*/}
                {/*</Button>*/}
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
                <View style={s.row1}><Text style={{fontSize: 16, color: '#d1b27a'}}>ID: {phone}</Text></View>
                <View style={s.row2}><Text style={{fontSize: 13, color: '#a5a5a5'}}>昵称 {name}</Text></View>
                <View style={s.row3}><Text style={{fontSize: 12, color: '#a5a5a5'}}>{type}</Text></View>
              </View>
              {/*<View style={s.qr}>*/}
                {/*<Image*/}
                  {/*style={{*/}
                    {/*width: "100%",*/}
                    {/*height: "100%",*/}
                  {/*}}*/}
                  {/*resizeMode={'contain'}*/}
                  {/*source={QR}*/}
                {/*/>*/}
              {/*</View>*/}
            </View>

            <View style={s.lower}>
              <View style={s.lowItem}>
                <TouchableHighlight onPress={() => this.props.navigation.navigate("Wallet")}>
                  <View style={s.walletBox}>
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
                </TouchableHighlight>
              </View>
              <View style={s.lowItem}>
                <TouchableHighlight onPress={() => Alert.alert('暂未开通')}>
                  <View style={s.walletBox}>
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
                </TouchableHighlight>
              </View>
            </View>
          </View>

          <View style={s.lists}>
            {/*<View style={s.listItem}>*/}
              {/*<View style={s.listItemLeft}>*/}
                {/*<View style={s.listItemLeftImgWrapper}>*/}
                  {/*<Image*/}
                    {/*style={{*/}
                      {/*width: "100%",*/}
                      {/*height: "100%",*/}
                    {/*}}*/}
                    {/*resizeMode={'contain'}*/}
                    {/*source={Coupon}*/}
                  {/*/>*/}
                {/*</View>*/}
                {/*<Text style={s.listItemLeftTxt}>我的优惠券</Text>*/}
              {/*</View>*/}
              {/*<View style={s.listItemRight}>*/}
                {/*<Text style={s.listItemRightTxt}>2张可用</Text>*/}
                {/*<Icon style={s.arrowRight} name="arrow-forward"/>*/}
              {/*</View>*/}
            {/*</View>*/}
            {/*<View style={s.listItem}>*/}
              {/*<View style={s.listItemLeft}>*/}
                {/*<View style={s.listItemLeftImgWrapper}>*/}
                  {/*<Image*/}
                    {/*style={{*/}
                      {/*width: "100%",*/}
                      {/*height: "100%",*/}
                    {/*}}*/}
                    {/*resizeMode={'contain'}*/}
                    {/*source={Coupon}*/}
                  {/*/>*/}
                {/*</View>*/}
                {/*<Text style={s.listItemLeftTxt}>我的排单券</Text>*/}
              {/*</View>*/}
              {/*<View style={s.listItemRight}>*/}
                {/*<Text style={s.listItemRightTxt}>2张可用</Text>*/}
                {/*<Icon style={s.arrowRight} name="arrow-forward"/>*/}
              {/*</View>*/}
            {/*</View>*/}
            {/*<View style={s.listItem}>*/}
              {/*<View style={s.listItemLeft}>*/}
                {/*<View style={s.listItemLeftImgWrapper}>*/}
                  {/*<Image*/}
                    {/*style={{*/}
                      {/*width: "100%",*/}
                      {/*height: "100%",*/}
                    {/*}}*/}
                    {/*resizeMode={'contain'}*/}
                    {/*source={Coupon2}*/}
                  {/*/>*/}
                {/*</View>*/}
                {/*<Text style={s.listItemLeftTxt}>我的排单券</Text>*/}
              {/*</View>*/}
              {/*<View style={s.listItemRight}>*/}
                {/*<Icon style={s.arrowRight} name="arrow-forward"/>*/}
              {/*</View>*/}
            {/*</View>*/}
            {/*<View style={s.listItem}>*/}
              {/*<View style={s.listItemLeft}>*/}
                {/*<View style={s.listItemLeftImgWrapper}>*/}
                  {/*<Image*/}
                    {/*style={{*/}
                      {/*width: "100%",*/}
                      {/*height: "100%",*/}
                    {/*}}*/}
                    {/*resizeMode={'contain'}*/}
                    {/*source={Transfer}*/}
                  {/*/>*/}
                {/*</View>*/}
                {/*<Text style={s.listItemLeftTxt}>我要转账</Text>*/}
              {/*</View>*/}
              {/*<View style={s.listItemRight}>*/}
                {/*<Icon style={s.arrowRight} name="arrow-forward"/>*/}
              {/*</View>*/}
            {/*</View>*/}
            <TouchableHighlight onPress={() => this.props.navigation.navigate("IntegrationRecord")}>
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
            </TouchableHighlight>
            <TouchableHighlight onPress={() => this.props.navigation.navigate("PickUpOrderManagement")}>
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
            </TouchableHighlight>
            <TouchableHighlight onPress={() => this.props.navigation.navigate("PickUpAddress")}>
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
            </TouchableHighlight>
            {/*<View style={s.listItem}>*/}
              {/*<View style={s.listItemLeft}>*/}
                {/*<View style={s.listItemLeftImgWrapper}>*/}
                  {/*<Image*/}
                    {/*style={{*/}
                      {/*width: "100%",*/}
                      {/*height: "100%",*/}
                    {/*}}*/}
                    {/*resizeMode={'contain'}*/}
                    {/*source={Service}*/}
                  {/*/>*/}
                {/*</View>*/}
                {/*<Text style={s.listItemLeftTxt}>我的客服</Text>*/}
              {/*</View>*/}
              {/*<View style={s.listItemRight}>*/}
                {/*<Icon style={s.arrowRight} name="arrow-forward"/>*/}
              {/*</View>*/}
            {/*</View>*/}
            {/*<View style={s.listItem}>*/}
              {/*<View style={s.listItemLeft}>*/}
                {/*<View style={s.listItemLeftImgWrapper}>*/}
                  {/*<Image*/}
                    {/*style={{*/}
                      {/*width: "100%",*/}
                      {/*height: "100%",*/}
                    {/*}}*/}
                    {/*resizeMode={'contain'}*/}
                    {/*source={Feedback}*/}
                  {/*/>*/}
                {/*</View>*/}
                {/*<Text style={s.listItemLeftTxt}>我要反馈</Text>*/}
              {/*</View>*/}
              {/*<View style={s.listItemRight}>*/}
                {/*<Icon style={s.arrowRight} name="arrow-forward"/>*/}
              {/*</View>*/}
            {/*</View>*/}
            {/*<View style={s.listItem}>*/}
              {/*<View style={s.listItemLeft}>*/}
                {/*<View style={s.listItemLeftImgWrapper}>*/}
                  {/*<Image*/}
                    {/*style={{*/}
                      {/*width: "100%",*/}
                      {/*height: "100%",*/}
                    {/*}}*/}
                    {/*resizeMode={'contain'}*/}
                    {/*source={Rules}*/}
                  {/*/>*/}
                {/*</View>*/}
                {/*<Text style={s.listItemLeftTxt}>平台规则</Text>*/}
              {/*</View>*/}
              {/*<View style={s.listItemRight}>*/}
                {/*<Icon style={s.arrowRight} name="arrow-forward"/>*/}
              {/*</View>*/}
            {/*</View>*/}
          </View>

          <View style={s.logoutBtnWrapper}>
            <Button full style={{height: 50, backgroundColor: '#1a1a1a'}}
                    onPress={() => {
                      AsyncStorage.clear();
                      Alert.alert("退出成功!");
                      this.props.navigation.navigate("Home");
                    }}>
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
                <Image style={fs.footerImageHL} source={{uri:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAkCAYAAADLsGk3AAAABGdBTUEAALGPC/xhBQAABIpJREFUWAnVmVtoHFUYx7u3bnCXms2lmhY2UGGxPtjLWrUPkviiLxaf8lBRyFPU1AgSS7bkRi6SBJRUoz7ksVAU4pOPihgMRUT6EijS1FjTWrsu7RZDsM1mL/6+sLM9szOZ2cluupsDh/Od7/vO//z/Z87Mzpl1DQ4Ovu9yua7H4/EfZmdn/9uzRens7KwLh8Mv53K5w2NjY9Ok5dTU3t7eJp/Pt0/1ObCzy8vLN+fm5jIOxuhSvW63+zCeT1taWpaGhoYuI2oFsg+0LPp12GHqcerT9C/Q6kTQ3xMMBodp3mOskEmTZ0mKPBd53nxNtra2PoOdoG6reJPJZF8oFLrLxGepEUGhNYAx8QbOqdXV1UlDEEc2m11gUYKMDZN7BFejWZ7ik8VYJP8q+TcZe1+JOTYLjPv7+5/3eDyzAAuJ4rII0S621C/FAbM+WAfBOktMtm1hDi0X4leoZxYWFi7Nz8+nNX85rW6SWCx2yO/3/wzgfgX0zvr6+snJycnfFV9J5vDwsGC9qCYjQK7Eq6Ojo9+r/nJttwoA2T/of6f6mPfH7YjIY5iJT21sbKyoc1TC1gkRQIjfVoHZGf+ofSc2WLorrow1zKvEtmXaAlqQ2daEOzXIVkg5E5vd6OXgWY3dUSGP8mruqBBWMGu1ipWM7bSQSnK1xJJXhLJKd3d3sKmp6RQgdyr92+CEWClCDNtDyDc2Nh7jZj5FfZ0JI/zyn6Ot6I9cRYVANMQb8hFu3IPygkn/OewTtE8pEyXo/6r0H7lpe0UgfRqSpxHh0djR3zSJ/Yv9VSaT+Xh8fHxZi1ejtRUC0YIAjSACruO/yHa6gIBrmr+ara0QlRwCrlHPr62tfT09PZ1UY9W2nQj5kpe9oYmJibvVJm02f6lCzo+MjHxgBlArvlJ+EP/kFCnH2JoutkK4Jy7NzMys1rQKyNkK4el0r9ZFCD/be4QrstXhqCb09fT0+L1eb8BWSE2wtSBRX1//LrvmkO3WssCohRAvHO632DV/72ohAwMDr7Cax7kiV3atEO6NfXw7m0JINp1OrxiEoE6+OxVKcb8QqKLR0dHhaWho+AIKz1KTqVQqbnazy7feQmH/+QsdhwaLYHjiiY+V1C2WE9j8Qe4zxryZHxfnM+49gxCIy4FJxT6qdkq1+/r6HgcrWoQlw/fiO0Z7tVQsLY9z0UuMnaKe1Hy0D/gXIb3JuKury9fc3Pwkz+N3CMSohS0HmRwDP2Effr60tHSbT/8pBURntre3e6PRaH0gEIgSOMe4Nl3Cw84NzjBvJxKJn6z+ymAL7Y1EIk+A8wJPpzcY/hq27yHM5gfFyxyxT7j4PvsRXDsIHiApoCapNjn3id/C9y0vkL1qTGxWK0a8E3M/bUh8dgXMFc40H3Km+UbNlQVpa2u7iE/+yjhAfUyNF9mL8DnqBUwOTikmlxOe4XyuDSLuzucaDlqSQ9xDzZDzF/UGtuV9QI7sBvl/RrePtflo68hZB0e+H2/Ji5zfZIyAuLmEW4FJjq6wtYSgGbAjHA0UPMEyE10SngUfbYrd1f4PlXyQ75KuLMgAAAAASUVORK5CYII=',cache: 'only-if-cached'}}/>
                <Text style={fs.footerText}>红炉</Text>
              </View>
            </Button>
            <Button vertical style={fs.footerButton}
                    onPress={() => this.props.navigation.navigate("WareHouse")}>
              <View style={fs.footerView}>
                <Image style={fs.footerImage} source={{uri:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsCAYAAAAehFoBAAAABGdBTUEAALGPC/xhBQAABLlJREFUWAntmV1oI1UUx5ukMdmudmtjlVJafFEoQh9k3XWh9klFWBb86i4IShXJQ6VKsLYPTVrSL2htTVEp2H0p9mVtrQVXFkHxoVjclcUnfdmHtRQLKn5lY0m6pom/M86Mk/TO5INN3ZVcuDl37vmfc/9z5s69505qam6x4joovv39/YfdbvedXq/XU2DMzO+U+fn5P1W4ihPu6+urb2xsHGTw09S7s9ms45gulysL7hdwa4lEYjIWi/1mJe5obAWW0+7t7b29qalpFdvHy7HH5st4PH5qbm7uD8O+1mhUQgYCgSB+hWyKiE1SP6edzmQyykAxZbLoPMguagRsZ319/WvIKFUrlSTs5vE+LaNA9L3R0dGxf4Ys6vfiyMjIHSDD+HgyGAxOLiws/CWW7qLMywD19PTchlmjmEL4YqkuDBtkoKGhwW/YV4ywMUC50nbalOvwv7K7aSNsF5AqYbvI3Kj+aoRvVCTt/BxIhPX8wI6Dsl92PZWiYoR3dnYyFqKyiZRUWIe9ugHNTMYwrhjhlZWV6+xS3+sDdbO9GgSMsZ2ky+PxnNEBmzMzM0kDXMlcQsY4Sz1JpE81Nzd/Ojw8/AXX10VhV7hJL9PhEfRP6BjxYUZYmTXZOSunnyQmCokIpEseC7tZkqaBAyUsNxkOhx8las/RvBfejicOSO6B22LaLo+Pj18Q+2qpRuD/FIGcN7e7u9vT3t7+LDf4FC/HPchC63QazBVekPfHxsa+cgpMJBI5wYv3Apj7qYWWU1nGfsTvGn4/pL1/WeNI429ra1uA6PMASi0pnL+B83dVhqy/r9A/i2+fSu/Ux6qxtLW1FVxcXEwJzrzT1tbWV4UsgCxyFXEZvXlnKqdgDhG1k+iOIWeHhoYuT0xM5Jzf6HsYfQyfstN9jc0nSG1wpF2RA+xRsM8IJ7h9C3BawBrhUCh0CMVL0oGMRaPR16VdTBkYGIj5/f7PsDvOdtqDTQ7h2traF+nzMvilVCr12PT0dILrogpP5i2AIeEGx3f4qJLU5iifjwJ0NosXWbCL8qaDdALn9UuZnzkFovdJB/LjUsjqNh+IFG51dXXaCVyLMB1uHMoLKCmdvEglFWx38SE2qpfU6HPMIWwGTONbOLnS6bS2QxrOTDwRzlk5TIVDA7IFbYrB5A+h4rKPcL7RzXZdJVzpJ1KNcDXCeRHYNyXYYpXH6zy7A7lUcTEIx1knE7JWUo6Wwea4bvOzwlbrw+8xha5Q10NCCNA1alzA5oLPYVFOpy9T5Q+RYeo3tFm71RuJ3D06H/mDfGWXxMmDzWkOjStcm4V84Ay6c+jkrPb23t7eR9juOvkFJ8nPg9RR2ndhexa/QXFqZmvJZDJKEnMC0APUearoa3CuSdWPVYfTpfX19bV8HH2rXV1dS/iTtDVEMhQSjNU238Z6jd/vSJqEuFbME+zGxsa1zs7O8zg6jKaJ6gIs+79TTUHkKrg3+WstvLy8rP0PoXnWfzY3NzMdHR0XfD6fTLkWsPIVSHC2fsHtov8J7DnIBkmaftDd/TsljA6Rg4ODRxBHiIY5Zax6Szu9vb39q5FcW/qVTTkktLS0BFCaT1YFJNGRFz8+NTWlzVsV5pbp+xtDhbvUgXRfogAAAABJRU5ErkJggg==',cache: 'only-if-cached'}}/>
                <Text style={fs.footerText}>仓库</Text>
              </View>
            </Button>
            <Button style={fs.footerButton}
                    active={this.state.tab3}
                    onPress={() => this.props.navigation.navigate("Team")}
                    vertical
            >
              <View style={fs.footerView}>
                <Image style={fs.footerImage} source={{uri:'data:image/png;base64,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',cache: 'only-if-cached'}}/>
                <Text style={fs.footerText}>客户</Text>
              </View>
            </Button>
            <Button style={fs.footerButton}
                    active={this.state.tab4}
                    onPress={() => {
                      AsyncStorage.getItem("user_status").then((value) => {
                        let userInfo = JSON.parse(value);
                        if (userInfo && userInfo.status === 'logined') {
                          this.props.navigation.navigate("Mine");
                        } else {
                          this.props.navigation.navigate("Login");
                        }
                      }).then(res => {
                        //do something else
                      });
                    }}
                    vertical
            >
              <View style={fs.footerView}>
                <Image style={fs.footerImage} source={{uri:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAABGdBTUEAALGPC/xhBQAABotJREFUWAnFWGtsVEUUnpnd7pYulIcK5RFeCj4ium3BNPhKfUQlSrs0rPFBQBRUEAIUjV1QQO226Q8g1iIgijHYQAktNYAQ5GEErLQsRY0aKGCiQLUYoDaw3e7O+J3bXbitu713Wx43ae/szDnf+e6ZM2fODGdX4dlX+VaPxBbLQCFYb4KTkp0L+ptOZ7xY3NhVeN5ZgLKyibYR1pFPMQt7lik2ljE1iHNuITylVIhxdgrNKiV5Wf0fjVvGzS5u7oytThH0lec9zIXwck7ENEItjPE6tOrDJPpxxm8DSVt4/KBickFaduE34XHTr7gJ+irz5gnGvSBkV4odZ0quDoXYVydk3Qm3e2OALJN3h9mHDbNI69OCs+mM85Hwaoti6t207IJC0+wgGBfBw5vzPJyLfDIAgyUqoJakuQsaOjJ4oGxun272xHc4E3M0OcXec2bnL+pIRz9mmuDhygUTuWLrSRmey0115S/XAxm1fRV5ryNGi7U4lWqS0+VdZ6RD46YIHix7M8VmS6jGVA3CgojLA3oSuhmo9wdbxmTkFP2pH4/WFtE62/fZ7AkzNHKM7TsaOKpNcXsZM7/P135fBLnd+EuxW6yzzegYepBynENZf8SqHKykejJ1gnenGeBYMq0ZgO/C3NU3NclRD75QeC6WLPUbetAhRTriZqji6udQw9m9HYGZGasL1u0DOR8+eGCSQ9xnpGNIUAmeRiBcqb2jX12NfNe1B6kohEVG0wzvqHQjNEOCQrEhBCK5+NUIzOw4l6oVi3MNuyM9Q4KKiW4EAA92eV+NEJGM/duKyTXsSH+0tyFBZL2msKJWCEQDibcPW6SGhbiOYMeEMCTIFT/Rqs3vjYkS5wC2v3s0FaXC2LEBDAmGJKvR9g7GHtnxxXxHbChzI3vWTklE2DxO0kqyaiMtQ4KNjadqleK/YVpuvSXZlmMEaDTeu9eA8cC6E4VD3YXghUNG8oYEM1/63K+4XENAmJpFVaWefkagscZ/KM+7CblliTau1NpM94quxyCByWb5KXIXUgMfnujga2pWTU+KRSJW/7YPZ9ntFr4aGHeQ9y4F/Ctjyer7Dbe6iHBtpScTJLdiV6HUsIU1s9ec7nyqmg0fKjYSbAkroOtCsREIMTU+Pdu7w1ARAqYJEtjhCs8UzPMnULLi50nJ1AcXWXDjA1lFWl4jGf2zp2xG9562XhNAbCF0RtBRgDM105ldsEov11E7LoIEVFvhcSvOlsNof/qtGDuGAnEnGtX4C3tUDVAWNloorFbObic5jP0NuVyzdaCmg39xEyRFX4XnUZzgvoS6qQWDjzgLhlNSs7xbI4bNvuMiiCl2oi6cgTTxDAykaEYQUwj602ifgVcvUB+msifaKfDaQLhAOziRByG3TXFekpaVj9xq7jFFcH/5/L4OYVsIT7wCw91gTGKb2qUYL5cquN/P1e/t45Dir7u119AEzscitbig+xiMIXZVM9qfhYLs/dE53jNGNA0J0uoFyApKDxqYYhtAcKnTlX/QCFw/fqji7XQhxBxsnc/DqwIZ4TgW2Uyj1dwhQV+lZyoKy2IIJWHejmJxzOtMHLUhutnzBHaHpZiJu9Dvl1LOS3MVfKyX0bdjEqRTmODio9avVVtx9p1mZkr04LHaFDJJwrYSJF0UsZiRXGe2d1k0+agE6YgJ4VIMWqG//mLg0tSx7mWXogF0to92lv5DklfBxmSKadiZHC0F/Y9gdbnn7gTBv4Xn+sD49mB9Qw5K/YudJdKRXivJHhsQRllYOI2hoMrELPn0Om2KBVKwCl5C5OD3umBQTb1W5IgEXShhTU+jfR6eSrZaWQluItpU2W0I9h/cYxJy3EP4miBqtdlXK+b0HmnfpqsTKUNv0N0NMkVGUkLSy3qZywSpGAW5XBrEFcemNJf3a73gtWynTyjcjQ2gVLMh1NyqdbOSI/YuE+zb0z4unOv8+Jq4bqAiYF15KyWLMHOIdT7c5uieFcG6TBCr6DnqRDzsTnV5ayMC1+uNa7lfYHwH2eOCa1yorRGsKc29GSvpfurAl2g3WNS+3k/k9gwLJqNmk0erljSCVod9FFZuX+SjJtRr311vYhF7fhk8gBk8Dx/25lxqp0iNIO6RI0fKk+ePVBleiUUAr/Z7+09Fp+G944RrEeIKQXjtLKUWnD72ZC7ei/eNeRYvpiqJoUpCmmPsH2KheXDzEW8phsb81djiuTHUrlgN1TcsIS7HAsfWUu9/lCRod/plZy0AAAAASUVORK5CYII=',cache: 'only-if-cached'}}/>
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
