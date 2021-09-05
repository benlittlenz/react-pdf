import React from "react";

import {
  Document,
  Page,
  Image,
  View,
  Text,
  StyleSheet,
} from "@react-pdf/renderer";
import { Table } from "./components/Table";

import BillTo from "./components/Quote/BillTo";

import logo from "./logo.png";
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
  headingContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  headingContact: {
    textAlign: "right",
    marginTop: 30,
  },
  logo: {
    width: "20%",
  },
});
const columns = [
  {
    id: "description",
    heading: "Item Description",
  },
  {
    id: "type",
    heading: "Type",
  },
  {
    id: "qty",
    heading: "Qty",
  },
  ,
  {
    id: "rate",
    heading: "Erect & Dismantle",
  },
  {
    id: "duration",
    heading: "Weekly Duration",
  },
  {
    id: "fee",
    heading: "Weekly Hire Fee",
  },
  {
    id: "total",
    heading: "Total Cost",
  },
];

export const Quote = ({ invoice }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.headingContainer}>
        <Image style={styles.logo} src={logo} />
        <View style={styles.headingContact}>
          <Text style={styles.invoiceDate}>NSS Limited</Text>
          <Text style={styles.invoiceDate}>Tel: 0800 275 333</Text>
          <Text style={styles.invoiceDate}>
            Address: 67 Hillside Road, Wairau Valley
          </Text>
        </View>
      </View>
      <BillTo invoice={invoice} />
      <Table invoice={invoice} columns={columns} />
    </Page>
  </Document>
);
