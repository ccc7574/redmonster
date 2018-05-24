import React, { Component } from "react";
import {Dimensions, Image} from "react-native";
import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Item,
  Input,
  Body,
  Left,
  Right,
  Icon,
  Form,
  Text,
  Switch,
  Footer,
  FooterTab,
  View,

}
from "native-base";
import styles from "./styles";

const Head = require("../../../assets/login/head.png");
const BgMsk = require( "../../../assets/login/bgMsk2x.png");
const Sina = require("../../../assets/login/sina2x.png");
const Webchat = require( "../../../assets/login/webChat2x.png");


const Bg = require("../../../assets/login/bg.png");
const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      switchFlag: false,
      checkbox: true,
      tab1: false,
      tab2: false,
      tab3: false,
      tab4: true,
    };
  }
  handleChange = () => {
    let {switchFlag} = this.state;
    this.setState({
      switchFlag: !switchFlag
    });
  };
  render() {
    return (
      <Container style={styles.container}>
        <Header style={{backgroundColor: "rgba(0, 0, 0, .6)",}}>
          <Left>
            <Button transparent  onPress={() => this.props.navigation.navigate("Home")}>
              <Icon name="arrow-back" style={{color: "#818181"}} />
            </Button>
          </Left>
          <Body>
          <Title style={{color:'#fff',}}>登录</Title>
          </Body>
          <Right />
        </Header>

        <Content>
            <View>
                <Image
                    style={{
                        width: deviceWidth,
                        height: deviceHeight,
                        position:'absolute',
                        left:0,
                        top:0,
                        zIndex:1
                    }}
                    source={Bg}
                />
            </View>
            <View>
                <Image
                    style={{
                        width: deviceWidth,
                        height: deviceHeight,
                        position:'absolute',
                        left:0,
                        top:0,
                        zIndex:2
                    }}
                    source={BgMsk}
                />
            </View>

            <View style={{display:"flex",flex:1,justifyContent:"center",alignItems:"center"}}>
                <Image
                    style={{
                        width: 84,
                        height: 84,
                        marginBottom:40,
                        marginTop:45,
                    }}
                    source={Head}
                />
            </View>

          <Form style={{width:deviceWidth - 104,marginLeft:52}}>
            <Item fixedLabel style={styles.itemRow}>
              <Icon active name="phone-portrait" style={styles.icon}/>
              <Input placeholder="手机号码"/>
            </Item>
            <Item fixedLabel style={styles.itemRow}>
              <Icon active name="lock" style={styles.icon}/>
              <Input secureTextEntry={!this.state.switchFlag} placeholder="登录密码"/>
              <Switch value={this.state.switchFlag} onTintColor="#4688F1" onValueChange={this.handleChange} style={{marginRight: 10}}/>
            </Item>
          </Form>
          <Button block rounded style={{...styles.btnLogin,width:deviceWidth-114,}}>
            <Text style={{fontSize: 18,color:"#1A1A1A"}}>登 录</Text>
          </Button>
          <Button block rounded transparent bordered
                  onPress={() => this.props.navigation.navigate("Register")}
                  style={{ width:deviceWidth-114,marginLeft:57,marginTop:20,borderColor:"#D1B27A"}}>
            <Text style={{fontSize: 18,color:"#D1B27A",}}>注 册</Text>
          </Button>
           <View style={{marginLeft:52}}>
            <Text style={{fontSize:13,color:'#E7E7E7',marginTop:13,marginLeft:8}}>忘记密码</Text>
           </View>
           <View style={{marginTop:40,display:'flex',flex:1,flexDirection:'row',alignItems:'center'}}>
               <View style={{width:(deviceWidth-58)/2,height:1,backgroundColor:'#585858',display:'flex',flexDirection:'row',justifyContent:'flex-start'}}></View>
               <View style={{marginLeft:20,marginRight:20,display:'flex',justifyContent:'center',flexDirection:'row',}}><Text style={{fontSize:14,color:'#585858'}}>or</Text></View>
               <View style={{width:(deviceWidth-58)/2,height:1,backgroundColor:'#585858',display:'flex',flexDirection:'row',justifyContent:'flex-end'}}></View>
           </View>
           <View style={styles.shareBox}>
               <View style={styles.shareIcon}>
                   <Image source={Sina} style={{width:42,height:42}}/>
               </View>
               <View style={{...styles.shareIcon,marginLeft:70}}>
                   <Image source={Webchat} style={{width:42,height:42}}/>
               </View>
           </View>
        </Content>

        <Footer style={{margin:0}}>
          <FooterTab>
            <Button
              active={this.state.tab1}
              onPress={() => this.props.navigation.navigate("Home")}
              vertical
            >
              <Icon active={this.state.tab1} name="apps"/>
              <Text>首页</Text>
            </Button>
            <Button active={this.state.tab2}
                    vertical
                    onPress={() => this.props.navigation.navigate("WareHouse")}>
              <Icon name="camera" active={this.state.tab2}/>
              <Text>仓库</Text>
            </Button>
            <Button
              active={this.state.tab3}
              onPress={() => this.props.navigation.navigate("History")}
              vertical
            >
              <Icon active={this.state.tab3} name="man"/>
              <Text>团队</Text>
            </Button>
            <Button
              active={this.state.tab4}
            onPress={() => this.props.navigation.navigate("Login")}
            vertical
          >
            <Icon active={this.state.tab4} name="contact" />
            <Text>我的</Text>
          </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}

export default Login;
