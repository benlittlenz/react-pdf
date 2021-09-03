import React from "react";
import { Text, View, StyleSheet } from "@react-pdf/renderer";

const borderColor = "#90e5fc";
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    borderBottomColor: "#bff0fd",
    backgroundColor: "#bff0fd",
    borderBottomWidth: 1,
    alignItems: "center",
    height: 24,
    textAlign: "center",
    fontStyle: "bold",
    flexGrow: 1,
  },
  description: {
    width: "30%",
    borderRightColor: borderColor,
    borderRightWidth: 1,
  },
  qty: {
    width: "20%",
    borderRightColor: borderColor,
    borderRightWidth: 1,
  },
  rate: {
    width: "15%",
    borderRightColor: borderColor,
    borderRightWidth: 1,
  },
  duration: {
    width: "15%",
  },
  fee: {
    width: "15%",
  },
  total: {
    width: "15%",
  },
});

const InvoiceTableHeader = () => (
  <View style={styles.container}>
    <Text style={styles.description}>Item Description</Text>
    <Text style={styles.qty}>Type</Text>
    <Text style={styles.rate}>Erect & Dismantle</Text>
    <Text style={styles.duration}>Weekly Duration</Text>
    <Text style={styles.fee}>Weekly Hire Fee</Text>
    <Text style={styles.total}>Total Cost</Text>
  </View>
);

export default InvoiceTableHeader;
