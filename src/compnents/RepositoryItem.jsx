import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import Text from './Text';

const RepositoryItem = ({repository}) => {
    let {fullName, 
        description, 
        language, 
        forksCount, 
        stargazersCount,
        ratingAverage,
        reviewCount,
        ownerAvatarUrl
    } = repository;

    if(forksCount >= 1000){
        forksCount = Number.parseFloat(forksCount/1000).toFixed(1) + 'k';
    }
    if(stargazersCount >= 1000){
        stargazersCount = Number.parseFloat(stargazersCount/1000).toFixed(1) + 'k';
    }
    if(ratingAverage >= 1000){
        ratingAverage = Number.parseFloat(ratingAverage/1000).toFixed(1) + 'k';
    }
    if(reviewCount >= 1000){
        reviewCount = Number.parseFloat(reviewCount/1000).toFixed(1) + 'k';
    }


    return (
        <View style={styles.container}>
            <View style={styles.row} >
                <Image style={styles.logo} source={{uri: ownerAvatarUrl}} />
                <View>
                    <Text fontSize='subheading' fontWeight='bold' style={{paddingLeft: 10}} >{fullName}</Text>
                    <Text color='textSecondary' style={{paddingLeft: 10}}>{description}</Text>
                </View>
            </View>
            <Text style={styles.language}>{language}</Text> 
            <View style={styles.miniRow} >
                <View>
                    <Text color='textSecondary'>Stars</Text>
                    <Text fontWeight='bold'>{stargazersCount}</Text>
                </View>  
                <View>
                    <Text color='textSecondary'>Forks</Text>
                    <Text fontWeight='bold'>{forksCount}</Text>
                </View>  
                <View>
                    <Text color='textSecondary'>Reviews</Text>
                    <Text fontWeight='bold'>{reviewCount}</Text>
                </View>  
                <View>
                    <Text color='textSecondary'>Rating</Text>
                    <Text fontWeight='bold'>{ratingAverage}</Text>
                </View>  
            </View>       
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 10,
        marginBottom: 10
    },
    logo: {
        width: 50,
        height: 50
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',    
    },
    miniRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: "space-around"    
    },
    language:{ 
        margin: 5,
        padding: 5,  
        borderRadius: 10,       
    }

  });

export default RepositoryItem;
