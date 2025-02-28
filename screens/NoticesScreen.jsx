import { StyleSheet, Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Notice from "../components/Notice";
export default function Notices() {
  const recentNotices = [
    {
      title: "Revised schedule for MINOR DEGREE EXAMINATION",
      date: "March 5, 2025",
      for: "2nd and 3rd Year",
    },
    {
      title: "Revised schedule for minor test-1",
      date: "March 5, 2025",
      for: "Final Year(8th sem)",
    },
    {
      title: "Revised schedule for minor test-1",
      date: "March 5, 2025",
      for: "Third Year(6th sem)",
    },
    {
      title: "Revised schedule for minor test-2",
      date: "March 10, 2025",
      for: "Final Year(8th sem)",
    },
    {
      title: "Revised schedule for minor test-2",
      date: "March 10, 2025",
      for: "Third Year(6th sem)",
    },
    {
      title: "Revised schedule for minor test-2",
      date: "March 10, 2025",
      for: "Second Year(4th sem)",
    },
    {
      title: "Revised schedule for minor test-3",
      date: "March 15, 2025",
      for: "Final Year(8th sem)",
    },
    {
      title: "Revised schedule for minor test-3",
      date: "March 15, 2025",
      for: "Third Year(6th sem)",
    },
    {
      title: "Revised schedule for minor test-3",
      date: "March 15, 2025",
      for: "Second Year(4th sem)",
    },
    {
      title: "Revised schedule for minor test-4",
      date: "March 20, 2025",
      for: "Final Year(8th sem)",
    },
    {
      title: "Revised schedule for minor test-4",
      date: "March 20, 2025",
      for: "Third Year(6th sem)",
    },
    {
      title: "Revised schedule for minor test-4",
      date: "March 20, 2025",
      for: "Second Year(4th sem)",
    },
  ];
  return (
    <View style={styles.container}>
      <View style={styles.noticeSection}>
        <ScrollView style={{ width: "100%", backgroundColor: "#fff" }}>
          {recentNotices.map((notice, index) => (
            <Notice
              key={index}
              title={notice.title}
              date={notice.date}
              forWhom={notice.for}
            />
          ))}
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#fff",
    width: "100%",
  },
  noticeSection: {
    backgroundColor: "#fff",
    padding: 10,
    margin: 10,
    borderRadius: 8,
    width: "95%",
  },
  noticeTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
});
