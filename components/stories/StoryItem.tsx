import { LinearGradient } from "expo-linear-gradient";
import { Image, StyleSheet, Text, View } from "react-native";

type StoryItemProps = {
  name: string;
  image: string;
};

export function StoryItem({ name, image }: StoryItemProps) {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={["#f9ce34", "#ee2a7b", "#6228d7"]}
        start={{ x: 0, y: 1 }}
        end={{ x: 1, y: 0 }}
        style={styles.border}
      >
        <View style={styles.imageBorder}>
          <Image source={{ uri: image }} style={styles.image} />
        </View>
      </LinearGradient>

      <Text style={styles.name} numberOfLines={1}>
        {name}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 78,
    alignItems: "center",
  },

  image: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },

  name: {
    fontSize: 12,
    marginTop: 5,
    width: 70,
    textAlign: "center",
  },

  border: {
    width: 68,
    height: 68,
    borderRadius: 34,
    alignItems: "center",
    justifyContent: "center",
  },

  imageBorder: {
    width: 63,
    height: 63,
    borderRadius: 31.5,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
