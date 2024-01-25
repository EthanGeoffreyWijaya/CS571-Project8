import { Animated, View, Text, Linking, Pressable } from 'react-native';
import { useRef, useEffect } from 'react';

function ArticleBody(props) {
    const fadeAnim = useRef(new Animated.Value(0));

    useEffect(() => {
        Animated.timing(fadeAnim.current, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: true
        }).start()
      }, [])

    return <Animated.View style={{opacity: fadeAnim.current}}>
        <Text key="auth" style={{fontSize: 16, margin:10}}>Written by {props.author} on {props.posted}</Text>
        <Pressable onPress={() => Linking.openURL(props.url)}>
          <Text key="link" style={{fontSize: 16, color: 'blue', margin:10}}>Read full article here.</Text>
          </Pressable>
        <Text key="space"></Text>
        {
            props.body.map((p, i) => {
                    return <Text key={i} style={{fontSize: 16, marginHorizontal: 10}}>{p}</Text>
            })
        }
    </Animated.View>
}

export default ArticleBody;