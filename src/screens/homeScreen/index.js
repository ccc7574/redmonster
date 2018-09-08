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
  Text,
  View,
  Footer,
  FooterTab,
  Icon
} from "native-base";
import {Dimensions, Image, TouchableHighlight,AsyncStorage} from "react-native";
import {sliderWidth, itemWidth} from './SliderEntry.style';
import Carousel from "react-native-snap-carousel";
import styles from "./styles";

const {width: viewportWidth, height: viewportHeight} = Dimensions.get('window');
const SLIDER_1_FIRST_ITEM = 1;
import SliderEntry from './SliderEntry';
import fs from "../footer/styles";
const cardImage1 = require("../../../assets/tea1.png");

const ENTRIES1 = [
  {
    title: '五一放假通知',
    subtitle: '劳动节以及十一停牌放假通知: 劳动节放假时间为4月29日5月1日, 期间平台停运',
    illustration: "http://filewind.clobotics.cn/api/file/69c2f19da4534b981280b0c9694164f9"
  },
  {
    title: '春节放假通知',
    subtitle: '春节停牌放假通知: 劳动节放假时间为4月29日5月1日, 期间平台停运',
    illustration: 'http://filewind.clobotics.cn/api/file/69c2f19da4534b981280b0c9694164f9'
  },
  {
    title: '国庆节放假通知',
    subtitle: '国庆节停牌放假通知: 劳动节放假时间为4月29日5月1日, 期间平台停运',
    illustration: 'http://filewind.clobotics.cn/api/file/69c2f19da4534b981280b0c9694164f9'
  }
];

const MoneyCell = ({moneyNum, moneyUnit}) => {
  return (
    <View style={styles.moneyItem}>
      <View style={styles.moneyItemBox}>
        <Text style={styles.moneyItemNum}>{moneyNum}</Text>
      </View>
      <Text style={styles.moneyItemUnit}>{moneyUnit}</Text>
    </View>
  );
};

class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      switchFlag: false,
      checkbox: true,
      slider1ActiveSlide: SLIDER_1_FIRST_ITEM,
      tab1: true,
      tab2: false,
      tab3: false,
      tab4: false,
    };
  }

  _renderItemWithParallax({item, index}, parallaxProps) {
    return (
      <SliderEntry
        data={item}
        even={(index + 1) % 2 === 0}
        parallax={true}
        parallaxProps={parallaxProps}
      />
    );
  }

  accessUserInfo = (props) =>{
    props.navigation.navigate("Register")
  }

  renderGoodsDiv = () => {
    return (
      <View style={styles.mb}>
        <View style={styles.productContent}>
          <View style={styles.productImageContainer}>
            <Image style={styles.productImage} source={cardImage1}/>
          </View>
          <View style={{paddingLeft: 14, paddingTop: 5, width: '95%'}}>
            <View>
              <Text style={styles.productTitle}>精品普洱茶饼(6年）</Text>
            </View>
            <View style={{paddingTop: 15, flexDirection: "row"}}>
              <Text style={styles.productPrice}>当前价</Text>
              <Text style={styles.productPriceDetail}>922积分</Text>
            </View>
            <View style={styles.productBuy}>
              <Right>
                <Button block bordered onPress={() => this.props.navigation.navigate("Buy")} style={styles.buyButton}>
                  <Text style={styles.buyButtonTxt}>立即申购</Text>
                </Button>
              </Right>
            </View>
          </View>
        </View>
        <View style={styles.productDivider}/>
        <View style={styles.priceDiv}>
          <View><Text style={styles.nextHour}>实时价</Text></View>
          <View style={styles.priceDetails}>
            <View style={styles.moneyContainer}>
              <MoneyCell moneyNum={0} moneyUnit={"千"}/>
              <MoneyCell moneyNum={9} moneyUnit={"百"}/>
              <MoneyCell moneyNum={2} moneyUnit={"十"}/>
              <MoneyCell moneyNum={2} moneyUnit={"元"}/>
              <Text style={styles.point}>.</Text>
              <MoneyCell moneyNum={0} moneyUnit={"角"}/>
              <MoneyCell moneyNum={0} moneyUnit={"分"}/>
            </View>
            <View style={styles.priceIcon}>
              <TouchableHighlight onPress={() => this.props.navigation.navigate("History")}>
                <Icon name="arrow-forward" style={{color: "#666"}}/>
              </TouchableHighlight>
            </View>
          </View>
          <View/>
        </View>
      </View>
    );
  };

  renderPurchaseOrders = () => {
    return (
      <View style={{marginTop: 15}}>
        <Text style={styles.deadline}>优先排单截止时间</Text>
        <View style={styles.orderTitle}>
          <Text style={styles.majorProduct}>进货订单</Text>
          <Text style={styles.orderTime}>2018-06-02 17:30</Text>
        </View>

        <View style={styles.orderDetail}>
          <View style={styles.orderBoxTitle}>
            <View style={styles.orderBoxTitleLeft}>
              <Text style={styles.orderGoods}>精品普洱茶饼(6年)</Text>
              <Text style={styles.orderGoodsNum}> x6</Text>
            </View>
            <Text style={styles.cancelOrder}>取消排单</Text>
          </View>
          <View style={styles.orderPrice}>
            <Text style={styles.fontGrey}>当前价</Text>
            <Text style={styles.priceLeft}> ￥922.25</Text>
          </View>
          <View style={styles.orderBottom}>
            <Text style={styles.orderBTime}>2018/6/20 10:30:45</Text>
            <Text style={styles.orderStatus}>未成交</Text>
          </View>
        </View>

        <View style={styles.orderDetail}>
          <View style={styles.orderBoxTitle}>
            <View style={styles.orderBoxTitleLeft}>
              <Text style={styles.orderGoods}>精品普洱茶饼(6年)</Text>
              <Text style={styles.orderGoodsNum}> x6</Text>
            </View>
          </View>
          <Image style={styles.orderCompleteImg} source={require("../../../assets/home/order-complete.png")}/>
          <View style={styles.orderPrice}>
            <Text style={styles.fontGrey}>当前价</Text>
            <Text style={styles.priceLeft}> ￥478.08</Text>
          </View>
          <View style={styles.orderBottom}>
            <Text style={styles.orderBTime}>2018/6/08 15:30:45</Text>
            <View style={styles.orderStatusBox}>
              <Text style={styles.orderStatus}>已完成 (5/5)</Text>
              <Icon name="arrow-down" style={styles.statusIcon}/>
            </View>
          </View>
        </View>

        <Text style={styles.bottomTxt}>隐藏已完成申购</Text>
      </View>
    );
  };

  render() {
    return (
      <Container style={styles.container}>
        <Header style={styles.header}>
          <Left>

          </Left>
          <Body>
          <Title style={styles.iconStyle}>红炉</Title>
          </Body>
          <Right>
            <Image style={styles.headerIcon} source={require('../../../assets/home/message.png')}/>
          </Right>
        </Header>
        <Content>
          <View>
            <Carousel
              data={ENTRIES1}
              renderItem={this._renderItemWithParallax}
              sliderWidth={sliderWidth}
              itemWidth={itemWidth}
              hasParallaxImages={true}
              firstItem={SLIDER_1_FIRST_ITEM}
              inactiveSlideScale={0.94}
              inactiveSlideOpacity={0.7}
              containerCustomStyle={styles.slider}
              contentContainerCustomStyle={styles.sliderContentContainer}
              loop={true}
              loopClonesPerSide={2}
              autoplay={true}
              autoplayDelay={700}
              autoplayInterval={3000}
              onSnapToItem={(index) => this.setState({slider1ActiveSlide: index})}
            />

          </View>
          <View style={styles.majorProductStart}><Text style={styles.majorProduct}>主打商品</Text></View>
          {this.renderGoodsDiv()}
          {this.renderPurchaseOrders()}
        </Content>
        <Footer style={fs.footerTab}>
          <FooterTab style={fs.footerTab}>
            <Button style={fs.footerButton}
                    onPress={() => this.props.navigation.navigate("Home")}
                    vertical
            >
              <View style={fs.footerView}>
                <Image style={fs.footerImageHL}
                       source={{uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAkCAYAAADLsGk3AAAABGdBTUEAALGPC/xhBQAABPdJREFUWAndWV1sFFUUPmd2urvS0m3F2CoRCSbV9sHt9kfAxCgv+iIuqG2CwQRfwD9MCGpbH6QvujVoQPxJ5MWEiJrFn8KDDxhToyHV0Jq2CRhtKxZUCpY2UALt/szxG8q4Mzv7M9sfd+sku3PvPed+53z3nrl37hnu72x7gUg7FT038U3Dtv1XKM3V9eEWr6+sYp2iKNW1wdAeqIlZtefjnTeJp6jU3Oa0rCqkDUaHzzQ3H4o77ZOspwpzNbPrbbVy2a/9h9t6hWmERaYMRci9TLQC9ToivksTOoCyhYSuqxa7dzHz8yISZ6aYEGd2SmAJ3aCrAm38TvX2GtTP61izudSpycmWG0qXXmDil4ipSkcnoBuXUYKDURh8g+RKhyGz3Jm/F41KgLECen5ALLPIkytMgtEYwN8vGJczl13K1WSVXOqGn9T35cv3kMu1H4T8NgCRATi31b8h9KNNlqKhL7xjOXs8GBhG2JpG5bouBuWEFqfnLg50H1vX/m0sBUTOTf8S0Xse/7x1VZHK3QiRmw0kjNpYXLS19cGOIaPN6b3/8CvdmKE1Vn0RTfihQPD1r63tc6sp5u6Nj3X8hmk+am5joa7ZkNAxhLRU5CMclxGzjfkoW4jogEzKWTOwkJwz13Mr28NK7x/TyGY3N1y7thNAS/jZIQqjxQmRWXuK+fjPBmFBieAh+X8QwYqnzXo6c+y4sDOSozNzUVfn0lnv2xV+tsTnLV3PoozN996Qi2/ZiWAzSAbUnS91+wJ4UVqP5TmIZ7oKu3Ub9OZ1k0u2m6menQhL+U9ftPhZUZZjx6/GNtcAxxvxGN+hA+sLE0icx259PJOhhZZlJ0K8SXHxJpBwzTiTWIhA4CKofBLTYm82bNw9vNDOZsLPSiRBIAGDN9ZTmJmDEo0dCDy+ezAhyV8pKxGza1hOB0XT9l6NTH96b/OecbMs3+VciLw/HZNXVz/acSHfTqey74yIyF5/MLQjFUChtGUlggf696nJy7sKxeF0fjjZ2Y+t2fzOpXQAhdLuhMhEoTibyY+soYXOiY0jE1KeZF/t2+4pq1SLnRDJk4vOzN6ysuQZ1miVk9ByhpgHrfZ2UhTiJ2H6r0VNZGOg9UGQqGPSTixaIj98tB3pWUbCkLQYu0Zszwhey5HLtDzfeDMprCscbnJ5PcXvIfd3N5wbU2ORURsRcPCa3QYlj7meSzll8gHJZClCaniWl34WKvf69mGwN89AyGj070sTttBCQi5gtoHpqTXXnZZ7wi0+Eq636TO53aRabNh00jT0drbdd6PXdxQknjJUWHgKXxFi12Ko54OtRVpFSaWHPE9juloxKyaCSHESvSXRyLtD8dNnkfqPGCDJ9672B9SlVfVl6hK1HgcxnBj5/mSdmbqcRgRvi46Of5fpUwZCyL3SfVuFSp7VCvMTODo8jGNFkRVTev2PhBoZ30deE4WboHQrmBZblRI1vHPp2fI/8TuC7yM7E5KZUl9nWyuMbCEW5I25PFmeqo74GtE0ebFuQ+gzs1wfkPLA2oNoq8PAwi9aYpZbykiw44W2VkXqyYXRiUB5GMC287nRCXIFchcOttdPioZk5o5FQm+PIzT/ENZHHKVMF2ICKw6O/de+k9g0Yc8LgGl8qxmCj5n8+lnvzPqmUlPThH7OrpMnDwn62IBzxTGsIVR1LBtpp3jp/DHwF939H7+kjQ005MPkAAAAAElFTkSuQmCC',cache: 'only-if-cached'}}/>
                <Text style={fs.footerText}>红炉</Text>
              </View>
            </Button>
            <Button vertical style={fs.footerButton}
                    onPress={() => this.props.navigation.navigate("WareHouse")}>
              <View style={fs.footerView}>
                <Image style={fs.footerImage}
                       source={{uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsCAYAAAAehFoBAAAABGdBTUEAALGPC/xhBQAABLlJREFUWAntmV1oI1UUx5ukMdmudmtjlVJafFEoQh9k3XWh9klFWBb86i4IShXJQ6VKsLYPTVrSL2htTVEp2H0p9mVtrQVXFkHxoVjclcUnfdmHtRQLKn5lY0m6pom/M86Mk/TO5INN3ZVcuDl37vmfc/9z5s69505qam6x4joovv39/YfdbvedXq/XU2DMzO+U+fn5P1W4ihPu6+urb2xsHGTw09S7s9ms45gulysL7hdwa4lEYjIWi/1mJe5obAWW0+7t7b29qalpFdvHy7HH5st4PH5qbm7uD8O+1mhUQgYCgSB+hWyKiE1SP6edzmQyykAxZbLoPMguagRsZ319/WvIKFUrlSTs5vE+LaNA9L3R0dGxf4Ys6vfiyMjIHSDD+HgyGAxOLiws/CWW7qLMywD19PTchlmjmEL4YqkuDBtkoKGhwW/YV4ywMUC50nbalOvwv7K7aSNsF5AqYbvI3Kj+aoRvVCTt/BxIhPX8wI6Dsl92PZWiYoR3dnYyFqKyiZRUWIe9ugHNTMYwrhjhlZWV6+xS3+sDdbO9GgSMsZ2ky+PxnNEBmzMzM0kDXMlcQsY4Sz1JpE81Nzd/Ojw8/AXX10VhV7hJL9PhEfRP6BjxYUZYmTXZOSunnyQmCokIpEseC7tZkqaBAyUsNxkOhx8las/RvBfejicOSO6B22LaLo+Pj18Q+2qpRuD/FIGcN7e7u9vT3t7+LDf4FC/HPchC63QazBVekPfHxsa+cgpMJBI5wYv3Apj7qYWWU1nGfsTvGn4/pL1/WeNI429ra1uA6PMASi0pnL+B83dVhqy/r9A/i2+fSu/Ux6qxtLW1FVxcXEwJzrzT1tbWV4UsgCxyFXEZvXlnKqdgDhG1k+iOIWeHhoYuT0xM5Jzf6HsYfQyfstN9jc0nSG1wpF2RA+xRsM8IJ7h9C3BawBrhUCh0CMVL0oGMRaPR16VdTBkYGIj5/f7PsDvOdtqDTQ7h2traF+nzMvilVCr12PT0dILrogpP5i2AIeEGx3f4qJLU5iifjwJ0NosXWbCL8qaDdALn9UuZnzkFovdJB/LjUsjqNh+IFG51dXXaCVyLMB1uHMoLKCmdvEglFWx38SE2qpfU6HPMIWwGTONbOLnS6bS2QxrOTDwRzlk5TIVDA7IFbYrB5A+h4rKPcL7RzXZdJVzpJ1KNcDXCeRHYNyXYYpXH6zy7A7lUcTEIx1knE7JWUo6Wwea4bvOzwlbrw+8xha5Q10NCCNA1alzA5oLPYVFOpy9T5Q+RYeo3tFm71RuJ3D06H/mDfGWXxMmDzWkOjStcm4V84Ay6c+jkrPb23t7eR9juOvkFJ8nPg9RR2ndhexa/QXFqZmvJZDJKEnMC0APUearoa3CuSdWPVYfTpfX19bV8HH2rXV1dS/iTtDVEMhQSjNU238Z6jd/vSJqEuFbME+zGxsa1zs7O8zg6jKaJ6gIs+79TTUHkKrg3+WstvLy8rP0PoXnWfzY3NzMdHR0XfD6fTLkWsPIVSHC2fsHtov8J7DnIBkmaftDd/TsljA6Rg4ODRxBHiIY5Zax6Szu9vb39q5FcW/qVTTkktLS0BFCaT1YFJNGRFz8+NTWlzVsV5pbp+xtDhbvUgXRfogAAAABJRU5ErkJggg==',cache: 'only-if-cached'}}/>
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
                       source={{uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAsCAYAAAAjFjtnAAAABGdBTUEAALGPC/xhBQAACDpJREFUaAXVmQtM1VUcx+XyVOShFT0sJcWcPbWVmzSVHtO15bTMzbbWypUZqVGYgvJQEXlIQZm4qJllmRtzLXOuxzILKkjN7HETbRpDi9IEBFFBsM/3773ucrn///+K3FxnO5z/Ob/f+f2+v3N+53d+59Knz/+8BP1X+KdPnx4WHx8/MDw8PPLs2bNnKI0FBQVNF6s/oAYI9MiRI+8NCgp6GKBjAD6I73DaDvqNfNd0dnZ+Qn/T8uXLD/bEmIAZkJGRMTE4ODgbUImewADbTt8B+GCP8WN8v9nU1JRXUlLS6DFu+3nBBixevHgQwCYieSwgBtE6a2trM9etW3fKpc2RlZW1BFo6/RAAn6T9mHYr7S+4TgO0sJCQkOvoj6NOpT+CVuV7duTxnJycn8517f/6bcDChQtjIiIiFiDySWqch2j5c3xubu5hxhzZ2dmv0M4RHdAfUbMBtFt9X2Xu3LnRsbGxMx0ORyb0gfDXUSczZ48vfu8xvwzAHYaz6u8yeYwEoOAgq1bBau2n3bVs2bKPNczKp9IvcvHkMp7Fd6f6doWdvQMdG5k/DF5nW1tbUl5e3hG7ebYGyGXY7k8RdCO1EdA57e3tb+Xn5zd4Cl+0aNGtoaGhXzPWHwOLAf+CJ92f78zMzNvYCemKQ8YaZCTbzXNYMRBFWJTg1fAIfD2uoq192Ru8ZGBkGo3A72hubl6ssQstchvmS04fduIJDLrFToalASNGjJiMoCkIbe/o6HgKP6/0JRAXGwbfZPjOQs8tLi7Wwe1Rqa+vl6t+R41gNx63E2JlAPMdxhYCrpw4vcVMGHz3QOsP335WXy7Q41JWVtbOOsgInbVJHPJwK2GmBrCqQ5ioGI7bd5ZZCQG4cbjh+eZiVt+tA+Bf8X2GOjQmJuZa97iv1tQAmG8CmK79w42NjaZh0CXUUIKhNb6UXOjYyZMn/2TOMfT3Rf+VVvNNDcAtdEmpHFq1atXxc5+mfyNEQeEJU44LIBA4TsPepil897WaamoAlodqIqB09VsWeI1DSxtjyegnkZ3UyhvACR6Wi2JqALqUn+ggXaGkzEo3RhqJGLt2kxWfv7SwsLDByByA7mZC9x9W86wMqEGAssb4hISEoVZCWLFvRYf/LqUcVrz+0FiI++BTwldTXV3dMwNaWlqcCNmHkL7csNOsFJ8+fXobdB2668j3H7LitaPNnz8/EjmPiY8F2bJ9+3ZFI9NiugMKhwjY4Jr5LCs72ExKYWGhVmmj6ChflJqaerkZr914v3795iFD2anSlnfs+E0N0ET873WMUOJ2NZnoG8nJyf3NBMJbCO1vakJkZGTprFmzjCBgxu9rnGRwEroyRENviT+PHM9HRTeZlZWVrRMmTPgNoXpR3QCwMYmJiTsYP+rNXFFR0QTvYXgfpN4cFRU1bPTo0duqqqrc7wTvKV36gNe8txmMBvwXpBRzdu3aZRsBbbNRaSGpmsnBWsVnP6qi0waUbCUrreWsdLknAPIi9ALASPaP8C1paGjYyl2i2N6tpKWlJXBunocwixpC3cluTnW9L7rxew/4ZYAmAewRML3Jp4wwCuAEai/5zz2cGSPsigDvE/Cu4PMq9eHbQ/8zfFrZ5lEWQ+/i6xkbT70bllgX3wfcwskrV66sV9+fYmtAenr6ZUShZBQ9isAbPIUCQmF2HzsxjsfHP540GUx/DfP8Cas/Y1wx6fQ65vj1AHLrsjSAhO4BVqsIEIoKKn8D+nPaL1FYw3gD233IA3wQwB9gPBm+cbSRxqxzf04x1synzkQrVefoB+onra2t24qKiixvXPh8FvmczwKQhQBYDlE89QB+hbrezDd5kY3iUbOCOfe7BOptUEX9lHSgmqpg0ISMNu6NU72RtUqPzx0A/DKU6ZGtsgWFz/EKO3Cu2/0v/M8wmsccucsZVrqcunrv3r1V5eXlcrOAlW4GEHFm4zZrXBpfczqdqYAwMkNvFElJSSHjx48vBLiiiA5rNSucRvze7s3b074uReQ7cDHdMd1KFwNwg9s5sF/CpQtr7dKlS5+iNTtU+v3nNYRr9VVKiSBp3Mry814pKSkpsdHR0ZXoiOKsTcN9d3oLPn8T6+akvASDwH934sSJebRm4HU3ZLjBs/JZGPtsb4IXUO4HnSNhGMy7YCO/kOiV2KWcNyAuLm4ylCTqKdwgxSoquKKT+4zk8/NHThepvdTRj7+E6BmIO8RiDSNIlHmn9m4DcHvHHOllNTcRj4302BcO3QvwlkBTdNrMGTFyF1+8vTFGiHaCaSZVl+ZEfix2u6wh3jAA37+RXiJMHVT3Afapn8dGilYDvr/wy3mBjjICwQ5/RvOqC1D6ggULrnF99zEMYGv0E3g4g05C3w430bvVRIA/7Rov4FDVevMEqk+6ko/s38F5JZnxbLcetwuN1QDECrOQKTqHagY8V2DEQe6GtRr7r4pyLc7mape+x9wvPxmgp9twEQCmq91n0c+M+P50EeF/rzf+u+JTkcUgBrwPWS+/IUTMCWJ18MuXwuZAdWCoU+ur8C7Wr8ajMLID3//QF0+gx5TGoL9Cegirk9Q68H/9EyJKHSwzTaiweDQsEfAcPHLkiN7Ll6SAdZsU095peMXu3buPA2o9Y5t5nPxihgqem100J79fKpu8VGWPFINnCF4xMESvfqqRy9ggGuyiH7DhCyiZi+0woVw/pA3AjS53RyFbpWzZADHRNtoyB5CBtLwF8W3sQChYYvw2gAnGi4tJpgc9gLjPiyZHkwFHwdEOpia/DWDr0rB+Ul1d3Ybz0i7BR2lpaQvgp4AlibT910sAoXdV/gvSRrASDQAcLwAAAABJRU5ErkJggg==',cache: 'only-if-cached'}}/>
                <Text style={fs.footerText}>客户</Text>
              </View>
            </Button>
            <Button style={fs.footerButton}
                    active={this.state.tab4}
                    onPress={() => {
                      AsyncStorage.getItem("user_status").then((value) => {
                        let userInfo = JSON.parse(value);
                        if (userInfo && userInfo.status === 'logined') {
                          this.props.navigation.navigate("Mine");
                        } else {
                          this.props.navigation.navigate("Register");
                        }
                      }).then(res => {
                          //do something else
                        });
                    }}
                    vertical
            >
              <View style={fs.footerView}>
                <Image style={fs.footerImage}
                       source={{uri: 'data:image/png;base64,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',cache: 'only-if-cached'}}/>
                <Text style={fs.footerText}>我的</Text>
              </View>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}

export default HomeScreen;
