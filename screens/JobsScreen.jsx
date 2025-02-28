import { StyleSheet, Text, View } from "react-native";
import JobCard from "../components/JobCard";
import { ScrollView } from "react-native-gesture-handler";
export default function Jobs() {
  const jobListings = [
    {
      imgUrl:
        "https://imgs.search.brave.com/hPias3s2yLUV1Xig4skyIy-CAk2Yln_Z851gJYe2w1o/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/c2FuaXR5LmlvL2lt/YWdlcy80M2VhMmE1/dC9jc29kLW5ldy9k/N2I5MzUyZmE1MzFl/MjY3ZjMyZTUxMjM0/ZjVhZjg3Mjg5NGE5/Mjc2LTQ4eDQ4LnN2/Zz9maXQ9bWluJmF1/dG89Zm9ybWF0Jmg9/MjA0OCZ3PTIwNDg",
      company: "Cornerstone",
      position: "Intern - Intern",
      stipend: "N.A",
      workType: "Hybrid",
      period: "3 Months",
      batches: [2025],
      datePosted: "Mon Sep 30 2024",
    },
    {
      imgUrl:
        "https://imgs.search.brave.com/Zs4liyjCPhprw_gJ3eZwWt6_0dD7HN14GkmHZpwyvS0/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/c2FsZXNmb3JjZS5j/b20vbmV3cy93cC1j/b250ZW50L3VwbG9h/ZHMvc2l0ZXMvMy8y/MDIxLzA1L1NhbGVz/Zm9yY2UtbG9nby5q/cGc_dz0xMDI0",
      company: "Salesforce",
      position: "Fulltime - AMTS",
      stipend: "N.A",
      workType: "Hybrid",
      period: "Full Time",
      batches: [2024],
      datePosted: "Sun Sep 29 2024",
    },
    {
      imgUrl:
        "https://imgs.search.brave.com/8ATDKPsRi0hMNZKDxJcevFZUBneBEqVjegEebcu1eIg/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly8xMDAw/bG9nb3MubmV0L3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDE3LzA0/L09yYWNsZS1Mb2dv/LTEtNTAweDI4MS5w/bmc",
      company: "Oracle",
      position: "Fulltime - Software developer 1",
      stipend: "N.A",
      workType: "Onsite",
      period: "Full Time",
      batches: [2022, 2023, 2024],
      datePosted: "Tue Sep 24 2024",
    },
    {
      imgUrl:
        "https://imgs.search.brave.com/wxUqbURllJg8eikCTjXEyHrm2-kD9aPaS64JXOaZ46M/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/ZnJlZWJpZXN1cHBs/eS5jb20vaW1hZ2Vz/L2xhcmdlLzJ4L21h/c3RlcmNhcmQtbG9n/by1wbmctdHJhbnNw/YXJlbnQucG5n",
      company: "MasterCard",
      position: "Intern - Data scientist",
      stipend: "N.A",
      workType: "Remote",
      period: "Full Time",
      batches: [2025, 2026],
      datePosted: "Sun Sep 22 2024",
    },
    {
      imgUrl:
        "https://imgs.search.brave.com/vTLhO_pzN0kiabVcKVcP48PrjPGviLQ4mBX6A0nV34c/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly8xMDAw/bG9nb3MubmV0L3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDE2LzEx/L05ldy1Hb29nbGUt/TG9nby00OTd4NTAw/LmpwZw",
      company: "Google",
      position: "Intern - Software Engineer",
      stipend: "N.A",
      workType: "Onsite",
      period: "4 Months",
      batches: [2025],
      datePosted: "Fri Oct 15 2024",
    },
    {
      imgUrl:
        "https://imgs.search.brave.com/89ECeSyPb0wsUPBvYrg4DmzgfKNEpKbT0TCMCPPSS4o/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/cHJvZC53ZWJzaXRl/LWZpbGVzLmNvbS82/NWNhZmVhZTBkNjJk/OWU0MTYzZDE1NDUv/NjZiY2M5ZjFkN2Yy/NjkxYTdhMDg4ODMy/X0FEXzRuWGZEQnhv/YlU5TWY1YmE2V0Vp/eTNSdXFPLTF2WGNH/X3hCY2Qwdk1JQm90/VU11aWR4YnFTUGpT/N0dXWE5jOFVfY3F0/LVFMa1pIdDlqdGdX/cGlWVmppWnBCaDQx/amtHc2gyNFM5R2ZX/Z1RSQ1FHUjdNbnJ0/MG84SXprSG83VFFE/Znp4Z2tZaWdlQktN/ZkxscE5QajVtUmxz/SDJPcTUuYXZpZg",
      company: "Amazon",
      position: "Fulltime - Software Development Engineer",
      stipend: "N.A",
      workType: "Hybrid",
      period: "Full Time",
      batches: [2023, 2024],
      datePosted: "Mon Nov 05 2024",
    },
    {
      imgUrl:
        "https://imgs.search.brave.com/xL5-YcXo4PizHJAQqe7cARP8PgVrHtmrNdXOX6i_KCs/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tYWls/bWV0ZW9yLmNvbS9s/b2dvcy9hc3NldHMv/UE5HL01pY3Jvc29m/dF9Mb2dvXzEyOHB4/LnBuZw",
      company: "Microsoft",
      position: "Intern - Cloud Solutions Architect",
      stipend: "N.A",
      workType: "Remote",
      period: "6 Months",
      batches: [2025],
      datePosted: "Wed Oct 10 2024",
    },
    {
      imgUrl:
        "https://imgs.search.brave.com/dLixlA4UobvGUEiaQkUND9GlJ8LNiMYgm1baQcXkgP4/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/bG9nb2pveS5jb20v/d3AtY29udGVudC91/cGxvYWRzLzIwMjMw/OTIxMTA0NDA4L0Zh/Y2Vib29rLWxvZ28t/NjAweDMxOS5wbmc",
      company: "Facebook",
      position: "Fulltime - Data Analyst",
      stipend: "N.A",
      workType: "Onsite",
      period: "1 Year",
      batches: [2024],
      datePosted: "Thu Oct 20 2024",
    },
    {
      imgUrl:
        "https://imgs.search.brave.com/7mXh_1Cb1nBOsXoWSEjRAQKydqN3x7fljA4Em9UJui8/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5kZXNpZ25ydXNo/LmNvbS9pbnNwaXJh/dGlvbl9pbWFnZXMv/MjY5OTA3L2NvbnZl/cnNpb25zLzNfVGVz/bGFfTG9nb19EZXNp/Z25fZjQwNGQzMzBj/ZTgxLWRlc2t0b3Au/anBn",
      company: "Tesla",
      position: "Intern - Mechanical Engineer",
      stipend: "N.A",
      workType: "Hybrid",
      period: "3 Months",
      batches: [2025],
      datePosted: "Sat Sep 28 2024",
    },
    {
      imgUrl:
        "https://imgs.search.brave.com/L8rJ2cOee0w5vKFuEjKLUKfEf62eQqsgtNPlyBfEf78/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly8xMDAw/bG9nb3MubmV0L3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDE3LzAy/L0NvbG9yLUlCTS1M/b2dvLTUwMHgzMjEu/anBn",
      company: "IBM",
      position: "Fulltime - Business Analyst",
      stipend: "N.A",
      workType: "Remote",
      period: "Full Time",
      batches: [2022, 2023],
      datePosted: "Tue Oct 15 2024",
    },
  ];
  return (
    <ScrollView style={styles.container}>
      {jobListings.map((job, index) => (
        <JobCard
          key={index}
          logoUrl={job.imgUrl}
          company={job.company}
          datePosted={job.datePosted}
          stipend={job.stipend}
          title={job.position}
          forBatch={job.batches}
          workType={job.workType}
          duration={job.period}
        />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
});
