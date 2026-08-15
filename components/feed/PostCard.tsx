import { Ionicons } from "@expo/vector-icons";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export function PostCard() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.user}>
          <Image
            source={{ uri: "https://i.pravatar.cc/150?img=12" }}
            style={styles.avatar}
          />

          <View>
            <Text style={styles.username}>john.dev</Text>
            <Text style={styles.location}>Dubai, UAE</Text>
          </View>
        </View>

        <TouchableOpacity>
          <Ionicons name="ellipsis-horizontal" size={22} color="#000" />
        </TouchableOpacity>
      </View>

      <Image
        source={{
          uri: "https://picsum.photos/800/800",
        }}
        style={styles.postImage}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
  },

  header: {
    height: 55,
    paddingHorizontal: 12,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  user: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },

  avatar: {
    width: 36,
    height: 36,
    borderRadius: 18,
  },

  username: {
    fontSize: 14,
    fontWeight: "600",
  },

  location: {
    fontSize: 11,
    marginTop: 2,
  },

  postImage: {
    width: "100%",
    aspectRatio: 1,
  },
});
