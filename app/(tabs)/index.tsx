import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import React from "react";
import { Stack } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import Colors from "@/constants/Colors";

const HomePage = () => {
  return (
    <Stack.Screen
      options={{
        headerTransparent: true,
        headerTitle: "",
        headerLeft: () => (
          <TouchableOpacity style={{ marginLeft: 20 }}>
            <Image
              source={{
                uri: "https://64.media.tumblr.com/e7b68e99785f764b20c1bb9b2e5aecde/f0d5a39a2a3b067a-33/s1280x1920/9dcdf778e954c71709c27131d71643aaaa6a391d.jpg",
              }}
              style={{ width: 56, height: 56, borderRadius: 12 }}
            />
          </TouchableOpacity>
        ),
        headerRight: () => (
          <TouchableOpacity
            onPress={() => {}}
            style={{
              marginRight: 20,
              backgroundColor: Colors.white,
              padding: 10,
              borderRadius: 10,
              shadowColor: "#171717",
              shadowOffset: {
                width: 2,
                height: 4,
              },
              shadowOpacity: 0.2,
              shadowRadius: 3,
            }}
          >
            <Ionicons name="notifications" size={24} color={Colors.black} />
          </TouchableOpacity>
        ),
      }}
    ></Stack.Screen>
  );
};

export default HomePage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
