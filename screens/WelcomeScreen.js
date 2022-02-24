import React from 'react';
import { ScreenContainer, withTheme } from '@draftbit/ui';
import { Image, StatusBar, StyleSheet } from 'react-native';

const WelcomeScreen = props => {
  const { theme } = props;

  React.useEffect(() => {
    StatusBar.setBarStyle('light-content');
  }, []);

  return (
    <ScreenContainer
      style={{ backgroundColor: theme.colors.medium }}
      hasSafeArea={false}
      scrollable={true}
    >
      <Image
        style={styles.ImageS2}
        source={{
          uri: 'https://media-exp1.licdn.com/dms/image/C4E16AQErdEKQPhKvvg/profile-displaybackgroundimage-shrink_350_1400/0/1628035611053?e=1651104000&v=beta&t=f2QgCAnKKVR3c_F-cpgbFL_h8m2NfvFeF0ONXSSzYkQ',
        }}
        resizeMode={'cover'}
      />
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  ImageS2: {
    width: '100%',
    height: 250,
    marginTop: 0,
    marginLeft: '0%',
    marginBottom: 0,
    marginRight: '0%',
    minWidth: '0%',
  },
});

export default withTheme(WelcomeScreen);
