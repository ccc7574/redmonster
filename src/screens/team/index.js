import React, { Component } from "react";
import {
  Container,
  Title,
  Content,
  Button,
  Body,
  Left,
  Right,
  Icon,
  Text,
  Input,
  List,
  Footer,
  FooterTab
} from "native-base";
import { View, Image } from "react-native";
import Header from "../../components/Header/index";
import s from "./styles";
import fs from "../footer/styles";

const tableHead = ["昵称", "账号", "本月消费", "本月消费商奖励", "本月业绩", "本月店铺奖励"];

const DATA = [
  ["李四四", "15098765432", "5000.25", "100.05", "50000.32", "0"],
  ["李四四", "15098765432", "5000.25", "100.05", "50000.32", "0"],
  ["李四四", "15098765432", "5000.25", "100.05", "50000.32", "0"],
  ["李四四", "15098765432", "5000.25", "100.05", "50000.32", "0"],
  ["李四四", "15098765432", "5000.25", "100.05", "50000.32", "0"],
  ["李四四", "15098765432", "5000.25", "100.05", "50000.32", "0"],
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
    };
  }

  handleTab = (key) => {
    this.setState({
      activeTab: key
    });
  };

  render() {
    const { tableHead } = this.state;

    return (
      <Container style={s.container}>
        <Header
          title="客户"
          rightContent="历史记录"
          rightLinkUrl="TeamDrive"
          navigation={this.props.navigation}
        />
        <Content style={s.content}>
          <View style={s.topRow}>
            <TopCell
              cellTitle="客户人数"
              cellContent={25}
              contentStyle={{color: "#D1B27A"}}
            />
            <TopCell
              cellTitle="累计推荐奖励(元)"
              cellContent={6518.70}
              contentStyle={{color: "#E83032"}}
            />
            <TopCell
              cellTitle="店铺总盈利(元)"
              cellContent={0}
              contentStyle={{color: "#E83032"}}
            />
          </View>
          <View style={s.topRow}>
            <TopCell
              cellTitle="本月新增人数"
              cellContent={2}
              contentStyle={{color: "#D1B27A"}}
            />
            <TopCell
              cellTitle="本月推荐奖励(元)"
              cellContent={6518.70}
              contentStyle={{color: "#E83032"}}
            />
            <View style={{flex: 1}}>
              <Button block bordered style={s.addButton}>
                <Text style={s.addButtonTxt}>立刻开店</Text>
              </Button>
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
              dataArray={DATA}
              renderRow={(data, index) => (
                <View style={s.listItem}>
                  { data && data.map((item, key) => {
                    let width = 100 / data.length - 2 + "%";
                    let color = (key === 3 || key === 5) && index !== 1 ? "#E83032" : "#A5A5A5";
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

          <View style={s.pagination}>
            <Text style={s.bottomPage}>上一页</Text>
            <Text style={s.bottomPageNum}>2/3</Text>
            <Text style={s.bottomPage}>下一页</Text>
          </View>
          {/*<Text style={s.bottomTip}>已显示全部</Text>*/}
        </Content>

        <Footer style={fs.footerTab}>
          <FooterTab style={fs.footerTab}>
            <Button style={fs.footerButton}
                    onPress={() => this.props.navigation.navigate("Home")}
                    vertical
            >
              <View style={fs.footerView}>
                <Image style={fs.footerImageHL} source={require('../../../assets/home/hl-active.png')}/>
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
                    onPress={() => this.props.navigation.navigate("Team")}
                    vertical
            >
              <View style={fs.footerView}>
                <Image style={fs.footerImage} source={require('../../../assets/home/team.png')}/>
                <Text style={fs.footerText}>客户</Text>
              </View>
            </Button>
            <Button style={fs.footerButton}
                    active={this.state.tab4}
                    onPress={() => this.props.navigation.navigate("WareHouse")}
                    vertical
            >
              <View style={fs.footerView}>
                <Image style={fs.footerImage} source={require('../../../assets/home/mine.png')}/>
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
