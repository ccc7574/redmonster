import React, {Component} from "react";
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
  Footer,
  FooterTab,
} from "native-base";
import { Image } from "react-native";
import {View, Modal} from "react-native";
import s from "./styles";
import fs from "../footer/styles";
import styles from "../homeScreen/styles";

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
      countAmt: 3,
      countAmtSell: 4,
      modalVisible: false,
      modalVisibleSell: false
    };
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

  handleAddSell = () => {
    let {countAmtSell} = this.state;
    this.setState({
      countAmtSell: countAmtSell + 1
    });
  };

  handleMinusSell = () => {
    let {countAmtSell} = this.state;
    countAmtSell = countAmtSell - 1;
    if (countAmtSell < 1) countAmtSell = 1;
    this.setState({
      countAmtSell
    });
  };

  showModal = () => {
    this.setState({
      modalVisible: true
    });
  };

  showModalSell = () => {
    this.setState({
      modalVisibleSell: true
    });
  };

  closeModal = () => {
    this.setState({
      modalVisible: false,
      modalVisibleSell: false,
    });
  };

  render() {
    return (
      <Container style={s.container}>
        <Header style={s.firstHeader}>
          <Left>
            <Button transparent onPress={() => this.props.navigation.navigate("Home")}>
              <Icon name="arrow-back"/>
            </Button>
          </Left>
          <Body style={s.headerB}>
          <Button block bordered onPress={() => this.props.navigation.navigate("WareHouse")} style={s.pfButton}>
            <Text style={s.pfButtonTxt}>批发仓</Text>
          </Button>
          <Button block onPress={() => this.props.navigation.navigate("PickHouse")} style={s.thButton}>
            <Text style={s.thButtonTxt}>提货仓</Text>
          </Button>
          </Body>
          <Right/>
        </Header>

        <Content style={s.content}>
          <View style={s.topSec}>
            <View style={s.flexBetween}>
              <View style={s.flexItem}>
                <View style={s.alignCenter}>
                  <Text style={[s.fontNormal, s.fontGrey]}>批发积分</Text>
                  <Button style={s.goldBtn}>
                    <Text style={s.fontSmall}>去使用</Text>
                  </Button>
                </View>
                <Text style={[s.amountFont, s.fontGold]}>2838</Text>
              </View>
              <View style={s.flexItem}>
                <Text style={[s.fontNormal, s.fontGrey]}>总盈利(元)</Text>
                <Text style={[s.amountFont, s.fontGold]}>645.78</Text>
              </View>
            </View>
            <View style={s.rowSection2}>
              <View style={s.flexItem}>
                <Text style={[s.fontNormal, s.fontGrey]}>总资产(元)</Text>
                <Text style={[s.amountFont, s.fontWhite]}>1445.78</Text>
              </View>
              <View style={s.flexItem}>
                <Text style={[s.fontNormal, s.fontGrey]}>可用现金(元)</Text>
                <Text style={[s.amountFont, s.fontWhite]}>445.78</Text>
              </View>
            </View>
          </View>
          <List
            style={s.listTable}
            dataArray={datas}
            renderRow={data => (
              <View style={s.listItem}>
                {data && data.map((item, key) => (
                  <Text style={[s.listCell, s.fontWhite]} key={key}>
                    {item}
                  </Text>
                ))}
              </View>
            )}
          />
          <Button
            block
            style={[s.sellBtn, s.pickBtn]}
            onPress={() => this.props.navigation.navigate("PickUp")}
          >
            <Text style={[s.fontBlack, s.btnText]}>提货</Text>
          </Button>
          <Button
            block
            style={s.sellBtn}
            onPress={this.showModalSell}
          >
            <Text style={[s.fontGold, s.btnText]}>卖出</Text>
          </Button>
          <Button
            block
            style={s.sellBtn}
            onPress={this.showModal}
          >
            <Text style={[s.fontGold, s.btnText]}>兑换</Text>
          </Button>
        </Content>

        <Modal
          animationType="fade"
          transparent={true}
          visible={this.state.modalVisible}
          onRequestClose={this.closeModal}
        >
          <View style={[s.modalContainer, s.modalBackgroundStyle]}>
            <View style={s.innerContainer}>
              <View style={s.modalContentBox}>
                <Text style={s.modalHeader}>兑换申请</Text>
                <Text style={s.modalContent}>精品普洱茶饼(6年)</Text>
                <View style={s.countSec}>
                  <Button small style={{backgroundColor: "#4A4A4A"}} onPress={this.handleMinus}>
                    <Text style={{fontSize: 19}}>-</Text>
                  </Button>
                  <Text style={{paddingLeft: 14, paddingRight: 14, color: "#aaa", fontSize: 18}}>
                    {this.state.countAmt}
                  </Text>
                  <Button small style={{backgroundColor: "#D0B17D"}} onPress={this.handleAdd}>
                    <Text style={{ fontSize: 19}}>+</Text>
                  </Button>
                </View>
                <View>
                  <Text style={s.modalTips}>批发积分用来配合下期主推产品</Text>
                  <Text style={s.modalTips}>积分=买入价²/发行价</Text>
                </View>
              </View>
              <View style={s.modalFoot}>
                <Button style={[s.footBtn, s.borderRight]} onPress={this.closeModal}>
                  <Text style={s.cancelBtn}>取消</Text>
                </Button>
                <Button style={s.footBtn} onPress={this.closeModal}>
                  <Text style={s.confirmBtn}>确定</Text>
                </Button>
              </View>
            </View>
          </View>
        </Modal>

        <Modal
          animationType="fade"
          transparent={true}
          visible={this.state.modalVisibleSell}
          onRequestClose={this.closeModal}
        >
          <View style={[s.modalContainer, s.modalBackgroundStyle]}>
            <View style={s.innerContainer}>
              <View style={s.modalContentBox}>
                <Text style={s.modalHeader}>卖出申请</Text>
                <Text style={s.modalContent}>精品普洱茶饼(6年)</Text>
                <View style={s.countSec}>
                  <Button small style={{backgroundColor: "#4A4A4A"}} onPress={this.handleMinusSell}>
                    <Text style={{color: "#aaa", fontSize: 19}}>-</Text>
                  </Button>
                  <Text style={{paddingLeft: 14, paddingRight: 14, color: "#aaa", fontSize: 18}}>
                    {this.state.countAmtSell}
                  </Text>
                  <Button small style={{backgroundColor: "#D0B17D"}} onPress={this.handleAddSell}>
                    <Text style={{color: "#333", fontSize: 19}}>+</Text>
                  </Button>
                </View>
                <View>
                  <Text style={s.modalTips}>批发积分用来配合下期主推产品</Text>
                  <Text style={s.modalTips}>积分=买入价²/发行价</Text>
                </View>
              </View>
              <View style={s.modalFoot}>
                <Button style={[s.footBtn, s.borderRight]} onPress={this.closeModal}>
                  <Text style={s.cancelBtn}>取消</Text>
                </Button>
                <Button style={s.footBtn} onPress={this.closeModal}>
                  <Text style={s.confirmBtn}>确定</Text>
                </Button>
              </View>
            </View>
          </View>
        </Modal>

        <Footer style={fs.footerTab}>
          <FooterTab style={fs.footerTab}>
            <Button style={fs.footerButton}
                    onPress={() => this.props.navigation.navigate("Settings")}
                    vertical
            >
              <View>
                <Image style={fs.footerImageHL} source={require('../../../assets/home/hl-active.png')} />
                <Text style={fs.footerText}>红炉</Text>
              </View>
            </Button>
            <Button vertical style={fs.footerButton}
                    onPress={() => this.props.navigation.navigate("WareHouse")}>
              <View>
                <Image style={fs.footerImage} source={require('../../../assets/home/storage.png')} />
                <Text style={fs.footerText}>仓库</Text>
              </View>
            </Button>
            <Button style={fs.footerButton}
                    active={this.state.tab3}
                    onPress={() => this.props.navigation.navigate("History")}
                    vertical
            >
              <View>
                <Image style={fs.footerImage} source={require('../../../assets/home/team.png')} />
                <Text style={fs.footerText}>团队</Text>
              </View>
            </Button>
            <Button style={fs.footerButton}
                    active={this.state.tab4}
                    onPress={() => this.props.navigation.navigate("Coupon")}
                    vertical
            >
              <View>
                <Image style={fs.footerImage} source={require('../../../assets/home/mine.png')} />
                <Text style={fs.footerText}>我的</Text>
              </View>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}

export default WareHouse;
