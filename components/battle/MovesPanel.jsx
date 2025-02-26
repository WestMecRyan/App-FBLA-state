import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Modal
} from 'react-native';

export default function MovesPanel({
  monster,
  onMoveSelect,
  onSwitchPress,
  disabled = false
}) {
  const [showMoves, setShowMoves] = useState(false);

  const handleMoveSelect = (move) => {
    setShowMoves(false);
    onMoveSelect(move);
  };

  return (
    <View style={styles.container}>
      <View style={styles.actionButtons}>
        <TouchableOpacity
          style={[styles.actionButton, disabled && styles.disabledButton]}
          onPress={() => setShowMoves(true)}
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

      <Modal
        visible={showMoves}
        transparent={true}
        animationType="slide"
      >
        <View style={styles.modalContainer}>
          <View style={styles.movesContainer}>
            <Text style={styles.movesTitle}>Select a Move</Text>
            {monster.moves.map((move, index) => (
              <TouchableOpacity
                key={index}
                style={styles.moveButton}
                onPress={() => handleMoveSelect(move)}
              >
                <Text style={styles.moveName}>{move.name}</Text>
                <View style={styles.moveInfo}>
                  <Text style={styles.moveType}>{move.type}</Text>
                  <Text style={styles.movePower}>Power: {move.power}</Text>
                </View>
              </TouchableOpacity>
            ))}
            <TouchableOpacity
              style={styles.cancelButton}
              onPress={() => setShowMoves(false)}
            >
              <Text style={styles.cancelButtonText}>Back</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: 10,
    backgroundColor: 'rgba(255,255,255,0.9)',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20
  },
  actionButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10
  },
  actionButton: {
    backgroundColor: '#4CAF50',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
    minWidth: 120,
    alignItems: 'center'
  },
  disabledButton: {
    backgroundColor: '#999'
  },
  actionButtonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold'
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0,0,0,0.5)'
  },
  movesContainer: {
    backgroundColor: '#FFF',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20
  },
  movesTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 15
  },
  moveButton: {
    backgroundColor: '#F5F5F5',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10
  },
  moveName: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  moveInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 5
  },
  moveType: {
    color: '#666',
    fontSize: 14
  },
  movePower: {
    color: '#666',
    fontSize: 14
  },
  cancelButton: {
    backgroundColor: '#666',
    padding: 15,
    borderRadius: 10,
    marginTop: 10
  },
  cancelButtonText: {
    color: '#FFF',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold'
  }
});