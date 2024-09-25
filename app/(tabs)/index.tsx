import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  TextInput,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import { Stack } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import Colors from "@/constants/Colors";
import { useHeaderHeight } from "@react-navigation/elements";
import CategoryButton from "@/components/CategoryButton";
import Listing from "@/components/Listing";
import listingData from "@/data/destinations.json";
import groupData from "@/data/gorups.json";
import GroupListing from "@/components/GroupListing";

const HomePage = () => {
  const headerHeight = useHeaderHeight(); // height of the screen
  const [category, setCategory] = useState("All");

  // get the title of the category button is selected
  const onCatChanged = (category: string) => {
    console.log("category is selected: ", category);
    setCategory(category);
  };

  return (
    <>
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
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={[styles.container, { paddingTop: headerHeight }]}>
          <Text style={styles.headingText}>Explore the beautiful world!</Text>
          <View style={styles.searchSectionWrapper}>
            <View style={styles.searchBar}>
              <Ionicons
                name="search"
                size={24}
                color={Colors.black}
                style={{ marginRight: 5 }}
              />
              <TextInput placeholder="Search..." />
            </View>
            <TouchableOpacity style={styles.filterButton}>
              <Ionicons name="options" size={28} color={Colors.white} />
            </TouchableOpacity>
          </View>
          <CategoryButton onCategoryChange={onCatChanged} />
          <Listing listings={listingData} category={category} />
          <GroupListing listings={groupData} />
        </View>
      </ScrollView>
    </>
  );
};

export default HomePage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: Colors.bgcolor,
  },
  headingText: {
    fontSize: 28,
    fontWeight: "800",
    textTransform: "capitalize",
    marginTop: 10,
    color: Colors.black,
  },
  searchSectionWrapper: {
    flexDirection: "row",
    marginVertical: 20,
    alignItems: "center",
  },
  searchBar: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: Colors.white,
    borderRadius: 10,
    padding: 14,
  },
  filterButton: {
    backgroundColor: Colors.primaryColor,
    padding: 12,
    borderRadius: 10,
    marginLeft: 12,
  },
});
