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
import { View } from "react-native";
import styles from "./styles";

class FixedLabel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected1: undefined,
      selected2: undefined,
      countAmt: 35
    };
  }

  render() {
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
            <Text style={styles.fontWhite}>选择提货地址</Text>
          </Title>
          </Body>
          <Right />
        </Header>

        <Content style={{ padding: 12}}>
          <View style={{backgroundColor: "#1A1A1A"}}>
            <View style={{ padding: 12}}>
              <View style={{flexDirection: "row", justifyContent: "space-between", marginBottom: 10}}>
                <Text style={styles.fontWhite}>天福茗茶直营店(提货点)</Text>
                <Text style={{color: "#ccc", fontSize: 14}}>距离 2km</Text>
              </View>
              <View style={{flexDirection: "row", justifyContent: "space-between", alignItems: "center"}}>
                <Text style={styles.fontWhite}>地址：</Text>
                <Text style={{ width: "85%", color: "#ccc", textAlign: "justify"}}>江苏省无锡市滨湖区蠡湖大道1800号江南大学南门24栋5号</Text>
              </View>
            </View>
          </View>

          <View style={{backgroundColor: "#1A1A1A", marginTop: 10}}>
            <View style={{ padding: 12}}>
              <View style={{flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginBottom: 10}}>
                <Text style={styles.fontWhite}>天福茗茶直营店(提货点)</Text>
                <Text style={{color: "#ccc", fontSize: 14}}>距离 980m</Text>
              </View>
              <View style={{flexDirection: "row", justifyContent: "space-between"}}>
                <Text style={styles.fontWhite}>地址：</Text>
                <Text style={{ width: "85%", color: "#ccc", textAlign: "justify"}}>江苏省无锡市滨湖区蠡湖大道1800号江南大学南门24栋5号</Text>
              </View>
            </View>
          </View>
        </Content>
      </Container>
    );
  }
}

export default FixedLabel;
