import React, { useState } from 'react';
import { ActivityIndicator, Animated, ImageErrorEventData, NativeSyntheticEvent, StyleProp, View, ViewStyle } from 'react-native';
import { useAnimation } from '../hooks/useAnimation';


interface Props {
    uri: string;
  style?: StyleProp<ViewStyle>;

}

export const FadeInImageStatic = ({ uri, style = {} } : Props) => {

    const { opacity, fadeIn } = useAnimation();
    const [ isLoading, setIsLoading ] = useState( true );

    const finishLoading = () => {
        setIsLoading(false);
        fadeIn();
  };
    const onError = (err: NativeSyntheticEvent<ImageErrorEventData>) => {
      setIsLoading(false);
      console.log(err);
    };

    return (
        <View style={{
            justifyContent: 'center',
            alignItems: 'center',
            ...style as any,
        }}>

            {
                isLoading &&
                    <ActivityIndicator
                        style={{ position: 'absolute' }}
                        color="grey"
                        size={ 30 }
                    />
            }

            <Animated.Image
                source={{ uri }}
                onError={ onError }
                onLoad={ finishLoading }
                style={{
                    ...style as any,
                  opacity,
                }}
            />

        </View>
    );
};
