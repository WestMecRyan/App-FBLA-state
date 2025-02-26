import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Animated
} from 'react-native';

export default function MonsterDisplay({ 
  monster, 
  isEnemy = false,
  animatedHealth
}) {
  const healthPercentage = Animated.multiply(
    animatedHealth.interpolate({
      inputRange: [0, monster.maxHealth],
      outputRange: [0, 1],
      extrapolate: 'clamp'
    }),
    100
  );

  return (
    <View style={[
      styles.container,
      isEnemy ? styles.enemyContainer : styles.playerContainer
    ]}>
      <View style={styles.infoContainer}>
        <Text style={styles.name}>{monster.name}</Text>
        <Text style={styles.level}>Lv.{monster.level}</Text>
        <View style={styles.healthBarContainer}>
          <Animated.View
            style={[
              styles.healthBar,
              {
                width: healthPercentage.interpolate({
                  inputRange: [0, 100],
                  outputRange: ['0%', '100%']
                }),
                backgroundColor: healthPercentage.interpolate({
                  inputRange: [20, 50],
                  outputRange: ['#F44336', '#4CAF50'],
                  extrapolate: 'clamp'
                })
              }
            ]}
          />
        </View>
        <Text style={styles.healthText}>
          {monster.health}/{monster.maxHealth}
        </Text>
      </View>
      <Image
        source={monster.image}
        style={[
          styles.monsterImage,
          isEnemy ? styles.enemyImage : styles.playerImage
        ]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    width: '100%',
    alignItems: 'center'
  },
  enemyContainer: {
    alignItems: 'flex-start'
  },
  playerContainer: {
    alignItems: 'flex-end'
  },
  infoContainer: {
    backgroundColor: 'rgba(255,255,255,0.9)',
    borderRadius: 10,
    padding: 10,
    minWidth: 150
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  level: {
    fontSize: 14,
    color: '#666'
  },
  healthBarContainer: {
    height: 8,
    backgroundColor: '#DDD',
    borderRadius: 4,
    marginVertical: 5,
    overflow: 'hidden'
  },
  healthBar: {
    height: '100%',
    backgroundColor: '#4CAF50'
  },
  healthText: {
    fontSize: 12,
    color: '#666',
    textAlign: 'right'
  },
  monsterImage: {
    width: 120,
    height: 120,
    resizeMode: 'contain'
  },
  enemyImage: {
    transform: [{ scaleX: -1 }]
  },
  playerImage: {
    transform: [{ scaleX: 1 }]
  }
});