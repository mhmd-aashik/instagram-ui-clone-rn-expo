import { Ionicons } from "@expo/vector-icons";
import { useRef, useState } from "react";
import {
  Animated,
  Image,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

type PostCardProps = {
  username: string;
  location?: string;
  avatar: string;
  image: string;
  caption: string;
  likes: number;
  comments: number;
  time: string;
  verified?: boolean;
};

export function PostCard({
  username,
  location,
  avatar,
  image,
  caption,
  likes,
  comments,
  time,
  verified = false,
}: PostCardProps) {
  const [liked, setLiked] = useState(false);
  const [saved, setSaved] = useState(false);
  const lastTap = useRef<number | null>(null);
  const [optionsOpen, setOptionsOpen] = useState(false);

  const heartScale = useRef(new Animated.Value(0)).current;

  const baseLikes = likes;
  const likeCount = liked ? baseLikes + 1 : baseLikes;

  const handleDoubleTap = () => {
    const now = Date.now();

    if (lastTap.current && now - lastTap.current < 300) {
      setLiked(true);

      heartScale.setValue(0);

      Animated.sequence([
        Animated.spring(heartScale, {
          toValue: 1,
          useNativeDriver: true,
        }),

        Animated.delay(400),

        Animated.timing(heartScale, {
          toValue: 0,
          duration: 200,
          useNativeDriver: true,
        }),
      ]).start();
    }

    lastTap.current = now;
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.user}>
          <Image source={{ uri: avatar }} style={styles.avatar} />

          <View>
            <View style={styles.usernameRow}>
              <Text style={styles.username}>{username}</Text>

              {verified && (
                <Ionicons name="checkmark-circle" size={14} color="#0095F6" />
              )}
            </View>
            {location && <Text style={styles.location}>{location}</Text>}
          </View>
        </View>

        <TouchableOpacity onPress={() => setOptionsOpen(true)}>
          <Ionicons name="ellipsis-horizontal" size={22} color="#000" />
        </TouchableOpacity>
      </View>

      <TouchableOpacity activeOpacity={1} onPress={handleDoubleTap}>
        <View style={styles.imageContainer}>
          <Image source={{ uri: image }} style={styles.postImage} />

          <Animated.View
            pointerEvents="none"
            style={[
              styles.bigHeart,
              {
                transform: [{ scale: heartScale }],
              },
            ]}
          >
            <Ionicons name="heart" size={100} color="#ed4956" />
          </Animated.View>
        </View>
      </TouchableOpacity>

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
        <Text style={styles.likes}>{likeCount.toLocaleString()} likes</Text>
        <Text style={styles.caption}>
          <Text style={styles.username}>{username} </Text>
          {caption}
        </Text>
        <TouchableOpacity>
          <Text style={styles.comments}>View all {comments} comments</Text>
        </TouchableOpacity>
        <Text style={styles.time}>{time}</Text>
      </View>
      <View style={styles.divider} />

      <Modal
        visible={optionsOpen}
        transparent
        animationType="fade"
        onRequestClose={() => setOptionsOpen(false)}
      >
        <TouchableOpacity
          style={styles.modalOverlay}
          activeOpacity={1}
          onPress={() => setOptionsOpen(false)}
        >
          <View style={styles.optionsMenu}>
            <TouchableOpacity style={styles.optionItem}>
              <Text style={styles.optionText}>Save</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.optionItem}>
              <Text style={styles.optionText}>Share</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.optionItem}>
              <Text style={[styles.optionText, styles.reportText]}>Report</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.optionItem}
              onPress={() => setOptionsOpen(false)}
            >
              <Text style={styles.optionText}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      </Modal>
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

  imageContainer: {
    position: "relative",
  },

  bigHeart: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    alignItems: "center",
    justifyContent: "center",
  },

  divider: {
    height: 1,
    backgroundColor: "#efefef",
  },

  usernameRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },

  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.35)",
    justifyContent: "flex-end",
  },

  optionsMenu: {
    backgroundColor: "#fff",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingBottom: 20,
  },

  optionItem: {
    paddingVertical: 18,
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#efefef",
  },

  optionText: {
    fontSize: 16,
    fontWeight: "500",
  },

  reportText: {
    color: "#ed4956",
  },
});
