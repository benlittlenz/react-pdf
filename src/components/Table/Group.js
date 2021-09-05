import React, { Fragment } from "react";
import { Text, View, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    borderBottomColor: "#E5E7EB",
    borderBottomWidth: 1,
    alignItems: "center",
    height: 24,
    fontStyle: "bold",
    color: "white",
    backgroundColor: "#F9FAFB",
  },
  blankRow: {
    width: "100%",
    color: "#000000",
    paddingLeft: 8,
  },
});

export const RowGroup = ({ text }) => {
  return (
    <View style={styles.row}>
      <Text style={styles.blankRow}>{text}</Text>
    </View>
  );
};
