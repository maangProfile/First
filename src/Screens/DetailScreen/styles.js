import { StyleSheet } from "react-native";
import { Colors } from "../../Config/Colors";
export const CHEVRON_SIZE = 25;
export default StyleSheet.create({
    details:{
        paddingTop:100,
        marginLeft:60
    },
    details1:{
        textAlign:'center',
        paddingTop:50,
        backgroundColor:'#f9fafb',
    },
    details2:{
      textAlign:'center',
      paddingTop:20,
      backgroundColor:'#f9fafb',
      paddingBottom:20,
  },
    heading:{
        marginLeft:25 ,
       color:'#9a9a9a',
    },
    text:{
        fontSize:17,
        color:'black',
        paddingVertical:8,
        marginLeft:25,
    },

    horizontalLine: {
        borderBottomColor: 'black',
        borderBottomWidth: 2,
        marginVertical: 5,
        borderColor:'skyblue',
      },
      mailIcon: {
        color:'#007AFF',
        fontSize: 20,
       
      },
    
      phoneIcon: {
        color:'#007AFF',
        fontSize: 20,
        marginRight: 5,
       
      },
    
      messageIcon: {
        color:'#007AFF',
        fontSize: 20,
        flex:1,
        alignSelf: 'flex-end',
      },
      
});
