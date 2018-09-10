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
import Img1 from '../../../assets/article/brand1.png';
import Img2 from '../../../assets/article/brand2.png';
import Img3 from '../../../assets/article/brand3.png';
import Img4 from '../../../assets/article/brand4.png';
import Img5 from '../../../assets/article/brand5.png';
import Img6 from '../../../assets/article/brand6.png';
import Img7 from '../../../assets/article/brand7.png';
import Img8 from '../../../assets/article/brand8.png';
import Img9 from '../../../assets/article/brand9.png';
import Img10 from '../../../assets/article/brand10.png';
import Img11 from '../../../assets/article/brand11.png';

class Article2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }


  render() {

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
            <Text style={s.title}>品牌介绍</Text>
            <Text style={s.date}>2018-9-7 19:30</Text>
            <View style={s.content}>
              <Text style={s.pLeft}><Text style={{color: '#a5a5a5', fontWeight: '700'}}>红炉</Text>——深挖国产优质产品，重塑中国高端品牌。</Text>

              <View style={s.imgWrapper}>
                <Image
                  style={{
                    width: '100%',
                    height: '100%',
                  }}
                  resizeMode="contain"
                  source={Img1}
                />
              </View>

              <Text style={s.pLeft}>白居易有诗云：绿蚁新醅酒，红泥小火炉。晚来天欲雪，能饮一杯无？</Text>
              <Text style={s.pLeft}>“红炉”二字正是源于此处，代表了一种禅意、优雅的生活态度，也象征着一个品牌的淬炼，一个民族的蒸蒸日上。</Text>
              <Text style={s.pLeft}>红炉国际贸易无锡有限公司总部设立在江苏无锡，主营普洱纯料古树陈茶和各类精选商品。</Text>

              <View style={s.imgWrapper}>
                <Image
                  style={{
                    width: '100%',
                    height: '100%',
                  }}
                  resizeMode="contain"
                  source={Img2}
                />
              </View>

              <Text style={s.pLeft}>由于茶叶市场“水很深”，普通人很难鉴别茶叶的树龄、产地、发酵时间、有益物质含量等信息。再加上各个产地、不同品种的茶叶太多，导致了目前茶叶市场太混乱。</Text>
              <Text style={s.pLeft}>要么价格能接受，但是买回来质量不好、口感不好；要么茶叶口感还可以，但价格过于高，感觉买贵了；再要么茶叶包装上面一堆唬人的名头，但买回来发现并不好喝，也不一定能保证产地树龄等信息的真实性。</Text>

              <View style={s.imgWrapper}>
                <Image
                  style={{
                    width: '100%',
                    height: '100%',
                  }}
                  resizeMode="contain"
                  source={Img3}
                />
              </View>

              <Text style={s.pLeft}>红炉致力于帮助广大消费者解决这些痛点，专心做好茶，回归茶的本质，做干净，真实，好喝的茶叶。</Text>

              <View style={s.imgWrapper}>
                <Image
                  style={{
                    width: '100%',
                    height: '100%',
                  }}
                  resizeMode="contain"
                  source={Img4}
                />
              </View>

              <Text style={s.pLeft}>以茶叶市场作为切入点，红炉分析了很多陷入瓶颈的国产商品运营模式，总结出了由于同质化恶性竞争所形成的恶性循环闭环：同质化竞争、价格战导致商家产品卖不出价格，只能靠压缩生产成本、降低产品质量来盈利，而这种做法又进一步导致了消费者不愿意购买劣质国产产品，市场持续缩小，竞争更加剧烈。</Text>

              <View style={s.imgWrapper}>
                <Image
                  style={{
                    width: '100%',
                    height: '100%',
                  }}
                  resizeMode="contain"
                  source={Img5}
                />
              </View>

              <Text style={s.pLeft}>而目前国内的消费者已经具有了一定的购买力，许多人出国旅游购买国外名牌产品都是可以用疯狂扫货来形容，各种代购大行其道，出现了买国外大牌大手大脚，买国内品牌精打细算的怪现象。</Text>
              <Text style={s.pLeft}>究其本质，是因为大部分国产品牌、平台口碑已经做差了，无论是想要买好货的消费者还是能生产优质产品的生产厂家，都亟需一个优秀的品牌来提供公信力。</Text>

              <View style={s.imgWrapper}>
                <Image
                  style={{
                    width: '100%',
                    height: '100%',
                  }}
                  resizeMode="contain"
                  source={Img6}
                />
              </View>

              <Text style={s.pLeft}>目前大多数有优质商品购买需求的消费者都会选择国外品牌，而这些国外品牌的产品却往往是中国厂家代工生产的。消费者买到的产品价格过高，而生产优质产品的厂家却利润微薄。</Text>
              <Text style={s.pLeft}>红炉品牌的建立就是为了打破这种僵局，靠用心做产品在消费者心中建立信任。整合国内外品牌优势，深挖国产优质产品，重塑中国高端品牌。</Text>

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

              <Text style={s.pLeft}>红炉通过大量、专业的品牌分析总结出塑造高端品牌的方式，也是红炉一直坚持的品牌定位：品质，高贵，稀有。</Text>

              <View style={s.imgWrapper}>
                <Image
                  style={{
                    width: '100%',
                    height: '100%',
                  }}
                  resizeMode="contain"
                  source={Img8}
                />
              </View>

              <Text style={s.pLeft}>品质</Text>
              <Text style={s.pLeft}>做质量：通过从原材料到生产销售的全链监控严格把关，保证品质；</Text>
              <Text style={s.pLeft}>做质感：注重用户体验，深挖优质产品，找到专业、专注的大师作；</Text>
              <Text style={s.pLeft}>设计感：与优秀设计师团队深度合作，将每一件产品打磨成艺术品。</Text>

              <View style={s.imgWrapper}>
                <Image
                  style={{
                    width: '100%',
                    height: '100%',
                  }}
                  resizeMode="contain"
                  source={Img9}
                />
              </View>

              <Text style={s.pLeft}>高贵</Text>
              <Text style={s.pLeft}>有文化：每一件优质国产产品的背后都是一种千百年文化的历史积淀；</Text>
              <Text style={s.pLeft}>有态度：或狂放，或婉约，或浪漫，或优雅，通过红炉，找回这些态度；</Text>
              <Text style={s.pLeft}>懂生活：好的产品会让人感受到生活的乐趣，红炉用心，让您开心。</Text>

              <View style={s.imgWrapper}>
                <Image
                  style={{
                    width: '100%',
                    height: '100%',
                  }}
                  resizeMode="contain"
                  source={Img10}
                />
              </View>

              <Text style={s.pLeft}>稀有</Text>
              <Text style={s.pLeft}>原材料：如果是别人都能给你的东西，那我就不给你了，我要给你的是别人没有的；</Text>
              <Text style={s.pLeft}>工艺：我们对工艺的要求是，一个不起眼的小细节，都会让你会心一笑；</Text>
              <Text style={s.pLeft}>年代：真正珍稀的，是时光，那些融入了时光的珍品，我将为你亲手奉上。</Text>

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

              <Text style={s.pLeft}>中国茶叶市场每年超过3000亿销售额，生存着7万家茶叶企业，而年销售额超过10亿的企业寥寥无几，没有一家能在A股上市。</Text>
              <Text style={s.pLeft}>茶叶市场多年来一直以原材料的形式在售卖产品。价格不透明，挑选困难等问题持续困扰广大消费者。</Text>
              <Text style={s.pLeft}>红炉力图帮助茶叶市场改变现状，做到茶叶产品品牌化，标准化，价格透明化，为消费者的选择带来根本上的便利。成为茶叶行业中国自主品牌的领航者。</Text>
              <Text style={s.pRight}>——总裁寄语</Text>

            </View>
          </View>
        </Content>
      </Container>
    );
  }
}


export default Article2;
