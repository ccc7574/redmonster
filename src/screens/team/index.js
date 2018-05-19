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
  Input,
  List,
} from "native-base";
import { View } from "react-native";
import s from "./styles";

const DATA = [
  ["姓名", "账号", "注册日期", "最近购买"],
  ["李四四", "15098765432", "2018/06/23", "从未购买"],
  ["李四四", "15098765432", "2018/06/23", "今天"],
  ["李四四", "15098765432", "2018/06/23", "一天以前"],
  ["李四四", "15098765432", "2018/06/23", "一天以前"],
  ["李四四", "15098765432", "2018/06/23", "一天以前"],
  ["李四四", "15098765432", "2018/06/23", "一天以前"],
];

class FixedLabel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected1: undefined,
      selected2: undefined,
      countAmt: 35,
      activeTab: 1,
    };
  }

  handleTab = (key) => {
    this.setState({
      activeTab: key
    });
  };

  render() {
    return (
      <Container style={s.container}>
        <Header style={{backgroundColor: "#1A1A1A", borderBottomWidth: 0}}>
          <Left>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon name="arrow-back" style={s.fontWhite}/>
            </Button>
          </Left>
          <Body>
          <View style={s.title}>
            <Button small style={s.tabBtn} onPress={() => this.handleTab(1)}>
              <Text style={s.fontWhite}>直推</Text>
            </Button>
            <Button small onPress={() => this.handleTab(2)}>
              <Text style={s.fontWhite}>团队</Text>
            </Button>
          </View>
          </Body>
          <Right />
        </Header>

        <Content style={s.content}>
          <Input style={s.input} placeholder={'输入您想搜索的人'}/>
          <View>
            <List
              style={s.listTable}
              dataArray={DATA}
              renderRow={data => (
                <View style={s.listItem}>
                  {data && data.map((item, key) => {
                    let width = 0;
                    switch (key) {
                      case 0:
                        width = "20%";
                        break;
                      case 1:
                        width = "30%";
                        break;
                      case 2:
                        width = "30%";
                        break;
                      case 3:
                        width = "20%";
                        break;
                      default:
                        width = 0;
                        break;
                    }
                    return (
                      <Text style={[s.listCell, s.fontWhite, { width: width }]} key={key}>
                        {item}
                      </Text>
                    )})
                  }
                </View>
              )}
            />
          </View>

          <Text style={s.bottomTip}>已显示全部</Text>
        </Content>
      </Container>
    );
  }
}

export default FixedLabel;
