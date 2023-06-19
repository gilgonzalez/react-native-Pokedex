import { useRef } from 'react';
import { Animated } from 'react-native';


export const useAnimation = () => {

  const opacity = useRef(new Animated.Value(0)).current;
  const position = useRef(new Animated.Value(0)).current;
  const scaleX = useRef(new Animated.Value(1)).current;
  const scaleY = useRef(new Animated.Value(1)).current;
  const translateX = useRef(new Animated.Value(0)).current;
  const translateY = useRef(new Animated.Value(0)).current;


  const fadeIn = (duration: number = 300) => {
    Animated.timing(
      opacity,
      {
        toValue: 1,
        duration,
        useNativeDriver: true,
      }
    ).start();
  };

  const fadeOut = () => {
    Animated.timing(
      opacity,
      {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }
    ).start();
  };


  const startMovingPosition = (initPosition: number, duration: number = 300) => {

    position.setValue(initPosition);

    Animated.timing(
      position,
      {
        toValue: 0,
        duration,
        useNativeDriver: true,
        // easing: Easing.bounce
      }
    ).start();
  };

  const bigger = (duration: number = 1000) => {
    Animated.parallel([
      Animated.timing(
        scaleX,
        {
          toValue: 1.4,
          duration,
          useNativeDriver: true,
          // easing: Easing.bounce
        }
      ),
      Animated.timing(
        scaleY,
        {
          toValue: 1.4,
          duration,
          useNativeDriver: true,
          // easing: Easing.bounce
        }
      ),
    ]).start();
  };
  const smaller = (duration: number = 1000) => {
    Animated.parallel([
      Animated.timing(
        scaleX,
        {
          toValue: 1,
          duration,
          useNativeDriver: true,
          // easing: Easing.bounce
        }
      ),
      Animated.timing(
        scaleY,
        {
          toValue: 1,
          duration,
          useNativeDriver: true,
          // easing: Easing.bounce
        }
      ),
    ]).start();
  };
  const moveIn = (duration: number = 1000) => {
    Animated.parallel([
      Animated.timing(
        translateX,
        {
          toValue: -70,
          duration,
          useNativeDriver: true,
          // easing: Easing.bounce
        }
      ),
      Animated.timing(
        translateY,
        {
          toValue: 30,
          duration,
          useNativeDriver: true,
          // easing: Easing.bounce
        }
      ),
    ]).start();
  };
  const moveOut = (duration: number = 1000) => {
    Animated.parallel([
      Animated.timing(
        translateX,
        {
          toValue: 0,
          duration,
          useNativeDriver: true,
          // easing: Easing.bounce
        }
      ),
      Animated.timing(
        translateY,
        {
          toValue: 0,
          duration,
          useNativeDriver: true,
          // easing: Easing.bounce
        }
      ),
    ]).start();
  };



  return {
    opacity,
    position,
    fadeIn,
    fadeOut,
    startMovingPosition,
    bigger,
    scaleX,
    smaller,
    scaleY,
    moveIn,
    moveOut,
    translateX,
    translateY,
  };
};
