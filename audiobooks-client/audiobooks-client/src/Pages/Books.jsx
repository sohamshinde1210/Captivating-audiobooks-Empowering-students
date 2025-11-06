import React, { useState } from "react";
import { PDFViewer } from "@react-pdf/renderer";
import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";
import ReactPDF from "@react-pdf/renderer";

import emergingTrendsComputerGroup from "../Assets/emergingTrendsComputerGroup.pdf";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { pdfjs } from "react-pdf";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.js",
  import.meta.url
).toString();
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

const Books = () => {
  const [numPages, setNumPages] = useState();
  const [pageNumber, setPageNumber] = useState(1);

  const styles = StyleSheet.create({
    page: {
      flexDirection: "row",
      backgroundColor: "#E4E4E4",
    },
    section: {
      margin: 10,
      padding: 10,
      flexGrow: 1,
    },
  });

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <div>
      <Navbar />
      <br />
      <br /> <br />
      <br /> <br />
      <div>
        <p>
          Page {pageNumber} of {numPages}
        </p>
      </div>{" "}
      <PDFViewer>
        <Document file={emergingTrendsComputerGroup}>
          <Page size="A4" style={styles.page}>
            <View style={styles.section}>
              <Text>Section #1</Text>
            </View>
            <View style={styles.section}>
              <Text>Section #2</Text>
            </View>
          </Page>
        </Document>
      </PDFViewer>
      <br />
      <br /> <br />
      <br /> <br />
      <Footer />
    </div>
  );
};

export default Books;
