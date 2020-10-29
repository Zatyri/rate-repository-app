import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import useSignOut from '../hooks/useSignOut';

import AppBarTab from './AppBarTab';
import SignOut from './SignOut';

const AppBar = () => {
    const [user, signOut] = useSignOut();    

    return (
        <View style={styles.container}>
            <ScrollView horizontal={true}>
              <AppBarTab tabText='Repositories' link={"/"} />
              {!user ? <AppBarTab tabText='Login' link={"/signin"} /> : <SignOut tabText='Logout' link={'/'} signOut={signOut}/>}
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {      
      backgroundColor: 'rgb(64,64,64)',
      display: 'flex',      
      flexDirection: 'row',
      justifyContent: "space-around",
      alignItems: "center",
    },
  });

export default AppBar;
