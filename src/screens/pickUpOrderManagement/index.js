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
  Item,
  Text,
  Input,
  Picker,
  Form,
  Footer,
  FooterTab,
} from "native-base";
import { View, Image, TouchableHighlight, Modal } from "react-native";
import styles from "./styles";
import noOrder from "../../../assets/noOrder.png";

const pickUpImg = require("../../../assets/pickUp-img.png");

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
      <Text style={styles.noRecordTxt}>暂无订单</Text>
    </View>
  );
};

const OrderItem = () => {
  return (
    <View style={{backgroundColor: "#1A1A1A", marginTop: 15, paddingTop: 15}}>
      <View style={{paddingHorizontal: 15}}>
        <View style={{flexDirection: "row", justifyContent: "space-between"}}>
          <Text style={[styles.fontWhite, styles.font14]}>提货订单编号：12345678901234</Text>
          <Text style={{marginLeft: 15, color: "#D1B27A"}}>已提货</Text>
        </View>
        <View style={{flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginTop: 15}}>
          <View style={{flexDirection: "row", justifyContent: "flex-start", alignItems: "center"}}>
            <Image style={{resizeMode: "cover", width: 68, height: 68, borderRadius: 5}} source={pickUpImg}/>
            <View style={{marginLeft: 15}}>
              <Text style={{color: "#ccc", fontSize: 18}}>精品普洱茶饼(6年)</Text>
              <Text style={{marginTop: 10, color: "#999", fontSize: 14}}>2018-06-10</Text>
            </View>
          </View>
          <Text style={{color: "#ccc",}}>x8</Text>
        </View>
      </View>
      <View style={styles.deleteRow}>
        <View style={{flexDirection: "row", justifyContent: "flex-start", alignItems: "center"}}>
          <Text style={[styles.fontWhite, styles.font14]}>物流单号：</Text>
          <Text style={[styles.fontWhite, styles.font14]}>1234567891230</Text>
        </View>
        <Icon name="trash" style={styles.fontWhite} onPress={this.handleConfirm}/>
      </View>
    </View>
  );
};

class FixedLabel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
    };
  }

  handleConfirm = () => {
    this.setState({
      modalVisible: true
    });
  };

  closeModal = () => {
    this.setState({
      modalVisible: false,
    });
  };

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
            <Text style={styles.title}>提货订单管理</Text>
          </Title>
          </Body>
          <Right />
        </Header>

        <Content style={{ padding: 12}}>
          <NoOrder />
        </Content>

        <Modal
          animationType="fade"
          transparent={true}
          visible={this.state.modalVisible}
          onRequestClose={this.closeModal}
        >
          <View style={[styles.modalContainer, styles.modalBackgroundStyle]}>
            <View style={styles.innerContainer}>
              <View style={styles.modalContentBox}>
                <Text style={styles.modalContent}>确定删除吗</Text>
              </View>
              <View style={styles.modalFoot}>
                <Button style={[styles.footBtn, styles.borderRight]} onPress={this.closeModal}>
                  <Text style={styles.cancelBtn}>取消</Text>
                </Button>
                <Button style={styles.footBtn} onPress={this.closeModal}>
                  <Text style={styles.confirmBtn}>确定</Text>
                </Button>
              </View>
            </View>
          </View>
        </Modal>
      </Container>
    );
  }
}

export default FixedLabel;
