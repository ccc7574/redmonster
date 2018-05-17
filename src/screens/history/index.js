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
  Left,
  Right,
  Picker,
  Form,
  Icon,
  Card,
  CardItem,
  ListItem
} from "native-base";
import { VictoryLine,VictoryChart,VictoryTheme} from "victory-native";
import styles from "./styles";
const Item = Picker.Item;

class History extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tab1: false,
      tab2: false,
      tab3: true,
      tab4: false,
      selected2: undefined,
    };
  }

  onValueChange2(value: string) {
    this.setState({
      selected2: value
    });
  }

  render() {
    return (
      <Container style={styles.container}>
        <Header>
          <Left>
            <Button transparent onPress={() => this.props.navigation.navigate("Home")}>
              <Icon name="arrow-back"/>
            </Button>
          </Left>
          <Body style={styles.headerB}>
          <Button rounded small onPress={() => this.props.navigation.navigate("TeamDrive")}>
            <Text>红积分</Text>
          </Button>
          <Button rounded small onPress={() => this.props.navigation.navigate("Team")}>
            <Text>炉积分</Text>
          </Button>
          </Body>
          <Right/>
        </Header>

        <Content padder>
          <Card style={styles.mb}>
            <CardItem>
              <Left>
                <Text style={{ color: "#b09872" }}>精品普洱茶</Text>
              </Left>
              <Right>
                <Form>
                  <Picker
                    mode="dropdown"
                    iosIcon={<Icon name="ios-arrow-down-outline"/>}
                    style={{ width: undefined }}
                    placeholder="选择其他产品"
                    textStyle={{ color: "#b09872" }}
                    itemStyle={{
                      backgroundColor: "#d3d3d3",
                      marginLeft: 0,
                      paddingLeft: 10
                    }}
                    itemTextStyle={{ color: "#788ad2" }}
                    selectedValue={this.state.selected2}
                    onValueChange={this.onValueChange2.bind(this)}
                  >
                    <Item label="精品红酒" value="key0"/>
                    <Item label="精品铁观音" value="key1"/>
                    <Item label="精品碧螺春" value="key2"/>
                  </Picker>
                </Form>
              </Right>
            </CardItem>
          </Card>
          <ListItem>
            <Left>
              <Text>最新价格: </Text>
            </Left>
            <Right><Text style={styles.priceTag}>481.98元</Text></Right>
          </ListItem>
          <VictoryChart
            theme={VictoryTheme.material}
          >
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
          <Card style={styles.mb}>
            <CardItem
              header
            >
              <Text>时间: 2018/04/20 13:20:20</Text>
            </CardItem>
            <CardItem>
              <Body>
              <Text>价格: 489.00元</Text>
              </Body>
            </CardItem>
            <CardItem
              footer>
              <Text>成交量: 780份</Text>
            </CardItem>
          </Card>
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

export default History;
