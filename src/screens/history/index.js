import React, { Component } from "react";
import {
  Container,
  Header,
  Content,
  Button,
  Footer,
  FooterTab,
  Text,
  Body,
  Title,
  Left,
  Right,
  Picker,
  Form,
  Icon,
  Card,
  CardItem,
  ListItem,
  View
} from "native-base";
import { VictoryLine,VictoryChart,VictoryTheme} from "victory-native";
import { Image } from "react-native";
import styles from "./styles";
const Item = Picker.Item;

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
          <Left>
            <Button transparent onPress={() => this.props.navigation.navigate("Home")}>
              <Icon name="arrow-back" style={{color: "#999"}}/>
            </Button>
          </Left>
          <Body>
            <Title style={styles.iconStyle}>精品普洱茶</Title>
          </Body>
          <Right>
            <Text style={styles.fontWhite}>分享</Text>
          </Right>
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

          {/*<Card style={styles.mb}>*/}
            {/*<CardItem>*/}
              {/*<Left>*/}
                {/*<Text style={{ color: "#b09872" }}>精品普洱茶</Text>*/}
              {/*</Left>*/}
              {/*<Right>*/}
                {/*<Form>*/}
                  {/*<Picker*/}
                    {/*mode="dropdown"*/}
                    {/*iosIcon={<Icon name="ios-arrow-down-outline"/>}*/}
                    {/*style={{ width: undefined }}*/}
                    {/*placeholder="选择其他产品"*/}
                    {/*textStyle={{ color: "#b09872" }}*/}
                    {/*itemStyle={{*/}
                      {/*backgroundColor: "#d3d3d3",*/}
                      {/*marginLeft: 0,*/}
                      {/*paddingLeft: 10*/}
                    {/*}}*/}
                    {/*itemTextStyle={{ color: "#788ad2" }}*/}
                    {/*selectedValue={this.state.selected}*/}
                    {/*onValueChange={this.onValueChange2}*/}
                  {/*>*/}
                    {/*<Item label="精品红酒" value="key0"/>*/}
                    {/*<Item label="精品铁观音" value="key1"/>*/}
                    {/*<Item label="精品碧螺春" value="key2"/>*/}
                  {/*</Picker>*/}
                {/*</Form>*/}
              {/*</Right>*/}
            {/*</CardItem>*/}
          {/*</Card>*/}
          {/*<ListItem>*/}
            {/*<Left>*/}
              {/*<Text>最新价格: </Text>*/}
            {/*</Left>*/}
            {/*<Right><Text style={styles.priceTag}>481.98元</Text></Right>*/}
          {/*</ListItem>*/}
        </Content>

        <Footer style={styles.footerTab}>
          <FooterTab style={styles.footerTab}>
            <Button style={styles.footerButton}
                    onPress={() => this.props.navigation.navigate("Settings")}
                    vertical
            >
              <View>
                <Image style={styles.footerImageHL} source={require("../../../assets/home/hl-active.png")}/>
                <Text style={styles.footerText}>红炉</Text>
              </View>
            </Button>
            <Button vertical style={styles.footerButton}
                    onPress={() => this.props.navigation.navigate("WareHouse")}>
              <View>
                <Image style={styles.footerImage} source={require("../../../assets/home/storage.png")}/>
                <Text style={styles.footerText}>仓库</Text>
              </View>
            </Button>
            <Button style={styles.footerButton}
                    active={this.state.tab3}
                    onPress={() => this.props.navigation.navigate("History")}
                    vertical
            >
              <View>
                <Image style={styles.footerImage} source={require("../../../assets/home/team.png")}/>
                <Text style={styles.footerText}>团队</Text>
              </View>
            </Button>
            <Button style={styles.footerButton}
                    active={this.state.tab4}
                    onPress={() => this.props.navigation.navigate("Coupon")}
                    vertical
            >
              <View>
                <Image style={styles.footerImage} source={require("../../../assets/home/mine.png")}/>
                <Text style={styles.footerText}>我的</Text>
              </View>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}

export default History;
