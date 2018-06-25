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
import { View, Image, TouchableHighlight } from "react-native";
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

  onValueChange1(value) {
    this.setState({
      selected1: value
    });
  }

  onValueChange2(value) {
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
            <Text style={styles.fontWhite}>提货</Text>
          </Title>
          </Body>
          <Right />
        </Header>

        <Content style={{ padding: 12}}>
          <View style={{backgroundColor: "#1A1A1A"}}>
            <TouchableHighlight onPress={() => this.props.navigation.navigate("PickUpAddress")}>
              <View style={{flexDirection: "row", justifyContent: "space-between", alignItems: "center", padding: 10}}>
                <Icon name="navigate" style={{color: "#aaa"}}/>
                <View style={{ width: "85%", paddingLeft: 10, paddingRight: 10}}>
                  <View style={{flexDirection: "row", justifyContent: "space-between", marginBottom: 10}}>
                    <Text style={styles.fontWhite}>提货人：李四</Text>
                    <Text style={styles.fontWhite}>15098765432</Text>
                  </View>
                  <Text style={{color: "#ccc", textAlign: "justify"}}>江苏省无锡市滨湖区蠡湖大道1800号江南大学南门24栋5号</Text>
                </View>
                <View><Icon name="arrow-forward" style={{color: "#aaa", fontSize: 22}}/></View>
              </View>
            </TouchableHighlight>
          </View>
          <View style={{backgroundColor: "#1A1A1A", marginTop: 15, padding: 15}}>
            <View style={{flexDirection: "row", justifyContent: "flex-start"}}>
              <Text style={styles.fontWhite}>提货订单编号</Text>
              <Text style={{marginLeft: 15, color: "#aaa"}}>12345678901234</Text>
            </View>
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
            <Content>
              {/*<View button style={styles.listItem}>*/}
                {/*<Left>*/}
                  {/*<Text style={styles.fontWhite}>提货方式</Text>*/}
                {/*</Left>*/}
                {/*<Right>*/}
                  {/*<Form>*/}
                    {/*<Picker*/}
                      {/*mode="dropdown"*/}
                      {/*iosIcon={<Icon name="ios-arrow-forward-outline"/>}*/}
                      {/*placeholderIconColor="#999"*/}
                      {/*style={{ width: undefined }}*/}
                      {/*placeholder="请选择"*/}
                      {/*placeholderStyle={{paddingRight: 0}}*/}
                      {/*textStyle={{ color: "#ccc", paddingRight: 0 }}*/}
                      {/*itemStyle={{*/}
                        {/*backgroundColor: "#d3d3d3",*/}
                        {/*marginLeft: 0,*/}
                        {/*paddingLeft: 10*/}
                      {/*}}*/}
                      {/*itemTextStyle={{ color: "#788ad2" }}*/}
                      {/*selectedValue={this.state.selected1}*/}
                      {/*onValueChange={this.onValueChange1.bind(this)}*/}
                    {/*>*/}
                      {/*<Item label="Wallet" value="key0" />*/}
                      {/*<Item label="ATM Card" value="key1" />*/}
                      {/*<Item label="Debit Card" value="key2" />*/}
                      {/*<Item label="Credit Card" value="key3" />*/}
                      {/*<Item label="Net Banking" value="key4" />*/}
                    {/*</Picker>*/}
                  {/*</Form>*/}
                {/*</Right>*/}
              {/*</View>*/}
              <View button style={styles.listItem}>
                <Left>
                  <Text style={styles.fontWhite}>发货方式</Text>
                </Left>
                <Right>
                  <Form>
                    <Picker
                      mode="dropdown"
                      iosIcon={<Icon name="ios-arrow-forward-outline"/>}
                      placeholderIconColor="#999"
                      style={{ width: undefined }}
                      placeholder="顺丰速运"
                      placeholderStyle={{paddingRight: 0}}
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
              <View style={{flexDirection: "row", justifyContent: "flex-start", alignItems: "center", height: 50}}>
                <Text style={styles.fontWhite}>提货备注：</Text>
                <Input placeholder="填写备注内容"/>
              </View>
            </Content>
          </View>
          <View style={{flexDirection: "row", justifyContent: "flex-start", alignItems: "center", marginTop: 10, paddingLeft: 15}}>
            <Text style={styles.fontWhite}>预计发货时间</Text>
            <Text style={{marginLeft: 8, color: "#999"}}>2018-06-01</Text>
          </View>
        </Content>
        <Footer>
          <FooterTab>
            <Button full style={styles.buttonFull}>
              <Text style={{color: "#000", fontSize: 17}}>确认提货</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}

export default FixedLabel;
