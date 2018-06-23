import React, { Component } from "react";
import {
  Header,
  Title,
  Text,
  View,
  Icon
} from "native-base";
import { TouchableHighlight } from "react-native";
import styles from "./styles";

class NewHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      needBack: props.needBack || false,
      leftLinkUrl: props.leftLinkUrl,
      title: props.title,
      rightContent: props.rightContent,
      rightLinkUrl: props.rightLinkUrl
    };
  }

  render() {
    const { needBack, leftLinkUrl, title, rightContent, rightLinkUrl } = this.state;

    return (
      <Header style={styles.firstHeader}>
        <View style={styles.headerLeft}>
          { needBack &&
            <TouchableHighlight
              onPress={ leftLinkUrl ?
                () => this.props.navigation.navigate(leftLinkUrl)
                :
                () => this.props.navigation.goBack()
              }
            >
              <Icon name="arrow-back" style={{color: "#999"}}/>
            </TouchableHighlight>
          }
        </View>
        <View style={styles.headerBody}>
          <Title style={styles.iconStyle}>{title}</Title>
        </View>
        <View style={styles.headerRight}>
          { rightContent && ( rightLinkUrl ?
              <TouchableHighlight onPress={() => this.props.navigation.navigate(rightLinkUrl)}>
                <Text style={styles.headerRightTxt}>{rightContent}</Text>
              </TouchableHighlight>
              :
              <Text style={styles.headerRightTxt}>{rightContent}</Text>
          )}
        </View>
      </Header>
    );
  }
}

export default NewHeader;
