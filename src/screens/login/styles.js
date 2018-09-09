import {colors} from "../homeScreen/styles";

export default {
  flex: 1,
  container: {
    backgroundColor: "#000"
  },
  header: {
    marginTop: 50,
    marginBottom: 30,
    fontSize: 40,
    textAlign: "center",
    color: "#4688F1",
    backgroundColor:"#1a1a1a"
  },
  headerIcon:{
    width:22,height:22
  },
    title: {
        paddingHorizontal: 30,
        backgroundColor: 'transparent',
        color: 'rgba(255, 255, 255, 0.9)',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center'
    },
  icon: {
    width: 20,
    color:"#CCAD75"
  },
  header:{
    backgroundColor: colors.hlGray
  },
  input: {
    color: "#eee"
  },
  iconStyle:{fontSize: 20, color: '#A5A5A5'},
  itemRow: {
    height: 60,
  },
  fntText:{
    fontSize:15,
    color:'#848484'
  },
 btnLogin:{
     marginTop: 40,
     marginLeft:57,
     height:50,
     backgroundColor:"#CCAD75"
 },
 shareBox:{
     display:'flex',
     flex:1,
     flexDirection:'row',
     height:42,
     marginTop:18,
     justifyContent:'center'
 },
 shareIcon:{
     display:'flex',
     flexDirection:'row',
     justifyContent:'space-between',
     alignItems:'center'
 }

};
