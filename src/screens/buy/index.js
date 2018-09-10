import React, {Component} from "react";
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
import {View, Image, Alert, AsyncStorage, TouchableHighlight} from "react-native";
import styles from "./styles";

const {serverAPI} = require('../utils');
const pickUpImg = require("../../../assets/home/hl-product.png");
const axios = require('axios');

class FixedLabel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected1: undefined,
      selected2: undefined,
      countAmt: 3,
      productPrice: 1200
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
    let {countAmt} = this.state;
    this.setState({
      countAmt: countAmt + 1
    });
  };

  handleMinus = () => {
    let {countAmt} = this.state;
    countAmt = countAmt - 1;
    if (countAmt < 1) countAmt = 1;
    this.setState({
      countAmt
    });
  };

  submitOrder = () => {
      Alert.alert('余额不足');

    //   let props = this.props;
    // AsyncStorage.getItem("user_status").then((value) => {
    //   let userInfo = JSON.parse(value);
    //   axios.post(`${serverAPI}/RM/api/orders/create`, {
    //     dealPrice: this.state.productPrice,
    //     dealAmount: this.state.countAmt,
    //     userId: userInfo.userId,
    //     productId: 1,
    //     productName:'普洱茶'
    //   }).then(function (response) {
    //     if(response.data.result==='success'){
    //       Alert.alert('下单成功!');
    //       props.navigation.navigate("WareHouse");
    //     }
    //   }).catch(function (error) {
    //     console.log(error);
    //   })
    // })
  }

  render() {
    const { productPrice } = this.state;

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
          <Right/>
        </Header>

        <Content style={{padding: 12}}>
          <View style={{backgroundColor: "#1A1A1A", padding: 15}}>
            <TouchableHighlight onPress={() => this.props.navigation.navigate("Products")}>
              <View style={{flexDirection: "row", justifyContent: "flex-start", alignItems: "center", marginTop: 15}}>
                <Image style={{resizeMode: "cover", width: 68, height: 68, borderRadius: 5}} source={pickUpImg}/>
                <View style={{marginLeft: 15}}>
                  <Text style={{color: "#ccc", fontSize: 18}}>红炉熟普2012</Text>
                  <Text style={{marginTop: 10, color: "#D0B17D", fontSize: 18}}>{productPrice}积分</Text>
                </View>
              </View>
            </TouchableHighlight>
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
            {/*<View button style={styles.listItem}>*/}
              {/*<Left>*/}
                {/*<Text style={styles.fontWhite}>排单券</Text>*/}
              {/*</Left>*/}
              {/*<Right>*/}
                {/*<Form>*/}
                  {/*<Picker*/}
                    {/*mode="dropdown"*/}
                    {/*iosIcon={<Icon name="ios-arrow-forward-outline"/>}*/}
                    {/*placeholderIconColor="#999"*/}
                    {/*style={{width: undefined}}*/}
                    {/*placeholder="2张可用"*/}
                    {/*placeholderStyle={{paddingRight: 0}}*/}
                    {/*textStyle={{color: "#ccc", paddingRight: 0}}*/}
                    {/*itemStyle={{*/}
                      {/*backgroundColor: "#d3d3d3",*/}
                      {/*marginLeft: 0,*/}
                      {/*paddingLeft: 10*/}
                    {/*}}*/}
                    {/*itemTextStyle={{color: "#788ad2"}}*/}
                    {/*selectedValue={this.state.selected1}*/}
                    {/*onValueChange={this.onValueChange1.bind(this)}*/}
                  {/*>*/}
                    {/*<Item label="8小时排单券" value="key0"/>*/}
                    {/*<Item label="3天排单券" value="key1"/>*/}
                  {/*</Picker>*/}
                {/*</Form>*/}
              {/*</Right>*/}
            {/*</View>*/}
            {/*<View button style={styles.listItem}>*/}
              {/*<Left>*/}
                {/*<Text style={styles.fontWhite}>优惠券</Text>*/}
              {/*</Left>*/}
              {/*<Right>*/}
                {/*<Form>*/}
                  {/*<Picker*/}
                    {/*mode="dropdown"*/}
                    {/*iosIcon={<Icon name="ios-arrow-forward-outline"/>}*/}
                    {/*placeholderIconColor="#999"*/}
                    {/*style={{width: undefined}}*/}
                    {/*placeholder="-￥20"*/}
                    {/*placeholderStyle={{paddingRight: 0, color: "#D0B17D"}}*/}
                    {/*textStyle={{color: "#ccc", paddingRight: 0}}*/}
                    {/*itemStyle={{*/}
                      {/*backgroundColor: "#d3d3d3",*/}
                      {/*marginLeft: 0,*/}
                      {/*paddingLeft: 10*/}
                    {/*}}*/}
                    {/*itemTextStyle={{color: "#788ad2"}}*/}
                    {/*selectedValue={this.state.selected2}*/}
                    {/*onValueChange={this.onValueChange2.bind(this)}*/}
                  {/*>*/}
                    {/*<Item label="手续费5%折扣券" value="key5"/>*/}
                    {/*<Item label="20元抵用券" value="key6"/>*/}
                  {/*</Picker>*/}
                {/*</Form>*/}
              {/*</Right>*/}
            {/*</View>*/}
            {/*<View style={styles.listItem}>*/}
              {/*<Text style={styles.fontWhite}>可获得红积分</Text>*/}
              {/*<Text style={{*/}
                {/*color: "#ccc",*/}
                {/*paddingRight: 15*/}
              {/*}}>{(this.state.productPrice * this.state.countAmt).toFixed(2)}</Text>*/}
            {/*</View>*/}
            <View style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "flex-start",
              paddingTop: 15,
              paddingBottom: 15
            }}>
              <Text style={styles.fontWhite}>共{this.state.countAmt}件商品</Text>
              {/*<View>*/}
                {/*<View style={{flexDirection: "row", justifyContent: "flex-end"}}>*/}
                  {/*<Text style={{color: "#aaa"}}>主推产品积分：</Text>*/}
                  {/*<Text style={{*/}
                    {/*color: "#D0B17D",*/}
                    {/*paddingRight: 15*/}
                  {/*}}>{(this.state.productPrice * this.state.countAmt).toFixed(2)}</Text>*/}
                {/*</View>*/}
                {/*<View style={{flexDirection: "row", justifyContent: "flex-end", marginTop: 10}}>*/}
                  {/*<Text style={{color: "#aaa"}}>推广积分：</Text>*/}
                  {/*<Text style={{*/}
                    {/*color: "#ccc",*/}
                    {/*paddingRight: 15*/}
                  {/*}}>{(this.state.productPrice * this.state.countAmt / 10).toFixed(2)}</Text>*/}
                {/*</View>*/}
              {/*</View>*/}
            </View>
          </View>
        </Content>
        <Footer style={{borderTopWidth: 0}}>
          <View style={{flexDirection: "row", justifyContent: "space-between"}}>
            <View style={{width: "60%", height: "100%", backgroundColor: "#333", paddingTop: 5, paddingLeft: 10}}>
              <View style={{flexDirection: "row", justifyContent: "flex-start", alignItems: "center"}}>
                <Text style={styles.fontWhite}>合计: </Text>
                <Text style={{
                  color: "#D0B17D",
                  fontSize: 22
                }}>{(this.state.productPrice * this.state.countAmt).toFixed(2)}积分</Text>
              </View>
              {/*<Text style={{color: "#aaa", fontSize: 13}}>已优惠￥20</Text>*/}
            </View>
            <Button full style={styles.buttonFull}>
              <Text style={{color: "#000", fontSize: 20, fontWeight: "bold"}} onPress={this.submitOrder}>立刻下单</Text>
            </Button>
          </View>
        </Footer>
      </Container>
    );
  }
}

export default FixedLabel;
