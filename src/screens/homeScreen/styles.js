import { StyleSheet } from 'react-native';

export const colors = {
  black: '#1a1917',
  backgroundBlack:'#000000',
  gray: '#888888',
  background1: '#B721FF',
  background2: '#21D4FD',
  hlGray:'#1a1a1a',
  hlTitle:'#a5a5a5',
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
    height:248
  },
  productContent:{
    width:326,
    height:141,
    padding:14
  },
  productImage:{
    resizeMode: "cover",
    width: 116,
    flex: 1,
    height:112,
  },
  productDetails:{

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
  exampleContainer: {
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
    color:"#b09872"
  },
  iconStyle:{fontSize: 20, color: '#A5A5A5'},
  majorProduct:{fontSize: 13, color: '#3D3D3D',paddingLeft:12},
  majorProductStart:{borderLeftColor:'#b09872',borderLeftWidth:2,marginLeft:12},
});
