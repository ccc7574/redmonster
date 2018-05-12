import React, { Component } from "react";
import {
  Container,
  Header,
  Content,
  Button,
  Body,
  Left,
  Right,
  Icon,
  List,
  Text,
  View,
  Footer,
  FooterTab,
} from "native-base";
import styles from "./styles";

const datas = [
  ["商品", "数量", "买入价", "现价", "盈利"],
  ["普洱茶叶", "2", "234", "123", "213"],
  ["产品1号", "2", "211", "545", "21"],
  ["产品2号", "1", "242", "665", "234"]
];

class WareHouse extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tab1: false,
      tab2: true,
      tab3: false,
      tab4: false,
    };
  }
  render() {
    return (
      <Container style={styles.container}>
        <Header>
          <Left>
            <Button transparent  onPress={() => this.props.navigation.navigate("Home")}>
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body style={styles.headerB}>
            <Button small>
              <Text>红仓</Text>
            </Button>
            <Button small>
              <Text>炉仓</Text>
            </Button>
          </Body>
          <Right />
        </Header>

        <Content style={{ padding: 15, marginTop: 20 }}>
          <View style={{flexDirection: "row", justifyContent: "space-between", padding: 5}}>
            <Text style={{fontSize: 16}}>可用现金：￥455.23</Text>
            <Text style={{fontSize: 16}}>总盈利：￥2352</Text>
          </View>
          <View style={styles.rowSection2}>
            <View style={{flexDirection: "row", alignItems: "center"}}>
              <Text style={{fontSize: 16}}>红积分：235</Text>
              <Button small style={{marginLeft: 8, backgroundColor: "#249CD3"}}>
                <Text>使用</Text>
              </Button>
            </View>
            <Text style={{fontSize: 16}}>总资产：￥2456</Text>
          </View>
          <List
            style={styles.listTable}
            dataArray={datas}
            renderRow={data =>(
              <View style={styles.listItem}>
                {data && data.map((item, key) => (
                  <Text style={styles.listCell} key={key}>
                    {item}
                  </Text>
                ))}
              </View>
            )}
          />
          <Button block style={{margin: 6}}>
            <Text>卖出</Text>
          </Button>
          <Button
            block
            style={{margin: 6, backgroundColor: "#C80813"}}
            onPress={() => this.props.navigation.navigate("PickUp")}
          >
            <Text>提货</Text>
          </Button>
          <Button block style={{margin: 6, backgroundColor: "#1FC923"}}>
            <Text>兑换</Text>
          </Button>
        </Content>
        <Footer>
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

export default WareHouse;
