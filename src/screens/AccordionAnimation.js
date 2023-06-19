import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native'
import React, { useState } from 'react';
import { DATA } from '../data/Data';
import Animation from 'react-native-reanimated';

const AccordionAnimation = (props) => {
    const [expanded, setExpanded] = useState(null);

    const toggleExpanded = (index) => {
        if (expanded) {
            return setExpanded(null)
        } else {
            setExpanded(index);
        }
    }
    return (
        <View>
            <Text style={styles.title} >React Native Animation</Text>
            <Text style={styles.subTitle} >Accordion</Text>
            <FlatList
                data={DATA}
                renderItem={({ item, index }) => {
                    return (
                        <View>
                            <TouchableOpacity id={item.id} onPress={() => toggleExpanded(index)} >
                                <Text style={styles.header} >
                                    {item.category}
                                </Text>
                            </TouchableOpacity>
                            {expanded == item.id ?
                                // <Animated.View
                                <View>
                                    {/* entering = {LightSpeedInLeft} > */}
                                    <Text style={styles.sub} >{item.subCat}</Text>
                                </View>
                                // </Animated.View>
                                : null
                            }
                        </View>
                    )
                }
                }
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

export default AccordionAnimation;