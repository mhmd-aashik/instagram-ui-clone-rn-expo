import { PostCard } from "@/components/feed/PostCard";
import { StoryItem } from "@/components/stories/StoryItem";
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

        <PostCard
          username="john.dev"
          location="Dubai, UAE"
          avatar="https://i.pravatar.cc/150?img=12"
          image="https://picsum.photos/800/800"
          caption="Building something cool with Expo 🚀"
          likes={2481}
          comments={124}
          time="2 hours ago"
        />
        <PostCard
          username="john.dev"
          location="Dubai, UAE"
          avatar="https://i.pravatar.cc/150?img=12"
          image="https://picsum.photos/800/800"
          caption="Building something cool with Expo 🚀"
          likes={2481}
          comments={124}
          time="2 hours ago"
        />
        <PostCard
          username="john.dev"
          location="Dubai, UAE"
          avatar="https://i.pravatar.cc/150?img=12"
          image="https://picsum.photos/800/800"
          caption="Building something cool with Expo 🚀"
          likes={2481}
          comments={124}
          time="2 hours ago"
        />
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
