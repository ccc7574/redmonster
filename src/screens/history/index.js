import React, { Component } from "react";
import {
  Container,
  Header,
  Content,
  Button,
  Footer,
  FooterTab,
  Text,
  Title,
  Picker,
  Icon,
  View,
} from "native-base";
import { VictoryLine,VictoryChart,VictoryTheme} from "victory-native";
import { Image, TouchableHighlight } from "react-native";
import styles from "./styles";
import fs from "../footer/styles";

const MoneyCell = ({ moneyNum, moneyUnit }) => {
  return (
    <View style={styles.moneyItem}>
      <View style={styles.moneyItemBox}>
        <Text style={styles.moneyItemNum}>{moneyNum}</Text>
      </View>
      <Text style={styles.moneyItemUnit}>{moneyUnit}</Text>
    </View>
  );
};

class History extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tab1: false,
      tab2: false,
      tab3: true,
      tab4: false,
      selected: undefined,
      timeSection: "hour",
    };
  }

  onValueChange2 = (value) => {
    this.setState({
      selected: value
    });
  };

  changeTimeSection = (type) => {
    this.setState({
      timeSection: type
    });
  };

  renderMoney = () => {
    return (
      <View style={styles.moneyContainer}>
        <MoneyCell moneyNum={0} moneyUnit={"千"}/>
        <MoneyCell moneyNum={9} moneyUnit={"百"}/>
        <MoneyCell moneyNum={2} moneyUnit={"十"}/>
        <MoneyCell moneyNum={3} moneyUnit={"元"}/>
        <Text style={styles.point}>.</Text>
        <MoneyCell moneyNum={2} moneyUnit={"角"}/>
        <MoneyCell moneyNum={5} moneyUnit={"分"}/>
      </View>
    );
  };

  renderChartTop = () => {
    const { timeSection } = this.state;
    return (
      <View style={styles.chartBox}>
        <Text style={styles.chartTitle}>走势图</Text>
        <View style={styles.timeSection}>
          <Button
            style={timeSection === "hour" ? styles.timeLineActive : styles.timeLine}
            onPress={() => this.changeTimeSection("hour")}
          >
            <Text style={timeSection === "hour" ? styles.timeLineTxtActive : styles.timeLineTxt}>时</Text>
          </Button>
          <Button
            style={timeSection === "day" ? styles.timeLineActive : styles.timeLine}
            onPress={() => this.changeTimeSection("day")}
          >
            <Text style={timeSection === "day" ? styles.timeLineTxtActive : styles.timeLineTxt}>天</Text>
          </Button>
          <Button
            style={timeSection === "week" ? styles.timeLineActive : styles.timeLine}
            onPress={() => this.changeTimeSection("week")}
          >
            <Text style={timeSection === "week" ? styles.timeLineTxtActive : styles.timeLineTxt}>周</Text>
          </Button>
          <Button
            style={timeSection === "month" ? styles.timeLineActive : styles.timeLine}
            onPress={() => this.changeTimeSection("month")}
          >
            <Text style={timeSection === "month" ? styles.timeLineTxtActive : styles.timeLineTxt}>月</Text>
          </Button>
        </View>
      </View>
    );
  };

  render() {
    return (
      <Container style={styles.container}>
        <Header style={styles.firstHeader}>
          <View style={styles.headerLeft}>
            <TouchableHighlight onPress={() => this.props.navigation.navigate("Home")}>
              <Icon name="arrow-back" style={{color: "#999"}}/>
            </TouchableHighlight>
          </View>
          <View style={styles.headerBody}>
            {/*<View style={styles.leftTriangle}/>*/}
            <Title style={styles.iconStyle}>精品普洱茶</Title>
            {/*<View style={styles.rightTriangle}/>*/}
          </View>
          <View style={styles.headerRight}>
            <Text style={styles.headerRightTxt}>分享</Text>
          </View>
        </Header>

        <Content>
          <View style={styles.buyBox}>
            <Text style={styles.fontWhite}>当前价：¥402.83</Text>
            <Button block bordered style={styles.buyButton} onPress={() => this.props.navigation.navigate("Buy")}>
              <Text style={styles.buyButtonTxt}>立刻购买</Text>
            </Button>
          </View>

          { this.renderMoney() }

          <View style={{padding: 10}}>
            { this.renderChartTop() }
            <Text style={styles.fontGrey}>价格: 489.00元</Text>
            <Text style={styles.fontGrey}>成交量: 780份</Text>
            <Text style={styles.fontGrey}>时间: 2018/06/20 13:20:20</Text>
          </View>

          <VictoryChart theme={VictoryTheme.material}>
            <VictoryLine
              style={{
                data: { stroke: "#c43a31" },
                parent: { border: "1px solid #ccc"}
              }}
              data={[
                { x: 1, y: 2 },
                { x: 2, y: 3 },
                { x: 3, y: 5 },
                { x: 4, y: 4 },
                { x: 5, y: 7 }
              ]}
            />
          </VictoryChart>

        </Content>
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
                <Image style={fs.footerImage} source={require('../../../assets/home/team-active.png')}/>
                <Text style={fs.footerText}>客户</Text>
              </View>
            </Button>
            <Button style={fs.footerButton}
                    active={this.state.tab4}
                    onPress={() => this.props.navigation.navigate("Mine")}
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

export default History;
