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
import {View, Modal, Button as NativeBtn} from "react-native";
import s from "./styles";

const datas = [
  ["商品", "数量", "买入价"],
  ["普洱茶叶", "2", "234"],
  ["产品1号", "2", "211"],
  ["产品2号", "1", "242"]
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

  closeModal = () => {
    this.setState({
      modalVisible: false,
      modalVisibleSell: false,
    });
  };

  render() {
    return (
      <Container style={s.container}>
        <Header>
          <Left>
            <Button transparent onPress={() => this.props.navigation.navigate("Home")}>
              <Icon name="arrow-back"/>
            </Button>
          </Left>
          <Body style={s.headerB}>
          <Button small onPress={() => this.props.navigation.navigate("WareHouse")}>
            <Text>批发仓</Text>
          </Button>
          <Button small onPress={() => this.props.navigation.navigate("PickHouse")}>
            <Text>提货仓</Text>
          </Button>
          </Body>
          <Right/>
        </Header>

        <Content style={s.content}>
          <View style={s.topSec}>
            <Text style={[s.fontNormal, s.fontGrey]}>消费积分</Text>
            <View style={s.flexBetween}>
              <Text style={[s.fontBig, s.fontGold]}>2000</Text>
              <Button samll style={s.goldBtn}>
                <Text style={[s.fontGold, s.consume]}>消费</Text>
              </Button>
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
        </Modal>

        <Modal
          animationType="fade"
          transparent={true}
          visible={this.state.modalVisibleSell}
          onRequestClose={this.closeModal}
        >

        </Modal>

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
              <Icon active={this.state.tab4} name="contact"/>
              <Text>我的</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}

export default WareHouse;
