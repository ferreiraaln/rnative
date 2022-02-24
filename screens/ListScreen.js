import React from 'react';
import * as ExampleDataApi from '../apis/ExampleDataApi.js';
import { ScreenContainer, Touchable, withTheme } from '@draftbit/ui';
import { useIsFocused } from '@react-navigation/native';
import {
  ActivityIndicator,
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { Fetch } from 'react-request';

const ListScreen = props => {
  const { theme } = props;
  const { navigation } = props;

  return (
    <ScreenContainer hasSafeArea={false} scrollable={false}>
      <View pointerEvents={'auto'} />
      <View style={styles.ViewRN}>
        <ExampleDataApi.FetchListOfProductsGET>
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
              <FlatList
                data={fetchData}
                renderItem={({ item }) => {
                  const listData = item;
                  return (
                    <Touchable
                      onPress={() => {
                        try {
                          navigation.navigate('ProductViewScreen', {
                            sneakerId: listData?.id,
                          });
                        } catch (err) {
                          console.error(err);
                        }
                      }}
                    >
                      <View
                        style={[
                          styles.Viewfe,
                          { borderColor: theme.colors.divider },
                        ]}
                      >
                        <View style={styles.Viewv1}>
                          <Text
                            style={[
                              theme.typography.custom16,
                              { color: theme.colors.strong },
                            ]}
                          >
                            {listData?.title}
                          </Text>

                          <Text
                            style={[
                              theme.typography.custom18,
                              { color: theme.colors.primary },
                            ]}
                          >
                            {'$'}
                            {listData?.retailPrice}
                          </Text>
                        </View>
                        <Image
                          style={styles.Imageox}
                          resizeMode={'cover'}
                          source={{
                            uri: `${
                              item && item['media'] && item['media']['thumbUrl']
                            }`,
                          }}
                        />
                      </View>
                    </Touchable>
                  );
                }}
                numColumns={1}
              />
            );
          }}
        </ExampleDataApi.FetchListOfProductsGET>
      </View>
      <View pointerEvents={'auto'} />
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  Viewv1: {
    maxWidth: '65%',
    flexGrow: 1,
    flexShrink: 0,
  },
  Imageox: {
    width: 124,
    height: 72,
  },
  Viewfe: {
    flexDirection: 'row',
    paddingBottom: 4,
    borderBottomWidth: 1,
    marginTop: 6,
    marginBottom: 6,
    flexGrow: 1,
    flexShrink: 0,
  },
  ViewRN: {
    width: '100%',
    paddingLeft: 12,
    paddingRight: 12,
    marginTop: 12,
  },
});

export default withTheme(ListScreen);
