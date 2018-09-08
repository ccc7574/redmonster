import { StyleSheet } from 'react-native';

export const colors = {
  black: '#1a1917',
  backgroundBlack:'#000000',
  gray: '#888888',
  white: '#aaa',
  background1: '#B721FF',
  background2: '#21D4FD',
  hlGray:'#1a1a1a',
  hlTitle:'#a5a5a5',
  hlYellow:'#D1B27A',
};

export default StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.black
  },
  mb: {
    marginBottom: 15,
    marginLeft:10,
    marginRight:10,
    marginTop:15,
    backgroundColor:'#1A1A1A',
    borderRadius:2,
    width:355,
    height:248,
  },
  productContent:{
    width:355,
    height:141,
    padding:14,
    flexDirection: "row"
  },
  productImageContainer:{
    width: 116,
    height:112,
  },
  productImage:{
    resizeMode: "cover",
    width: 116,
    flex: 1,
    height:112
  },
  productDetails:{
    flexDirection: "row",
  },
  productBuy:{
    paddingTop:22
  },
  productPrice:{
    fontSize:14,color:colors.gray,paddingRight:5
  },
  productPriceDetail:{
    fontSize:12,color:colors.hlYellow
  },
  productTitle:{
    fontSize:17,
    color:colors.hlTitle
  },
  header:{
    backgroundColor: colors.hlGray
  },
  container: {
    backgroundColor:colors.backgroundBlack,
    flex: 1,
  },
  gradient: {
    ...StyleSheet.absoluteFillObject
  },
  scrollview: {
    flex: 1
  },
  exampleContainerDark: {
    backgroundColor: colors.black
  },
  exampleContainerLight: {
    backgroundColor: 'white'
  },
  title: {
    paddingHorizontal: 30,
    backgroundColor: 'transparent',
    color: 'rgba(255, 255, 255, 0.9)',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  titleDark: {
    color: colors.black
  },
  subtitle: {
    marginTop: 5,
    paddingHorizontal: 30,
    backgroundColor: 'transparent',
    color: 'rgba(255, 255, 255, 0.75)',
    fontSize: 13,
    fontStyle: 'italic',
    textAlign: 'center'
  },
  slider: {
    marginTop: 15,
    overflow: 'visible' // for custom animations
  },
  sliderContentContainer: {
    paddingVertical: 10 // for custom animation
  },
  paginationContainer: {
    paddingVertical: 8
  },
  paginationDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 8
  },
  text: {
    alignSelf: "center",
    marginBottom: 7
  },
  footer:{
    backgroundColor: "#484c58"
  },
  headerB:{
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    marginRight: 15
  },
  headerIcon:{
    width:22,height:22
  },
  priceTag:{
    color:colors.hlYellow
  },
  buyButton:{
    width: 96,
    height: 38,
    borderWidth: 1,
    borderColor: '#d1b27a',
    borderRadius: 18
  },
  buyButtonTxt: {
    color: '#d1b27a',
    fontSize: 15,
  },
  iconStyle:{fontSize: 20, color: '#A5A5A5'},
  majorProduct:{fontSize: 13, color: '#3D3D3D',paddingLeft:12},
  majorProductStart:{borderLeftColor:'#b09872',borderLeftWidth:2,marginLeft:12},
  productDivider:{paddingLeft:12,height:0.1,borderWidth:0.3, borderColor:'#3D3D3D',paddingRight:12,marginLeft:12,marginRight:12},
  nextHour:{fontSize:11,color: '#3D3D3D'},
  priceDiv:{marginRight:12,marginLeft:12,top:12},
  // priceDetails:{top:10},
  priceNumber:{width:44,height:44,backgroundColor:'#d1b27a',borderRadius:2,display:'flex'},
  priceNumberDetails:{fontSize:30,lineHeight:44,color:'#1A1A1A',fontWeight: 'bold',textAlign:'center',justifyContent:'center'},

  fontGrey: {
    color: colors.gray
  },

  priceDetails: {
    top: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  moneyContainer: {
    flex: 10,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  moneyItem: {
    width: 40,
  },
  moneyItemBox: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    width: 40,
    height: 40,
    backgroundColor: colors.hlYellow,
    borderRadius: 10
  },
  moneyItemNum: {
    color: colors.black,
    fontSize: 26,
    textAlign: "center"
  },
  moneyItemUnit: {
    marginTop: 5,
    color: "#6d6d6d",
    fontSize: 14,
    textAlign: "center"
  },
  point: {
    color: colors.hlYellow,
    paddingBottom: 14,
    fontSize: 28,
    fontWeight: "bold"
  },
  priceIcon: {
    flex: 1,
    height: 42,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  deadline: {
    fontSize: 12,
    color: "#3D3D3D",
    textAlign: "right",
    paddingRight: 10
  },
  orderTitle: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderLeftColor: "#b09872",
    borderLeftWidth:2,
    marginLeft: 12,
    marginTop: 5
  },
  orderTime: {
    color: "#aaa",
    fontSize: 13,
    paddingRight: 10,
  },
  orderDetail: {
    position: "relative",
    margin: 10,
    // marginBottom: 0,
    backgroundColor: colors.hlGray,
    borderRadius: 5,
    paddingHorizontal: 15,
    paddingVertical: 10
  },
  orderBoxTitle: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  orderBoxTitleLeft: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-end",
  },
  orderGoods: {
    color: "#999",
    fontSize: 18,
  },
  orderGoodsNum: {
    color: "#999",
    fontSize: 13,
  },
  cancelOrder: {
    color: "#666",
    fontSize: 15,
    textDecorationLine: "underline"
  },
  orderPrice: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    marginVertical: 12
  },
  priceLeft: {
    color: colors.hlYellow,
    fontSize: 16
  },
  orderBottom: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  orderBTime: {
    color: colors.gray,
    fontSize: 14
  },
  orderStatusBox: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  orderStatus: {
    color: colors.white,
  },
  statusIcon: {
    marginLeft: 10,
    color: colors.gray,
    fontSize: 18
  },
  orderCompleteImg: {
    position: "absolute",
    top: 0,
    right: 0,
    height: 34,
    width: 47
  },

  bottomTxt: {
    textAlign: "center",
    color: "#308e83",
    fontSize: 15,
    marginTop: 15,
    marginBottom: 30
  }
});
