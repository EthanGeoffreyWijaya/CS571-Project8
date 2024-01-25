import { Text, ScrollView} from "react-native";
import { useState, useEffect, useContext } from 'react';

import PrefSwitch from "../components/PrefSwitch";

import BadgerNewsContext from '../contexts/BadgerNewsContext.js';

function BadgerPreferencesScreen(props) {
    const {news, prefs} = useContext(BadgerNewsContext);
    const articles = news;
    const [bans, setBans] = prefs;
    const [allTags, setTags] = useState([]);

    useEffect(() => {
        setTags(Array.from(articles.reduce((d, c) => {
            d.add(...c.tags);
            return d;
        }, new Set())));
    }, []);

    const toggleBan = (ban) => {
        if (bans.includes(ban)) {
            setBans(bans => bans.filter(p => !(p === ban)));
        } else {
            setBans(bans => [...bans, ban]);
        }
    }

    return <ScrollView>
        {allTags.map(t => {
            return <PrefSwitch toggle={toggleBan} key={t} tag={t}/>
        })}
    </ScrollView>
}

export default BadgerPreferencesScreen;