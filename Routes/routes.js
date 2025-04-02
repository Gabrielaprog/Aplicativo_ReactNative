import { NavigationContainer } from "@react-navigation/native";

import { createNativeStackNavigator} from "@react-navigation/native-stack";

const Stack=createNativeStackNavigator()

import AlbumUsers from "../src/app/AlbumUsers";
import UserPhotos from "../src/app/UserPhotos";


export default function Routes () {
    return(
        
            <Stack.Navigator>
                <Stack.Screen

                name="AlbumUsers"
                component={AlbumUsers}
                options={{headerShown: false}}

                />

                <Stack.Screen

                name="UserPhotos"
                component={UserPhotos}
                options={{headerShown: false}}

                />

             
            </Stack.Navigator>
       
    )
}