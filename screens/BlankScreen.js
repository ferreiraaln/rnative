import React from 'react';
import { ScreenContainer, withTheme } from '@draftbit/ui';
import { StyleSheet, Text } from 'react-native';

const BlankScreen = props => {
  const { theme } = props;

  return (
    <ScreenContainer>
      <Text style={[styles.Textti, { color: theme.colors.strong }]}>
        {'Test\n'}
      </Text>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  Textti: {
    fontFamily: 'Aldrich_400Regular',
  },
});

export default withTheme(BlankScreen);
