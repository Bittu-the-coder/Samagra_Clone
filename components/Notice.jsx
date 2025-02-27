import React from "react";
import { Text, View } from "react-native";
import { Divider } from "./OrDivider";

function Notice({ title, date, forWhom, by = "MMMUT RESO" }) {
  return (
    <>
      <View
        style={{ paddingHorizontal: 10, paddingVertical: 5, marginBottom: 5 }}
      >
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text style={{ fontSize: 14, fontWeight: "bold", width: "70%" }}>
            {title}
          </Text>
          <Text style={{ fontSize: 11, color: "#888" }}>{date}</Text>
        </View>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text style={{ fontSize: 11, color: "#888" }}>{forWhom}</Text>
          <Text style={{ fontSize: 11, color: "#888" }}>{by}</Text>
        </View>
      </View>
      <Divider />
    </>
  );
}

export default Notice;
