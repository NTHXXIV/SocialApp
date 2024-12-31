import { useLocalSearchParams } from "expo-router";
import React, { useEffect, useState } from "react";
import { ActivityIndicator, Alert, Button, Text } from "react-native";
import AppLayout from "../components/AppLayout";
import UserItem from "../components/UserItem";

const UserScreen = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isDeleting, setIsDeleting] = useState(false);

  const [data, setData] = useState({});
  const { id } = useLocalSearchParams();

  const url = `https://reqres.in/api/users/${id}`;

  useEffect(() => {
    const getUser = async () => {
      try {
        const res = await fetch(url);
        const { data } = await res.json();
        setData(data);
        return data;
      } catch (error) {
        console.log("error", error);
      } finally {
        setIsLoading(false);
      }
    };

    getUser();
  }, [id]);

  const requestOptions = {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
  };

  const onDelete = async () => {
    try {
      setIsDeleting(true);
      const response = await fetch(url, requestOptions);
      Alert.alert("User Delete Response", `${JSON.stringify(response.status)}`);
    } catch (error) {
      console.error(error);
    } finally {
      setIsDeleting(false);
    }
  };

  if (isLoading) {
    return (
      <AppLayout>
        <Text>Loading...</Text>
      </AppLayout>
    );
  }

  return (
    <AppLayout>
      <UserItem user={data} />
      {isDeleting ? (
        <ActivityIndicator size="large" color="blue" />
      ) : (
        <DeleteButton onDelete={onDelete} />
      )}
    </AppLayout>
  );
};

export default UserScreen;

const DeleteButton = ({ onDelete }: any) => {
  const onPress = () => {
    Alert.alert(
      "Confirm Delete",
      "Are you sure you want to delete this item?",
      [
        {
          text: "Cancel",
          style: "cancel",
        },
        {
          text: "Delete",
          onPress: onDelete,
          style: "destructive",
        },
      ],
      { cancelable: true }
    );
  };

  return <Button title="Delete" onPress={onPress} color="red" />;
};
