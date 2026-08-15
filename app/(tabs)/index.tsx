import { PostCard } from "@/components/feed/PostCard";
import { StoryItem } from "@/components/stories/StoryItem";
import { posts } from "@/data/posts";
import { Ionicons } from "@expo/vector-icons";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.feed}
      >
        <View style={styles.header}>
          <Text style={styles.logo}>Instagram</Text>

          <View style={styles.actions}>
            <TouchableOpacity>
              <Ionicons name="heart-outline" size={27} color="#000" />
            </TouchableOpacity>

            <TouchableOpacity>
              <Ionicons name="paper-plane-outline" size={26} color="#000" />
            </TouchableOpacity>
          </View>
        </View>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.stories}
        >
          <StoryItem
            name="Your story"
            image="https://i.pravatar.cc/150?img=11"
          />

          <StoryItem name="sarah" image="https://i.pravatar.cc/150?img=32" />

          <StoryItem name="john" image="https://i.pravatar.cc/150?img=12" />

          <StoryItem name="alex" image="https://i.pravatar.cc/150?img=5" />

          <StoryItem name="emma" image="https://i.pravatar.cc/150?img=25" />
        </ScrollView>

        {posts.map((post) => (
          <PostCard
            key={post.id}
            username={post.username}
            location={post.location}
            avatar={post.avatar}
            image={post.image}
            caption={post.caption}
            likes={post.likes}
            comments={post.comments}
            time={post.time}
            verified={post.verified}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  header: {
    height: 55,
    paddingHorizontal: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  logo: {
    fontSize: 28,
    fontWeight: "700",
  },

  actions: {
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
  },

  stories: {
    paddingHorizontal: 10,
    paddingVertical: 10,
  },

  feed: {
    paddingBottom: 20,
  },
});
