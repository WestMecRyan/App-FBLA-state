import React, { useState, useEffect } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  TouchableOpacity,
  Switch
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { loadGameState, saveGameState } from '../utils/storage';

export default function SettingsScreen() {
  const navigation = useNavigation();
  const [settings, setSettings] = useState({
    audio: true,
    music: true,
    subject: 'math'
  });

  useEffect(() => {
    loadSettings();
  }, []);

  const loadSettings = async () => {
    const gameState = await loadGameState();
    setSettings(gameState.settings);
  };

  const updateSetting = async (key, value) => {
    const newSettings = { ...settings, [key]: value };
    setSettings(newSettings);
    await saveGameState({ settings: newSettings });
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backButton}
        >
          <Ionicons name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.title}>Settings</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Audio Settings</Text>
        
        <View style={styles.setting}>
          <Text style={styles.settingText}>Sound Effects</Text>
          <Switch
            value={settings.audio}
            onValueChange={(value) => updateSetting('audio', value)}
          />
        </View>

        <View style={styles.setting}>
          <Text style={styles.settingText}>Background Music</Text>
          <Switch
            value={settings.music}
            onValueChange={(value) => updateSetting('music', value)}
          />
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Subject</Text>
        {['math', 'science', 'english'].map((subject) => (
          <TouchableOpacity
            key={subject}
            style={[
              styles.subjectButton,
              settings.subject === subject && styles.selectedSubject
            ]}
            onPress={() => updateSetting('subject', subject)}
          >
            <Text style={[
              styles.subjectText,
              settings.subject === subject && styles.selectedSubjectText
            ]}>
              {subject.charAt(0).toUpperCase() + subject.slice(1)}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    paddingTop: 50
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#DDD'
  },
  backButton: {
    marginRight: 15
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  section: {
    padding: 20,
    marginBottom: 20
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15
  },
  setting: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10
  },
  settingText: {
    fontSize: 16
  },
  subjectButton: {
    padding: 15,
    backgroundColor: '#FFF',
    borderRadius: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#DDD'
  },
  selectedSubject: {
    backgroundColor: '#4CAF50',
    borderColor: '#4CAF50'
  },
  subjectText: {
    fontSize: 16,
    color: '#333'
  },
  selectedSubjectText: {
    color: '#FFF'
  }
});