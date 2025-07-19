import { icons } from '@/constants/icons';
import React from 'react';
import { Image, TextInput, TouchableOpacity } from 'react-native';

interface Props {
    onPress?: () => void;
    placeholder: string;
}

const SearchBar = ({ onPress, placeholder }: Props) => {
    return (
        <TouchableOpacity
            className='flex-row items-center bg-dark-200 rounded-full px-5 py-4'
            onPress={onPress}
            activeOpacity={0.8}
        >
            <Image source={icons.search} className="size-5" resizeMode="contain" tintColor="#ab8bff" />
            <TextInput
                placeholder={placeholder}
                value=''
                onChange={() => { }}
                placeholderTextColor='#a8b5db'
                className='flex-1 ml-2 text-white'
                editable={false}
                pointerEvents="none"
            />
        </TouchableOpacity>
    )
}

export default SearchBar