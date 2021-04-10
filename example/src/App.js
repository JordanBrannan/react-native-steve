import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Steve from 'react-native-steve'

const topics = [
    {
        emoji: '🍻',
        text: 'Entertainment'
    },
    {
        emoji: '🐈',
        text: 'Cats'
    },
    {
        emoji: '🦾',
        text: 'Robots'
    },
    {
        emoji: '🎉',
        text: 'Party'
    },
    {
        emoji: '🌍',
        text: 'World'
    },
    {
        emoji: '📚',
        text: 'Books'
    },
    {
        emoji: '👘',
        text: 'Fashion'
    },
    {
        emoji: '📱',
        text: 'Applications'
    },
    {
        emoji: '📸',
        text: 'Photography'
    },
    {
        emoji: '🧠',
        text: 'Ideas'
    },
    {
        emoji: '⚔️',
        text: 'War'
    },
    {
        emoji: '💼',
        text: 'Business'
    },
    {
        emoji: '🎭',
        text: 'Theater'
    },
    {
        emoji: '📮',
        text: 'Job'
    }
]

export default function App() {
    const {
        topicContainer,
        topicText,
        title,
        container,
        steveContainer
    } = styles

    const renderTopic = ({ item }) => {
        const { emoji, text } = item
        return (
            <View style={topicContainer}>
                <Text>
                    {emoji}
                </Text>
                <Text style={topicText}>
                    {text}
                </Text>
            </View>
        )
    }

    return (
        <View style={container}>
            <Text style={title}>
                {'TOPICS TO EXPLORE'}
            </Text>
            <Steve
                isRTL={false}
                data={topics}
                itemSpacing={10}
                renderItem={renderTopic}
                itemStyle={{ margin: 5 }}
                containerStyle={steveContainer}
                keyExtractor={item => item.text}/>
        </View>
    )
}

App.displayName = 'App'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
        justifyContent: 'center'
    },
    topicContainer: {
        borderWidth: 1,
        borderColor: '#ecd9d9',
        borderBottomWidth: 2,
        borderRadius: 10,
        paddingHorizontal: 10,
        height: 38,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: '#FFF'
    },
    topicText: {
        fontSize: 14,
        fontWeight: '500',
        marginLeft: 5
    },
    title: {
        fontSize: 13,
        color: 'rgb(134,130,119)',
        marginBottom: 5,
        marginLeft: 15,
        fontWeight: '600'
    },
    steveContainer: { marginHorizontal: 5 }
})