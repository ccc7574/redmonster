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

import s from "./styles";

class Nickname extends Component {
  render() {
    return (
      <Container >
        <Header style={s.header}>
          <Left>
            <Button transparent onPress={() => this.props.navigation.navigate("DrawerOpen")}>
              <Icon style={s.wordCol} name="arrow-back" />
            </Button>
          </Left>
          <Body>
          <Title style={s.wordBig}>昵称</Title>
          </Body>
          <Right>
            <Button transparent onPress={() => this.props.navigation.navigate("DrawerOpen")}>
              <Text  style={s.wordCol}>保存</Text>
            </Button>
          </Right>
        </Header>

        <Content style={s.content}>
          <Form>
            <Item style={s.ipt} regular>
              <Label style={s.wordCol}>输入昵称</Label>
              <Input />
            </Item>
          </Form>
          {/*<Button block style={{ margin: 15, marginTop: 50 }}>*/}
            {/*<Text styl={s.wordCol}>确认</Text>*/}
          {/*</Button>*/}
        </Content>

      </Container>
    );
  }
}

export default Nickname;
