import React from "react";
import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";
import InvoiceTableHeader from "./InvoiceTableHeader";
import BillTo from "./BillTo";
import InvoiceTitle from "./InvoiceTitle";
import InvoiceNo from "./InvoiceNo";

import InvoiceItemsTable from "./InvoiceItemsTable";
// Create styles
const styles = StyleSheet.create({
  page: {
    fontFamily: "Helvetica",
    fontSize: 11,
    paddingTop: 30,
    paddingLeft: 10,
    paddingRight: 10,
    lineHeight: 1.5,
    flexDirection: "column",
  },
  logo: {
    width: 74,
    height: 66,
    marginLeft: "auto",
    marginRight: "auto",
  },
});

// Create Document Component
const MyDocument = ({ invoice }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <InvoiceTitle title="yoyoooy" />
      <InvoiceNo invoice={invoice} />
      <BillTo invoice={invoice} />
      <InvoiceItemsTable invoice={invoice} />
    </Page>
  </Document>
);

export default MyDocument;
