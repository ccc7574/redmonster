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
import {View, } from "react-native";
import s from "./styles";
import fs from "../footer/styles";


class WareHouse extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tab1: false,
      tab2: true,
      tab3: false,
      tab4: false,
      data: [],
      showBtnRow: false,
    };
  }

  componentWillMount () {

  }

  handleUse = ()=> {

  }

  toggleBtns = (index)=> {
    this.setState({
      showBtnRow: !this.state.showBtnRow,
    })
  }

  renderRow = (item)=> {
    let { showBtnRow } = this.state;
    return <View>
      <View style={s.listRow}>
        <Text style={[s.listCell, s.fontGrey]}>
          {item[0]}
        </Text>
        <Text style={[s.listCell, s.fontGrey]}>
          {item[1]}
        </Text>
        <Text style={[s.listCell, s.fontGrey]}>
          234.88
        </Text>
        <Text style={[s.listCell, s.fontGrey]}>
          654.32
        </Text>
        <Text style={[s.listCell, s.fontRed]}>
          411.00
        </Text>
        <Button transparent onPress={this.toggleBtns}>
          <View style={{paddingRight:10}}><Image style={s.upIcon} source={require('../../../assets/warehouse/down.png')}/></View>
        </Button>
      </View>
      { showBtnRow &&
      <View style={s.btnsRow}>
        <View style={s.btnsWrapper}>
          <Button block bordered onPress={this.showModal} style={s.btn}>
            <Text style={s.btnTxt}>兑换</Text>
          </Button>
          <Button block bordered onPress={this.showModalSell} style={s.btn}>
            <Text style={s.btnTxt}>卖出</Text>
          </Button>
          <Button block bordered onPress={() => this.props.navigation.navigate("PickUp")} style={s.btn}>
            <Text style={s.btnTxt}>提货</Text>
          </Button>
        </View>
      </View>}
    </View>
  }


  render() {
    const { data, showBtnRow } = this.state;
    return (
      <Container style={s.container}>
        <Header style={s.firstHeader}>
          <Left/>
          <Body style={s.headerB}>
          <Button block onPress={() => this.props.navigation.navigate("WareHouse")} style={s.pfButton}>
            <Text style={s.pfButtonTxt}>批发仓</Text>
          </Button>
          <Button block bordered onPress={() => this.props.navigation.navigate("PickHouse")} style={s.thButton}>
            <Text style={s.thButtonTxt}>提货仓</Text>
          </Button>
          </Body>
          <Right/>
        </Header>

        <Content style={s.wrapper}>
          <View style={s.upper}>
            <Text style={s.upperRowOne}>消费积分</Text>
            <View style={s.upperRowTwo}>
              <Text style={s.upperRowTwoTxt}>2000</Text>
              <Button block bordered onPress={this.handleUse} style={s.upperRowTwoBtn}>
                <Text style={s.upperRowTwoBtnTxt}>消费</Text>
              </Button>
            </View>
          </View>
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
                <Image style={fs.footerImage} source={require('../../../assets/home/storage-active.png')}/>
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
