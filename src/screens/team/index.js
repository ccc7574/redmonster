import React, { Component } from "react";
import {
  Container,
  Content,
  Button,
  Text,
  List,
  Footer,
  FooterTab
} from "native-base";
import {View, Image, Alert, AsyncStorage} from "react-native";
import Header from "../../components/Header/index";
import s from "./styles";
import fs from "../footer/styles";
const axios = require('axios');


const tableHead = ["昵称", "账号", "本月消费", "本月消费商奖励", "本月业绩", "本月店铺奖励"];

const DATA = [
  ["赵云", "15098215432", "4000.25", "100.05", "40000.32", "0.00"],
  ["钟馗", "15098435354", "5000.25", "100.05", "50000.32", "0.00"],
  ["李白", "15098765643", "6000.25", "100.05", "60000.32", "0.00"],
  ["司马懿", "15098765456", "5000.25", "100.05", "50000.32", "0.00"],
  ["程咬金", "15098765483", "5000.25", "100.05", "50000.32", "0.00"],
  ["夏侯惇", "15098675431", "5000.25", "100.05", "50000.32", "0.00"],
];

const TopCell = ({ cellTitle, cellContent, contentStyle }) => {
  return (
    <View style={s.topCell}>
      <Text style={s.cellTitle}>{cellTitle}</Text>
      <Text style={[s.cellContent, contentStyle]}>{cellContent}</Text>
    </View>
  );
};

class FixedLabel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tableHead: tableHead,
      selected1: undefined,
      selected2: undefined,
      countAmt: 35,
      activeTab: 1,
      users:[],
      newAddQty:0,
      userQty:0
    };
  }

  componentWillMount(){
      AsyncStorage.getItem("user_status").then((value) => {
          let userInfo = JSON.parse(value);
          if(null == userInfo){
            this.setState({userQty: 0});
            this.setState({newAddQty: 0});
            userInfo = {};
            // userInfo.phone = "18699287811";
            console.log('没有登录')
            return;
          }
          axios.get(`http://192.168.14.139:3000/rm/graphql`, {
              params: {
                  query: `{ userQueryWhere(referee:"${userInfo.phone}") {name,phone}}`
              }
          }).then((response) => {
              let user = response.data.data.userQueryWhere;
              console.log(user);
              if(user.length >0){
                  let usersAry = [];
                  for (let i = 0; i < user.length; i++) {
                      let obj = user[i];
                      let objAry = [obj.name,obj.phone,"0.00","0.00","0.00"];
                      usersAry.push(objAry);
                  }
                  this.setState({users: usersAry});
              }
          })
      })
          .then(res => {
              //do something else
          });
  }

  render() {
    const { tableHead,users } = this.state;
    return (
      <Container style={s.container}>
        <Header
          title="客户"
          // rightContent="历史记录"
          // rightLinkUrl="TeamDrive"
          navigation={this.props.navigation}
        />
        <Content style={s.content}>
          <View style={s.topRow}>
            <TopCell
              cellTitle="客户人数"
              cellContent={this.state.userQty}
              contentStyle={{color: "#D1B27A"}}
            />
            <TopCell
              cellTitle="累计推荐奖励(积分)"
              cellContent={"0.00"}
              contentStyle={{color: "#E83032",textAlign: "center"}}
            />
            <TopCell
              cellTitle="店铺总盈利(积分)"
              cellContent={"0.00"}
              contentStyle={{color: "#E83032",textAlign: "center"}}
            />
          </View>
          <View style={s.topRow}>
            <TopCell
              cellTitle="本月新增人数"
              cellContent={this.state.newAddQty}
              contentStyle={{color: "#D1B27A"}}
            />
            <TopCell
              cellTitle="本月推荐奖励(积分)"
              cellContent={"0.00"}
              contentStyle={{color: "#E83032",textAlign: "center"}}
            />
            <View style={{flex: 1}}>
                <Text style={s.addButtonTxt}></Text>
            </View>
          </View>
          <View style={s.listHead}>
            { tableHead && tableHead.map((item, key) => {
              let width = 100 / tableHead.length - 2 + "%";
              let color = "#A5A5A5";
              return (
                <Text style={[s.listCell, s.fontWhite, { width, color }]} key={key}>
                  {item}
                </Text>
              );
            })}
          </View>
          <View>
              <List
                  style={s.listTable}
                  dataArray={users}
                  renderRow={data => (
                      <View style={s.listItem}>
                          { data && data.map((item, key) => {
                              let width = 100 / data.length - 2 + "%";
                              let color = (key === 3 || key === 5) ? "#E83032" : "#A5A5A5";
                              return (
                                  <Text style={[s.listCell, s.fontWhite, { width, color }]} key={key}>
                                      {item}
                                  </Text>
                              )})
                          }
                      </View>
                  )}
              />
          </View>

          {/*<View style={s.pagination}>*/}
            {/*<Text style={s.bottomPage}>上一页</Text>*/}
            {/*<Text style={s.bottomPageNum}>2/3</Text>*/}
            {/*<Text style={s.bottomPage}>下一页</Text>*/}
          {/*</View>*/}
          {/*<Text style={s.bottomTip}>已显示全部</Text>*/}
        </Content>

        <Footer style={fs.footerTab}>
          <FooterTab style={fs.footerTab}>
            <Button style={fs.footerButton}
                    onPress={() => this.props.navigation.navigate("Home")}
                    vertical
            >
              <View style={fs.footerView}>
                <Image style={fs.footerImageHL} source={require("../../../assets/home/hl.png")}/>
                <Text style={fs.footerText}>红炉</Text>
              </View>
            </Button>
            <Button vertical style={fs.footerButton}
                    onPress={() => this.props.navigation.navigate("WareHouse")}>
              <View style={fs.footerView}>
                <Image style={fs.footerImage} source={require("../../../assets/home/storage.png")}/>
                <Text style={fs.footerText}>仓库</Text>
              </View>
            </Button>
            <Button style={fs.footerButton}
                    vertical
            >
              <View style={fs.footerView}>
                <Image style={fs.footerImage} source={require("../../../assets/home/team-active.png")}/>
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
                <Image style={fs.footerImage} source={require("../../../assets/home/mine.png")}/>
                <Text style={fs.footerText}>我的</Text>
              </View>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}

export default FixedLabel;
