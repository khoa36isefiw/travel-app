import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ListRenderItem,
  TouchableOpacity,
  Image,
} from "react-native";
import React, { useEffect, useState } from "react";
import { IListingType } from "@/types/listingType";
import Colors from "@/constants/Colors";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import { Link } from "expo-router";
interface IProps {
  listings: any[];
  category: string;
}

export default function Listing({ listings, category }: IProps) {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    console.log("Update listing");
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 200);
  }, [category]);
  const renderItems: ListRenderItem<IListingType> = ({ item }: any) => {
    return (
      <Link href={`/listing/${item.id}`} asChild>
        <TouchableOpacity>
          <View style={styles.item}>
            <Image source={{ uri: item.image }} style={styles.image} />
            <View style={styles.bookmark}>
              <Ionicons
                name="bookmarks-outline"
                size={18}
                color={Colors.white}
              />
            </View>
            <Text
              style={styles.itemText}
              // text just on one line, if it's too long, convert the overflow to "..."
              numberOfLines={1}
              ellipsizeMode={"tail"}
            >
              {item.name}
            </Text>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <FontAwesome
                  name="map-marker"
                  size={18}
                  color={Colors.primaryColor}
                />
                <Text style={styles.textLocation}>{item.location}</Text>
              </View>
              <Text style={styles.textPrice}>${item.price}</Text>
            </View>
          </View>
        </TouchableOpacity>
      </Link>
    );
  };
  return (
    <View>
      <FlatList
        data={loading ? [] : listings}
        renderItem={renderItems}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: Colors.white,
    padding: 10,
    borderRadius: 10,
    marginRight: 10,
    width: 220,
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 10,
    marginBottom: 30,
  },
  bookmark: {
    position: "absolute",
    top: 185,
    right: 30,
    padding: 10,
    backgroundColor: Colors.primaryColor,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: Colors.white,
  },
  itemText: {
    fontSize: 16,
    marginBottom: 10,
    color: Colors.black,
    fontWeight: "bold",
  },
  textLocation: {
    fontSize: 12,
    marginLeft: 5,
  },
  textPrice: {
    fontSize: 14,
    color: Colors.primaryColor,
  },
});
