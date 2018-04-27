import React, { Component } from "react";
import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Item,
  Input,
  Body,
  Left,
  Right,
  Icon,
  Form,
  Text,
  Switch,
  Footer,
  FooterTab
} from "native-base";
import styles from "./styles";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      switchFlag: false,
      checkbox: true,
      tab1: false,
      tab2: false,
      tab3: false,
      tab4: true,
    };
  }
  handleChange = () => {
    let {switchFlag} = this.state;
    this.setState({
      switchFlag: !switchFlag
    });
  };
  render() {
    return (
      <Container style={styles.container}>
        <Header>
          <Left>
            <Button transparent  onPress={() => this.props.navigation.navigate("Home")}>
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
          <Title>登录</Title>
          </Body>
          <Right />
        </Header>

        <Content>
          <Text style={styles.header}>欢迎来到红炉</Text>
          <Form>
            <Item fixedLabel style={styles.itemRow}>
              <Icon active name="phone-portrait" style={styles.icon}/>
              <Input placeholder="手机号码"/>
            </Item>
            <Item fixedLabel style={styles.itemRow}>
              <Icon active name="lock" style={styles.icon}/>
              <Input secureTextEntry={!this.state.switchFlag} placeholder="登录密码"/>
              <Switch value={this.state.switchFlag} onTintColor="#4688F1" onValueChange={this.handleChange} style={{marginRight: 10}}/>
            </Item>
          </Form>
          <Button block style={{ margin: 15, marginTop: 50 }}>
            <Text style={{fontSize: 18}}>登 录</Text>
          </Button>
          <Button block transparent onPress={() => this.props.navigation.navigate("Register")}>
            <Text style={{fontSize: 18}}>注 册</Text>
          </Button>
        </Content>
        <Footer>
          <FooterTab>
            <Button
              active={this.state.tab1}
              onPress={() => this.props.navigation.navigate("Home")}
              vertical
            >
              <Icon active={this.state.tab1} name="apps"/>
              <Text>首页</Text>
            </Button>
            <Button active={this.state.tab2}
                    vertical
                    onPress={() => this.props.navigation.navigate("WareHouse")}>
              <Icon name="camera" active={this.state.tab2}/>
              <Text>仓库</Text>
            </Button>
            <Button
              active={this.state.tab3}
              onPress={() => this.props.navigation.navigate("History")}
              vertical
            >
              <Icon active={this.state.tab3} name="man"/>
              <Text>团队</Text>
            </Button>
            <Button
              active={this.state.tab4}
            onPress={() => this.props.navigation.navigate("Login")}
            vertical
          >
            <Icon active={this.state.tab4} name="contact" />
            <Text>我的</Text>
          </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}

export default Login;
