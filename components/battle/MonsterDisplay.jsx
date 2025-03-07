// import React from 'react';
// import {
//   View,
//   Text,
//   StyleSheet,
//   Image,
//   Animated
// } from 'react-native';

// export default function MonsterDisplay({ 
//   monster, 
//   isEnemy = false,
//   animatedHealth
// }) {
//   const healthPercentage = Animated.multiply(
//     animatedHealth.interpolate({
//       inputRange: [0, monster.maxHealth],
//       outputRange: [0, 1],
//       extrapolate: 'clamp'
//     }),
//     100
//   );

//   return (
//     <View style={[
//       styles.container,
//       isEnemy ? styles.enemyContainer : styles.playerContainer
//     ]}>
//       <View style={styles.infoContainer}>
//         <Text style={styles.name}>{monster.name}</Text>
//         <Text style={styles.level}>Lv.{monster.level}</Text>
//         <View style={styles.healthBarContainer}>
//           <Animated.View
//             style={[
//               styles.healthBar,
//               {
//                 width: healthPercentage.interpolate({
//                   inputRange: [0, 100],
//                   outputRange: ['0%', '100%']
//                 }),
//                 backgroundColor: healthPercentage.interpolate({
//                   inputRange: [20, 50],
//                   outputRange: ['#F44336', '#4CAF50'],
//                   extrapolate: 'clamp'
//                 })
//               }
//             ]}
//           />
//         </View>
//         <Text style={styles.healthText}>
//           {monster.health}/{monster.maxHealth}
//         </Text>
//       </View>
//       <Image
//         source={monster.image}
//         style={[
//           styles.monsterImage,
//           isEnemy ? styles.enemyImage : styles.playerImage
//         ]}
//       />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     padding: 10,
//     width: '100%',
//     alignItems: 'center'
//   },
//   enemyContainer: {
//     alignItems: 'flex-start'
//   },
//   playerContainer: {
//     alignItems: 'flex-end'
//   },
//   infoContainer: {
//     backgroundColor: 'rgba(255,255,255,0.9)',
//     borderRadius: 10,
//     padding: 10,
//     minWidth: 150
//   },
//   name: {
//     fontSize: 18,
//     fontWeight: 'bold'
//   },
//   level: {
//     fontSize: 14,
//     color: '#666'
//   },
//   healthBarContainer: {
//     height: 8,
//     backgroundColor: '#DDD',
//     borderRadius: 4,
//     marginVertical: 5,
//     overflow: 'hidden'
//   },
//   healthBar: {
//     height: '100%',
//     backgroundColor: '#4CAF50'
//   },
//   healthText: {
//     fontSize: 12,
//     color: '#666',
//     textAlign: 'right'
//   },
//   monsterImage: {
//     width: 120,
//     height: 120,
//     resizeMode: 'contain'
//   },
//   enemyImage: {
//     transform: [{ scaleX: -1 }]
//   },
//   playerImage: {
//     transform: [{ scaleX: 1 }]
//   }
// });





import { View, Text, Image, StyleSheet, Animated } from "react-native"

export default function MonsterDisplay({ monster, isEnemy = false, animatedHealth }) {
  if (!monster) return null

  // Calculate health percentage for the health bar
  const healthPercentage = (animatedHealth._value / monster.maxHealth) * 100
  const healthBarWidth = {
    width: animatedHealth.interpolate({
      inputRange: [0, monster.maxHealth],
      outputRange: ["0%", "100%"],
      extrapolate: "clamp",
    }),
  }

  // Calculate exp percentage for the exp bar (only for player monsters)
  const expPercentage = !isEnemy ? (monster.exp / monster.expToNextLevel) * 100 : 0

  return (
    <View style={styles.main}>
      <View style={[styles.container, isEnemy ? styles.enemyContainer : styles.playerContainer]}>
        <View style={styles.infoContainer}>
          <View style={styles.textContainer}>
            <Text style={styles.name}>{monster.name}</Text>
            {/* <Text style={styles.level}>Lv. {monster.level}</Text> */}
            <Text style={isEnemy ? styles.enemyLevel : styles.playerLevel}>Lv. {monster.level}</Text>
          </View>

          {!isEnemy && (
            <View style={styles.expDisplay}>
              <Text style={styles.expText}>
                EXP: {monster.exp}/{monster.expToNextLevel}
              </Text>
              <View style={styles.expBarContainer}>
                <View style={[styles.expBar, { width: `${expPercentage}%` }]} />
              </View>
            </View>
          )}

          {isEnemy && (
            <Text style={styles.enemyExp}>.</Text>
          )}


          {/* Health Bar */}
          <View style={styles.healthBarContainer}>
            <Animated.View
              style={[
                styles.healthBar,
                healthBarWidth,
                healthPercentage > 50
                  ? styles.healthHigh
                  : healthPercentage > 20
                    ? styles.healthMedium
                    : styles.healthLow,
              ]}
            />
          </View>
          <Text style={styles.healthText}>
            {Math.floor(animatedHealth._value)}/{monster.maxHealth}
          </Text>

          {/* Exp Bar - Only show for player's monster */}
          {/* {!isEnemy && (
            <View style={styles.expDisplay}>
              <Text style={styles.expText}>
                EXP: {monster.exp}/{monster.expToNextLevel}
              </Text>
              <View style={styles.expBarContainer}>
                <View style={[styles.expBar, { width: `${expPercentage}%` }]} />
              </View>
            </View>
          )} */}
        </View>

      </View>
      <Image
        source={monster.image}
        style={[styles.image, isEnemy ? styles.enemyImage : styles.playerImage]}
        resizeMode="contain"
      />
    </View>
  )
}

const styles = StyleSheet.create({
  main: {
    width: "40%"
  },
  container: {
    width: "90%",
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    borderRadius: 10,
    backgroundColor: "rgba(255, 255, 255, 0.7)",
    margin: 10,
  },
  playerContainer: {
    // alignSelf: "flex-end",
  },
  enemyContainer: {
    // alignSelf: "flex-start",
  },
  infoContainer: {
    flex: 1,
  },
  textContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between"
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
  },
  level: {
    fontSize: 16,
    marginBottom: 5,
  },
  enemyExp: {
    opacity: 0,
  },
  healthBarContainer: {
    height: 10,
    backgroundColor: "#ddd",
    borderRadius: 5,
    overflow: "hidden",
    marginVertical: 5,
  },
  healthBar: {
    height: "100%",
  },
  healthHigh: {
    backgroundColor: "#4CAF50",
  },
  healthMedium: {
    backgroundColor: "#FFC107",
  },
  healthLow: {
    backgroundColor: "#F44336",
  },
  healthText: {
    fontSize: 14,
    marginBottom: 5,
  },
  expDisplay: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 3,
  },
  expBarContainer: {
    height: 8,
    backgroundColor: "#ddd",
    borderRadius: 4,
    overflow: "hidden",
    marginVertical: 5,
    width: "70%"
  },
  expBar: {
    height: "100%",
    backgroundColor: "#3F51B5",
  },
  expText: {
    fontSize: 12,
    width: "25%"
  },
  image: {
    width: 100,
    height: 100,
    display: "block",
    margin: "auto"
  },
  playerImage: {
    transform: [{ scaleX: 1 }],
  },
  enemyImage: {
    transform: [{ scaleX: -1 }],
  },
})// 

