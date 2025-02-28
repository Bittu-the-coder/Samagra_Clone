import { StyleSheet, Text, View } from "react-native";

export default function Results() {
  const resultData = [
    { semester: "Semester 1", cgpa: "9.0" },
    { semester: "Semester 2", cgpa: "8.5" },
    { semester: "Semester 3", cgpa: "8.0" },
    { semester: "Semester 4", cgpa: "7.5" },
    { semester: "Semester 5", cgpa: "7.0" },
    { semester: "Semester 6", cgpa: "8.5" },
    { semester: "Semester 7", cgpa: "" },
    { semester: "Semester 8", cgpa: "" },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.infoContainer}>
        <Text style={[styles.infoText, { fontWeight: "bold", color: "#333" }]}>
          Batch: Pre Final Year
        </Text>
        <Text style={styles.infoText}>Roll No: 2022021667</Text>
        <Text style={styles.infoText}>Enrollment No: CSD2022021321</Text>
        <Text style={styles.infoText}>Department: CSE-D</Text>
      </View>

      <Text style={styles.title}>Semester Wise Result Data</Text>

      <View style={styles.tableContainer}>
        <View style={styles.row}>
          <Text style={styles.headerText}>Semester</Text>
          <Text style={styles.headerText}>CGPA</Text>
        </View>
        {resultData.map((data, index) => (
          <View key={index} style={styles.row}>
            <Text style={styles.cellText}>{data.semester}</Text>
            <Text style={styles.cellText}>{data.cgpa || "N/A"}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
  },
  infoContainer: {
    marginBottom: 20,
  },
  infoText: {
    fontSize: 16,
    color: "#888",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
    color: "#777",
  },
  tableContainer: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 5,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  headerText: {
    fontSize: 16,
    fontWeight: "600",
    color: "black",
  },
  cellText: {
    fontSize: 16,
    color: "#555",
  },
});
