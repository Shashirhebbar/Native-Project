import React from "react";
import {
    View,
    SafeAreaView,
    Text,
    StyleSheet,
    useColorScheme
} from 'react-native'

function AppPro(): JSX.Element{
    const isDarkMode = useColorScheme() === 'dark';
    return(
        <View style ={styles.container}>
            <Text style = {isDarkMode?styles.whiteText:styles.BlackText}>
                Hello World
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent: 'center'
    },
    whiteText:{
        color: "#FFFFFF"
    },
    BlackText:{
        color: "#6100FF"
    }
})

export default AppPro;