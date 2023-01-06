import React from 'react'
import {Page,Text,Image,Document,StyleSheet} from '@react-pdf/renderer'
import { PDFViewer } from '@react-pdf/renderer';
const styles = StyleSheet.create({
  pdf:{
    height:'100vh',
  },
  body: {
    paddingTop: 35,
    paddingBottom: 15,
    paddingHorizontal: 35,

  },
  title: {
    fontSize: 24,
    textAlign: "center",
  },
  text: {
    margin: 12,
    fontSize: 14,
    textAlign: "justify",
    fontFamily: "Times-Roman",
  },
  image: {
    marginVertical: 15,
    marginHorizontal: 100,
  },
  header: {
    fontSize: 12,
    marginBottom: 20,
    textAlign: "center",
    color: "grey",
  },
  pageNumber: {
    position: "absolute",
    fontSize: 12,
    bottom: 30,
    left: 0,
    right: 0,
    textAlign: "center",
    color: "grey",
  },
});

function GeneratePDF(props) {
    const {companyName,date,contactInfo,EmployeeFname,designation,department,joiningDate,salaryAmount,offerExpiryDate,senderName,senderDesignation}=props;
    return (
      <PDFViewer style={styles.pdf}>
      <Document size="A4">
        <Page size="A4"style={styles.body}>
          <Text style={styles.header} fixed></Text>
        
          <Text style={styles.text}
          render={()=>
          `${companyName}

          ${date} | ${contactInfo}

          Subject:Employment offer | ${companyName}

          We at ${companyName} are pleased to offer you the position of ${designation} in our
          ${department} department.

          Your starting date will be ${joiningDate}. The starting salary is ${salaryAmount} per year paid on
          a [biweekly/montthly] basis by direct deposit.This offer of employment is 
          contigent on you passing a pre-employment background check and signing standard
          confidentiality agreements.
          
          If you choose to accept this job offer.please sign and return this letter at your earliest
        convenience by ${offerExpiryDate}. Once your acceptance has been received, we will send you 
        information about onboarding and other asset details.

          Congratulations! we look forward to working with you. Please let me know if you
          have any questions or concerns.

          Sincerely,

          ${senderName}

          ${senderDesignation}
          ${companyName}` }
         fixed />
          
          <Text
            style={styles.pageNumber}
            render={({ pageNumber, totalPages }) =>
              `${pageNumber} / ${totalPages}`
            }
          />
        </Page>
      </Document>
      </PDFViewer>
    );

}

export default GeneratePDF