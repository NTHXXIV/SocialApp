import React from "react";
import { Image, Text, View } from "react-native";

function UserItem({ user }) {
  const { avatar, email, first_name, last_name } = user;
  return (
    <View style={{ flexDirection: "row", alignItems: "center", gap: 8 }}>
      <Image source={{ uri: avatar }} style={{ width: 100, height: 100 }} />
      <View style={{ gap: 8 }}>
        <Text style={{ fontSize: 18, fontWeight: "medium" }}>
          {first_name + " " + last_name}
        </Text>
        <Text>{email}</Text>
      </View>
    </View>
  );
}

export default UserItem;
