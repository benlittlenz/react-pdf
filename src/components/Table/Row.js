import React, { Fragment } from "react";
import _ from "lodash";
import { Text, View, StyleSheet } from "@react-pdf/renderer";
import { RowGroup } from "./Group";

const borderColor = "#F3F4F6";
const styles = StyleSheet.create({
  row: {
    flexGrow: 1,
    flexDirection: "row",
    borderBottomColor: "#F3F4F6",
    borderBottomWidth: 1,
    fontStyle: "bold",
  },
  description: {
    textWrap: "nowrap",
    textOverflow: "ellipsis",
    flexDirection: "column",
    width: "20%",
    // minWidth: "20%",
    // maxWidth: "30%",
    borderRightColor: borderColor,
    borderRightWidth: 1,
    paddingLeft: 8,
    paddingRight: 3,
  },
  type: {
    minWidth: "15%",
    maxWidth: "25%",
    borderRightColor: borderColor,
    borderRightWidth: 1,
    textAlign: "center",
    paddingLeft: 8,
    paddingRight: 3,
  },
  qty: {
    minWidth: "8%",
    maxWidth: "12%",
    borderRightColor: borderColor,
    borderRightWidth: 1,
    textAlign: "center",
    paddingLeft: 8,
    paddingRight: 3,
  },
  rate: {
    minWidth: "12%",
    maxWidth: "15%",
    borderRightColor: borderColor,
    borderRightWidth: 1,
    textAlign: "right",
    paddingLeft: 8,
    paddingRight: 3,
  },
  duration: {
    width: "15%",
    borderRightColor: borderColor,
    borderRightWidth: 1,
    textAlign: "center",
    paddingLeft: 8,
    paddingRight: 3,
  },
  amount: {
    width: "15%",
    textAlign: "center",
    borderRightColor: borderColor,
    borderRightWidth: 1,
    paddingLeft: 8,
    paddingRight: 3,
  },
  weekly: {
    width: "15%",
    textAlign: "center",
    borderRightColor: borderColor,
    borderRightWidth: 1,
    paddingLeft: 8,
    paddingRight: 3,
  },
  total: {
    width: "15%",
    textAlign: "right",
    paddingLeft: 8,
    paddingRight: 3,
  },
});

export const Row = ({ items, groupable = false }) => {
  const groupBy = function (xs, key) {
    return xs.reduce(function (rv, x) {
      (rv[x[key]] = rv[x[key]] || []).push(x);
      return rv;
    }, {});
  };

  const grouped = groupBy(items, "zoneLabel");
  let rows;
  if (groupable) {
    rows = Object.entries(grouped).map((item) => {
      return (
        <>
          <RowGroup text={item[0]} />
          {item[1].map((row) => {
            console.log("ROW", row);
            return (
              <>
                <View style={styles.row}>
                  <Text style={styles.description}>{row.description}</Text>
                  <Text style={styles.type}>{row.type}</Text>
                  <Text style={styles.qty}>{row.qty}</Text>
                  <Text style={styles.rate}>{row.rate}</Text>
                  <Text style={styles.duration}>{row.duration}</Text>
                  <Text style={styles.weekly}>{row.weekly}</Text>
                  <Text style={styles.amount}>{row.amount}</Text>
                </View>
              </>
            );
          })}
        </>
      );
    });
  } else {
    rows = items.map((item) => (
    <View style={styles.row}>
      <Text style={styles.description}>{item.description}</Text>
      <Text style={styles.type}>{item.type}</Text>
      <Text style={styles.qty}>{item.qty}</Text>
      <Text style={styles.rate}>{item.rate}</Text>
      <Text style={styles.duration}>{item.duration}</Text>
      <Text style={styles.amount}>{item.amount}</Text>
    </View>
    ));
  }


  return <Fragment>{rows}</Fragment>;
};
