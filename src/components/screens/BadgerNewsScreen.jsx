import { Text, ScrollView } from "react-native";
import { useContext} from "react";

import BadgerCard from '../components/BadgerCard.jsx';
import BadgerNewsContext from '../contexts/BadgerNewsContext.js'

function BadgerNewsScreen(props) {

    const {news, prefs} = useContext(BadgerNewsContext);
    const articles = news;
    const [bans, setBans] = prefs;
    const content = articles.filter(article => !article.tags.some(tag => bans.includes(tag)));

    return <ScrollView>
        {
            content.length == 0 ?
                <Text style={{fontSize: 36, textAlign: 'center'}}>The are no articles that fit your preferences!</Text>
            :
                content.map(article => {
                    return <BadgerCard key={article.id} {...article}/>
                })
        }
    </ScrollView>
}

export default BadgerNewsScreen;