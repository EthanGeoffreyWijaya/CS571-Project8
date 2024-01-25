import { View, Text, Image, StyleSheet, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

function BadgerCard(props) {
    const navigation = useNavigation();

    const goToArticle = () => {
        navigation.push("Article", {
            img: props.img,
            title: props.title,
            tags: props.tags,
            fullArticleId: props.fullArticleId
        });
    }

    return <Pressable onPress = {goToArticle}>
        <View style={[styles.card]}>
            <Image style={{
                width: 300,
                height: 300,
                alignSelf: 'center'
            }}
            source={{uri:`https://raw.githubusercontent.com/CS571-F23/hw8-api-static-content/main/articles/${props.img}`}}/>
            <Text></Text>
            <Text style = {{fontSize : 18, fontWeight : 'bold'}}>{props.title}</Text>
        </View>
    </Pressable>
}

const styles = StyleSheet.create({
    card : {
        padding: 20,
        marginVertical: 15,
        marginHorizontal: 10,
        borderRadius: 25,
        backgroundColor: 'white',
        shadowOffset: {
            width: 4,
            height: 4,
          },
        elevation: 2,
        shadowOpacity: 0.2,
        shadowRadius: 1,
    }
})

export default BadgerCard;