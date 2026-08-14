import { Image, StyleSheet, Text, View } from "react-native";

type StoryItemProps = {
  name: string;
  image: string;
};

export function StoryItem({ name, image }: StoryItemProps) {
  return (
    <View style={styles.container}>
      <View style={styles.border}>
        <Image source={{ uri: image }} style={styles.image} />
      </View>

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

  border: {
    width: 68,
    height: 68,
    borderRadius: 34,
    borderWidth: 2,
    borderColor: "#ff3040",
    alignItems: "center",
    justifyContent: "center",
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
});
