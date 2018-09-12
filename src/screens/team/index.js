import React, {Component} from "react";
import {
  Container,
  Content,
  Button,
  Text,
  List,
  Footer,
  FooterTab
} from "native-base";
import {View, Image, Alert, AsyncStorage} from "react-native";
import Header from "../../components/Header/index";
import s from "./styles";
import fs from "../footer/styles";

const axios = require('axios');
const {serverAPI} = require('../utils');
import {tabFilter} from '../sutils';


const tableHead = ["昵称", "账号", "累计消费", "累计个人利润", "累计业绩", "累计店铺利润"];

// const DATA = [
//   ["赵云", "15098215432", "4000.25", "100.05", "40000.32", "0.00"],
//   ["钟馗", "15098435354", "5000.25", "100.05", "50000.32", "0.00"],
//   ["李白", "15098765643", "6000.25", "100.05", "60000.32", "0.00"],
//   ["司马懿", "15098765456", "5000.25", "100.05", "50000.32", "0.00"],
//   ["程咬金", "15098765483", "5000.25", "100.05", "50000.32", "0.00"],
//   ["夏侯惇", "15098675431", "5000.25", "100.05", "50000.32", "0.00"],
// ];

const TopCell = ({cellTitle, cellContent, contentStyle}) => {
  return (
    <View style={s.topCell}>
      <Text style={s.cellTitle}>{cellTitle}</Text>
      <Text style={[s.cellContent, contentStyle]}>{cellContent}</Text>
    </View>
  );
};

class FixedLabel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tableHead: tableHead,
      selected1: undefined,
      selected2: undefined,
      countAmt: 35,
      activeTab: 1,
      users: [],
      newAddQty: 0,
      userQty: 0
    };
  }

  componentWillMount() {
    AsyncStorage.getItem("user_status").then((value) => {
      let userInfo = JSON.parse(value);
      if (null == userInfo) {
        this.setState({userQty: 0});
        this.setState({newAddQty: 0});
        userInfo = {};
        // userInfo.phone = "18699287811";
        console.log('没有登录');
        return;
      }
      axios.get(`${serverAPI}/rm/graphql`, {
        params: {
          query: `{ userQueryWhere(referee:"${userInfo.phone}") {name,phone}}`
        }
      }).then((response) => {
        let user = response.data.data.userQueryWhere;
        // console.log(user);
        if (user.length > 0) {
          let usersAry = [];
          for (let i = 0; i < user.length; i++) {
            let obj = user[i];
            let objAry = [obj.name, obj.phone, "0.00", "0.00", "0.00", "0.00"];
            usersAry.push(objAry);
          }
          this.setState({users: usersAry});
          if(null != usersAry){
              this.setState({userQty: usersAry.length});
              this.setState({newAddQty: usersAry.length});
          }
        }
      })
    })
      .then(res => {
        //do something else
      });
  }

  render() {
    const {tableHead, users} = this.state;
    return (
      <Container style={s.container}>
        <Header
          title="客户"
          // rightContent="历史记录"
          // rightLinkUrl="TeamDrive"
          navigation={this.props.navigation}
        />
        <Content style={s.content}>
          <View style={s.topRow}>
            <TopCell
              cellTitle="客户人数"
              cellContent={this.state.userQty}
              contentStyle={{color: "#D1B27A"}}
            />
            <TopCell
              cellTitle="个人总利润(积分)"
              cellContent={"0.00"}
              contentStyle={{color: "#E83032"}}
            />
            <TopCell
              cellTitle="店铺总利润(积分)"
              cellContent={"0.00"}
              contentStyle={{color: "#E83032"}}
            />
          </View>
          {/*<View style={s.topRow}>*/}
            {/*<TopCell*/}
              {/*cellTitle="本月新增人数"*/}
              {/*cellContent={this.state.newAddQty}*/}
              {/*contentStyle={{color: "#D1B27A"}}*/}
            {/*/>*/}
            {/*<TopCell*/}
              {/*cellTitle="本月推荐奖励(积分)"*/}
              {/*cellContent={"0.00"}*/}
              {/*contentStyle={{color: "#E83032"}}*/}
            {/*/>*/}
            {/*<View style={{flex: 1}}>*/}
              {/*<Text style={s.addButtonTxt}></Text>*/}
            {/*</View>*/}
          {/*</View>*/}
          <View style={s.listHead}>
            {tableHead && tableHead.map((item, key) => {
              let width = 100 / tableHead.length - 2 + "%";
              let color = "#A5A5A5";
              return (
                <Text style={[s.listCell, s.fontWhite, {width, color}]} key={key}>
                  {item}
                </Text>
              );
            })}
          </View>
          <View>
            <List
              style={s.listTable}
              dataArray={users}
              renderRow={data => (
                <View style={s.listItem}>
                  {data && data.map((item, key) => {
                    let width = 100 / data.length - 2 + "%";
                    let color = (key === 3 || key === 5) ? "#E83032" : "#A5A5A5";
                    return (
                      <Text style={[s.listCell, s.fontWhite, {width, color}]} key={key}>
                        {item}
                      </Text>
                    )
                  })
                  }
                </View>
              )}
            />
          </View>

          {/*<View style={s.pagination}>*/}
          {/*<Text style={s.bottomPage}>上一页</Text>*/}
          {/*<Text style={s.bottomPageNum}>2/3</Text>*/}
          {/*<Text style={s.bottomPage}>下一页</Text>*/}
          {/*</View>*/}
          {/*<Text style={s.bottomTip}>已显示全部</Text>*/}
        </Content>

        <Footer style={fs.footerTab}>
          <FooterTab style={fs.footerTab}>
            <Button style={fs.footerButton}
                    onPress={() => this.props.navigation.navigate("Home")}
                    vertical
            >
              <View style={fs.footerView}>
                <Image style={fs.footerImageHL} source={{
                  uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAkCAYAAADLsGk3AAAABGdBTUEAALGPC/xhBQAABIpJREFUWAnVmVtoHFUYx7u3bnCXms2lmhY2UGGxPtjLWrUPkviiLxaf8lBRyFPU1AgSS7bkRi6SBJRUoz7ksVAU4pOPihgMRUT6EijS1FjTWrsu7RZDsM1mL/6+sLM9szOZ2cluupsDh/Od7/vO//z/Z87Mzpl1DQ4Ovu9yua7H4/EfZmdn/9uzRens7KwLh8Mv53K5w2NjY9Ok5dTU3t7eJp/Pt0/1ObCzy8vLN+fm5jIOxuhSvW63+zCeT1taWpaGhoYuI2oFsg+0LPp12GHqcerT9C/Q6kTQ3xMMBodp3mOskEmTZ0mKPBd53nxNtra2PoOdoG6reJPJZF8oFLrLxGepEUGhNYAx8QbOqdXV1UlDEEc2m11gUYKMDZN7BFejWZ7ik8VYJP8q+TcZe1+JOTYLjPv7+5/3eDyzAAuJ4rII0S621C/FAbM+WAfBOktMtm1hDi0X4leoZxYWFi7Nz8+nNX85rW6SWCx2yO/3/wzgfgX0zvr6+snJycnfFV9J5vDwsGC9qCYjQK7Eq6Ojo9+r/nJttwoA2T/of6f6mPfH7YjIY5iJT21sbKyoc1TC1gkRQIjfVoHZGf+ofSc2WLorrow1zKvEtmXaAlqQ2daEOzXIVkg5E5vd6OXgWY3dUSGP8mruqBBWMGu1ipWM7bSQSnK1xJJXhLJKd3d3sKmp6RQgdyr92+CEWClCDNtDyDc2Nh7jZj5FfZ0JI/zyn6Ot6I9cRYVANMQb8hFu3IPygkn/OewTtE8pEyXo/6r0H7lpe0UgfRqSpxHh0djR3zSJ/Yv9VSaT+Xh8fHxZi1ejtRUC0YIAjSACruO/yHa6gIBrmr+ara0QlRwCrlHPr62tfT09PZ1UY9W2nQj5kpe9oYmJibvVJm02f6lCzo+MjHxgBlArvlJ+EP/kFCnH2JoutkK4Jy7NzMys1rQKyNkK4el0r9ZFCD/be4QrstXhqCb09fT0+L1eb8BWSE2wtSBRX1//LrvmkO3WssCohRAvHO632DV/72ohAwMDr7Cax7kiV3atEO6NfXw7m0JINp1OrxiEoE6+OxVKcb8QqKLR0dHhaWho+AIKz1KTqVQqbnazy7feQmH/+QsdhwaLYHjiiY+V1C2WE9j8Qe4zxryZHxfnM+49gxCIy4FJxT6qdkq1+/r6HgcrWoQlw/fiO0Z7tVQsLY9z0UuMnaKe1Hy0D/gXIb3JuKury9fc3Pwkz+N3CMSohS0HmRwDP2Effr60tHSbT/8pBURntre3e6PRaH0gEIgSOMe4Nl3Cw84NzjBvJxKJn6z+ymAL7Y1EIk+A8wJPpzcY/hq27yHM5gfFyxyxT7j4PvsRXDsIHiApoCapNjn3id/C9y0vkL1qTGxWK0a8E3M/bUh8dgXMFc40H3Km+UbNlQVpa2u7iE/+yjhAfUyNF9mL8DnqBUwOTikmlxOe4XyuDSLuzucaDlqSQ9xDzZDzF/UGtuV9QI7sBvl/RrePtflo68hZB0e+H2/Ji5zfZIyAuLmEW4FJjq6wtYSgGbAjHA0UPMEyE10SngUfbYrd1f4PlXyQ75KuLMgAAAAASUVORK5CYII=',
                  cache: 'only-if-cached'
                }}/>
                <Text style={fs.footerText}>红炉</Text>
              </View>
            </Button>
            <Button vertical style={fs.footerButton}
                    onPress={() => {
                      tabFilter('WareHouse').then(data => {
                        this.props.navigation.navigate(data);
                      });
                    }
                    }>
              <View style={fs.footerView}>
                <Image style={fs.footerImage}
                       source={{
                         uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsCAYAAAAehFoBAAAABGdBTUEAALGPC/xhBQAABLlJREFUWAntmV1oI1UUx5ukMdmudmtjlVJafFEoQh9k3XWh9klFWBb86i4IShXJQ6VKsLYPTVrSL2htTVEp2H0p9mVtrQVXFkHxoVjclcUnfdmHtRQLKn5lY0m6pom/M86Mk/TO5INN3ZVcuDl37vmfc/9z5s69505qam6x4joovv39/YfdbvedXq/XU2DMzO+U+fn5P1W4ihPu6+urb2xsHGTw09S7s9ms45gulysL7hdwa4lEYjIWi/1mJe5obAWW0+7t7b29qalpFdvHy7HH5st4PH5qbm7uD8O+1mhUQgYCgSB+hWyKiE1SP6edzmQyykAxZbLoPMguagRsZ319/WvIKFUrlSTs5vE+LaNA9L3R0dGxf4Ys6vfiyMjIHSDD+HgyGAxOLiws/CWW7qLMywD19PTchlmjmEL4YqkuDBtkoKGhwW/YV4ywMUC50nbalOvwv7K7aSNsF5AqYbvI3Kj+aoRvVCTt/BxIhPX8wI6Dsl92PZWiYoR3dnYyFqKyiZRUWIe9ugHNTMYwrhjhlZWV6+xS3+sDdbO9GgSMsZ2ky+PxnNEBmzMzM0kDXMlcQsY4Sz1JpE81Nzd/Ojw8/AXX10VhV7hJL9PhEfRP6BjxYUZYmTXZOSunnyQmCokIpEseC7tZkqaBAyUsNxkOhx8las/RvBfejicOSO6B22LaLo+Pj18Q+2qpRuD/FIGcN7e7u9vT3t7+LDf4FC/HPchC63QazBVekPfHxsa+cgpMJBI5wYv3Apj7qYWWU1nGfsTvGn4/pL1/WeNI429ra1uA6PMASi0pnL+B83dVhqy/r9A/i2+fSu/Ux6qxtLW1FVxcXEwJzrzT1tbWV4UsgCxyFXEZvXlnKqdgDhG1k+iOIWeHhoYuT0xM5Jzf6HsYfQyfstN9jc0nSG1wpF2RA+xRsM8IJ7h9C3BawBrhUCh0CMVL0oGMRaPR16VdTBkYGIj5/f7PsDvOdtqDTQ7h2traF+nzMvilVCr12PT0dILrogpP5i2AIeEGx3f4qJLU5iifjwJ0NosXWbCL8qaDdALn9UuZnzkFovdJB/LjUsjqNh+IFG51dXXaCVyLMB1uHMoLKCmdvEglFWx38SE2qpfU6HPMIWwGTONbOLnS6bS2QxrOTDwRzlk5TIVDA7IFbYrB5A+h4rKPcL7RzXZdJVzpJ1KNcDXCeRHYNyXYYpXH6zy7A7lUcTEIx1knE7JWUo6Wwea4bvOzwlbrw+8xha5Q10NCCNA1alzA5oLPYVFOpy9T5Q+RYeo3tFm71RuJ3D06H/mDfGWXxMmDzWkOjStcm4V84Ay6c+jkrPb23t7eR9juOvkFJ8nPg9RR2ndhexa/QXFqZmvJZDJKEnMC0APUearoa3CuSdWPVYfTpfX19bV8HH2rXV1dS/iTtDVEMhQSjNU238Z6jd/vSJqEuFbME+zGxsa1zs7O8zg6jKaJ6gIs+79TTUHkKrg3+WstvLy8rP0PoXnWfzY3NzMdHR0XfD6fTLkWsPIVSHC2fsHtov8J7DnIBkmaftDd/TsljA6Rg4ODRxBHiIY5Zax6Szu9vb39q5FcW/qVTTkktLS0BFCaT1YFJNGRFz8+NTWlzVsV5pbp+xtDhbvUgXRfogAAAABJRU5ErkJggg==',
                         cache: 'only-if-cached'
                       }}/>
                <Text style={fs.footerText}>仓库</Text>
              </View>
            </Button>
            <Button style={fs.footerButton}
                    onPress={() => {
                      AsyncStorage.getItem("user_status").then((value) => {
                        let userInfo = JSON.parse(value);
                        if (null == userInfo || userInfo.status !== 'logined') {
                          this.props.navigation.navigate("Login");
                        } else {
                          this.props.navigation.navigate("Team");
                        }
                      }).then(res => {
                        //do something else
                      });
                    }}
                    vertical
            >
              <View style={fs.footerView}>
                <Image style={fs.footerImage}
                       source={{uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsCAYAAAAehFoBAAAABGdBTUEAALGPC/xhBQAABStJREFUWAntWV1sVEUUnjN3d7u1xXapURtjMDH2xQdprUANakjUEI0uFFkS4k8xpiYaSupPfwgYiqatjbWmGBLgQQKa6ELpshp40MgL0UpquyT64oN/0WAUbKuUbuneGb+5u7Nhd+/e7lZWabKTbefeM+fnmzP3zjlnLmOLrNF/hffsoVfKZsq4z8NMw8lmzJBi+nJ0Yk1g70U7voIDHnl/6/Wl5eXtkliAEd1IElcOTRKBQZ6XUg5fmp3tvjcw8OeV7I7CVzIu5PpU8IVyn7diiBg9vBB5ydhpaV56rHb9O5Na3qUvCtH7SiqaE2CjUopuYdJn8HCMuLB1lBRcCrcwuDTu54x2ErHVxL3bgK1L4ysY4F27GIeRRsuQFPuW+3tf10Zz6EcixzuXYLI7JOPrRvc1d9c/v39OySmlBWkPLGvyENHSuHI+kq8RyYQlg6Woit5c6dXyBQOsDSy0J+K2j801CzjbRIuAs3nmatGLHr5ansymp+hhO88gyiHK5teyyRTMw3+UTQskMHGgkjz5wQW34G4lg0xILJkSQssXDHAgcOQyY/SDZcigjQivFgBteJ4ecYNtUjzI3H4c/v6tGc1vG0304L/tx8Ptfs6MkNIDZ3+u/oAAE3FoRG6S7D6E9bWKS0jxZK2/9wMtUVDAykgk3NkFIzvhq7xt4TnuD433tiGRSj4SeSvRM82nHwt1PMg5bWaS3YYMzLHikEyaAPUzXtNg7bqeE/nYKfIWPbAYPJDy0gWDG40az+1PME7rAf4m1K+O+zRekBje/u+EKQ/VNfZ86TThsWOdDdygp7HB1eDFcyzNJEmBF/Q3bCzDobHuo7a7xKn3mry+qur9UPaUk+EsY6rIfBV127t24+Oh7S9yLvsxuRK7cScanHJ44sK55jVbDkYVX3KmlUurW+JgEU4lG8IsR3GV3P/slGIFSrEaj2KZVhDj/V+H20bvfrwvpX4DbRUq5QGAdSNOn2FSfILeMm6nU9GwY3PorkeQ2aAwAds3IPepMQvwF8HWUpTVzyoCQA4s9/e8rK5zaaePtw2UM+NTRKaVBjOaIJMC2JCuLQDgRpT76iIzH1rt7/sbPDm1SLjjbQBuVdiAcQ8OVWasZ5Qb7iokGdVKC8JiMCdtCSYFAGA+tm4lq8mUlXcoGvSH8wGrZEjQRwnZ6usYsypwC7DLRIlqHSHhlAM/xZRPgwdmFb9aynQ5TeNinhwiXRD3cSwAhl+MeawImWkgy6mMjb4kSajjsHlaLjzpKuxOiDIApwtda/dFwIVekaKHix5O80DGI6EOldN4/rdbOywa8BRQImQSGYQYnmdDibvSEpH0e4ZogobgsiJjbB6Cwdk9ChO+e/wF1inFntzwz4a3H8D9cwB+HpHlNSRAY0gbhd3mrQTV7KGqhLmoEXG3BbmEgQo3gAr3iBrXLRLq2EScf4jwbSLuDyJ8HUPgmnXSizQU82N1MLAbAG9AgnPgLn9Ps9KZzNZm5mJdXpfRAMN3YlJ71VRQOIJFL4KGEO9TSkmwqTRwcnxkOJWLsYnIyJCvruEw9CJtpVZYbFVac9Gr+DDRb6Mxc7clgn9x2cTdmdBLt3rIuwOeWysZVcbzC82a2WM1VPr5K8AePPfT9OAjLXusnCKd88Tg1pLqZeXbYOwZjN2C3t4LCcHEp69J6D8ZnTPfWLWh7xetMwWwJo4G2ytwXcGNmO245uOmiE1MT1zQybWmZ+utIqHMV4XvRMmVteMVpgtY2VR94E3rubXjWTS0fwBaycKPwVAg/QAAAABJRU5ErkJggg==',cache: 'only-if-cached'}}/>
                <Text style={fs.footerText}>客户</Text>
              </View>
            </Button>
            <Button style={fs.footerButton}
                    active={this.state.tab4}
                    onPress={() => {
                      tabFilter('Mine').then(data => {
                        this.props.navigation.navigate(data);
                      });
                    }}
                    vertical
            >
              <View style={fs.footerView}>
                <Image style={fs.footerImage}
                       source={{
                         uri: 'data:image/png;base64,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',
                         cache: 'only-if-cached'
                       }}/>
                <Text style={fs.footerText}>我的</Text>
              </View>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}

export default FixedLabel;
