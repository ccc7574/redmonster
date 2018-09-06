import React, {Component} from "react";
import {
  Container,
  Header,
  Content,
  Button,
  Body,
  Left,
  Right,
  Text,
  Footer,
  FooterTab,
} from "native-base";
import {Alert, AsyncStorage, Image} from "react-native";
import {View, Modal} from "react-native";
import s from "./styles";
import fs from "../footer/styles";

const {serverAPI} = require('../utils');
const axios = require('axios');

class WareHouse extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tab1: false,
      tab2: true,
      tab3: false,
      tab4: false,
      data: [],
      countAmt: 3,
      countAmtSell: 4,
      modalVisible: false,
      modalVisibleSell: false,
      showBtnRow: false,
      user:{},
      totalPrice:0
    };
  }

  componentWillMount() {
    AsyncStorage.getItem("user_status").then((value) => {
      const userInfo = value && JSON.parse(value) || {};
      const { userId } = userInfo && userInfo || null;

      userId && axios.get(`${serverAPI}/rm/graphql`, {
        params: {
          query: `{ orderQueryWhere(userId:"${userId}",type:0) {dealPrice dealAmount type productName} }`
        }
      }).then((response) => {
        let orderArr = response.data.data.orderQueryWhere;
        this.setState({data: orderArr})
        let item = orderArr[0];
        this.setState({totalPrice:(item.dealAmount*item.dealPrice).toFixed(2)})
      }).catch(function (error) {
        console.log(error);
      });

      userId && axios.get(`${serverAPI}/rm/graphql`, {
        params: {
          query: `{ UserQueryById(userId:"${userId}") {phone balance} }`
        }
      }).then((response) => {
        let user = response.data.data.UserQueryById;
        this.setState({user});
      }).catch(function (error) {
        console.log(error);
      });

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

  toggleBtns = (index) => {
    this.setState({
      showBtnRow: !this.state.showBtnRow,
    })
  }

  renderRow = () => {
    let {showBtnRow, data} = this.state;
    if(data.length>0){
      for (let i = 0; i < data.length; i++) {
        let item = data[i];
        if (item) {
          return <View>
            <View style={s.listRow}>
              <Text style={[s.listCell, s.fontGrey]} onPress={this.toggleBtns}>
                {item.productName}
              </Text>
              <Text style={[s.listCell, s.fontGrey]} onPress={this.toggleBtns}>
                {item.dealAmount}
              </Text>
              <Text style={[s.listCell, s.fontGrey]} onPress={this.toggleBtns}>
                {item.dealPrice}
              </Text>
              <Text style={[s.listCell, s.fontGrey]} onPress={this.toggleBtns}>
                972
              </Text>
              <Text style={[s.listCell, s.fontRed]} onPress={this.toggleBtns}>
                200.00
              </Text>
              <Button transparent onPress={this.toggleBtns}>
                <View style={{paddingRight: 10}}><Image style={s.upIcon}
                                                        source={require('../../../assets/warehouse/down.png')}/></View>
              </Button>
            </View>
            {showBtnRow &&
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
      }
    }
  }


  render() {
    const {data, showBtnRow} = this.state;
    return (
      <Container style={s.container}>
        <Header style={s.firstHeader}>
          <Left/>
          <Body style={s.headerB}>
          <Button block bordered onPress={() => this.props.navigation.navigate("WareHouse")} style={s.thButton}>
            <Text style={s.thButtonTxt}>批发仓</Text>
          </Button>
          <Button block bordered onPress={() => this.props.navigation.navigate("PickHouse")} style={s.pfButton}>
            <Text style={s.pfButtonTxt}>提货仓</Text>
          </Button>
          </Body>
          <Right/>
        </Header>

        <Content style={s.content}>
          <View style={s.topSec}>
            <View style={s.flexBetween}>
              <View style={s.flexItem}>
                <Text style={[s.font13, s.fontGrey]}>可用余额(元)</Text>
                <Text style={[s.amountFont, s.fontGold]}>{this.state.user.balance}</Text>
              </View>
              <View style={s.flexItem}>
                <View style={s.alignCenter}>
                  <Text style={[s.font13, s.fontGrey]}>批发积分</Text>
                  <Button bordered style={s.goldBtn}>
                    <Text style={s.font9}>去使用</Text>
                  </Button>
                </View>
                <Text style={[s.amountFont, s.fontGold]}>400.00</Text>
              </View>
            </View>
            <View style={s.rowSection2}>
              <View style={s.flexItem}>
                <Text style={[s.font13, s.fontGrey]}>商品总值(元)</Text>
                <Text style={[s.amountFont, s.fontGold]}>{this.state.totalPrice}</Text>
              </View>
              <View style={s.flexItem}>
                <Text style={[s.font13, s.fontGrey]}>总利润(元)</Text>
                <Text style={[s.amountFont, s.fontRed]}>200.00</Text>
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

          {this.renderRow()}

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
                <Image style={fs.footerImageHL} source={{
                  uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAkCAYAAADLsGk3AAAABGdBTUEAALGPC/xhBQAABIpJREFUWAnVmVtoHFUYx7u3bnCXms2lmhY2UGGxPtjLWrUPkviiLxaf8lBRyFPU1AgSS7bkRi6SBJRUoz7ksVAU4pOPihgMRUT6EijS1FjTWrsu7RZDsM1mL/6+sLM9szOZ2cluupsDh/Od7/vO//z/Z87Mzpl1DQ4Ovu9yua7H4/EfZmdn/9uzRens7KwLh8Mv53K5w2NjY9Ok5dTU3t7eJp/Pt0/1ObCzy8vLN+fm5jIOxuhSvW63+zCeT1taWpaGhoYuI2oFsg+0LPp12GHqcerT9C/Q6kTQ3xMMBodp3mOskEmTZ0mKPBd53nxNtra2PoOdoG6reJPJZF8oFLrLxGepEUGhNYAx8QbOqdXV1UlDEEc2m11gUYKMDZN7BFejWZ7ik8VYJP8q+TcZe1+JOTYLjPv7+5/3eDyzAAuJ4rII0S621C/FAbM+WAfBOktMtm1hDi0X4leoZxYWFi7Nz8+nNX85rW6SWCx2yO/3/wzgfgX0zvr6+snJycnfFV9J5vDwsGC9qCYjQK7Eq6Ojo9+r/nJttwoA2T/of6f6mPfH7YjIY5iJT21sbKyoc1TC1gkRQIjfVoHZGf+ofSc2WLorrow1zKvEtmXaAlqQ2daEOzXIVkg5E5vd6OXgWY3dUSGP8mruqBBWMGu1ipWM7bSQSnK1xJJXhLJKd3d3sKmp6RQgdyr92+CEWClCDNtDyDc2Nh7jZj5FfZ0JI/zyn6Ot6I9cRYVANMQb8hFu3IPygkn/OewTtE8pEyXo/6r0H7lpe0UgfRqSpxHh0djR3zSJ/Yv9VSaT+Xh8fHxZi1ejtRUC0YIAjSACruO/yHa6gIBrmr+ara0QlRwCrlHPr62tfT09PZ1UY9W2nQj5kpe9oYmJibvVJm02f6lCzo+MjHxgBlArvlJ+EP/kFCnH2JoutkK4Jy7NzMys1rQKyNkK4el0r9ZFCD/be4QrstXhqCb09fT0+L1eb8BWSE2wtSBRX1//LrvmkO3WssCohRAvHO632DV/72ohAwMDr7Cax7kiV3atEO6NfXw7m0JINp1OrxiEoE6+OxVKcb8QqKLR0dHhaWho+AIKz1KTqVQqbnazy7feQmH/+QsdhwaLYHjiiY+V1C2WE9j8Qe4zxryZHxfnM+49gxCIy4FJxT6qdkq1+/r6HgcrWoQlw/fiO0Z7tVQsLY9z0UuMnaKe1Hy0D/gXIb3JuKury9fc3Pwkz+N3CMSohS0HmRwDP2Effr60tHSbT/8pBURntre3e6PRaH0gEIgSOMe4Nl3Cw84NzjBvJxKJn6z+ymAL7Y1EIk+A8wJPpzcY/hq27yHM5gfFyxyxT7j4PvsRXDsIHiApoCapNjn3id/C9y0vkL1qTGxWK0a8E3M/bUh8dgXMFc40H3Km+UbNlQVpa2u7iE/+yjhAfUyNF9mL8DnqBUwOTikmlxOe4XyuDSLuzucaDlqSQ9xDzZDzF/UGtuV9QI7sBvl/RrePtflo68hZB0e+H2/Ji5zfZIyAuLmEW4FJjq6wtYSgGbAjHA0UPMEyE10SngUfbYrd1f4PlXyQ75KuLMgAAAAASUVORK5CYII=',
                  cache: 'only-if-cached'
                }}/>
                <Text style={fs.footerText}>红炉</Text>
              </View>
            </Button>
            <Button vertical style={fs.footerButton}
                    onPress={() => this.props.navigation.navigate("WareHouse")}>
              <View style={fs.footerView}>
                <Image style={fs.footerImage}
                       source={{uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsCAYAAAAehFoBAAAABGdBTUEAALGPC/xhBQAABStJREFUWAntWV1sVEUUnjN3d7u1xXapURtjMDH2xQdprUANakjUEI0uFFkS4k8xpiYaSupPfwgYiqatjbWmGBLgQQKa6ELpshp40MgL0UpquyT64oN/0WAUbKuUbuneGb+5u7Nhd+/e7lZWabKTbefeM+fnmzP3zjlnLmOLrNF/hffsoVfKZsq4z8NMw8lmzJBi+nJ0Yk1g70U7voIDHnl/6/Wl5eXtkliAEd1IElcOTRKBQZ6XUg5fmp3tvjcw8OeV7I7CVzIu5PpU8IVyn7diiBg9vBB5ydhpaV56rHb9O5Na3qUvCtH7SiqaE2CjUopuYdJn8HCMuLB1lBRcCrcwuDTu54x2ErHVxL3bgK1L4ysY4F27GIeRRsuQFPuW+3tf10Zz6EcixzuXYLI7JOPrRvc1d9c/v39OySmlBWkPLGvyENHSuHI+kq8RyYQlg6Woit5c6dXyBQOsDSy0J+K2j801CzjbRIuAs3nmatGLHr5ansymp+hhO88gyiHK5teyyRTMw3+UTQskMHGgkjz5wQW34G4lg0xILJkSQssXDHAgcOQyY/SDZcigjQivFgBteJ4ecYNtUjzI3H4c/v6tGc1vG0304L/tx8Ptfs6MkNIDZ3+u/oAAE3FoRG6S7D6E9bWKS0jxZK2/9wMtUVDAykgk3NkFIzvhq7xt4TnuD433tiGRSj4SeSvRM82nHwt1PMg5bWaS3YYMzLHikEyaAPUzXtNg7bqeE/nYKfIWPbAYPJDy0gWDG40az+1PME7rAf4m1K+O+zRekBje/u+EKQ/VNfZ86TThsWOdDdygp7HB1eDFcyzNJEmBF/Q3bCzDobHuo7a7xKn3mry+qur9UPaUk+EsY6rIfBV127t24+Oh7S9yLvsxuRK7cScanHJ44sK55jVbDkYVX3KmlUurW+JgEU4lG8IsR3GV3P/slGIFSrEaj2KZVhDj/V+H20bvfrwvpX4DbRUq5QGAdSNOn2FSfILeMm6nU9GwY3PorkeQ2aAwAds3IPepMQvwF8HWUpTVzyoCQA4s9/e8rK5zaaePtw2UM+NTRKaVBjOaIJMC2JCuLQDgRpT76iIzH1rt7/sbPDm1SLjjbQBuVdiAcQ8OVWasZ5Qb7iokGdVKC8JiMCdtCSYFAGA+tm4lq8mUlXcoGvSH8wGrZEjQRwnZ6usYsypwC7DLRIlqHSHhlAM/xZRPgwdmFb9aynQ5TeNinhwiXRD3cSwAhl+MeawImWkgy6mMjb4kSajjsHlaLjzpKuxOiDIApwtda/dFwIVekaKHix5O80DGI6EOldN4/rdbOywa8BRQImQSGYQYnmdDibvSEpH0e4ZogobgsiJjbB6Cwdk9ChO+e/wF1inFntzwz4a3H8D9cwB+HpHlNSRAY0gbhd3mrQTV7KGqhLmoEXG3BbmEgQo3gAr3iBrXLRLq2EScf4jwbSLuDyJ8HUPgmnXSizQU82N1MLAbAG9AgnPgLn9Ps9KZzNZm5mJdXpfRAMN3YlJ71VRQOIJFL4KGEO9TSkmwqTRwcnxkOJWLsYnIyJCvruEw9CJtpVZYbFVac9Gr+DDRb6Mxc7clgn9x2cTdmdBLt3rIuwOeWysZVcbzC82a2WM1VPr5K8AePPfT9OAjLXusnCKd88Tg1pLqZeXbYOwZjN2C3t4LCcHEp69J6D8ZnTPfWLWh7xetMwWwJo4G2ytwXcGNmO245uOmiE1MT1zQybWmZ+utIqHMV4XvRMmVteMVpgtY2VR94E3rubXjWTS0fwBaycKPwVAg/QAAAABJRU5ErkJggg=='}}/>
                <Text style={fs.footerText}>仓库</Text>
              </View>
            </Button>
            <Button style={fs.footerButton}
                    active={this.state.tab3}
                    onPress={() => this.props.navigation.navigate("Team")}
                    vertical
            >
              <View style={fs.footerView}>
                <Image style={fs.footerImage}
                       source={{uri: 'data:image/png;base64,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'}}/>
                <Text style={fs.footerText}>客户</Text>
              </View>
            </Button>
            <Button style={fs.footerButton}
                    active={this.state.tab4}
                    onPress={async () => {
                      let userInfo = await AsyncStorage.getItem('user_status');
                      userInfo = userInfo && JSON.parse(userInfo);
                      if (userInfo && userInfo.status === 'logined') {
                        this.props.navigation.navigate("Mine")
                      } else {
                        this.props.navigation.navigate("Register")
                      }
                    }}
                    vertical
            >
              <View style={fs.footerView}>
                <Image style={fs.footerImage}
                       source={{uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAABGdBTUEAALGPC/xhBQAABhhJREFUWAnFmHtM1WUYx+Uq90CaYcoys4hKdBnhxMFKWct1WTpqWWzMii0KF3IZkOC4qrg5N3YoyYI/ymFkay2zm8ZFGENyrTlidcD+CGEmowRK7n2eH+fQjxP83t/hlLzbc37v5Xm+z/e9Pe/7Hrcl/0HKzs4O9PDwWOnp6RkicOPj4wNDQ0NXKioqrrsK77ZQgMTERO/IyMjHsX8O2YyscnNz8xC8qampCfI9ZFvJfzgwMPAZZEekzdm0IIL5+fnx7u7uZTgTYkJojI8V6ZMy5G7jsxbxljKpbWJi4s2SkpJvpovmf50mCLm9EChDlkKsC6liSj+1Wq3ddXV1o+JaRjciIuJOOvEEeilU3SOdQAqKi4sPmqdHZ51RhlweTkvFBmeWsbGxwgMHDvxmhJGenr4sKCgoH503bHpFhYWF+41s9G2mCRYUFCQyGrViPDk5mcFIHNUDqfLYv4pOBRge2Cdh/77KRtq1Ra1SzMrKCvP29j6F3i1IcVFRkVPTJPgNDQ3tcXFx4xDcimyOiYk52dzcrNzl7mKsSr6+vqnorELOd3R0aFOsspmrvampqZz6c0iYj4/Pnrl0HOuUBCXG0eMkDCdZd0X2jeAIZKZcX18/zvQWgTOB/q6cnBwtbhrZKgkytRsBWI1c6uvrq+frUurs7DwPwEU6vRLsh1VgSoIAPWgDqa+qqpJ451JiBmT0ZJolEkjnDZOSIGHlDkFgan40RHKuUcOyYxuZKgnSS18bgHLHGTnSt9HZQSnrsPXNs/JKgmgPiQVTrVzQs5ANCoycHUvDNlBdoiRIL7ttAOuNgJxpo7NRoq/DntdcSZDpaAdoCoRHMzMz/edFMtmQnJzsA1yCTf2CykxJsKen53tAOun1XQTsnSpAVXt4ePhTYEWiZ+3v7/9Opa8kWFNTc4MeHxcg1s7+vLw8uUotKOXm5oaCUSjGzEx1ZWWl62tQwEZHR9+FpISGNV5eXsdTUlL8pN6ZlJaWtpTAXIXNvYiVG/fbZuxNXRY41Efi4+M7AHyW6bk/MDBw/ZYtWxo5W7VwoXIklw1sqrHdge4onU06dOjQJZWdtJu+boky98Fkpugdsp44uYyUjIyM1JWXl89JNDU1NSA0NHQHxPYhd6Mvp8hr3IaOCZ6Z5BRBAYSkjOJRZIWUcfoz+a9ZUxf4yjtE0u3kH6ItgW/EdNWSq+jIPdLUPdBm49wI2o24fG4l/wHOzW6Ya5BNZuRO2zHMfp0aQXbwBp6WqRB7EgdhNifyDrkCgV7q/5A68nKxDaO8kq/94XSV/Oe8XyylpaXt5E0lUwQJ0Mv9/Pz2gfgyTuVslrvhWeRj8s2sw18c16Gsv+Dg4NW8lzezbp9Bbxsia1een+9BtLisrKyXvGFSEmQ6H4FUJSgSHmR0TvKEPMIotBkiOzSydjdCVB5OuxB3cLr4yob50kF1VtGQIKC7Aa3AQuLeT4DuXcg60nukw4/R4SPU3YfIISCYb+l19Pl546C8wiAnwdQbkNNMyU4e3hf1xgvJ83jqio6O/oiAvxai68DYToy9Tn3rXHhzEoScPDHleJP22sHBwRcPHz48MBfAQupaWlqGo6KiPuHhFI6fDUgCL77uxsbGHxzx/kWQnfoAC1uemHJz+aK3t/cFi8Xyl6Ohq+W2trYJSJ6B5DoIRiLbYmNjv+J0mrVxZl0W5Lxk6C04X4ZY+edgN++QP10lM5+9/KGEj1dYQnLOB4lv/omw3+A1s1kECQtJ1MYh4xjtMRMGNBQXfuSvE06Y1/EnD7JNAQEBL+nhZgjKZZRNkSGNKJ9iZ53RK/6feTafvPJOiA84pDOTQXZ/MwQJxNuplFh3gx170K5ws75MdTm+ZDmtCQkJedrud4YgFc/bKs8xtXKLvqmJqe5g5uxB285l+tGUkZFxK7soVhihVHtTmemc6XxvIpqskCZtBP39/SVgLkeGuD03ScNiJM70Fvz+zmCFsBa1V6RGEOZage/l1tbWXxeDnPjkwiG3IjmjZbP8Q5DyNUT+u/tW/oEShUVKk3A4i28Jc/3CQRtBbrkn2EXRw8PDeYtEbMYtJ1ehcOFfsGqp/BuKMG+x7J1tsgAAAABJRU5ErkJggg=='}}/>
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
