import { StyleSheet } from "react-native";
import Colors from "../../Config/Colors";

export const  CHEVRON_SIZE =25
export default StyleSheet.create({
       avatar:{
        width:40,
        height:40,
        borderRadius:20,
        marginRight:10,
       },
       row:{
        alignItems:'center',
        flexDirection:'row',
        paddingHorizontal:15,
        paddingVertical:8

       },
       name:{
        fontSize:18,
        fontWeight:'500',
        color:Colors.primarytext,
       } ,  
       email:{
        fontSize:16,
        fontWeight:'400',
        color:Colors.secondarytext,
       },
       chevron:{
        alignSelf:'flex-end'
       },
       chevroncontainer:{
        flex:1,
       }

});