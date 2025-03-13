// import { View, Text, StyleSheet, Animated } from "react-native"
// import { useRef, useEffect } from "react"

// export default function MonsterDisplay({
//   monster,
//   isEnemy = false,
//   animatedHealth,
//   animatedExp,
//   isAttacking = false,
//   isTakingDamage = false,
//   isFainted = false,
//   isCaptured = false,
// }) {
//   // Animation values
//   const attackAnim = useRef(new Animated.Value(0)).current
//   const damageAnim = useRef(new Animated.Value(0)).current
//   const fadeAnim = useRef(new Animated.Value(1)).current
//   const scaleAnim = useRef(new Animated.Value(1)).current
//   const shakeAnim = useRef(new Animated.Value(0)).current
//   const captureRotateAnim = useRef(new Animated.Value(0)).current

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
//           width: animatedExp.interpolate({
//             inputRange: [0, monster.expToNextLevel],
//             outputRange: ["0%", "100%"],
//             extrapolate: "clamp",
//           }),
//         }
//       : { width: `${expPercentage}%` }

//   // Attack animation
//   useEffect(() => {
//     if (isAttacking) {
//       Animated.sequence([
//         Animated.timing(attackAnim, {
//           toValue: isEnemy ? -30 : 30,
//           duration: 150,
//           useNativeDriver: true,
//         }),
//         Animated.timing(attackAnim, {
//           toValue: 0,
//           duration: 150,
//           useNativeDriver: true,
//         }),
//       ]).start()
//     }
//   }, [isAttacking])

//   // Damage animation
//   useEffect(() => {
//     if (isTakingDamage) {
//       // Flash red
//       Animated.sequence([
//         Animated.timing(damageAnim, {
//           toValue: 1,
//           duration: 100,
//           useNativeDriver: false,
//         }),
//         Animated.timing(damageAnim, {
//           toValue: 0,
//           duration: 100,
//           useNativeDriver: false,
//         }),
//         Animated.timing(damageAnim, {
//           toValue: 1,
//           duration: 100,
//           useNativeDriver: false,
//         }),
//         Animated.timing(damageAnim, {
//           toValue: 0,
//           duration: 100,
//           useNativeDriver: false,
//         }),
//       ]).start()

//       // Shake
//       Animated.sequence([
//         Animated.timing(shakeAnim, {
//           toValue: 5,
//           duration: 50,
//           useNativeDriver: true,
//         }),
//         Animated.timing(shakeAnim, {
//           toValue: -5,
//           duration: 50,
//           useNativeDriver: true,
//         }),
//         Animated.timing(shakeAnim, {
//           toValue: 5,
//           duration: 50,
//           useNativeDriver: true,
//         }),
//         Animated.timing(shakeAnim, {
//           toValue: 0,
//           duration: 50,
//           useNativeDriver: true,
//         }),
//       ]).start()
//     }
//   }, [isTakingDamage])

//   // Faint animation
//   useEffect(() => {
//     if (isFainted) {
//       Animated.parallel([
//         Animated.timing(fadeAnim, {
//           toValue: 0,
//           duration: 1000,
//           useNativeDriver: true,
//         }),
//         Animated.timing(scaleAnim, {
//           toValue: 0,
//           duration: 1000,
//           useNativeDriver: true,
//         }),
//         Animated.timing(damageAnim, {
//           toValue: 1,
//           duration: 200,
//           useNativeDriver: false,
//         }),
//       ]).start()
//     }
//   }, [isFainted])

//   // Capture animation
//   useEffect(() => {
//     if (isCaptured) {
//       Animated.loop(
//         Animated.sequence([
//           Animated.timing(captureRotateAnim, {
//             toValue: 1,
//             duration: 300,
//             useNativeDriver: true,
//           }),
//           Animated.timing(captureRotateAnim, {
//             toValue: -1,
//             duration: 300,
//             useNativeDriver: true,
//           }),
//           Animated.timing(captureRotateAnim, {
//             toValue: 0.5,
//             duration: 300,
//             useNativeDriver: true,
//           }),
//           Animated.timing(captureRotateAnim, {
//             toValue: -0.5,
//             duration: 300,
//             useNativeDriver: true,
//           }),
//           Animated.timing(captureRotateAnim, {
//             toValue: 0.25,
//             duration: 300,
//             useNativeDriver: true,
//           }),
//           Animated.timing(captureRotateAnim, {
//             toValue: 0,
//             duration: 300,
//             useNativeDriver: true,
//           }),
//         ]),
//         { iterations: 2 },
//       ).start()
//     }
//   }, [isCaptured])

//   // Combined animation styles
//   const animatedStyle = {
//     transform: [
//       { translateX: attackAnim },
//       { translateX: shakeAnim },
//       { scale: scaleAnim },
//       {
//         rotate: captureRotateAnim.interpolate({
//           inputRange: [-1, 0, 1],
//           outputRange: ["-20deg", "0deg", "20deg"],
//         }),
//       },
//     ],
//     opacity: fadeAnim,
//     backgroundColor: damageAnim.interpolate({
//       inputRange: [0, 1],
//       outputRange: ["transparent", "rgba(255, 0, 0, 0.3)"],
//     }),
//   }





// // import { View, Text, Image, StyleSheet, Animated } from "react-native"
// // import { useRef, useEffect } from "react"

// // export default function MonsterDisplay({
// //   monster,
// //   isEnemy = false,
// //   animatedHealth,
// //   animatedExp,
// //   isAttacking = false,
// //   isTakingDamage = false,
// //   isDying = false,
// //   isCaptured = false,
// // }) {
// //   if (!monster) return null

// //   // Animation values
// //   const attackAnim = useRef(new Animated.Value(0)).current
// //   const damageAnim = useRef(new Animated.Value(0)).current
// //   const deathAnim = useRef(new Animated.Value(1)).current
// //   const captureAnim = useRef(new Animated.Value(0)).current
// //   const captureRotation = useRef(new Animated.Value(0)).current

// //   // Calculate health percentage for the health bar
// //   const healthPercentage = (animatedHealth._value / monster.maxHealth) * 100
// //   const healthBarWidth = {
// //     width: animatedHealth.interpolate({
// //       inputRange: [0, monster.maxHealth],
// //       outputRange: ["0%", "100%"],
// //       extrapolate: "clamp",
// //     }),
// //   }

// //   // Calculate exp percentage for the exp bar (only for player monsters)
// //   const expPercentage = !isEnemy && monster.expToNextLevel > 0 ? (monster.exp / monster.expToNextLevel) * 100 : 0

// //   // Use animatedExp for the exp bar if provided
// //   const expBarWidth =
// //     !isEnemy && animatedExp
// //       ? {
// //         width: animatedExp.interpolate({
// //           inputRange: [0, monster.expToNextLevel],
// //           outputRange: ["0%", "100%"],
// //           extrapolate: "clamp",
// //         }),
// //       }
// //       : { width: `${expPercentage}%` }

// //   // Attack animation
// //   useEffect(() => {
// //     if (isAttacking) {
// //       Animated.sequence([
// //         Animated.timing(attackAnim, {
// //           toValue: isEnemy ? -30 : 30,
// //           duration: 150,
// //           useNativeDriver: true,
// //         }),
// //         Animated.timing(attackAnim, {
// //           toValue: 0,
// //           duration: 150,
// //           useNativeDriver: true,
// //         }),
// //       ]).start()
// //     }
// //   }, [isAttacking])

// //   // Damage animation
// //   useEffect(() => {
// //     if (isTakingDamage) {
// //       Animated.sequence([
// //         Animated.timing(damageAnim, {
// //           toValue: 1,
// //           duration: 100,
// //           useNativeDriver: false,
// //         }),
// //         Animated.timing(damageAnim, {
// //           toValue: 0,
// //           duration: 100,
// //           useNativeDriver: false,
// //         }),
// //         Animated.timing(damageAnim, {
// //           toValue: 1,
// //           duration: 100,
// //           useNativeDriver: false,
// //         }),
// //         Animated.timing(damageAnim, {
// //           toValue: 0,
// //           duration: 100,
// //           useNativeDriver: false,
// //         }),
// //       ]).start()
// //     }
// //   }, [isTakingDamage])

// //   // Death animation
// //   useEffect(() => {
// //     if (isDying) {
// //       Animated.timing(deathAnim, {
// //         toValue: 0,
// //         duration: 1000,
// //         useNativeDriver: true,
// //       }).start()
// //     }
// //   }, [isDying])

// //   // Capture animation
// //   useEffect(() => {
// //     if (isCaptured) {
// //       Animated.sequence([
// //         // Show the capture ball
// //         Animated.timing(captureAnim, {
// //           toValue: 1,
// //           duration: 300,
// //           useNativeDriver: true,
// //         }),
// //         // Rock the ball back and forth
// //         Animated.sequence([
// //           Animated.timing(captureRotation, {
// //             toValue: 1,
// //             duration: 300,
// //             useNativeDriver: true,
// //           }),
// //           Animated.timing(captureRotation, {
// //             toValue: -1,
// //             duration: 300,
// //             useNativeDriver: true,
// //           }),
// //           Animated.timing(captureRotation, {
// //             toValue: 0.5,
// //             duration: 300,
// //             useNativeDriver: true,
// //           }),
// //           Animated.timing(captureRotation, {
// //             toValue: -0.5,
// //             duration: 300,
// //             useNativeDriver: true,
// //           }),
// //           Animated.timing(captureRotation, {
// //             toValue: 0,
// //             duration: 300,
// //             useNativeDriver: true,
// //           }),
// //         ]),
// //       ]).start()
// //     }
// //   }, [isCaptured])

// //   // Transform styles for animations
// //   const monsterAnimatedStyle = {
// //     transform: [
// //       { translateX: attackAnim },
// //       { scale: deathAnim },
// //       {
// //         rotate: isCaptured
// //           ? captureRotation.interpolate({
// //             inputRange: [-1, 0, 1],
// //             outputRange: ["-20deg", "0deg", "20deg"],
// //           })
// //           : "0deg",
// //       },
// //     ],
// //     opacity: isCaptured
// //       ? captureAnim.interpolate({
// //         inputRange: [0, 1],
// //         outputRange: [1, 0],
// //       })
// //       : 1,
// //   }

// //   // Damage overlay style
// //   const damageOverlayStyle = {
// //     ...StyleSheet.absoluteFillObject,
// //     backgroundColor: "rgba(255, 0, 0, 0.5)",
// //     opacity: damageAnim,
// //   }

// //   // Capture ball style
// //   const captureBallStyle = {
// //     position: "absolute",
// //     width: 80,
// //     height: 80,
// //     opacity: captureAnim,
// //     transform: [
// //       {
// //         rotate: captureRotation.interpolate({
// //           inputRange: [-1, 0, 1],
// //           outputRange: ["-20deg", "0deg", "20deg"],
// //         }),
// //       },
// //     ],
// //   }

//   return (
//     <View style={[styles.container, isEnemy ? styles.enemyContainer : styles.playerContainer]}>

//       <View style={isEnemy ? styles.enemyImageContainer1 : styles.playerImageContainer1}>
//         {isCaptured ? (
//           <Animated.Image
//             source={require("../../assets/capture-ball.png")}
//             style={[styles.image, animatedStyle]}
//             resizeMode="contain"
//           />
//         ) : (
//           <Animated.Image
//             source={monster.image}
//             style={[styles.image, isEnemy ? styles.enemyImage : styles.playerImage, animatedStyle]}
//             resizeMode="contain"
//           />
//         )}
//       </View>

//       <View style={styles.infoContainer}>
//         <View style={styles.monsterName}>
//           <Text style={styles.name}>{monster.name}</Text>
//           <Text style={styles.level}>Lv. {monster.level}</Text>
//         </View>

//         {/* Health Bar */}
//         <View style={styles.healthBarContainer}>
//           <Animated.View
//             style={[
//               styles.healthBar,
//               healthBarWidth,
//               healthPercentage > 50
//                 ? styles.healthHigh
//                 : healthPercentage > 20
//                   ? styles.healthMedium
//                   : styles.healthLow,
//             ]}
//           />
//         </View>
//         <Text style={styles.healthText}>
//           {Math.floor(animatedHealth._value)}/{monster.maxHealth}
//         </Text>

//         {/* Exp Bar - Only show for player's monster */}
//         {!isEnemy && (
//           <View>
//             <View style={styles.expBarContainer}>
//               <Animated.View style={[styles.expBar, expBarWidth]} />
//             </View>
//             <Text style={styles.expText}>
//               EXP: {monster.exp}/{monster.expToNextLevel}
//             </Text>
//           </View>
//         )}
//       </View>

//       <View style={isEnemy ? styles.enemyImageContainer2 : styles.playerImageContainer2}>
//         <Image
//           source={monster.image}
//           style={[styles.image, isEnemy ? styles.enemyImage : styles.playerImage]}
//           resizeMode="contain"
//         />
//       </View>
//     </View >
//   )
// }

// const styles = StyleSheet.create({
//   container: {
//     flexDirection: "row",
//     alignItems: "center",
//     width: "43%",
//     // padding: 10,
//     borderRadius: 10,
//     // backgroundColor: "rgba(255, 255, 255, 0.7)",
//     // backgroundColor: "red",
//     // margin: 3,
//   },
//   playerContainer: {
//     alignSelf: "flex-end",
//   },
//   enemyContainer: {
//     alignSelf: "flex-start",
//   },
//   infoContainer: {
//     flex: 1,
//     padding: 10,
//     borderRadius: 10,
//     backgroundColor: "rgba(255, 255, 255, 0.7)",
//     // margin: 10,
//   },
//   monsterName: {
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
//   expBarContainer: {
//     height: 8,
//     backgroundColor: "#ddd",
//     borderRadius: 4,
//     overflow: "hidden",
//     marginVertical: 5,
//   },
//   expBar: {
//     height: "100%",
//     backgroundColor: "#3F51B5",
//   },
//   expText: {
//     fontSize: 12,
//   },
//   image: {
//     width: 100,
//     height: 100,
//   },
//   playerImage: {
//     transform: [{ scaleX: 1 }],
//     marginLeft: 20
//   },
//   enemyImage: {
//     transform: [{ scaleX: -1 }],
//     marginRight: 20
//   },
//   enemyImageContainer1: {
//     // display: "none"
//   },
//   enemyImageContainer2: {
//     display: "none"
//   },
//   playerImageContainer1: {
//     display: "none"
//   },
//   playerImageContainer2: {
//     // display: "none"
//   },
// })








import { View, Text, StyleSheet, Animated } from "react-native"
import { useRef, useEffect, useState } from "react"

export default function MonsterDisplay({
  monster,
  isEnemy = false,
  animatedHealth,
  animatedExp,
  isAttacking = false,
  isTakingDamage = false,
  isFainted = false,
  isCaptured = false,
}) {
  // Animation values
  const attackAnim = useRef(new Animated.Value(0)).current
  const damageAnim = useRef(new Animated.Value(0)).current
  const fadeAnim = useRef(new Animated.Value(1)).current
  const scaleAnim = useRef(new Animated.Value(1)).current
  const shakeAnim = useRef(new Animated.Value(0)).current
  const captureRotateAnim = useRef(new Animated.Value(0)).current

  // State to track animation triggers
  const [attackTrigger, setAttackTrigger] = useState(false)
  const [damageTrigger, setDamageTrigger] = useState(false)
  const [faintTrigger, setFaintTrigger] = useState(false)
  const [captureTrigger, setCaptureTrigger] = useState(false)

  // Animation trigger states, initialized to false
  const [animationTriggers, setAnimationTriggers] = useState({
    attack: false,
    damage: false,
    faint: false,
    capture: false,
  })

  // Update animation triggers based on props
  useEffect(() => {
    setAnimationTriggers({
      attack: isAttacking,
      damage: isTakingDamage,
      faint: isFainted,
      capture: isCaptured,
    })
  }, [isAttacking, isTakingDamage, isFainted, isCaptured])

  // Define healthPercentage and expPercentage outside the conditional
  let healthPercentage = 0
  let expPercentage = 0

  if (monster) {
    // Calculate health percentage for the health bar
    healthPercentage = (animatedHealth._value / monster.maxHealth) * 100
  }

  // Calculate exp percentage for the exp bar (only for player monsters)
  if (!isEnemy && monster && monster.expToNextLevel > 0) {
    expPercentage = (monster.exp / monster.expToNextLevel) * 100
  }

  // Calculate health percentage for the health bar
  const healthBarWidth = {
    width: monster
      ? animatedHealth.interpolate({
          inputRange: [0, monster.maxHealth],
          outputRange: ["0%", "100%"],
          extrapolate: "clamp",
        })
      : "0%",
  }

  // Use animatedExp for the exp bar if provided
  const expBarWidth =
    !isEnemy && animatedExp
      ? {
          width: animatedExp.interpolate({
            inputRange: [0, monster?.expToNextLevel || 1],
            outputRange: ["0%", "100%"],
            extrapolate: "clamp",
          }),
        }
      : { width: `${expPercentage}%` }

  // Attack animation
  useEffect(() => {
    if (animationTriggers.attack) {
      Animated.sequence([
        Animated.timing(attackAnim, {
          toValue: isEnemy ? 30 : -30,
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
  }, [animationTriggers.attack, isEnemy, attackAnim])

  // Damage animation
  useEffect(() => {
    if (animationTriggers.damage) {
      // Flash red
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

      // Shake
      Animated.sequence([
        Animated.timing(shakeAnim, {
          toValue: 5,
          duration: 50,
          useNativeDriver: true,
        }),
        Animated.timing(shakeAnim, {
          toValue: -5,
          duration: 50,
          useNativeDriver: true,
        }),
        Animated.timing(shakeAnim, {
          toValue: 5,
          duration: 50,
          useNativeDriver: true,
        }),
        Animated.timing(shakeAnim, {
          toValue: 0,
          duration: 50,
          useNativeDriver: true,
        }),
      ]).start()
    }
  }, [animationTriggers.damage, damageAnim, shakeAnim])

  // Faint animation
  useEffect(() => {
    if (animationTriggers.faint) {
      Animated.parallel([
        Animated.timing(fadeAnim, {
          toValue: 0,
          duration: 1000,
          useNativeDriver: true,
        }),
        Animated.timing(scaleAnim, {
          toValue: 0,
          duration: 1000,
          useNativeDriver: true,
        }),
        Animated.timing(damageAnim, {
          toValue: 1,
          duration: 200,
          useNativeDriver: false,
        }),
      ]).start()
    }
  }, [animationTriggers.faint, fadeAnim, scaleAnim, damageAnim])

  // Capture animation
  useEffect(() => {
    if (animationTriggers.capture) {
      Animated.loop(
        Animated.sequence([
          Animated.timing(captureRotateAnim, {
            toValue: 1,
            duration: 300,
            useNativeDriver: true,
          }),
          Animated.timing(captureRotateAnim, {
            toValue: -1,
            duration: 300,
            useNativeDriver: true,
          }),
          Animated.timing(captureRotateAnim, {
            toValue: 0.5,
            duration: 300,
            useNativeDriver: true,
          }),
          Animated.timing(captureRotateAnim, {
            toValue: -0.5,
            duration: 300,
            useNativeDriver: true,
          }),
          Animated.timing(captureRotateAnim, {
            toValue: 0.25,
            duration: 300,
            useNativeDriver: true,
          }),
          Animated.timing(captureRotateAnim, {
            toValue: 0,
            duration: 300,
            useNativeDriver: true,
          }),
        ]),
        { iterations: 2 },
      ).start()
    }
  }, [animationTriggers.capture, captureRotateAnim])

  // Reset animations when monster changes
  useEffect(() => {
    console.log("Monster changed, resetting animations:", monster?.name)
    // Reset animation values when monster changes
    fadeAnim.setValue(1)
    scaleAnim.setValue(1)
    attackAnim.setValue(0)
    shakeAnim.setValue(0)
    damageAnim.setValue(0)
    captureRotateAnim.setValue(0)

    // Also reset the animation triggers state
    setAnimationTriggers({
      attack: false,
      damage: false,
      faint: false,
      capture: false,
    })
  }, [monster, fadeAnim, scaleAnim, attackAnim, shakeAnim, damageAnim, captureRotateAnim])

  // Combined animation styles
  const animatedStyle = {
    transform: [
      { translateX: attackAnim },
      { translateX: shakeAnim },
      { scale: scaleAnim },
      // Apply the scaleX transform based on whether it's an enemy or not
      { scaleX: isEnemy ? -1 : 1 },
      {
        rotate: captureRotateAnim.interpolate({
          inputRange: [-1, 0, 1],
          outputRange: ["-20deg", "0deg", "20deg"],
        }),
      },
    ],
    opacity: fadeAnim,
    backgroundColor: damageAnim.interpolate({
      inputRange: [0, 1],
      outputRange: ["transparent", "rgba(255, 0, 0, 0.3)"],
    }),
  }

  return (
    <View style={[styles.container, isEnemy ? styles.enemyContainer : styles.playerContainer]}>


      <View style={isEnemy ? styles.enemyImageContainer1 : styles.playerImageContainer1}>
        {isCaptured ? (
          <Animated.Image
            source={require("../../assets/capture-ball.png")}
            style={[styles.image, animatedStyle]}
            resizeMode="contain"
          />
        ) : (
          <Animated.Image
            source={monster.image}
            style={[styles.image, isEnemy ? styles.enemyImage : styles.playerImage, animatedStyle]}
            resizeMode="contain"
          />
        )}
      </View>


      <View style={styles.infoContainer}>
        <View style={styles.monsterInfo}>
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
        {isCaptured ? (
          <Animated.Image
            source={require("../../assets/capture-ball.png")}
            style={[styles.image, animatedStyle]}
            resizeMode="contain"
          />
        ) : (
          <Animated.Image
            source={monster.image}
            style={[styles.image, isEnemy ? styles.enemyImage : styles.playerImage, animatedStyle]}
            resizeMode="contain"
          />
        )}
      </View>



    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    // backgroundColor: "red",
    width: "45%"
  },
  playerContainer: {
    alignSelf: "flex-end",
  },
  enemyContainer: {
    alignSelf: "flex-start",
  },
  infoContainer: {
    flex: 1,
    backgroundColor: "rgba(255, 255, 255, 0.7)",
    padding: 10,
    borderRadius: 10,
    margin: 10,
  },
  monsterInfo: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between"
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
    marginRight: 8,
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
    // width: "100%",
    transform: [{ scale: 2 }],
    backgroundColor: "red",
    // marginTop: 40
  },
  enemyImage: {
    transform: [{ scaleX: -1 }],
    // transform: [{ rotateY: "180deg" }],
    backgroundColor: "blue",
    // marginTop: 40
  },
  enemyImageContainer1: {
    display: "flex"
  },
  enemyImageContainer2: {
    display: "none"
  },
  playerImageContainer1: {
    display: "none"
  },
  playerImageContainer2: {
    display: "flex"
  },
})

