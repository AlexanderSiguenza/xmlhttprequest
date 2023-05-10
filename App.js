import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';


export default function App() {
  const [dogImage, setDogImage] = useState('');
  const handleButtonClick = () => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://dog.ceo/api/breeds/image/random');
    xhr.onload = () => {
      if (xhr.status === 200) {
        const response = JSON.parse(xhr.responseText);
        setDogImage(response.message);
      }
    };
    xhr.send();
  };
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Random Dog Image:</Text>
      <Button title="Get Random Dog" onPress={handleButtonClick} />
      {dogImage ? (
        <View style={styles.imageContainer}>
          <Image source={{ uri: dogImage }} style={styles.image} />
        </View>
      ) : null}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    marginBottom: 10,
  },
  imageContainer: {
    marginTop: 20,
    width: '100%',
    height: 300,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
});
