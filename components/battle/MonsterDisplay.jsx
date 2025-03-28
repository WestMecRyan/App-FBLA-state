import { View, Text, StyleSheet, Animated } from "react-native"
import { useRef, useEffect, useState } from "react"

export default function MonsterDisplay({
  monster,
  isEnemy,
  animatedHealth,
  animatedExp,
  isAttacking = false,
  isTakingDamage = false,
  isFainted = false,
  isCaptured = false,
  isSwapping = false,
  isSwappingOut = false,
  isEvolving = false,
}) {
  // Animation values
  const attackAnim = useRef(new Animated.Value(0)).current
  const damageAnim = useRef(new Animated.Value(0)).current
  const fadeAnim = useRef(new Animated.Value(1)).current
  const scaleAnim = useRef(new Animated.Value(1)).current
  const shakeAnim = useRef(new Animated.Value(0)).current
  const captureRotateAnim = useRef(new Animated.Value(0)).current
  const swapAnim = useRef(new Animated.Value(0)).current
  const evolveAnim = useRef(new Animated.Value(0)).current
  const flashAnim = useRef(new Animated.Value(0)).current

  // Add a specific animation for the damage flash effect
  const damageFlashAnim = useRef(new Animated.Value(0)).current

  // Animation trigger states, initialized to false
  const [animationTriggers, setAnimationTriggers] = useState({
    attack: false,
    damage: false,
    faint: false,
    capture: false,
    swap: false,
    swapOut: false,
    evolve: false,
  })

  // Update animation triggers based on props
  useEffect(() => {
    // console.log("Animation trigger updated - isTakingDamage:", isTakingDamage)
    setAnimationTriggers({
      attack: isAttacking,
      damage: isTakingDamage,
      faint: isFainted,
      capture: isCaptured,
      swap: isSwapping,
      swapOut: isSwappingOut,
      evolve: isEvolving,
    })
  }, [isAttacking, isTakingDamage, isFainted, isCaptured, isSwapping, isSwappingOut, isEvolving])

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
          useNativeDriver: false,
        }),
        Animated.timing(attackAnim, {
          toValue: 0,
          duration: 150,
          useNativeDriver: false,
        }),
      ]).start()
    }
  }, [animationTriggers.attack, isEnemy, attackAnim])

  // Improved damage animation effect
  useEffect(() => {
    if (animationTriggers.damage) {
    // if (isTakingDamage) {
      console.log("Running damage animation for", isEnemy ? "enemy" : "player")

      // Flash red animation - this is the key part for the damage effect
      Animated.sequence([
        Animated.timing(damageFlashAnim, {
          toValue: 1,
          duration: 100,
          useNativeDriver: true,
        }),
        Animated.timing(damageFlashAnim, {
          toValue: 0,
          duration: 100,
          useNativeDriver: true,
        }),
        Animated.timing(damageFlashAnim, {
          toValue: 1,
          duration: 100,
          useNativeDriver: true,
        }),
        Animated.timing(damageFlashAnim, {
          toValue: 0,
          duration: 100,
          useNativeDriver: true,
        }),
      ]).start()

      // Shake animation
      Animated.sequence([
        Animated.timing(shakeAnim, {
          toValue: 10,
          duration: 50,
          useNativeDriver: true,
        }),
        Animated.timing(shakeAnim, {
          toValue: -10,
          duration: 50,
          useNativeDriver: true,
        }),
        Animated.timing(shakeAnim, {
          toValue: 10,
          duration: 50,
          useNativeDriver: true,
        }),
        Animated.timing(shakeAnim, {
          toValue: -10,
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
    setAnimationTriggers({
      ...animationTriggers,
      damage: false,
    })
    }
  }, [animationTriggers.damage, damageFlashAnim, shakeAnim, isEnemy])
  // }, [isTakingDamage])

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

  // // Improved swap animation with better timing
  // useEffect(() => {
  //   if (animationTriggers.swap) {
  //     // Reset the animation value first to ensure consistent behavior
  //     swapAnim.setValue(0)

  //     // Monster being swapped in moves from right to center
  //     Animated.timing(swapAnim, {
  //       toValue: 1,
  //       duration: 300, // Shorter duration for smoother animation
  //       useNativeDriver: true,
  //     }).start()
  //   } else if (animationTriggers.swapOut) {
  //     // Reset the animation value first
  //     swapAnim.setValue(0)

  //     // Monster being swapped out moves from center to left
  //     Animated.timing(swapAnim, {
  //       toValue: -1,
  //       duration: 300, // Shorter duration
  //       useNativeDriver: true,
  //     }).start()
  //   } else if (!animationTriggers.swap && !animationTriggers.swapOut) {
  //     // Reset swap animation when not swapping
  //     swapAnim.setValue(0)
  //   }
  // }, [animationTriggers.swap, animationTriggers.swapOut, swapAnim])

  // Add evolution animation
  useEffect(() => {
    if (animationTriggers.evolve) {
      // Create a flashing effect similar to Pokémon games
      const flashingAnimation = Animated.loop(
        Animated.sequence([
          Animated.timing(flashAnim, {
            toValue: 1,
            duration: 200,
            useNativeDriver: false,
          }),
          Animated.timing(flashAnim, {
            toValue: 0,
            duration: 200,
            useNativeDriver: false,
          }),
        ]),
        { iterations: 8 },
      )

      // Scale up and down to simulate transformation
      const pulsingAnimation = Animated.loop(
        Animated.sequence([
          Animated.timing(evolveAnim, {
            toValue: 1.2,
            duration: 400,
            useNativeDriver: true,
          }),
          Animated.timing(evolveAnim, {
            toValue: 0.8,
            duration: 400,
            useNativeDriver: true,
          }),
        ]),
        { iterations: 4 },
      )

      // Run both animations in parallel
      Animated.parallel([flashingAnimation, pulsingAnimation]).start()
    } else {
      // Reset evolution animation when not evolving
      evolveAnim.setValue(1)
      flashAnim.setValue(0)
    }
  }, [animationTriggers.evolve, evolveAnim, flashAnim])

  // Reset animations when monster changes
  useEffect(() => {
    console.log("Monster changed, resetting animations:", monster?.name)
    // Reset animation values when monster changes
    fadeAnim.setValue(1)
    scaleAnim.setValue(1)
    attackAnim.setValue(0)
    shakeAnim.setValue(0)
    damageAnim.setValue(0)
    damageFlashAnim.setValue(0)
    captureRotateAnim.setValue(0)
    swapAnim.setValue(0)
    evolveAnim.setValue(1)
    flashAnim.setValue(0)

    // setAnimationTriggers({
    //   attack: false,
    //   damage: false,
    //   faint: false,
    //   capture: false,
    //   swap: false,
    //   swapOut: false,
    //   evolve: false,
    // })
  }, [
    monster,
    fadeAnim,
    scaleAnim,
    attackAnim,
    shakeAnim,
    damageAnim,
    damageFlashAnim,
    captureRotateAnim,
    swapAnim,
    evolveAnim,
    flashAnim,
  ])

  // Combined animation styles for the monster image
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
      // // Improved swap animation
      // {
      //   translateX: swapAnim.interpolate({
      //     inputRange: [-1, 0, 1],
      //     outputRange: ["-150%", "0%", "150%"],
      //   }),
      // },
      // Add evolution scale animation
      {
        scale: evolveAnim,
      },
    ],
    opacity: fadeAnim,
    // Use the dedicated damage flash animation for the red flash effect
    backgroundColor: damageFlashAnim.interpolate({
      inputRange: [0, 1],
      outputRange: ["transparent", "rgba(255, 0, 0, 0.5)"],
    }),
    // Add evolution flash effect
    borderWidth: flashAnim.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 5],
    }),
    borderColor: flashAnim.interpolate({
      inputRange: [0, 1],
      outputRange: ["transparent", "white"],
    }),
  }


  // useEffect(() => {
  //   console.log("Damage Trigger:", animationTriggers.damage, " | Target:", isEnemy ? "Enemy" : "Player");
  // }, [animationTriggers.damage]);

  useEffect(() => {
    console.log("Is Taking Damage", isTakingDamage, " | Target:", isEnemy ? "Enemy" : "Player");
  }, [isTakingDamage]);


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
    width: "45%",
  },
  playerContainer: {
    alignSelf: "flex-end",
  },
  enemyContainer: {
    alignSelf: "flex-start",
  },
  infoContainer: {
    flex: 1,
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    padding: 10,
    borderRadius: 10,
    margin: 10,
  },
  monsterInfo: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  name: {
    fontSize: 16,
    // fontWeight: "bold",
    marginRight: 8,
    fontFamily: "pixel-font",
  },
  level: {
    fontSize: 14,
    marginBottom: 5,
    fontFamily: "pixel-font",
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
    fontSize: 12,
    marginBottom: 5,
    fontFamily: "pixel-font",
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
    fontSize: 10,
    fontFamily: "pixel-font",
  },
  image: {
    width: 100,
    height: 100,
  },
  playerImage: {
    transform: [{ scale: 2 }],
  },
  enemyImage: {
    transform: [{ scaleX: -1 }],
  },
  enemyImageContainer1: {
    display: "flex",
  },
  enemyImageContainer2: {
    display: "none",
  },
  playerImageContainer1: {
    display: "none",
  },
  playerImageContainer2: {
    display: "flex",
  },
})