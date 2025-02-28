import React from "react";
import { Image, Pressable, Text, View, StyleSheet } from "react-native";

function JobCard({
  logoUrl,
  company,
  title,
  datePosted,
  stipend,
  forBatch,
  workType,
  duration,
  onpressMoreInfo = () => {},
  onpressApply = () => {},
}) {
  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <Image source={{ uri: logoUrl }} style={styles.logo} />
        <View style={styles.info}>
          <Text style={styles.company}>{company}</Text>
          <Text style={styles.title}>{title}</Text>
        </View>
        <Text style={styles.date}>{datePosted}</Text>
      </View>
      <View style={styles.details}>
        <Text style={styles.stipend}>
          Stipend: <Text style={{ fontWeight: "bold" }}>{stipend}</Text>
        </Text>
        <Text>
          For Batches: <Text style={{ fontWeight: "bold" }}>{forBatch}</Text>
        </Text>
        <Text>
          Work Type: <Text style={{ fontWeight: "bold" }}>{workType}</Text>
        </Text>
        <Text>
          Duration: <Text style={{ fontWeight: "bold" }}>{duration}</Text>
        </Text>
      </View>
      <View style={styles.buttons}>
        <Pressable
          onPress={onpressMoreInfo}
          style={[styles.button, styles.moreInfoButton]}
        >
          <Text style={styles.buttonText}>More Details</Text>
        </Pressable>
        <Pressable
          onPress={onpressApply}
          style={[styles.button, styles.applyButton]}
        >
          <Text style={styles.buttonText}>Apply</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 16,
    borderRadius: 8,
    backgroundColor: "#fff",
    borderColor: "#ddd",
    borderWidth: 1,
    marginVertical: 8,
    flex: 1,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
  },
  logo: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  info: {
    flex: 1,
  },
  company: {
    fontWeight: "bold",
    fontSize: 16,
  },
  title: {
    fontSize: 14,
    color: "#666",
  },
  date: {
    fontSize: 12,
    color: "#aaa",
  },
  details: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginTop: 8,
    marginBottom: 16,
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    gap: 4,
  },
  button: {
    padding: 10,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  applyButton: {
    backgroundColor: "#000",
    width: "50%",
  },
  buttonText: {
    color: "#fff",
  },
  moreInfoButton: {
    backgroundColor: "#007bff",
    color: "#fff",
    width: "50%",
  },
});

export default JobCard;
