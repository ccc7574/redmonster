import React, { Component } from "react";
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
  Label,
  Input,
  Form,
  Item,
} from "native-base";

// import styles from "./styles";

class PhoneNumber extends Component {
  render() {
    return (
      <Container >
        <Header>
          <Left>
            <Button transparent onPress={() => this.props.navigation.navigate("DrawerOpen")}>
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
          <Title>手机号</Title>
          </Body>
          <Right />
        </Header>

        <Content>
          <Form>
            <Item fixedLabel>
              <Label>输入手机号</Label>
              <Input />
            </Item>
          </Form>
          <Text style={{marginTop: 15, marginLeft: 15}}>* 手机号绑定后不可修改</Text>
          <Button block style={{ margin: 15, marginTop: 50 }}>
            <Text>确认</Text>
          </Button>
        </Content>

      </Container>
    );
  }
}

export default PhoneNumber;
