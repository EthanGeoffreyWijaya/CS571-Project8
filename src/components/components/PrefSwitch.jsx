import { Text, View, Switch } from 'react-native';
import { useContext, useState } from 'react';

function PrefSwitch(props) {
    const [on, setOn] = useState(true);
    
    return <View style={{margin: 15}}>
        <Text style={{textTransform: 'capitalize', textAlign: 'center', fontSize: 20, fontWeight: 'bold'}}>{props.tag}</Text>
        <Switch style={{alignSelf: 'center'}} onValueChange={() => {
            props.toggle(props.tag)
            setOn(on => !on);
        }} value={on}/>
    </View> 
}

export default PrefSwitch;