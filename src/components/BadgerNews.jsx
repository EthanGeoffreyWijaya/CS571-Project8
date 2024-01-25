import { NavigationContainer } from '@react-navigation/native';
import { useState, useEffect } from 'react';
import { View } from 'react-native';

import BadgerTabs from './navigation/BadgerTabs';
import BadgerNewsContext from './contexts/BadgerNewsContext.js'

export default function BadgerNews(props) {
  const [bans, setBans] = useState([]);
  const [articles, setArticles] = useState([]);

  useEffect( () => {
      fetch( `https://cs571.org/api/f23/hw8/articles`, {
          headers:
          {
          "X-CS571-ID": 'bid_a097df77e7e0bc0c1641a3a7d5135d16e0a923442e4048efe0532f0d0dd65c85' 
          }
      })
      .then(res => res.json())
      .then(data => {
          setArticles(data);
      })
  }, []);

  return (
    <>
      <NavigationContainer>
        <BadgerNewsContext.Provider value={{news: articles, prefs: [bans, setBans]}}>
          <BadgerTabs/>
        </BadgerNewsContext.Provider>
      </NavigationContainer>
    </>
  );
}