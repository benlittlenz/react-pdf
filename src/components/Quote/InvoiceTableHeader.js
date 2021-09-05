import React from "react";
import { Text, View, StyleSheet } from "@react-pdf/renderer";
const borderColor = "#D1D5DB";

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexDirection: "row",
    backgroundColor: "#E5E7EB",
    alignItems: "center",
    textAlign: "center",
    fontStyle: "bold",
    color: "#4B5563",
  },
  description: {
    minWidth: "20%",
    maxWidth: "30%",
    borderRightColor: borderColor,
    borderRightWidth: 1,
    textAlign: "center",
    paddingLeft: 8,
    paddingRight: 3,
  },
  type: {
    minWidth: "15%",
    maxWidth: "25%",
    borderRightColor: borderColor,
    borderRightWidth: 1,
    paddingLeft: 8,
    paddingRight: 3,
  },
  qty: {
    minWidth: "8%",
    maxWidth: "12%",
    borderRightColor: borderColor,
    borderRightWidth: 1,
    paddingLeft: 8,
    paddingRight: 3,
  },
  rate: {
    minWidth: "12%",
    maxWidth: "15%",
    borderRightColor: borderColor,
    borderRightWidth: 1,
    paddingLeft: 8,
    paddingRight: 3,
  },
  duration: {
    width: "15%",
    borderRightColor: borderColor,
    borderRightWidth: 1,
    paddingLeft: 8,
    paddingRight: 3,
  },
  fee: {
    width: "15%",
    borderRightColor: borderColor,
    borderRightWidth: 1,
    paddingLeft: 8,
    paddingRight: 3,
  },
  total: {
    width: "15%",
  },
});

const InvoiceTableHeader = () => (
  <View style={styles.container}>
    <Text style={styles.description}>Item Description</Text>
    <Text style={styles.type}>Type</Text>
    <Text style={styles.qty}>Qty</Text>
    <Text style={styles.rate}>Erect & Dismantle</Text>
    <Text style={styles.duration}>Weekly Duration</Text>
    <Text style={styles.fee}>Weekly Hire Fee</Text>
    <Text style={styles.total}>Total Cost</Text>
  </View>
);

export default InvoiceTableHeader;
