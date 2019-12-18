import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

class Home extends React.Component {

    render() {
        const navigation = this.props.navigation

        return (
            <View style={styles.container}>
                <Button
                    title="Navigate to editor"
                    onPress={() => { navigation.navigate('tweetEditor') }}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default Home