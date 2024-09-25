import {
  FlatList,
  Image,
  ListRenderItem,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import { IGroupType } from "@/types/groupType";
import Colors from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";

interface IProps {
  listings: any[];
}

const GroupListing = ({ listings }: IProps) => {
  const renderItems: ListRenderItem<IGroupType> = ({ item }: any) => {
    return (
      <View style={styles.item}>
        <Image source={{ uri: item.image }} style={styles.image} />
        <View>
          <Text style={styles.itemText}>{item.name}</Text>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Ionicons name="star" size={20} color={Colors.primaryColor} />
            <Text style={styles.itemRating}>{item.rating}</Text>
            <Text style={styles.itemReviews}>({item.reviews})</Text>
          </View>
        </View>
      </View>
    );
  };
  return (
    <View style={{ marginVertical: 20 }}>
      <Text style={styles.title}>Top Travel Groups</Text>
      <FlatList
        data={listings}
        renderItem={renderItems}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default GroupListing;

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: Colors.black,
    marginBottom: 10,
  },
  item: {
    backgroundColor: Colors.white,
    padding: 10,
    borderRadius: 10,
    marginRight: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  image: {
    width: 80,
    height: 100,
    borderRadius: 10,
    marginRight: 10,
  },
  itemText: {
    fontSize: 14,
    fontWeight: "bold",
  },
  itemRating: {
    fontSize: 14,
    fontWeight: "bold",
    marginLeft: 5,
    marginRight: 2,
  },
  itemReviews: {
    fontSize: 14,
    color: "#999",
  },
});
