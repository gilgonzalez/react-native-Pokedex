import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Animated, ImageErrorEventData, NativeSyntheticEvent, StyleProp, View, ViewStyle } from 'react-native';
import { useAnimation } from '../hooks/useAnimation';


interface Props {
    uri: string;
  style?: StyleProp<ViewStyle>;
  scrolled: boolean;
}

export const FadeInImage = ({ uri, style = {}, scrolled } : Props) => {

    const { opacity, fadeIn, bigger, scaleX, smaller, scaleY, moveIn,moveOut, translateX, translateY } = useAnimation();
  const [isLoading, setIsLoading] = useState(true);

    const finishLoading = () => {
        setIsLoading(false);
        fadeIn();
  };
  useEffect(() => {
    if (scrolled) {
      bigger();
      moveIn();
    } else {
      smaller();
      moveOut();
    }
  },[scrolled]);

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
                  transform: [{ scaleX }, { scaleY }, { translateX }, {translateY}],
                }}
            />

        </View>
    );
};
