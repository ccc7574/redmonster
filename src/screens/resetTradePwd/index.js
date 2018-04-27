import React, { Component } from "react";
import { TextInput, StyleSheet, View  } from 'react-native';
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

// import styles from "./styles";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#ffffff',
    justifyContent:'center',
    alignItems:'center'
  },
  textInputView:{
    height:85/2,
    width:85/2,
    borderWidth:1,
    borderColor:'#c9c7c7',
    justifyContent:'center',
    alignItems:'center',
  },
  textInputMsg:{
    display: 'none',
    zIndex:99,
    position:'absolute',
  }
});

class ResetTradePwd extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Msg: '',
    }
  }
  render() {
    return (
      <Container style={{backgroundColor: '#fff'}}>
        <Header>
          <Left>
            <Button transparent onPress={() => this.props.navigation.navigate("DrawerOpen")}>
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
          <Title>重置支付密码</Title>
          </Body>
          <Right />
        </Header>
        <Content style={{marginTop: 60, marginLeft: 30, marginRight: 30,}}>
          <Text style={{marginTop: 60, marginLeft: 30, marginBottom: 5}}>请输入原支付密码</Text>
          <View style={styles.container}>
            <View style={{flexDirection:'row',marginTop :36,justifyContent:'center'}}>
              <TextInput
                style={styles.textInputMsg}
                ref={ (ref)=>this.textInput = ref }
                maxLength={6}
                autoFocus={true}
                keyboardType="number-pad"
                defaultValue={''}
                onChangeText={
                  (text) => {
                    this.setState({
                      Msg:text
                    });
                    if (text.length === 6) {
                      this.onEnd(text);
                    }
                  }
                }/>
              {
                this._getInputItem()
              }
            </View>
          </View>
          <Button block primary style={{ margin: 15, marginTop: 50 }}>
            <Text>确认</Text>
          </Button>
        </Content>
      </Container>
    );
  }

  onEnd= (text) => {
    alert(this.state.Msg)
  };

  _getInputItem=()=>{
    let inputItem=[];
    let {Msg}=this.state;
    for (let i = 0; i < 6; i++) {
      inputItem.push(
        <View key={i} style={i===5?[styles.textInputView,{borderRightWidth:1}]:[styles.textInputView,{borderRightWidth:0}]}>
          {i < Msg.length
            ? <View style={{width: 16,
              height: 16,
              backgroundColor: '#222',
              borderRadius: 8}} />
            : null}
        </View>)
    }
    return inputItem;
  };
}


export default ResetTradePwd;
