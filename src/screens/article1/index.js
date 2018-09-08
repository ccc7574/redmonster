import React, { Component } from "react";
import { Image } from "react-native";
import {
  Container,
  Header,
  Title,
  Content,
  Text,
  Button,
  Icon,
  Left,
  Right,
  Body,
  View
} from "native-base";

import s from "./styles";
import Img1 from '../../../assets/article/product1.png';
import Img2 from '../../../assets/article/product2.png';
import Img3 from '../../../assets/article/product3.png';
import Img4 from '../../../assets/article/product4.png';
import Img5 from '../../../assets/article/product5.png';
import Img6 from '../../../assets/article/product6.png';
import Img7 from '../../../assets/article/product7.png';
import Img8 from '../../../assets/article/product8.png';
import Img9 from '../../../assets/article/product9.png';
import Img10 from '../../../assets/article/product10.png';
import Img11 from '../../../assets/article/product11.png';

class Article1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }


  render() {
    const {  } = this.state;
    return (
      <Container style={{backgroundColor: '#1a1a1a',}}>
        <Header style={s.header}>
          <Left>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon style={s.wordCol} name="arrow-back" />
            </Button>
          </Left>
          <Body>
          <Title style={s.wordBig}>消息详情</Title>
          </Body>
          <Right />
        </Header>
        <Content style={{backgroundColor: '#000',}}>
          <View style={{ height: '100%', paddingLeft: 15, paddingRight: 15}}>
            <Text style={s.title}>主打商品</Text>
            <Text style={s.date}>2018-9-7 19:30</Text>
            <View style={s.content}>
              <Text style={s.p}>绿蚁新醅酒，红泥小火炉。</Text>
              <Text style={s.p}>晚来天欲雪，能饮一杯无？</Text>
              <Text style={s.pRight}>——白居易《问刘十九》</Text>

              <View style={s.imgWrapper}>
                <Image
                  style={{
                    width: '100%',
                    height: '100%',
                  }}
                  source={Img1}
                />
              </View>

              <Text style={s.p}>红炉熟普2012，珍稀，珍贵，品味高雅，只与最珍视的挚友一起分享。</Text>

              <View style={s.imgWrapper}>
                <Image
                  style={{
                    width: '100%',
                    height: '100%',
                  }}
                  source={Img2}
                />
              </View>

              <Text style={s.p}>2012年纯料深山古树普洱陈茶，</Text>
              <Text style={s.p}>传统与现代融合的普洱茶精品。</Text>

              <View style={s.imgWrapper}>
                <Image
                  style={{
                    width: '100%',
                    height: '100%',
                  }}
                  source={Img3}
                />
              </View>

              <Text style={s.p}>千金易得，好茶难寻。</Text>
              <Text style={s.p}>高品质的普洱古树茶，要到普洱古茶树生长的源头去寻找。</Text>
              <Text style={s.p}>红炉茶叶来自云南普洱市无量山深处老乌山，</Text>
              <Text style={s.p}>周边环境没有人类污染，生长过程没有人工干预。</Text>

              <View style={s.imgWrapper}>
                <Image
                  style={{
                    flex:1,
                    width: '100%',
                    height: '100%',
                  }}
                  resizeMode="contain"
                  source={Img4}
                />
              </View>

              <Text style={s.p}>每年清明时节短短几天的采茶季，山下的采茶工人花费五个小时从汽车无法通行的山路来到老乌山深处，</Text>
              <Text style={s.p}>架上梯子爬到树顶，将当年最新的老树新芽小心地采摘下来，用千百年传承下来的传统工艺进行初步加工。</Text>
              <Text style={s.p}>手工的温度，传承着匠心，只为将老乌山的味道完整地保留。</Text>

              <View style={s.imgWrapper}>
                <Image
                  style={{
                    width: '100%',
                    height: '100%',
                  }}
                  source={Img5}
                />
              </View>

              <Text style={s.p}>初加工的茶叶由采茶工人一袋袋地搬运到山下的茶厂，利用现代化流水线设备进行精加工。</Text>
              <Text style={s.p}>从除尘、除菌、分拣、渥堆环境、炒制均匀度等各个方面全方位把控加工精度，精心打磨，将一饼好茶呈现给世人。</Text>

              <View style={s.imgWrapper}>
                <Image
                  style={{
                    width: '100%',
                    height: '100%',
                  }}
                  source={Img6}
                />
              </View>

              <Text style={s.p}>红炉茶叶坚持原产地发酵，生长地就是发酵地。24小时365天严格把控仓库温湿度，茶叶在发酵过程中得到升华和重生。</Text>
              <Text style={s.p}>发酵时间越久，茶叶中的多酚类化合物的酶类和非酶类氧化越完全，发酵产生的活性物质和微量元素不仅使得茶叶口感变得甘醇顺喉，也使得茶叶具有了抗癌、抗衰老、降三高、清肠道等保健功效。</Text>

              <View style={s.imgWrapper}>
                <Image
                  style={{
                    width: '100%',
                    height: '100%',
                  }}
                  resizeMode="contain"
                  source={Img7}
                />
              </View>

              <Text style={s.p}>红炉只做真材实料的纯料古树陈茶，坚决不用台地茶和其他年份的茶叶掺杂。</Text>
              <Text style={s.p}>由于古茶树生长环境特定，古树数量稀有，采摘期短和加工、仓储要求严苛，每年的古树普洱都是产量固定、不可再生的。</Text>
              <Text style={s.p}>随着人们生活水平的提高，国内外爱茶、懂茶的人越来越多，愿意购买高档茶品饮的消费者越来越多，高品质的老茶越喝越少。</Text>
              <Text style={s.p}>市场供需关系和普洱茶本身越存越好的特性都会使红炉纯料古树普洱陈茶的价值越来越高。</Text>
              <Text style={s.p}>购买商品和获取更多产品信息，请登录红炉支付宝商城</Text>
              <Text style={s.p}>方法一：在支付宝首页搜索栏搜索“红炉茶叶”。</Text>
              <Text style={s.pLeft}>第一步，点击支付宝初始页面上方的搜索栏</Text>

              <View style={s.imgWrapperUnlimited}>
                <Image
                  style={{
                    width: '100%',
                    height: '100%',
                  }}
                  resizeMode="contain"
                  source={Img8}
                />
              </View>

              <Text style={s.pLeft}>第二步，输入“红炉茶叶”并点击唯一店铺。</Text>

              <View style={s.imgWrapperUnlimited}>
                <Image
                  style={{
                    width: '100%',
                    height: '100%',
                  }}
                  resizeMode="contain"
                  source={Img9}
                />
              </View>

              <Text style={s.p}>方法二：打开支付宝“扫一扫”，扫描下方二维码。</Text>

              <View style={s.imgWrapperUnlimited}>
                <Image
                  style={{
                    width: '100%',
                    height: '100%',
                  }}
                  resizeMode="contain"
                  source={Img10}
                />
              </View>

              <Text style={s.p}>红炉国际是一家国产原创高端品牌。</Text>
              <Text style={s.p}>红炉茶叶，专心做好茶。</Text>

              <View style={s.imgWrapper}>
                <Image
                  style={{
                    width: '100%',
                    height: '100%',
                  }}
                  resizeMode="contain"
                  source={Img11}
                />
              </View>

              <Text style={s.p}>选择红炉，选择放心，选择高雅。</Text>
              <Text style={s.p}>红炉茶叶，期待与您邂逅。</Text>


            </View>
          </View>
        </Content>
      </Container>
    );
  }
}


export default Article1;
