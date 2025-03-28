import React, { useEffect, useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Animated,
  TouchableOpacity
} from 'react-native';

export default function BattleText({
  message,
  onComplete
}) {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.sequence([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 300,
        useNativeDriver: false
      }),
      Animated.delay(1000)
    ]).start(() => {
      if (onComplete) {
        onComplete();
      }
    });
  }, [fadeAnim, onComplete]);

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onComplete}
      activeOpacity={0.9}
    >
      <Animated.View style={[styles.textContainer, { opacity: fadeAnim }]}>
        <Text style={styles.text}>{message}</Text>
      </Animated.View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    // backgroundColor: 'rgba(0,0,0,0.8)',
    backgroundColor: '#000',
  },
  textContainer: {
    // padding: 10
  },
  text: {
    color: '#FFF',
    fontSize: 14,
    lineHeight: 24,
    textAlign: "center",
    fontFamily: "pixel-font",
  }
});