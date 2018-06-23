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
import {Image} from "react-native";
import {View, Modal} from "react-native";
import s from "./styles";
import fs from "../footer/styles";

const datas = [
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
      modalVisibleSell: false,
      showBtnRow: [],
    };
  }

  componentWillMount () {
    datas.forEach(()=> {
      this.state.showBtnRow.push(false)
    })
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

  toggleBtns = (index)=> {
    this.state.showBtnRow[index] = true;
    this.setState({
      toggle: true,
    })
  }

  renderRow = (item)=> {
   return <View style={s.listRow}>
     {/*<Text style={[s.listCell, s.fontGrey]}>*/}
       {/*{item[0]}*/}
     {/*</Text>*/}
     {/*<Text style={[s.listCell, s.fontGrey]}>*/}
       {/*1*/}
     {/*</Text>*/}
     {/*<Text style={[s.listCell, s.fontGrey]}>*/}
       {/*234.88*/}
     {/*</Text>*/}
     {/*<Text style={[s.listCell, s.fontGrey]}>*/}
       {/*654.32*/}
     {/*</Text>*/}
     {/*<Text style={[s.listCell, s.fontGrey]}>*/}
       {/*411.00*/}
     {/*</Text>*/}
     {/*<Button transparent onPress={() => this.toggleBtns}>*/}
       {/*<View style={{paddingRight:10}}><Image style={s.upIcon} source={require('../../../assets/warehouse/down.png')}/></View>*/}
     {/*</Button>*/}
     <Text>22222</Text>
   </View>
  }

  render() {
    const { showBtnRow } = this.state;
    return (
      <Container style={s.container}>
        <Header style={s.firstHeader}>
          <Left/>
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
                <Text style={[s.font13, s.fontGrey]}>可用余额(元)</Text>
                <Text style={[s.amountFont, s.fontGold]}>455.78</Text>
              </View>
              <View style={s.flexItem}>
                <View style={s.alignCenter}>
                  <Text style={[s.font13, s.fontGrey]}>批发积分</Text>
                  <Button bordered style={s.goldBtn}>
                    <Text style={s.font9}>去使用</Text>
                  </Button>
                </View>
                <Text style={[s.amountFont, s.fontGold]}>645.78</Text>
              </View>
            </View>
            <View style={s.rowSection2}>
              <View style={s.flexItem}>
                <Text style={[s.font13, s.fontGrey]}>商品总值(元)</Text>
                <Text style={[s.amountFont, s.fontGold]}>1445.78</Text>
              </View>
              <View style={s.flexItem}>
                <Text style={[s.font13, s.fontGrey]}>总利润(元)</Text>
                <Text style={[s.amountFont, s.fontRed]}>445.78</Text>
              </View>
            </View>
          </View>
          <View style={s.listHeader}>
            <Text style={[s.headerCell, s.fontGrey]}>
              商品
            </Text>
            <Text style={[s.headerCell, s.fontGrey]}>
              数量
            </Text>
            <Text style={[s.headerCell, s.fontGrey]}>
              批发均价
            </Text>
            <Text style={[s.headerCell, s.fontGrey]}>
              现价
            </Text>
            <Text style={[s.headerCell, s.fontGrey]}>
              利润
            </Text>
          </View>

          {datas.forEach((item, key)=> {
            return this.renderRow(item);
          })}



          {/*<View style={s.listTable}>*/}
            {/*{datas.forEach((item, key)=> {*/}
                {/*datas[key].forEach((itm, idx)=> (*/}
                  {/*<Text style={[s.listCell, s.fontGrey]} key={idx}>*/}
                    {/*{itm}*/}
                  {/*</Text>*/}
                {/*));*/}
              {/*<Button transparent onPress={(key) => this.toggleBtns(key)}>*/}
                {/*<View style={{paddingRight:10}}><Image style={s.upIcon} source={require('../../../assets/warehouse/down.png')}/></View>*/}
              {/*</Button>*/}
              {/*{ showBtnRow[key] &&*/}
              {/*<View style={s.btnsRow}>*/}
                {/*<View style={s.btnsWrapper}>*/}
                  {/*<Button block bordered onPress={this.showModal} style={s.btn}>*/}
                    {/*<Text style={s.btnTxt}>兑换</Text>*/}
                  {/*</Button>*/}
                  {/*<Button block bordered onPress={this.showModalSell} style={s.btn}>*/}
                    {/*<Text style={s.btnTxt}>卖出</Text>*/}
                  {/*</Button>*/}
                  {/*<Button block bordered onPress={() => this.props.navigation.navigate("PickUp")} style={s.btn}>*/}
                    {/*<Text style={s.btnTxt}>提货</Text>*/}
                  {/*</Button>*/}
                {/*</View>*/}
              {/*</View>}*/}
                {/**/}
            {/*})}*/}
          {/*</View>*/}

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
                    <Text style={{fontSize: 19}}>+</Text>
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
                <Image style={fs.footerImage} source={require('../../../assets/home/storage-active.png')}/>
                <Text style={fs.footerText}>仓库</Text>
              </View>
            </Button>
            <Button style={fs.footerButton}
                    active={this.state.tab3}
                    onPress={() => this.props.navigation.navigate("History")}
                    vertical
            >
              <View style={fs.footerView}>
                <Image style={fs.footerImage} source={require('../../../assets/home/team.png')}/>
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

export default WareHouse;
