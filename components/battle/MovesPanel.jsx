import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { playSound } from "../../utils/audio"

export default function MovesPanel({
  monster,
  onMoveSelect,
  onSwitchPress,
  onCatchPress,
  onFightPress, // Add this new prop to handle fight button press
  showCatchButton = false,
  disabled = false,
}) {
  return (
    <View style={styles.container}>
      <View style={styles.actionButtons}>
        {showCatchButton ? (
          <TouchableOpacity
            style={[styles.actionButton, disabled && styles.disabledButton]}
            onPress={onCatchPress}
            disabled={disabled}
          >
            <Text style={styles.actionButtonText}>Catch</Text>
          </TouchableOpacity>
        ) : (
          <View style={styles.actionButtons}>
            <TouchableOpacity
              style={[styles.actionButton, disabled && styles.disabledButton]}
              onPress={() => {
                playSound("click", 0.3);
                onFightPress(); // Call the parent component's function instead
              }}
              disabled={disabled}
            >
              <Text style={styles.actionButtonText}>Fight</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.actionButton, disabled && styles.disabledButton]}
              onPress={onSwitchPress}
              disabled={disabled}
            >
              <Text style={styles.actionButtonText}>Switch</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: 'rgba(255,255,255,0.9)',
    overflow: 'hidden'
  },
  actionButtons: {
    width: "100%",
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10
  },
  actionButton: {
    width: "40%",
    backgroundColor: '#4CAF50',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
    minWidth: 120,
    alignItems: 'center',
  },
  disabledButton: {
    backgroundColor: '#999'
  },
  actionButtonText: {
    color: '#FFF',
    fontSize: 14,
    fontFamily: "pixel-font",
  }
});