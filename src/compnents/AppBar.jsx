import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';

import AppBarTab from './AppBarTab';

const AppBar = () => {
    return (
        <View style={styles.container}>
            <ScrollView horizontal={true}>
              <AppBarTab tabText='Repositories' link={"/"} />
              <AppBarTab tabText='Login' link={"/signin"} />
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
    // ...
  });

export default AppBar;
