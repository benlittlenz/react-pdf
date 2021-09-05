import { PDFViewer } from "@react-pdf/renderer";

import { Quote } from "./Quote";
import { invoiceData } from "./data";

import "./App.css";

function App() {
  return (
    <>
      <PDFViewer width="1400" height="1000" className="app">
        <Quote invoice={invoiceData} />
      </PDFViewer>
    </>
  );
}

export default App;
