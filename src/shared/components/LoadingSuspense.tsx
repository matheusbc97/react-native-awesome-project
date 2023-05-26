import {PropsWithChildren, Suspense} from 'react';
import {SafeAreaView, Text, ActivityIndicator, View} from 'react-native';

export interface ILoadingSuspense {}

export function LoadingSuspense({
  children,
}: PropsWithChildren<ILoadingSuspense>) {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Suspense
        fallback={
          <View style={{alignSelf: 'center'}}>
            <ActivityIndicator />
            <Text>loading...</Text>
          </View>
        }>
        {children}
      </Suspense>
    </SafeAreaView>
  );
}
