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
  Text,
  View,
  Footer,
  FooterTab,
  Card,
  CardItem,
} from "native-base";
import { Image } from "react-native";
import { StyleSheet, Dimensions, Platform } from 'react-native';
import { sliderWidth, itemWidth } from './SliderEntry.style';
import Carousel from "react-native-snap-carousel";
import styles from "./styles";
import fs from '../footer/styles';
const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');
const SLIDER_1_FIRST_ITEM = 1;
import SliderEntry from './SliderEntry';
const cardImage1 = require("../../../assets/tea1.png");

const ENTRIES1 = [
  {
    title: '五一放假通知',
    subtitle: '劳动节以及五一停牌放假通知: 劳动节放假时间为4月29日5月1日, 期间平台停运',
    illustration: "https://i.imgur.com/UYiroysl.jpg"
  },
  {
    title: '春节放假通知',
    subtitle: '春节停牌放假通知: 劳动节放假时间为4月29日5月1日, 期间平台停运',
    illustration: 'https://i.imgur.com/2nCt3Sbl.jpg'
  },
  {
    title: '国庆节放假通知',
    subtitle: '国庆节停牌放假通知: 劳动节放假时间为4月29日5月1日, 期间平台停运',
    illustration: 'https://i.imgur.com/lceHsT6l.jpg'
  }
];

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
  _renderItemWithParallax ({item, index}, parallaxProps) {
    return (
      <SliderEntry
        data={item}
        even={(index + 1) % 2 === 0}
        parallax={true}
        parallaxProps={parallaxProps}
      />
    );
  }
  render() {
    return (
      <Container style={styles.container}>
        <Header style={styles.header}>
          <Left>
            <Button  transparent onPress={() => this.props.navigation.navigate("DrawerOpen")}>
              <Icon type="MaterialCommunityIcons" name="qrcode-scan" style={styles.iconStyle}/>
            </Button>
          </Left>
          <Body>
          <Title style={styles.iconStyle}>首页</Title>
          </Body>
          <Right>
              <Icon type="MaterialCommunityIcons" name="tooltip-outline" style={styles.iconStyle}/>
          </Right>
        </Header>

        <Content>
          <View style={styles.exampleContainer}>
            <Carousel
              data={ENTRIES1}
              renderItem={this._renderItemWithParallax}
              sliderWidth={sliderWidth}
              itemWidth={itemWidth}
              hasParallaxImages={true}
              firstItem={SLIDER_1_FIRST_ITEM}
              inactiveSlideScale={0.94}
              inactiveSlideOpacity={0.7}
              // inactiveSlideShift={20}
              containerCustomStyle={styles.slider}
              contentContainerCustomStyle={styles.sliderContentContainer}
              loop={true}
              loopClonesPerSide={2}
              autoplay={true}
              autoplayDelay={700}
              autoplayInterval={3000}
              onSnapToItem={(index) => this.setState({ slider1ActiveSlide: index }) }
            />

          </View>
          <View style={styles.majorProductStart}><Text style={styles.majorProduct}>主打商品</Text></View>
          <View style={styles.mb}>
            <View>
              <Image
                style={{
                  resizeMode: "cover",
                  width: null,
                  height: 200,
                  flex: 1
                }}
                source={cardImage1}
              />
            </View>

          </View>
        </Content>
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
                <Text style={fs.footerText}>团队</Text>
              </View>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}

export default HomeScreen;
