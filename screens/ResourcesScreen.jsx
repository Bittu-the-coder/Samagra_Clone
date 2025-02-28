import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Pressable,
} from "react-native";
import { Picker } from "@react-native-picker/picker";

const ResourcesScreen = () => {
  const [selectedCourse, setSelectedCourse] = useState("CSE");
  const [semester, setSemester] = useState("2");
  const [session, setSession] = useState("Select Session");
  const [minor, setMinor] = useState("Minor 1");
  const [loading, setLoading] = useState(false);
  const [activeTab, setActiveTab] = useState("pyqs");
  const [subjects, setSubjects] = useState("Select Subject");
  const [syllabus, setSyllabus] = useState("Select Syllabus");
  const [selectedBranch, setSelectedBranch] = useState(null);

  const branches = [
    "2024-2028 CSE",
    "2024-2028 ECE",
    "2024-2028 IT",
    "2024-2028 ME",
    "2024-2028 CE",
    "2024-2028 EEE",
    "2024-2028 AE",

    "2024-2028 PE",
    "2024-2028 CHE",
    "2024-2028 BBA",
  ];

  const handleBranchPress = (branch) => {
    setSelectedBranch(branch);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };
  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const resources = [
    {
      title: "BCS-151 Introduction to C Programming",
      year: "2023-2027",
      course: "CSE",
      semester: "Semester-2",
      minor: "MINOR-1",
    },
    {
      title: "BCS-152 Web Designing-2",
      year: "2023-2027",
      course: "CSE",
      semester: "Semester-2",
      minor: "MINOR-1",
    },
    {
      title: "BEC-154 Basic Electronic Components and Circuits",
      year: "2023-2027",
      course: "CSE",
      semester: "Semester-2",
      minor: "MINOR-1",
    },
    {
      title: "BSM-156 Applied Probability and Statistics",
      year: "2023-2027",
      course: "CSE",
      semester: "Semester-2",
      minor: "MINOR-1",
    },
    {
      title: "BSM-179 Quantum Physics and Nanomaterials",
      year: "2023-2027",
      course: "CSE",
      semester: "Semester-2",
      minor: "MINOR-1",
    },
    {
      title: "BSM-180 Quantum Physics and Nanomaterials",
      year: "2022-2026",
      course: "CSE",
      semester: "Semester-2",
      minor: "MINOR-1",
    },
  ];

  return (
    <View style={styles.container}>
      {/* Tab Container */}
      <View style={styles.tabContainer}>
        <TouchableOpacity onPress={() => handleTabChange("pyqs")}>
          <Text style={[styles.tab, activeTab === "pyqs" && styles.activeTab]}>
            Pyqs
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleTabChange("notes")}>
          <Text style={[styles.tab, activeTab === "notes" && styles.activeTab]}>
            Notes
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleTabChange("syllabus")}>
          <Text
            style={[styles.tab, activeTab === "syllabus" && styles.activeTab]}
          >
            Syllabus
          </Text>
        </TouchableOpacity>
      </View>

      {/* Conditional Rendering Based on Active Tab */}
      {activeTab === "pyqs" && (
        <View>
          <View style={styles.filters}>
            <View style={styles.pickerContainer}>
              <Picker
                selectedValue={semester}
                onValueChange={(itemValue) => setSemester(itemValue)}
                style={styles.picker}
              >
                {[2, 3, 4, 5, 6, 7, 8].map((value) => (
                  <Picker.Item
                    key={value}
                    label={value.toString()}
                    value={value.toString()}
                  />
                ))}
              </Picker>
            </View>
            <View style={styles.pickerContainer}>
              <Picker
                selectedValue={selectedCourse}
                onValueChange={(itemValue) => setSelectedCourse(itemValue)}
                style={styles.picker}
              >
                {["CSE", "IT", "ECE", "EEE", "ME", "CE", "AE", "PE", "CHE"].map(
                  (course) => (
                    <Picker.Item key={course} label={course} value={course} />
                  )
                )}
              </Picker>
            </View>
            <View style={styles.pickerContainer}>
              <Picker
                selectedValue={session}
                onValueChange={(itemValue) => setSession(itemValue)}
                style={styles.picker}
              >
                {[
                  "Select Session",
                  "2024-2028",
                  "2023-2027",
                  "2022-2026",
                  "2021-2025",
                ].map((session) => (
                  <Picker.Item key={session} label={session} value={session} />
                ))}
              </Picker>
            </View>
            <View style={styles.pickerContainer}>
              <Picker
                selectedValue={minor}
                onValueChange={(itemValue) => setMinor(itemValue)}
                style={styles.picker}
              >
                {["Minor 1", "Minor 2", "Major"].map((minor) => (
                  <Picker.Item key={minor} label={minor} value={minor} />
                ))}
              </Picker>
            </View>
          </View>
          <FlatList
            data={resources}
            keyExtractor={(item) => item.title}
            renderItem={({ item }) => (
              <View style={styles.resourceItem}>
                <Text style={styles.resourceTitle}>{item.title}</Text>
                <Text>
                  {item.year} {item.course}
                </Text>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <Text>{item.semester} </Text>
                  <Text style={{ fontWeight: "bold", marginRight: 10 }}>
                    {item.minor}
                  </Text>
                </View>
              </View>
            )}
          />
        </View>
      )}

      {activeTab === "notes" && (
        <View>
          <View style={styles.filters}>
            <View style={styles.pickerContainer}>
              <Picker
                selectedValue={selectedCourse}
                onValueChange={(itemValue) => setSelectedCourse(itemValue)}
                style={styles.picker}
              >
                {["CSE", "IT", "ECE", "EEE", "ME", "CE", "AE", "PE", "CHE"].map(
                  (course) => (
                    <Picker.Item key={course} label={course} value={course} />
                  )
                )}
              </Picker>
            </View>
            <View style={styles.pickerContainer}>
              <Picker
                selectedValue={session}
                onValueChange={(itemValue) => setSession(itemValue)}
                style={styles.picker}
              >
                {[
                  "Select Session",
                  "2024-2028",
                  "2023-2027",
                  "2022-2026",
                  "2021-2025",
                ].map((session) => (
                  <Picker.Item key={session} label={session} value={session} />
                ))}
              </Picker>
            </View>
            <View style={[styles.pickerContainer, { flex: 1, marginTop: 5 }]}>
              <Picker
                selectedValue={subjects}
                onValueChange={(itemValue) => setSubjects(itemValue)}
                style={[styles.picker, { width: "100%" }]}
              >
                {[
                  "Select Subject",
                  "Maths",
                  "Physics",
                  "Chemistry",
                  "Biology",
                  "English",
                  "Mechanical Engineering",
                  "Electrical Engineering",
                  "Civil Engineering",
                  "Computer Science Engineering",
                  "Chemical Engineering",
                ].map((subject) => (
                  <Picker.Item key={subject} label={subject} value={subject} />
                ))}
              </Picker>
            </View>
          </View>
          <FlatList
            data={resources}
            keyExtractor={(item) => item.title}
            renderItem={({ item }) => (
              <View style={styles.resourceItem}>
                <Text style={styles.resourceTitle}>{item.title}</Text>
                <Text>
                  {item.year} {item.course}
                </Text>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <Text>{item.semester} </Text>
                  <Text style={{ fontWeight: "bold", marginRight: 10 }}>
                    {item.minor}
                  </Text>
                </View>
              </View>
            )}
          />
        </View>
      )}
      {activeTab === "syllabus" && (
        <View>
          {/* Year Picker */}
          <View style={styles.filters}>
            <View style={[styles.pickerContainer, { flex: 1 }]}>
              <Picker
                selectedValue={selectedCourse}
                onValueChange={(itemValue) => setSelectedCourse(itemValue)}
                style={[styles.picker, { width: "100%" }]}
              >
                {["2024-2028", "2023-2027", "2022-2026", "2021-2025"].map(
                  (course) => (
                    <Picker.Item key={course} label={course} value={course} />
                  )
                )}
              </Picker>
            </View>
          </View>
          {/* Branch List */}
          <View style={styles.branchList}>
            {loading ? (
              <ActivityIndicator size="large" color="#10d0f2" />
            ) : (
              branches.map((branch) => (
                <Pressable
                  key={branch}
                  // onPress={() => handleBranchPress(branch)}
                  style={[
                    styles.branchItem,
                    selectedBranch === branch && styles.selectedBranchItem,
                  ]}
                >
                  <Text style={styles.branchText}>{branch}</Text>
                </Pressable>
              ))
            )}
          </View>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 10,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
  },
  tabContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 5,
  },
  tab: {
    fontSize: 18,
    color: "Black",
    textAlign: "center",
  },
  filters: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginVertical: 5,
    flexWrap: "wrap",
  },
  picker: {
    height: 50,
    width: 165,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
  },
  pickerText: {
    fontSize: 12,
  },
  pickerContainer: {
    width: 165,
    height: 50,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    margin: 2,
  },
  resourceItem: {
    padding: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    marginBottom: 10,
  },
  resourceTitle: {
    fontWeight: "bold",
  },
  activeTab: {
    borderBottomColor: "#10d0f2",
    borderBottomWidth: 2,
    width: "100%",
    color: "#10d0f2",
  },
  branchList: {
    marginTop: 5,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  branchItem: {
    width: "100%", // Two items per row with some spacing
    height: 50,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    justifyContent: "center",
    marginBottom: 10,
  },
  selectedBranchItem: {
    borderColor: "#10d0f2",
    backgroundColor: "#e6f7ff",
  },
  branchText: {
    fontSize: 16,
    color: "#333",
    marginLeft: 20,
  },
});

export default ResourcesScreen;
