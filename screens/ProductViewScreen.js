import React from 'react';
import * as ExampleDataApi from '../apis/ExampleDataApi.js';
import { Button, ScreenContainer, withTheme } from '@draftbit/ui';
import { useIsFocused } from '@react-navigation/native';
import {
  ActivityIndicator,
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { Fetch } from 'react-request';

const ProductViewScreen = props => {
  const { theme } = props;

  return (
    <ScreenContainer hasSafeArea={false} scrollable={true}>
      <View pointerEvents={'auto'} />
      <View style={styles.VieweJ} pointerEvents={'auto'}>
        <ExampleDataApi.FetchGetProductGET
          id={
            props.route?.params?.sneakerId ??
            'c116b14f-8f00-454b-915c-f3f51c7a297c'
          }
        >
          {({ loading, error, data, doFetch }) => {
            const fetchData = data;
            if (!fetchData || loading) {
              return <ActivityIndicator />;
            }

            if (error) {
              return (
                <Text style={{ textAlign: 'center' }}>
                  There was a problem fetching this data
                </Text>
              );
            }

            return (
              <>
                <ImageBackground
                  style={styles.ImageBackgroundTT}
                  resizeMode={'contain'}
                  source={{
                    uri: `${
                      data && data['media'] && data['media']['imageUrl']
                    }`,
                  }}
                  backgroundColor={theme.colors.surface}
                />
                <Text
                  style={[
                    theme.typography.headline4,
                    styles.Text_6Y,
                    { color: theme.colors.strong },
                  ]}
                >
                  {fetchData?.title}
                </Text>

                <Text
                  style={[
                    theme.typography.subtitle2,
                    styles.Textxe,
                    { color: theme.colors.medium },
                  ]}
                >
                  {'Year: '}
                  {fetchData?.year}
                </Text>

                <Text
                  style={[
                    theme.typography.headline4,
                    styles.TextLN,
                    { color: theme.colors.primary },
                  ]}
                >
                  {'$'}
                  {fetchData?.retailPrice}
                </Text>
              </>
            );
          }}
        </ExampleDataApi.FetchGetProductGET>
      </View>

      <View style={styles.ViewIc} pointerEvents={'auto'}>
        <Button type={'solid'}>{'Add Item'}</Button>
      </View>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  ImageBackgroundTT: {
    height: 300,
    marginLeft: 6,
    marginRight: 6,
    maxHeight: 300,
  },
  Text_6Y: {
    textAlign: 'center',
    marginLeft: 12,
    marginRight: 12,
  },
  Textxe: {
    marginLeft: 12,
    marginRight: 12,
    textAlign: 'center',
  },
  TextLN: {
    textAlign: 'center',
    marginLeft: 12,
    marginRight: 12,
  },
  VieweJ: {
    flexGrow: 1,
    flexShrink: 0,
    justifyContent: 'center',
  },
  ViewIc: {
    flexGrow: 1,
    flexShrink: 0,
    maxHeight: '25%',
    justifyContent: 'center',
    marginRight: 12,
    marginLeft: 12,
  },
});

export default withTheme(ProductViewScreen);
