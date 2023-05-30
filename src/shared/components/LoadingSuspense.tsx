import {PropsWithChildren, Suspense} from 'react';
import {SafeAreaView, ActivityIndicator} from 'react-native';
import {Center} from './Center';
import {Text} from './Text';

export interface ILoadingSuspense {}

export function LoadingSuspense({
  children,
}: PropsWithChildren<ILoadingSuspense>) {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Suspense
        fallback={
          <Center>
            <ActivityIndicator />
            <Text paddingTop="s">Carregando...</Text>
          </Center>
        }>
        {children}
      </Suspense>
    </SafeAreaView>
  );
}
