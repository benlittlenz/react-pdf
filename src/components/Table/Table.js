import React from "react";
import { View, StyleSheet } from "@react-pdf/renderer";
import {Header, Row, Footer} from './index'

const styles = StyleSheet.create({
  tableContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 24,
    borderWidth: 1,
    borderColor: "#E5E7EB",
  },
});

export const Table = ({ invoice, columns }) => (
  <View style={styles.tableContainer}>
    <Header columns={columns} />
    <Row items={invoice.items} groupable />
    <Footer items={invoice.items} />
  </View>
);

