import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export function PostCard() {
  const [liked, setLiked] = useState(false);
  const [saved, setSaved] = useState(false);

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

      <View style={styles.actionsRow}>
        <View style={styles.leftActions}>
          <TouchableOpacity onPress={() => setLiked(!liked)}>
            <Ionicons
              name={liked ? "heart" : "heart-outline"}
              size={28}
              color={liked ? "#ed4956" : "#000"}
            />
          </TouchableOpacity>

          <TouchableOpacity>
            <Ionicons name="chatbubble-outline" size={26} color="#000" />
          </TouchableOpacity>

          <TouchableOpacity>
            <Ionicons name="paper-plane-outline" size={26} color="#000" />
          </TouchableOpacity>
        </View>

        <TouchableOpacity onPress={() => setSaved(!saved)}>
          <Ionicons
            name={saved ? "bookmark" : "bookmark-outline"}
            size={26}
            color="#000"
          />
        </TouchableOpacity>
      </View>
      <View style={styles.content}>
        <Text style={styles.likes}>2,481 likes</Text>

        <Text style={styles.caption}>
          <Text style={styles.username}>john.dev </Text>
          Building something cool with Expo 🚀
        </Text>

        <TouchableOpacity>
          <Text style={styles.comments}>View all 124 comments</Text>
        </TouchableOpacity>

        <Text style={styles.time}>2 hours ago</Text>
      </View>
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

  actionsRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 12,
    paddingVertical: 10,
  },

  leftActions: {
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
  },

  content: {
    paddingHorizontal: 12,
    paddingBottom: 14,
  },

  likes: {
    fontSize: 14,
    fontWeight: "600",
    marginBottom: 6,
  },

  caption: {
    fontSize: 14,
    lineHeight: 20,
  },

  comments: {
    fontSize: 14,
    color: "#737373",
    marginTop: 6,
  },

  time: {
    fontSize: 11,
    color: "#737373",
    marginTop: 6,
  },
});
