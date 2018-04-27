import React, { Component } from "react";
import { Switch } from 'react-native';
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
} from "native-base";


class ResetLoginPwd extends Component {
  constructor(props) {
    super(props);
    this.state = {
      switchValue: false,
    }
  }

  handleSwitch = ()=> {
    let { switchValue } = this.state;
    this.setState({
      switchValue: !switchValue,
    })
  }


  render() {
    const { switchValue } = this.state;
    return (
      <Container style={{backgroundColor: '#fff'}}>
        <Header>
          <Left>
            <Button transparent onPress={() => this.props.navigation.navigate("DrawerOpen")}>
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
          <Title>重置登录密码</Title>
          </Body>
          <Right />
        </Header>

        <Content style={{marginTop: 60, marginLeft: 30, marginRight: 30,}}>
          <Form>
            <Item>
              <Icon active name="person" />
              <Input placeholder="输入手机号码" />
            </Item>
            <Item>
              <Icon active name="chatbubbles" />
              <Input placeholder="短信验证码" />
              <Button transparent style={{color: '#666'}}>
                <Text>发送验证码</Text>
              </Button>
            </Item>
            <Item>
              <Icon active name="lock" />
              <Input placeholder="输入新的登录密码" />
              <Switch onValueChange={this.handleSwitch} value={switchValue} />
            </Item>
          </Form>

          <Button block rounded success style={{ margin: 15, marginTop: 50 }}>
            <Text>确认</Text>
          </Button>
        </Content>

      </Container>
    );
  }
}

export default ResetLoginPwd;
