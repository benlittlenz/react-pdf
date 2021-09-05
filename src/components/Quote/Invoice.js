import React from "react";

import {
  Document,
  Page,
  Image,
  View,
  Text,
  StyleSheet,
} from "@react-pdf/renderer";
import InvoiceTableHeader from "../InvoiceTableHeader";
import BillTo from "./BillTo";
import InvoiceTitle from "../InvoiceTitle";
import InvoiceNo from "../InvoiceNo";

import InvoiceItemsTable from "../InvoiceItemsTable";

import logo from "../logo.png";
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

// Create Document Component
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

      {/* <InvoiceNo invoice={invoice} /> */}
      <BillTo invoice={invoice} />
      <InvoiceItemsTable invoice={invoice} />
    </Page>
  </Document>
);

