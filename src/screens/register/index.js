import React, {Component} from "react";
import {Dimensions, Image, Alert, AsyncStorage} from "react-native";

import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Item,
  View,
  Input,
  Body,
  Left,
  Right,
  Icon,
  Form,
  Text,
  Switch,
  ListItem,
  CheckBox
} from "native-base";
import styles from "./styles";

const Head = require("../../../assets/login/head.png");
const BgMsk = require("../../../assets/login/bgMsk2x.png");

const Bg = require("../../../assets/login/bg.png");
const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;
const {serverAPI} = require('../utils');
const axios = require('axios');

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      switchFlag: false,
      checkbox: true,
      checkColor: '#CCAD75',
      vCode: '',
      vStatus: false,
      currentCount:60
    };
  }

  handleChange = () => {
    let {switchFlag} = this.state;
    this.setState({
      switchFlag: !switchFlag
    });
  };

  toggleSwitch() {
    this.setState({
      checkbox: !this.state.checkbox
    }, () => {
      if (this.state.checkbox) {
        this.setState({
          checkColor: "#CCAD75"
        })
      }
      else {
        this.setState({
          checkColor: "#fff"
        })
      }
    });
  }

  timer = ()=> {
    let newCount = this.state.currentCount - 1;
    if(newCount >= 0) {
      this.setState({ currentCount: newCount });
    } else {
      clearInterval(this.state.intervalId);
      this.setState({vStatus: false,currentCount:60})
    }
  }

  getValidateCode = () => {
    let self = this;
    if (this.state.vStatus === true) {
      Alert.alert("请稍后重试");
    }
    let phone = this.state.phone;
    this.setState({vStatus: true});
    let intervalId = setInterval(this.timer, 1000);
    this.setState({intervalId: intervalId});

    if (this.getB(phone)) {
      Alert.alert("手机号码有误无法收到验证码，请重填");
    } else {
      axios.post(`http://144.202.117.213:2000/member/register/sms/${phone}/1`, {}).then(function (response) {
        let messageCode = response.data.payload.phoneVerifyCode;
        self.setState({vCode:messageCode})
      })
    }
  }

  getB(phone) {
    return !(/^1[34578]\d{9}$/.test(phone));
  }

  handleFormSubmit = () => {
    let props = this.props;
    let phone = this.state.phone;
    let name = this.state.name;
    let password = this.state.password;
    let referee = this.state.referee;
    let code = this.state.code;
    if (this.getB(phone)) {
      Alert.alert("手机号码有误，请重填");
      return false;
    }
    if (this.getB(phone)) {
      Alert.alert("推荐人手机号码有误，请重填");
      return false;
    }
    if (code === this.state.vCode) {
      axios.post(`${serverAPI}/RM/api/users/create`, {
        phone: phone,
        type: 1,
        password: password,
        referee: referee,
        name: name
      }).then(function (response) {
        if (response.data.result === 'success') {
          let userInfo = response.data.data;
          let userObj = {
            status: 'logined',
            ...userInfo
          };
          AsyncStorage.setItem('user_status', JSON.stringify(userObj), () => {
            Alert.alert('注册成功!');
            props.navigation.navigate("Home");
          });
        }
      }).catch(function (error) {
        Alert.alert('密码长度不小于6位数!');
      })
    } else {
      Alert.alert('验证码错误!')
    }
  };

  render() {
    return (
      <Container style={styles.container}>
        <Header style={{backgroundColor: '#000'}}>
          <Left>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon name="arrow-back" style={{color: "#818181"}}/>
            </Button>
          </Left>
          <Body>
          <Title style={{color: "#fff"}}>注册</Title>
          </Body>
          <Right/>
        </Header>

        <Content style={{paddingRight: 15}}>
          <View>
            <Image
              style={{
                width: deviceWidth,
                height: deviceHeight,
                position: 'absolute',
                left: 0,
                top: 0,
                zIndex: 1
              }}
              source={Bg}
            />
          </View>
          <View>
            <Image
              style={{
                width: deviceWidth,
                height: deviceHeight,
                position: 'absolute',
                left: 0,
                top: 0,
                zIndex: 2
              }}
              source={BgMsk}
            />
          </View>
          <View style={{display: "flex", flex: 1, justifyContent: "center", alignItems: "center"}}>
            <Image
              style={{
                width: 84,
                height: 84,
                marginBottom: 40,
                marginTop: 45,
              }}
              source={Head}
            />
          </View>


          <Form>
            <Item fixedLabel style={styles.itemRow}>
              <Icon active name="phone-portrait" style={styles.icon}/>
              <Input
                placeholder="输入手机号"
                ref={(el) => {
                  this.phone = el;
                }}
                onChangeText={(phone) => this.setState({phone})}
                value={this.state.phone}
                style={styles.input}
              />
            </Item>
            <Item fixedLabel style={styles.itemRow}>
              <Icon active name="person" style={styles.icon}/>
              <Input
                placeholder="昵称"
                ref={(el) => {
                  this.name = el;
                }}
                onChangeText={(name) => this.setState({name})}
                value={this.state.name}
                style={styles.input}
              />
            </Item>
            <Item fixedLabel style={{flexDirection: "row", alignItems: "center", height: 60}}>
              <Icon active name="chatboxes" style={styles.icon}/>
              <Input
                placeholder="输入验证码"
                ref={(el) => {
                  this.code = el;
                }}
                onChangeText={(code) => this.setState({code})}
                value={this.state.code}
                style={styles.input}
              />
              <View>
                <Button style={styles.codeBtn} transparent onPress={this.getValidateCode}>
                  <Text disabled={this.state.vStatus}
                        style={{color: "#D1B27A", fontSize: 12}}>{this.state.vStatus ? `${this.state.currentCount}秒后重试` : '获取验证码'}</Text>
                </Button>
              </View>
            </Item>

            <Item fixedLabel style={styles.itemRow}>
              <Icon active name="lock" style={styles.icon}/>
              <Input
                secureTextEntry={!this.state.switchFlag} placeholder="请设置登录密码"
                ref={(el) => {
                  this.password = el;
                }}
                onChangeText={(password) => this.setState({password})}
                value={this.state.password}
                style={styles.input}
              />
              <Switch value={this.state.switchFlag} onTintColor="#4688F1" onValueChange={this.handleChange}
                      style={{marginRight: 10}}/>
            </Item>
            <Item fixedLabel style={styles.itemRow}>
              <Icon active name="attach" style={styles.icon}/>
              <Input
                placeholder="请输入推荐人手机号"
                ref={(el) => {
                  this.referee = el;
                }}
                onChangeText={(referee) => this.setState({referee})}
                value={this.state.referee}
                style={styles.input}
              />
            </Item>
          </Form>
          <ListItem style={{margin: 20, borderBottomWidth: 0}}>
            <CheckBox
              color={this.state.checkColor}
              checked={this.state.checkbox}
              onPress={() => this.toggleSwitch()}
              style={{borderRadius: 0}}
            />
            <Body>
            <View style={{flexDirection: "row", alignItems: "center", marginLeft: 10}}>
              <Text style={{color: "#fff"}}>已阅读并同意《</Text>
              <Text style={{color: "#fff"}}>用户服务协议</Text>
              <Text style={{color: "#fff"}}>》</Text>
            </View>
            </Body>
          </ListItem>
          <Button disabled={!this.state.checkbox} block rounded
                  style={{margin: 15, marginTop: 20, backgroundColor: "#CCAD75"}} onPress={this.handleFormSubmit}>
            <Text style={{fontSize: 18, color: "#1A1A1A"}}>确认</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}

export default Register;
