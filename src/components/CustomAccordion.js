import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native'
import React, { useState } from 'react';
import { DATA } from '../data/Data';
// import {  } from 'react-native-reanimated';

const CustomAccordion = (props) => {
    const [expanded, setExpanded] = useState(false);

    const toggleExpanded = (index) => {
        console.log(index)
        // setExpanded(!expanded)
    }
    return (
        <View>
            <Text style={styles.subTitle} >Accordion</Text>
            <FlatList
                data={items}
                renderItem={({ item, index }) => {
                    return (
                        <View>
                            <TouchableOpacity key={index} onPress={() => toggleExpanded(index)} >
                                <Text style={styles.header} >
                                    {item.category}
                                </Text>
                            </TouchableOpacity>
                            {expanded ?
                                <View>
                                    <Text style={styles.sub} >
                                        {item.subCat}
                                    </Text>
                                </View>
                                : null}
                        </View>
                    )
                }}
                keyExtractor={(item) => item.id} />
        </View>
    )
}
//how to make a accordion in react native reanimated library ?
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignSelf: 'center'
    },
    title: {
        fontWeight: 'bold',
        fontSize: 30,
        color: 'black',
        padding: 10,
        margin: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    subTitle: {
        fontWeight: 'bold',
        fontSize: 25,
        color: 'black',
        padding: 8,
        margin: 5,
    },
    header: {
        backgroundColor: '#ff8000',
        padding: 10,
        fontWeight: 'bold',
        justifyContent: 'center',
        alignSelf: 'center',
        fontSize: 20,
        color: 'white',
        width: '96%',
        borderRadius: 15,
        margin: 5
    },
    sub: {
        backgroundColor: '#d3d3d3',
        width: '93%',
        justifyContent: 'center',
        alignSelf: 'center',
        padding: 10,
        borderRadius: 10,
    }
});

export default CustomAccordion;