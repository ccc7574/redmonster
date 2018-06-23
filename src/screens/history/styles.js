const React = require("react-native");
const { Dimensions, Platform } = React;
const deviceHeight = Dimensions.get("window").height;
const goldColor = "#DABB84";

export default {
  container: {
    // backgroundColor: "#FFF",
    backgroundColor: "#000",
  },
  firstHeader:{
    backgroundColor:"#1a1a1a"
  },
  iconStyle: {
    fontSize: 20,
    color: "#999"
  },
  mb: {
    marginBottom: 15,
    backgroundColor: "#000",
  },
  imageContainer: {
    flex: 1,
    width: null,
    height: null
  },
  logoContainer: {
    flex: 1,
    marginTop: deviceHeight / 8,
    marginBottom: 30
  },
  logo: {
    position: "absolute",
    left: Platform.OS === "android" ? 40 : 50,
    top: Platform.OS === "android" ? 35 : 60,
    width: 280,
    height: 100
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
    justifyContent: "space-around",
    marginRight: 15
  },
  priceTag:{
    color: goldColor
  },
  chartContainer:{
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
  },
  chart:{
    width: 200,
    height: 200,
  },
  footerButton: {
    width: 93, height: 49
  },
  footerImageHL: {
    width: 25, height: 17
  },
  footerImage: {
    width: 20, height: 20
  },
  footerText: {
    fontSize: 10, paddingTop: 6, color: "#7f7f7f"
  },
  footerTab: {
    backgroundColor: "#1a1a1a",
    borderTopWidth: 0
  },
  buyBox: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#666"
  },
  fontGold: {
    color: goldColor,
  },
  fontWhite: {
    color: "#999"
  },
  fontGrey: {
    color: "#7F7F7F"
  },
  buyButton: {
    width: 96,
    height: 38,
    borderWidth: 1,
    borderColor: goldColor,
    borderRadius: 18
  },
  buyButtonTxt: {
    color: goldColor,
    fontSize: 15,
  },
  moneyContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 30,
  },
  moneyItem: {
    width: 40,
    marginLeft: 5
  },
  moneyItemBox: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    width: 40,
    height: 40,
    backgroundColor: "#1a1a1a",
    borderRadius: 10
  },
  moneyItemNum: {
    color: goldColor,
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
    color: goldColor,
    marginLeft: 5,
    paddingBottom: 14,
    fontSize: 28,
    fontWeight: "bold"
  },
  chartBox: {
    padding: 0,
  },
  chartTitle: {
    color: "#666",
  },
  timeSection: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  timeLineActive: {
    height: 28,
    width: 50,
    padding: 0,
    paddingTop: 0,
    paddingBottom: 0,
    marginLeft: 8,
    borderRadius: 14,
    borderColor: goldColor,
    borderWidth: 1,
    backgroundColor: "transparent",
  },
  timeLine: {
    height: 28,
    width: 50,
    padding: 0,
    paddingTop: 0,
    paddingBottom: 0,
    marginLeft: 8,
    borderRadius: 14,
    borderWidth: 0,
    backgroundColor: "transparent",
  },
  timeLineTxt: {
    color: "#666",
    fontSize: 16,
  },
  timeLineTxtActive: {
    color: goldColor,
    fontSize: 16,
  },
};
