import React from "react";
import { Pressable, View } from "react-native";

function JobCard(
  logoUrl,
  company,
  title,
  datePosted,
  stipend,
  forBatch,
  workType,
  duration,
  onpressMoreInfo,
  onpressApply
) {
  return (
    <View>
      <View>
        <Image source={logoUrl} />
        <Text>{company}</Text>
        <Text>{title}</Text>
        <Text>{datePosted}</Text>
      </View>
      <View>
        <Text>{stipend}</Text>
        <Text>{forBatch}</Text>
        <Text>{workType}</Text>
        <Text>{duration}</Text>
      </View>
      <View>
        <Pressable onPress={onpressMoreInfo}>More Details</Pressable>
        <Pressable onPress={onpressApply}>Apply</Pressable>
      </View>
    </View>
  );
}

export default JobCard;
