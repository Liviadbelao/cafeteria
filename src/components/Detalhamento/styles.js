import { StyleSheet } from "react-native"
const styles = StyleSheet.create({
    container:{
        flex: 1,
       
        alignItems: "center",
        justifyContent: "center",
        
    },
   image:{
    width: "80%",
    borderRadius:100,
    height: 300,
    borderColor: "#A52A2A",
    borderWidth: 2,
    marginTop:20,
    
   },
  texto:{
    fontSize:40,
    textAlign: "center",
    color: "#A52A2A",
  },
  texto2:{
    width: "80%",
   marginTop: 20,
   borderColor: "#A52A2A",
   borderWidth: 2,
   padding:3,
   },
   container2: {
    padding: 10,
    backgroundColor: "#A52A2A",
    width: "90%",
    marginTop: 40,
    marginLeft: 15,
    borderRadius: 8,
  },
  texto3: {
   
    color: "white",
    textAlign: "center",
    fontSize: 16,
  },
    
})
export default styles;