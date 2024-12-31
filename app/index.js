import { Link } from "expo-router";
import React, { useEffect, useState } from "react";
import { ActivityIndicator, StyleSheet, Text } from "react-native";
import AppLayout from "../components/AppLayout";
import UserItem from "../components/UserItem";

const ListUserScreen = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const url = "https://reqres.in/api/users";
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

    getUsers();
  }, []);

  if (isLoading) {
    return (
      <AppLayout>
        <ActivityIndicator />
      </AppLayout>
    );
  }
  return (
    <AppLayout>
      <Link href="/create" style={styles.addButton}>
        <Text style={styles.addText}>Create User</Text>
      </Link>
      {data?.map((user, index) => (
        <Link href={`/${user?.id}`} key={index}>
          <UserItem user={user} />
        </Link>
      ))}
    </AppLayout>
  );
};

export default ListUserScreen;

const styles = StyleSheet.create({
  addButton: { alignSelf: "flex-end" },
  addText: { fontSize: 14, fontWeight: "medium", color: "blue" },
});
