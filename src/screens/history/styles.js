const React = require("react-native");
const { Dimensions, Platform } = React;
const deviceHeight = Dimensions.get("window").height;

export default {
  container: {
    backgroundColor: "#FFF"
  },
  mb: {
    marginBottom: 15
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
    justifyContent: "space-between",
    marginRight: 15
  },
  priceTag:{
    color:"#b09872"
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
  }
};
