import React, { Fragment } from "react";
import { Text, View, StyleSheet } from "@react-pdf/renderer";

const borderColor = "#90e5fc";
const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    borderBottomColor: "#bff0fd",
    borderBottomWidth: 1,
    alignItems: "center",
    height: 24,
    fontStyle: "bold",
    color: "white",
  },
  blankRow: {
    width: "100%",
    color: "#000000",
  },
});

const InvoiceTableBlankSpace = () => {
  return (
    <View style={styles.row}>
      <Text style={styles.blankRow}>Group 1</Text>
    </View>
  );
};

export default InvoiceTableBlankSpace;
