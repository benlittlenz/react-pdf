import { PDFViewer } from "@react-pdf/renderer";
import Invoice from "./components/Invoice";
import {invoiceData} from "./data";

import "./App.css";

function App() {
  console.log("APPP", invoiceData);
  return (
    <>
      <PDFViewer width="1400" height="1000" className="app">
        <Invoice invoice={invoiceData} />
      </PDFViewer>
    </>
  );
}

export default App;
