import { useState, useEffect } from 'react';
import { ScrollView, View, Text, Image } from 'react-native';

import ArticleBody from '../components/ArticleBody';

function BadgerArticleScreen(props) {
    const details = props.route.params;

    const [output, setOutput] = useState(<Text style={{marginHorizontal: 10, marginBottom: 200}}>Loading content...</Text>);

    useEffect(() => {
        fetch(`https://cs571.org/api/f23/hw8/article?id=${details.fullArticleId}`, {
            headers:
            {
                "X-CS571-ID": 'bid_a097df77e7e0bc0c1641a3a7d5135d16e0a923442e4048efe0532f0d0dd65c85'
            }
        })
        .then(res => res.json())
        .then(data => setOutput(<ArticleBody {...data}/>))
    }, []);

    return <ScrollView>
        <Image key = "img" style={{
                width: 400,
                height: 400,
                alignSelf: 'center'
            }}
            source={{uri:`https://raw.githubusercontent.com/CS571-F23/hw8-api-static-content/main/articles/${details.img}`}}/>
        <Text style={{fontSize: 28, fontWeight: 'bold', margin: 10}}>{details.title}</Text>
        {output}
    </ScrollView>
}

export default BadgerArticleScreen;