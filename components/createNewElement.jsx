
//p.18

import { View } from "react-native";

class MyNewElement extends React.Component {
    render () {
        return (
       /*  React.createElement (View,{}, 
                                     React.createElement(Text, {}, "Hello")) */
            // in 2 khate bala= 3 khat paiin / (type, props, children)  view=div
        <View>
            <Text> Hello</Text>
        </View>
        )
    }
}