// import { View, Text, Image, StyleSheet, Animated } from "react-native"
// import React, { useEffect } from 'react';

// export default function MonsterDisplay({ monster, isEnemy = false, animatedHealth, animatedExp }) {
//   if (!monster) return null

//   // Calculate health percentage for the health bar
//   const healthPercentage = (animatedHealth._value / monster.maxHealth) * 100
//   const healthBarWidth = {
//     width: animatedHealth.interpolate({
//       inputRange: [0, monster.maxHealth],
//       outputRange: ["0%", "100%"],
//       extrapolate: "clamp",
//     }),
//   }

//   // Calculate exp percentage for the exp bar (only for player monsters)
//   const expPercentage = !isEnemy ? (monster.exp / monster.expToNextLevel) * 100 : 0;

//   const expBarWidth = !isEnemy ? {
//     width: animatedExp.interpolate({
//       inputRange: [0, monster.expToNextLevel],
//       outputRange: ["0%", "100%"],
//       extrapolate: "clamp",
//     }),
//   } : { width: "0%" };

//   return (
//     <View style={styles.main}>
//       <View style={[styles.container, isEnemy ? styles.enemyContainer : styles.playerContainer]}>
//         <View style={styles.infoContainer}>
//           <View style={styles.textContainer}>
//             <Text style={styles.name}>{monster.name}</Text>
//             {/* <Text style={styles.level}>Lv. {monster.level}</Text> */}
//             <Text style={isEnemy ? styles.enemyLevel : styles.playerLevel}>Lv. {monster.level}</Text>
//           </View>

//           {!isEnemy && (
//             <View style={styles.expDisplay}>
//               <Text style={styles.expText}>
//                 EXP: {monster.exp}/{monster.expToNextLevel}
//               </Text>
//               <View style={styles.expBarContainer}>
//                 <View style={[styles.expBar, { width: `${expPercentage}%` }]} />
//               </View>
//             </View>
//           )}

//           {isEnemy && (
//             <Text style={styles.enemyExp}>.</Text>
//           )}


//           {/* Health Bar */}
//           <View style={styles.healthBarContainer}>
//             <Animated.View
//               style={[
//                 styles.healthBar,
//                 healthBarWidth,
//                 healthPercentage > 50
//                   ? styles.healthHigh
//                   : healthPercentage > 20
//                     ? styles.healthMedium
//                     : styles.healthLow,
//               ]}
//             />
//           </View>
//           <Text style={styles.healthText}>
//             {Math.floor(animatedHealth._value)}/{monster.maxHealth}
//           </Text>

//           {/* Exp Bar - Only show for player's monster */}
//           {/* {!isEnemy && (
//             <View style={styles.expDisplay}>
//               <Text style={styles.expText}>
//                 EXP: {monster.exp}/{monster.expToNextLevel}
//               </Text>
//               <View style={styles.expBarContainer}>
//                 <View style={[styles.expBar, { width: `${expPercentage}%` }]} />
//               </View>
//             </View>
//           )} */}
//         </View>

//       </View>
//       <Image
//         source={monster.image}
//         style={[styles.image, isEnemy ? styles.enemyImage : styles.playerImage]}
//         resizeMode="contain"
//       />
//     </View>
//   )
// }

// const styles = StyleSheet.create({
//   main: {
//     width: "40%"
//   },
//   container: {
//     width: "90%",
//     flexDirection: "row",
//     alignItems: "center",
//     padding: 10,
//     borderRadius: 10,
//     backgroundColor: "rgba(255, 255, 255, 0.7)",
//     margin: 10,
//   },
//   playerContainer: {
//     // alignSelf: "flex-end",
//   },
//   enemyContainer: {
//     // alignSelf: "flex-start",
//   },
//   infoContainer: {
//     flex: 1,
//   },
//   textContainer: {
//     display: "flex",
//     flexDirection: "row",
//     justifyContent: "space-between"
//   },
//   name: {
//     fontSize: 18,
//     fontWeight: "bold",
//   },
//   level: {
//     fontSize: 16,
//     marginBottom: 5,
//   },
//   enemyExp: {
//     opacity: 0,
//   },
//   healthBarContainer: {
//     height: 10,
//     backgroundColor: "#ddd",
//     borderRadius: 5,
//     overflow: "hidden",
//     marginVertical: 5,
//   },
//   healthBar: {
//     height: "100%",
//   },
//   healthHigh: {
//     backgroundColor: "#4CAF50",
//   },
//   healthMedium: {
//     backgroundColor: "#FFC107",
//   },
//   healthLow: {
//     backgroundColor: "#F44336",
//   },
//   healthText: {
//     fontSize: 14,
//     marginBottom: 5,
//   },
//   expDisplay: {
//     display: "flex",
//     flexDirection: "row",
//     justifyContent: "space-between",
//     marginTop: 3,
//   },
//   expBarContainer: {
//     height: 8,
//     backgroundColor: "#ddd",
//     borderRadius: 4,
//     overflow: "hidden",
//     marginVertical: 5,
//     width: "70%"
//   },
//   expBar: {
//     height: "100%",
//     backgroundColor: "#3F51B5",
//   },
//   expText: {
//     fontSize: 12,
//     width: "25%"
//   },
//   image: {
//     width: 100,
//     height: 100,
//     display: "block",
//     margin: "auto"
//   },
//   playerImage: {
//     transform: [{ scaleX: -1 }],
//   },
//   enemyImage: {
//     transform: [{ scaleX: 1 }],
//   },
// })// 





// import { View, Text, Image, StyleSheet, Animated } from "react-native"

// export default function MonsterDisplay({ monster, isEnemy = false, animatedHealth, animatedExp }) {
//   if (!monster) return null

//   // Calculate health percentage for the health bar
//   const healthPercentage = (animatedHealth._value / monster.maxHealth) * 100
//   const healthBarWidth = {
//     width: animatedHealth.interpolate({
//       inputRange: [0, monster.maxHealth],
//       outputRange: ["0%", "100%"],
//       extrapolate: "clamp",
//     }),
//   }

//   // Calculate exp percentage for the exp bar (only for player monsters)
//   const expPercentage = !isEnemy && monster.expToNextLevel > 0 ? (monster.exp / monster.expToNextLevel) * 100 : 0

//   // Use animatedExp for the exp bar if provided
//   const expBarWidth =
//     !isEnemy && animatedExp
//       ? {
//         width: animatedExp.interpolate({
//           inputRange: [0, monster.expToNextLevel],
//           outputRange: ["0%", "100%"],
//           extrapolate: "clamp",
//         }),
//       }
//       : { width: `${expPercentage}%` }


import { View, Text, Image, StyleSheet, Animated } from "react-native"
import { useRef, useEffect } from "react"

export default function MonsterDisplay({
  monster,
  isEnemy = false,
  animatedHealth,
  animatedExp,
  isAttacking = false,
  isTakingDamage = false,
  isDying = false,
  isCaptured = false,
}) {
  if (!monster) return null

  // Animation values
  const attackAnim = useRef(new Animated.Value(0)).current
  const damageAnim = useRef(new Animated.Value(0)).current
  const deathAnim = useRef(new Animated.Value(1)).current
  const captureAnim = useRef(new Animated.Value(0)).current
  const captureRotation = useRef(new Animated.Value(0)).current

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
  const expPercentage = !isEnemy && monster.expToNextLevel > 0 ? (monster.exp / monster.expToNextLevel) * 100 : 0

  // Use animatedExp for the exp bar if provided
  const expBarWidth =
    !isEnemy && animatedExp
      ? {
        width: animatedExp.interpolate({
          inputRange: [0, monster.expToNextLevel],
          outputRange: ["0%", "100%"],
          extrapolate: "clamp",
        }),
      }
      : { width: `${expPercentage}%` }

  // Attack animation
  useEffect(() => {
    if (isAttacking) {
      Animated.sequence([
        Animated.timing(attackAnim, {
          toValue: isEnemy ? -30 : 30,
          duration: 150,
          useNativeDriver: true,
        }),
        Animated.timing(attackAnim, {
          toValue: 0,
          duration: 150,
          useNativeDriver: true,
        }),
      ]).start()
    }
  }, [isAttacking])

  // Damage animation
  useEffect(() => {
    if (isTakingDamage) {
      Animated.sequence([
        Animated.timing(damageAnim, {
          toValue: 1,
          duration: 100,
          useNativeDriver: false,
        }),
        Animated.timing(damageAnim, {
          toValue: 0,
          duration: 100,
          useNativeDriver: false,
        }),
        Animated.timing(damageAnim, {
          toValue: 1,
          duration: 100,
          useNativeDriver: false,
        }),
        Animated.timing(damageAnim, {
          toValue: 0,
          duration: 100,
          useNativeDriver: false,
        }),
      ]).start()
    }
  }, [isTakingDamage])

  // Death animation
  useEffect(() => {
    if (isDying) {
      Animated.timing(deathAnim, {
        toValue: 0,
        duration: 1000,
        useNativeDriver: true,
      }).start()
    }
  }, [isDying])

  // Capture animation
  useEffect(() => {
    if (isCaptured) {
      Animated.sequence([
        // Show the capture ball
        Animated.timing(captureAnim, {
          toValue: 1,
          duration: 300,
          useNativeDriver: true,
        }),
        // Rock the ball back and forth
        Animated.sequence([
          Animated.timing(captureRotation, {
            toValue: 1,
            duration: 300,
            useNativeDriver: true,
          }),
          Animated.timing(captureRotation, {
            toValue: -1,
            duration: 300,
            useNativeDriver: true,
          }),
          Animated.timing(captureRotation, {
            toValue: 0.5,
            duration: 300,
            useNativeDriver: true,
          }),
          Animated.timing(captureRotation, {
            toValue: -0.5,
            duration: 300,
            useNativeDriver: true,
          }),
          Animated.timing(captureRotation, {
            toValue: 0,
            duration: 300,
            useNativeDriver: true,
          }),
        ]),
      ]).start()
    }
  }, [isCaptured])

  // Transform styles for animations
  const monsterAnimatedStyle = {
    transform: [
      { translateX: attackAnim },
      { scale: deathAnim },
      {
        rotate: isCaptured
          ? captureRotation.interpolate({
            inputRange: [-1, 0, 1],
            outputRange: ["-20deg", "0deg", "20deg"],
          })
          : "0deg",
      },
    ],
    opacity: isCaptured
      ? captureAnim.interpolate({
        inputRange: [0, 1],
        outputRange: [1, 0],
      })
      : 1,
  }

  // Damage overlay style
  const damageOverlayStyle = {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(255, 0, 0, 0.5)",
    opacity: damageAnim,
  }

  // Capture ball style
  const captureBallStyle = {
    position: "absolute",
    width: 80,
    height: 80,
    opacity: captureAnim,
    transform: [
      {
        rotate: captureRotation.interpolate({
          inputRange: [-1, 0, 1],
          outputRange: ["-20deg", "0deg", "20deg"],
        }),
      },
    ],
  }

  return (
    <View style={[styles.container, isEnemy ? styles.enemyContainer : styles.playerContainer]}>

      <View style={isEnemy ? styles.enemyImageContainer1 : styles.playerImageContainer1}>
        <Image
          source={monster.image}
          style={[styles.image, isEnemy ? styles.enemyImage : styles.playerImage]}
          resizeMode="contain"
        />
      </View>

      <View style={styles.infoContainer}>
        <View style={styles.monsterName}>
          <Text style={styles.name}>{monster.name}</Text>
          <Text style={styles.level}>Lv. {monster.level}</Text>
        </View>

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
        {!isEnemy && (
          <View>
            <View style={styles.expBarContainer}>
              <Animated.View style={[styles.expBar, expBarWidth]} />
            </View>
            <Text style={styles.expText}>
              EXP: {monster.exp}/{monster.expToNextLevel}
            </Text>
          </View>
        )}
      </View>

      <View style={isEnemy ? styles.enemyImageContainer2 : styles.playerImageContainer2}>
        <Image
          source={monster.image}
          style={[styles.image, isEnemy ? styles.enemyImage : styles.playerImage]}
          resizeMode="contain"
        />
      </View>
    </View >
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    width: "43%",
    // padding: 10,
    borderRadius: 10,
    // backgroundColor: "rgba(255, 255, 255, 0.7)",
    // backgroundColor: "red",
    // margin: 3,
  },
  playerContainer: {
    alignSelf: "flex-end",
  },
  enemyContainer: {
    alignSelf: "flex-start",
  },
  infoContainer: {
    flex: 1,
    padding: 10,
    borderRadius: 10,
    backgroundColor: "rgba(255, 255, 255, 0.7)",
    // margin: 10,
  },
  monsterName: {
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
  expBarContainer: {
    height: 8,
    backgroundColor: "#ddd",
    borderRadius: 4,
    overflow: "hidden",
    marginVertical: 5,
  },
  expBar: {
    height: "100%",
    backgroundColor: "#3F51B5",
  },
  expText: {
    fontSize: 12,
  },
  image: {
    width: 100,
    height: 100,
  },
  playerImage: {
    transform: [{ scaleX: 1 }],
    marginLeft: 20
  },
  enemyImage: {
    transform: [{ scaleX: -1 }],
    marginRight: 20
  },
  enemyImageContainer1: {
    // display: "none"
  },
  enemyImageContainer2: {
    display: "none"
  },
  playerImageContainer1: {
    display: "none"
  },
  playerImageContainer2: {
    // display: "none"
  },
})

