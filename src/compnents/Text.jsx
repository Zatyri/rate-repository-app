import React from 'react';
import { Text as NativeText, StyleSheet } from 'react-native';
import theme from '../theme';

const styles = StyleSheet.create({
    text: {
      color: theme.colors.textPrimary,
      fontSize: theme.fontSizes.body,
      fontFamily: theme.fonts.main,
      fontWeight: theme.fontWeights.normal,
    },
    header: {
      color: theme.colors.primary,
      fontSize: theme.fontSizes.mainheader,
      fontFamily: theme.fonts.main,
      fontWeight: theme.fontWeights.bold,
      backgroundColor: theme.backgroundColor.header,
    },
    appBarButton: {
      color: theme.colors.primary,
      fontSize: theme.fontSizes.subheading,
      fontWeight: theme.fontWeights.bold,
    },
    colorTextSecondary: {
      color: theme.colors.textSecondary,
    },
    colorPrimary: {
      color: theme.colors.primary,
    },
    fontSizeSubheading: {
      fontSize: theme.fontSizes.subheading,
    },
    fontWeightBold: {
      fontWeight: theme.fontWeights.bold,
    },
    backgroundColor: {
      backgroundColor: theme.backgroundColor.header
    }
  });

  const Text = ({ header,appBarButton, color, fontSize, fontWeight, style, ...props }) => {
    const textStyle = [
      styles.text,      
      header === 'header' && styles.header,
      appBarButton === 'appBarButton' && styles.appBarButton,
      color === 'textSecondary' && styles.colorTextSecondary,
      color === 'primary' && styles.colorPrimary,
      fontSize === 'subheading' && styles.fontSizeSubheading,
      fontWeight === 'bold' && styles.fontWeightBold,
      style,
    ];
  
    return <NativeText style={textStyle} {...props} />;
  };
  

export default Text;
