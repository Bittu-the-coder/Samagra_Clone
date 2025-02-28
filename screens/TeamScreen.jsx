import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

export default function Team() {
  const teamMembers = [
    {
      name: "Sandeep Singh",
      department: "ECE",
      imgUrl:
        "https://res.cloudinary.com/du0hp8f5d/image/upload/v1736278460/student_profiles/a9zgnentangwouad27qt.jpg",
    },
    {
      name: "Tejas Mishra",
      department: "IT",
      imgUrl:
        "https://firebasestorage.googleapis.com/v0/b/indi-rp.appspot.com/o/assets%2Ftejas_img.jpeg?alt=media&token=8fd0e206-e23c-4b31-918f-0edd26bc595d",
    },
    {
      name: "Aditya Gaur",
      department: "CSE",
      imgUrl:
        "https://res.cloudinary.com/du0hp8f5d/image/upload/v1727724367/student_profiles/llhznsmn0ckxd3hvheql.jpg",
    },
    {
      name: "Anjul Singh",
      department: "IT",
      imgUrl:
        "https://res.cloudinary.com/du0hp8f5d/image/upload/v1729115378/student_profiles/hzv4ycxnumsi2jej7awv.jpg",
    },
    {
      name: "Prabhat Yadav",
      department: "IT",
      imgUrl:
        "https://res.cloudinary.com/du0hp8f5d/image/upload/v1721649977/student_profiles/deeapxkc6xykwwyw8iir.jpg",
    },
    {
      name: "Aashi Awasthi",
      department: "ECE",
      imgUrl:
        "https://firebasestorage.googleapis.com/v0/b/indi-rp.appspot.com/o/Avtar%2Fgirlavtar.jpeg?alt=media&token=b630d11b-1277-4b8d-80eb-ba8a55a46dfb",
    },
    {
      name: "Prachi Patel",
      department: "IT",
      imgUrl:
        "https://firebasestorage.googleapis.com/v0/b/indi-rp.appspot.com/o/Avtar%2Fgirlavtar.jpeg?alt=media&token=b630d11b-1277-4b8d-80eb-ba8a55a46dfb",
    },
    {
      name: "Manoj Kumar",
      department: "IT",
      imgUrl:
        "https://res.cloudinary.com/du0hp8f5d/image/upload/v1721648856/student_profiles/sdgfyd8awpzhjdrln9tv.jpg",
    },
    {
      name: "Harsh Agrahari",
      department: "CSE",
      imgUrl:
        "https://res.cloudinary.com/du0hp8f5d/image/upload/v1727717960/student_profiles/jufuaazl91l7v7nis0em.jpg",
    },
    {
      name: "Rudra Dubey",
      department: "IT",
      imgUrl:
        "https://firebasestorage.googleapis.com/v0/b/indi-rp.appspot.com/o/Avtar%2Fboyavtar.jpg?alt=media&token=1ae041b9-cbc9-499a-9fdb-69e8f1246985",
    },
    {
      name: "Aditya Patel",
      department: "BPHARM",
      imgUrl:
        "https://firebasestorage.googleapis.com/v0/b/indi-rp.appspot.com/o/Avtar%2FAvatarNormal.png?alt=media&token=34ca85cd-88ca-440e-8222-cf59fac107ed",
    },
    {
      name: "Krishna Chaurasiya",
      department: "BBA",
      imgUrl:
        "https://firebasestorage.googleapis.com/v0/b/indi-rp.appspot.com/o/Avtar%2FAvatarNormal.png?alt=media&token=34ca85cd-88ca-440e-8222-cf59fac107ed",
    },
    {
      name: "Anomol Tripathi",
      department: "BBA",
      imgUrl:
        "https://res.cloudinary.com/du0hp8f5d/image/upload/v1731586016/student_profiles/oudoj2ncp2nkkgwsohae.jpg",
    },
  ];

  return (
    <ScrollView style={{ width: "100%", backgroundColor: "#fff" }}>
      <View style={styles.container}>
        <Text
          style={{
            fontSize: 20,
            fontWeight: "500",
            color: "#fff",
            backgroundColor: "#1f2023",
            padding: 10,
            width: "90%",
            textAlign: "center",
            borderRadius: 10,
            fontWeight: "bold",
            marginBottom: 10,
          }}
        >
          Pre Final Year
        </Text>
        <View style={styles.teamContainer}>
          {teamMembers.map((member, index) => (
            <View key={index} style={styles.memberContainer}>
              <Image
                source={{ uri: member.imgUrl }}
                style={styles.memberImage}
              />
              <Text style={styles.memberName}>{member.name}</Text>
              <Text style={styles.memberDepartment}>{member.department}</Text>
            </View>
          ))}
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  teamContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
    gap: 10,
  },
  memberContainer: {
    alignItems: "center",
    width: "30%", // Adjusts to create a three-column layout
    margin: 5, // Slight margin for spacing
    width: 100,
  },
  memberName: {
    fontSize: 14,
    fontWeight: "500",
    color: "#777",
    fontWeight: "bold",
  },
  memberDepartment: {
    fontSize: 14,
    color: "#777",
  },
  memberImage: {
    width: 90,
    height: 90,
    borderRadius: 50,
  },
});
