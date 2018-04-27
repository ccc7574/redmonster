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

class Nickname extends Component {
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
          <Title>昵称</Title>
          </Body>
          <Right />
        </Header>

        <Content>
          <Form>
            <Item fixedLabel>
              <Label>输入昵称</Label>
              <Input />
            </Item>
          </Form>
          <Button block style={{ margin: 15, marginTop: 50 }}>
            <Text>确认</Text>
          </Button>
        </Content>

      </Container>
    );
  }
}

export default Nickname;
