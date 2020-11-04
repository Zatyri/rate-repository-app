import React from 'react';
import { View, StyleSheet, Image, TouchableOpacity, Button } from 'react-native';
import Text from './Text';
import { Link, useHistory } from 'react-router-native';
import * as Linking from 'expo-linking';

const RepositoryItem = ({repository, loading, showLink}) => {
    let history = useHistory();

    if(loading){
        return null;
    }

    if(repository.repository){
        repository = repository.repository;
    }

    
    let {
        id,
        fullName, 
        description, 
        language, 
        forksCount, 
        stargazersCount,
        ratingAverage,
        reviewCount,
        ownerAvatarUrl,
        url
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

    const handlePress = () => {
        history.push(`/${id}`);        
    };

    const linkToGithub = () => {
        Linking.openURL(url);
    };



    return (
        <View style={styles.container}>
            <Link component={TouchableOpacity} to={`/${id}`} onPress={handlePress} >
                <View style={styles.row} >
                    <Image style={styles.logo} source={{uri: ownerAvatarUrl}} />
                    <View>
                        <Text fontSize='subheading' fontWeight='bold' style={{paddingLeft: 10}} testID='nameField' >{fullName}</Text>
                        <Text color='textSecondary' style={{paddingLeft: 10}} testID='description'>{description}</Text>
                    </View>
                </View>
                <Text style={styles.language} testID='language'>{language}</Text> 
                <View style={styles.miniRow} >
                    <View>
                        <Text color='textSecondary' >Stars</Text>
                        <Text fontWeight='bold' testID='stars'>{stargazersCount}</Text>
                    </View>  
                    <View>
                        <Text color='textSecondary'>Forks</Text>
                        <Text fontWeight='bold' testID='forks'>{forksCount}</Text>
                    </View>  
                    <View>
                        <Text color='textSecondary'>Reviews</Text>
                        <Text fontWeight='bold' testID='review'>{reviewCount}</Text>
                    </View>  
                    <View>
                        <Text color='textSecondary'>Rating</Text>
                        <Text fontWeight='bold' testID='rating'>{ratingAverage}</Text>
                    </View>  
                </View>
                {showLink?<Button onPress={linkToGithub} title='Open GitHub'/>:null}
            </Link>
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
