import React, { useState } from "react";
import {
  ActivityIndicator,
  Alert,
  Button,
  StyleSheet,
  TextInput,
  View,
} from "react-native";

const CreateUserForm = () => {
  const [name, setName] = useState("");
  const [job, setJob] = useState("");
  const [isPosting, setIsPosting] = useState(false);

  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, job }),
  };

  const postExample = async () => {
    try {
      setIsPosting(true);
      const url = "https://reqres.in/api/users";
      const response = await fetch(url, requestOptions);
      const result = await response.json();
      Alert.alert("User Created", `${JSON.stringify(result)}`);

      console.log(result);
    } catch (error) {
      console.error(error);
    } finally {
      setIsPosting(false);
    }
  };

  return (
    <View style={styles.formContainer}>
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Job"
        value={job}
        onChangeText={setJob}
      />
      {isPosting ? (
        <ActivityIndicator size="large" color="blue" />
      ) : (
        <Button title="Create User" onPress={postExample} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  formContainer: {
    padding: 16,
    backgroundColor: "white",
    borderRadius: 8,
    gap: 16,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
  },
});

export default CreateUserForm;
