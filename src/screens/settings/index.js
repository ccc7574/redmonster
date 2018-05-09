import React, { Component } from "react";
import { DatePickerIOS  } from 'react-native';
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
  Input,
  Form,
  Item,
  Thumbnail,
  Label,
} from "native-base";
const cover = require("../../../assets/web-cover1.jpg");

import styles from "./styles";

class Settings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showDatePickerDialog: false,
      chosenDate: new Date(),
    }
  }

  setDate = ()=> {
    this.setState({

    })
  }

  showDatePickerDialog = ()=> {
    this.setState({
      showDatePickerDialog: true,
    })
  }

  render() {
    const { showDatePickerDialog, chosenDate } = this.state;
    return (
      <Container style={styles.container}>
        <Header style={styles.header}>
          <Left>
            <Button transparent onPress={() => this.props.navigation.navigate("DrawerOpen")}>
              <Icon style={styles.white} name="arrow-back" />
            </Button>
          </Left>
          <Body>
          <Title style={styles.white}>个人信息</Title>
          </Body>
          <Right />
        </Header>
        <Content style={styles.content}>
          <Form style={styles.form}>
            <Item fixedLabel style={styles.formItemTall}>
              <Label style={styles.white}>头像</Label>
              <Thumbnail source={cover} style={styles.mr10} />
              <Icon style={styles.col41} name="arrow-forward" />
            </Item>
            <Item fixedLabel style={styles.formItem}>
              <Label style={styles.white}>昵称</Label>
              <Text style={styles.mr10}>一剑霜寒</Text>
              <Icon style={styles.col41} name="arrow-forward"/>
            </Item>
            <Item fixedLabel style={styles.formItem}>
              <Label style={styles.white}>手机号</Label>
              <Text style={styles.mr10}>13000000099</Text>
            </Item>
            <Item fixedLabel style={styles.formItem}>
              <Label style={styles.white}>推荐人</Label>
              <Text style={styles.mr10}>张洋</Text>
            </Item>
            <Item fixedLabel style={styles.formItem}>
              <Label style={styles.white}>性别</Label>
              <Text style={styles.mr10}>男</Text>
              <Icon style={styles.col41} name="arrow-forward" />
            </Item>
            <Item fixedLabel style={styles.formItem} >
              <Label style={styles.white}>出生日期</Label>
              <Icon style={styles.col41} name="arrow-forward" />
            </Item>
            <Item fixedLabel style={styles.formItem}>
              <Label style={styles.white}>重置登录密码</Label>
              <Icon style={styles.col41} name="arrow-forward" />
            </Item>
            <Item fixedLabel style={styles.formItem}>
              <Label style={styles.white}>重置支付密码</Label>
              <Icon style={styles.col41} name="arrow-forward" />
            </Item>
            <Item fixedLabel last style={styles.formItem}>
              <Label style={styles.white}>清空缓存</Label>
              <Icon style={styles.col41} name="arrow-forward" />
            </Item>
          </Form>

          <Button full style={styles.btn}>
            <Text>退出登录</Text>
          </Button>

          {showDatePickerDialog &&
          <Content>
            <Header>
              <Left>
                <Button transparent onPress={() => this.props.navigation.navigate("DrawerOpen")}>
                  <Text>取消</Text>
                </Button>
              </Left>
              <Right>确定</Right>
            </Header>

            <DatePickerIOS
              style={{marginBottom: 30}}
              date={chosenDate}
              maxDate={new Date()}
              onDateChange={this.setDate}
            />
          </Content>}
        </Content>
      </Container>
    );
  }
}


export default Settings;
