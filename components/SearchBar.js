import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, FlatList} from 'react-native';

const SearchBar = (props) => {
    const [searchValue, setSearchValue] = useState("");
    
    const handleInputChange = (text) => {
        setSearchValue(text);
    };

    const filteredItems = props.items.filter((item) => {
        return item.toLowerCase().startsWith(searchValue.toLowerCase());
    })
    
    return (
        <View>
            <TextInput
                style={styles.input}
                value={searchValue}
                onChangeText={handleInputChange}
                placeholder="Start typing medication name"
            />
            {searchValue !== "" && (
                <FlatList
                    style={styles.itemsList}
                    data={filteredItems}
                    keyExtractor={(item) => item}
                    renderItem={({ item }) => <Text style={styles.item}>{item}</Text>}
                />
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 30,
        marginBottom: 0,
        paddingHorizontal: 10,
        backgroundColor: 'white',
        fontSize: 20,
    },
    itemsList: {
        paddingHorizontal: 10,
        marginHorizontal: 30,
    },
    item: {
        paddingVertical: 10,
        fontSize: 24,
    }
});

export default SearchBar;
