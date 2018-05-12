import React, { Component } from "react";
import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Body,
  Left,
  Right,
  Icon,
  Item,
  Text,
  Input,
  Picker,
  Form,
  Footer,
  FooterTab,
} from "native-base";
import { View, Image } from "react-native";
import styles from "./styles";

const pickUpImg = require("../../../assets/pickUp-img.png");

class FixedLabel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected1: undefined,
      selected2: undefined,
      countAmt: 35
    };
  }

  onValueChange1(value: string) {
    this.setState({
      selected1: value
    });
  }

  onValueChange2(value: string) {
    this.setState({
      selected2: value
    });
  }

  handleAdd = () => {
    let { countAmt } = this.state;
    this.setState({
      countAmt: countAmt + 1
    });
  };

  handleMinus = () => {
    let { countAmt } = this.state;
    countAmt = countAmt - 1;
    if (countAmt < 1) countAmt = 1;
    this.setState({
      countAmt
    });
  };

  render() {
    return (
      <Container style={styles.container}>
        <Header style={{backgroundColor: "#1A1A1A", borderBottomWidth: 0}}>
          <Left>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon name="arrow-back" style={styles.fontWhite}/>
            </Button>
          </Left>
          <Body>
          <Title>
            <Text style={styles.title}>买入申请</Text>
          </Title>
          </Body>
          <Right />
        </Header>

        <Content style={{ padding: 12}}>
          <View style={{backgroundColor: "#1A1A1A", padding: 15}}>
            <View style={{flexDirection: "row", justifyContent: "flex-start", alignItems: "center", marginTop: 15}}>
              <Image style={{resizeMode: "cover", width: 68, height: 68, borderRadius: 5}} source={pickUpImg}/>
              <View style={{marginLeft: 15}}>
                <Text style={{color: "#ccc", fontSize: 18}}>精品普洱茶饼(6年)</Text>
                <Text style={{marginTop: 10, color: "#D0B17D", fontSize: 18}}>￥923.35</Text>
              </View>
            </View>
            <View style={{flexDirection: "row", justifyContent: "flex-end", alignItems: "center"}}>
              <Button small style={{backgroundColor: "#4A4A4A"}} onPress={this.handleMinus}>
                <Text style={{color: "#ccc", fontSize: 19}}>-</Text>
              </Button>
              <Text style={{paddingLeft: 10, paddingRight: 10, color: "#ccc", fontSize: 18}}>
                {this.state.countAmt}
              </Text>
              <Button small style={{backgroundColor: "#D0B17D"}} onPress={this.handleAdd}>
                <Text style={{color: "#333", fontSize: 19}}>+</Text>
              </Button>
            </View>
          </View>
          <View style={{backgroundColor: "#1A1A1A", marginTop: 15, paddingLeft: 15}}>
            <View style={styles.listItem}>
              <Text style={styles.fontWhite}>支付方式</Text>
              <Text style={{color: "#ccc", paddingRight: 15}}>余额</Text>
            </View>
            <View button style={styles.listItem}>
              <Left>
                <Text style={styles.fontWhite}>排单券</Text>
              </Left>
              <Right>
                <Form>
                  <Picker
                    mode="dropdown"
                    iosIcon={<Icon name="ios-arrow-forward-outline"/>}
                    placeholderIconColor="#999"
                    style={{ width: undefined }}
                    placeholder="2张可用"
                    placeholderStyle={{paddingRight: 0}}
                    textStyle={{ color: "#ccc", paddingRight: 0 }}
                    itemStyle={{
                      backgroundColor: "#d3d3d3",
                      marginLeft: 0,
                      paddingLeft: 10
                    }}
                    itemTextStyle={{ color: "#788ad2" }}
                    selectedValue={this.state.selected1}
                    onValueChange={this.onValueChange1.bind(this)}
                  >
                    <Item label="Wallet" value="key0" />
                    <Item label="ATM Card" value="key1" />
                    <Item label="Debit Card" value="key2" />
                    <Item label="Credit Card" value="key3" />
                    <Item label="Net Banking" value="key4" />
                  </Picker>
                </Form>
              </Right>
            </View>
            <View button style={styles.listItem}>
              <Left>
                <Text style={styles.fontWhite}>优惠券</Text>
              </Left>
              <Right>
                <Form>
                  <Picker
                    mode="dropdown"
                    iosIcon={<Icon name="ios-arrow-forward-outline"/>}
                    placeholderIconColor="#999"
                    style={{ width: undefined }}
                    placeholder="-￥20"
                    placeholderStyle={{paddingRight: 0, color: "#D0B17D"}}
                    textStyle={{ color: "#ccc", paddingRight: 0}}
                    itemStyle={{
                      backgroundColor: "#d3d3d3",
                      marginLeft: 0,
                      paddingLeft: 10
                    }}
                    itemTextStyle={{ color: "#788ad2" }}
                    selectedValue={this.state.selected2}
                    onValueChange={this.onValueChange2.bind(this)}
                  >
                    <Item label="顺丰速运" value="key5" />
                    <Item label="圆通快递" value="key6" />
                    <Item label="中通快递" value="key7" />
                    <Item label="申通快递" value="key8" />
                    <Item label="EMS邮政" value="key9" />
                  </Picker>
                </Form>
              </Right>
            </View>
            <View style={styles.listItem}>
              <Text style={styles.fontWhite}>可获得红积分</Text>
              <Text style={{color: "#ccc", paddingRight: 15}}>2838</Text>
            </View>
            <View style={{flexDirection: "row", justifyContent: "space-between", alignItems: "flex-start", paddingTop: 15, paddingBottom: 15}}>
              <Text style={styles.fontWhite}>共三件商品</Text>
              <View>
                <View style={{flexDirection: "row", justifyContent: "flex-end"}}>
                  <Text style={{color: "#aaa"}}>主推产品费：</Text>
                  <Text style={{color: "#D0B17D", paddingRight: 15}}>$2768.34</Text>
                </View>
                <View style={{flexDirection: "row", justifyContent: "flex-end", marginTop: 10}}>
                  <Text style={{color: "#aaa"}}>推广费：</Text>
                  <Text style={{color: "#ccc", paddingRight: 15}}>$276.83</Text>
                </View>
              </View>
            </View>
          </View>
        </Content>
        <Footer style={{borderTopWidth: 0}}>
          <View style={{flexDirection: "row", justifyContent: "space-between"}}>
            <View style={{width: "60%", height: "100%", backgroundColor: "#333", paddingTop: 5, paddingLeft: 10}}>
              <View style={{flexDirection: "row", justifyContent: "flex-start", alignItems: "center"}}>
                <Text style={styles.fontWhite}>合计: </Text>
                <Text style={{color: "#D0B17D", fontSize: 22}}>￥3025.17</Text>
              </View>
              <Text style={{color: "#aaa", fontSize: 13}}>已优惠￥20</Text>
            </View>
            <Button full style={styles.buttonFull}>
              <Text style={{color: "#000", fontSize: 20, fontWeight: "bold"}}>立刻下单</Text>
            </Button>
          </View>
        </Footer>
      </Container>
    );
  }
}

export default FixedLabel;
