import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { format, addDays, subDays, isToday } from "date-fns";
import { MaterialIcons } from "@expo/vector-icons";

const Attendance = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [attendanceData, setAttendanceData] = useState({});

  // Update the attendance status for the current date
  useEffect(() => {
    const currentKey = format(selectedDate, "yyyy-MM-dd");
    // Simulate fetching attendance data
    setAttendanceData((prev) => ({
      ...prev,
      [currentKey]: prev[currentKey] || "No Attendance marked for this date",
    }));
  }, [selectedDate]);

  const handleDateChange = (direction) => {
    const newDate =
      direction === "next"
        ? addDays(selectedDate, 1)
        : subDays(selectedDate, 1);
    setSelectedDate(newDate);
  };

  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
          backgroundColor: "#e2e1f7",
          padding: 15,
          borderRadius: 10,
        }}
      >
        <Text style={{ fontSize: 18, fontWeight: "bold" }}>
          Overall Attendance
        </Text>
        <Text style={{ fontSize: 16, fontWeight: "bold" }}>75%</Text>
      </View>

      <Text style={styles.dateText}>
        {format(selectedDate, "MMMM")} / {format(selectedDate, "MMMM yyyy")}
      </Text>
      <View style={styles.dateNavigation}>
        <TouchableOpacity
          style={{ backgroundColor: "#fff", padding: 10 }}
          onPress={() => handleDateChange("prev")}
        >
          <MaterialIcons name="keyboard-arrow-left" size={24} color="black" />
        </TouchableOpacity>
        <View
          style={{
            flexDirection: "row",
            width: "90%",
            justifyContent: "space-between",
          }}
        >
          {Array.from({ length: 7 }, (_, index) => {
            const date = addDays(selectedDate, index - 3); // Show a week around the selected date
            const isActive = isToday(date) ? styles.activeDay : "";
            return (
              <Text key={index} style={[styles.day, isActive]}>
                {format(date, "EEE dd")}
              </Text>
            );
          })}
        </View>

        <TouchableOpacity
          style={{ backgroundColor: "#fff", padding: 10 }}
          onPress={() => handleDateChange("next")}
        >
          <MaterialIcons name="keyboard-arrow-right" size={24} color="black" />
        </TouchableOpacity>
      </View>

      <Text style={styles.attendanceMessage}>
        {attendanceData[format(selectedDate, "yyyy-MM-dd")]}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,

    alignItems: "center",
    backgroundColor: "#fff",
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
  },
  attendance: {
    fontSize: 18,
    marginVertical: 8,
  },
  dateText: {
    marginVertical: 10,
    fontSize: 14,
    textAlign: "center",
    fontWeight: "bold",
    marginBottom: 10,
  },
  dateNavigation: {
    flexDirection: "row",
    alignItems: "center",
  },
  button: {
    fontSize: 24,
    paddingHorizontal: 10,
  },
  day: {
    width: 40,
    height: 40,
    textAlign: "center",
    marginHorizontal: 5,
    fontSize: 12,
    color: "grey",
    backgroundColor: "transparent",
    padding: 5,
    borderRadius: 100,
  },
  activeDay: {
    color: "white",
    fontWeight: "bold",
    backgroundColor: "#10d0f2",
  },
  attendanceMessage: {
    marginTop: 30,
    fontSize: 16,
    color: "grey",
  },
});

export default Attendance;
