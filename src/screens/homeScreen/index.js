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
const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');
const SLIDER_1_FIRST_ITEM = 1;
import SliderEntry from './SliderEntry';
const cardImage1 = require("../../../assets/tea1.jpg");
const cardImage2 = require("../../../assets/tea2.jpg");
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
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
          <Title style={{color:'white'}}>首页</Title>
          </Body>
          <Right />
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


          <Card style={styles.mb}>
            <CardItem>
              <Left>
                <Image
                  style={{
                    resizeMode: "cover",
                    width: null,
                    height: 200,
                    flex: 1
                  }}
                  source={cardImage1}
                />
              </Left>
              <Right>
                <Text>当前价格: ¥229.00</Text>
                <Button style={styles.mb15} onPress={() => this.props.navigation.navigate("Buy")}>
                  <Text>买入</Text>
                </Button>
              </Right>
            </CardItem>
            <CardItem>
              <Left>
                <Image
                  onPress={() => this.props.navigation.navigate("History")}
                  style={{
                    resizeMode: "cover",
                    width: null,
                    height: 200,
                    flex: 1
                  }}
                  source={cardImage2}
                />
              </Left>
              <Right>
                <Text>当前价格: ¥518.00</Text>
                <Button style={styles.mb15} onPress={() => this.props.navigation.navigate("Buy")}>
                  <Text>买入</Text>
                </Button>
              </Right>
            </CardItem>
          </Card>
        </Content>
        <Footer>
          <FooterTab>
            <Button
              active={this.state.tab1}
              onPress={() => this.props.navigation.navigate("Settings")}
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
              onPress={() => this.props.navigation.navigate("BindCard")}
              vertical
            >
              <Icon active={this.state.tab4} name="contact" />
              <Text>我的</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}

export default HomeScreen;
