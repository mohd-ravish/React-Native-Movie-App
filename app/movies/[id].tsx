import { useLocalSearchParams } from 'expo-router';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const onboarding = () => {
    const { id } = useLocalSearchParams();
    return (
        <View>
            <Text>Page: {id}</Text>
        </View>
    )
}

export default onboarding

const styles = StyleSheet.create({})