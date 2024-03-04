import { View, Image  } from "react-native";
import styles from "./styles";
const Header = ()=>{
    return(
 <View style={styles.container}>
   <Image style={styles.img} source={require('../../../assets/Design_sem_nome__4_-removebg-preview.png')}/>
 </View>
    )
}
export default Header;