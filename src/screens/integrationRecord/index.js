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
} from "native-base";
import { View, Image } from "react-native";
import styles from "./styles";
import noOrder from "../../../assets/noOrder.png";

const NoOrder = () => {
  return (
    <View style={styles.noRecord}>
      <Image
        style={{
          width: "100%",
          height: "100%"
        }}
        resizeMode={"contain"}
        source={noOrder}
      />
      <Text style={styles.noRecordTxt}>暂无记录</Text>
    </View>
  );
};

const ListItem = () => {
  return (
    <View style={{backgroundColor: "#1A1A1A", marginTop: 15, paddingTop: 15}}>

    </View>
  );
};

class FixedLabel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      integration: 0
    };
  }

  render() {
    const { integration } = this.state;

    return (
      <Container style={styles.container}>
        <Header style={{backgroundColor: "#1A1A1A", borderBottomWidth: 0}}>
          <Left>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon name="arrow-back" style={styles.fontWhite}/>
            </Button>
          </Left>
          <Body>
          <Title>
            <Text style={styles.title}>积分记录</Text>
          </Title>
          </Body>
          <Right />
        </Header>

        <Content style={{ padding: 12}}>
          <View style={styles.topList}>
            <Text style={styles.currentNum}>当前积分：{integration}</Text>
          </View>
          <NoOrder />
        </Content>

      </Container>
    );
  }
}

export default FixedLabel;
