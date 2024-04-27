import {
  StyleSheet,
  Text,
  View,
  Modal,
  Image,
  TextInput,
  Button,
} from "react-native";
import React, { useState } from "react";

export default function CourseInput({ visible ,onAddCourse, onCancel}) {
  const [enteredCourseText, setEnteredCoursesText] = useState('');

  const addCourseHandler = () => {
    //Kurs Ekleme Methodu
    onAddCourse(enteredCourseText);
    setEnteredCoursesText('');
  };
  /*
  const courseInputHandler = (enteredText) => {
    setEnteredCoursesText(enteredText);
  };
  */

  return (
    <Modal animationType="slide" transparent={true} visible={visible}>
      <View style={styles.inputContainer}>
        <Image
          style={styles.image}
          source={require("../assets/images/android_icon.png")}
        />
        <TextInput
          style={styles.TextInput}
          placeholder="Yeni kurs ekle!"
          value={enteredCourseText}
          onChangeText={(text)=>setEnteredCoursesText(text)}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="İptal Et" color={"red"} onPress={onCancel}/>
          </View>
          <View style={styles.button}>
            <Button title="Ekle" color={"blue"} onPress={addCourseHandler} />
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1, // heryeri kaplaması için 1 değerini verdik
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "gray",
    padding: 20,
  },
  image: {
    width: 150,
    height: 150,
    margin: 20,
  },
  TextInput: {
    borderWidth: 1,
    width: "100%",
    padding: 10,
    borderRadius: 10,
    backgroundColor: "pink",
    //borderBlockColor: "false",
  },
  buttonContainer: {
    flexDirection: "row",
    marginTop: 16,
  },
  button: {
    width: 100,
    marginHorizontal: 20,
    height: 35,
  },
});
