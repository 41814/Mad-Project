import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Footer from './Footor';
import Nav from './Nav';

const ContactUs = ({ navigation }) => {
  const handleSendMessage = () => {
    Alert.alert('Message Sent!', 'Your message has been sent successfully.');
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <Nav />
      <View style={styles.container}>
        <Text style={styles.header}>Get in Touch</Text>
        <Text style={styles.subHeader}>
          We'd love to hear from you! Please fill out the form below and we'll get back to you as soon as possible.
        </Text>

        {/* Contact Form */}
        <View style={styles.form}>
          <View style={styles.inputContainer}>
            <Ionicons name="person-outline" size={20} color="#888" style={styles.icon} />
            <TextInput
              style={styles.input}
              placeholder="Your Name"
              placeholderTextColor="#888"
            />
          </View>
          <View style={styles.inputContainer}>
            <Ionicons name="mail-outline" size={20} color="#888" style={styles.icon} />
            <TextInput
              style={styles.input}
              placeholder="Your Email"
              placeholderTextColor="#888"
              keyboardType="email-address"
            />
          </View>
          <View style={[styles.inputContainer, styles.messageInputContainer]}>
            <Ionicons name="chatbox-ellipses-outline" size={20} color="#888" style={styles.icon} />
            <TextInput
              style={[styles.input, styles.messageInput]}
              placeholder="Your Message"
              placeholderTextColor="#888"
              multiline
              numberOfLines={4}
            />
          </View>
          <TouchableOpacity style={styles.button} onPress={handleSendMessage}>
            <Text style={styles.buttonText}>Send Message</Text>
          </TouchableOpacity>
        </View>
      </View>
      <Footer />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    backgroundColor: '#f0f0f0',
  },
  container: {
    flex: 1,
    justifyContent: 'center', // Center vertically
    alignItems: 'center', // Center horizontally
    padding: 20,
    paddingBottom: 50,
    marginTop: -70, // Move the entire container further upwards
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
    color: '#333',
    marginTop: -40, // Move the header further upwards
  },
  subHeader: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 30, // Add more space below the subheader
    color: '#666',
    paddingHorizontal: 10,
  },
  form: {
    width: '90%', // Responsive width
    maxWidth: 400, // Limit max width
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 6,
    marginBottom: 80, // Increased space between the form and the footer
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    marginBottom: 15,
    paddingHorizontal: 10,
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    paddingVertical: 12,
    color: '#333',
  },
  messageInputContainer: {
    alignItems: 'flex-start',
  },
  messageInput: {
    height: 100,
    textAlignVertical: 'top',
  },
  button: {
    backgroundColor: '#008000',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10,
    shadowColor: '#6C63FF',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 6,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});



export default ContactUs;