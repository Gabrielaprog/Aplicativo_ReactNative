import { TouchableOpacity, Text } from "react-native"
import { styles } from "./styles"
import { router} from "expo-router"
export function Button() {

    
    function handleNavigateUsers(){
       router.replace("../ListUsers")
     

    }
    return(
        <TouchableOpacity style={styles.button} onPress={handleNavigateUsers} >
            <Text style={styles.title}>
                Começar
            </Text>
        </TouchableOpacity>

    )

}