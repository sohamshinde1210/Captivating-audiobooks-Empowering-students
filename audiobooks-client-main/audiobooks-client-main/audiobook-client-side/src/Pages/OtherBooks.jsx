import React, { useState } from "react";
import {
  Box,
  Grid,
  GridItem,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  Button,Heading
} from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import emergingTrendsComputerGroup from "../Assets/emergingTrendsComputerGroup.pdf";
import afterTheCure from "../Assets/After-the-Cure.pdf";
import BeautyAndBeast from "../Assets/Beauty-and-the-Beast.pdf";
import artOfWar from "../Assets/The-Art-of-War.pdf";
import varneyTheVampire from "../Assets/Varney-the-Vampire.pdf";

// Import other book PDFs as needed

const OtherBooks = () => {
  const [selectedBook, setSelectedBook] = useState(null); // State to keep track of selected book

  // Array of book objects
  const books = [
    {
      title: "After the Cure",
      pdfUrl: afterTheCure,
      coverImage:
        "https://cynsworkshop.files.wordpress.com/2016/11/after-the-cure-3d.png",
    },
    {
      title: "The Art of War",
      pdfUrl: artOfWar,
      coverImage:
        "https://m.media-amazon.com/images/I/41JF5APueNL._SX342_SY445_.jpg",
    },
    {
      title: "Beauty and Beast",
      pdfUrl: BeautyAndBeast,
      coverImage:
        "https://cdn.kobo.com/book-images/3fc9dfbd-dcd5-479d-87aa-31fd1f58e628/1200/1200/False/beauty-and-the-beast-75.jpg",
    },
    {
      title: "Varney the vampire",
      pdfUrl: varneyTheVampire,
      coverImage: "https://pictures.abebooks.com/isbn/9781440475351-us.jpg",
    },

    // Add other book objects as needed
  ];

  // Function to handle book click and open modal
  const handleBookClick = (book) => {
    setSelectedBook(book);
  };

  // Function to close modal
  const handleCloseModal = () => {
    setSelectedBook(null);
  };

  return (
    <div>
      <Navbar />
      <br /> <br /> <br /> <br /> <br /> <br />
      <Box m="8" p="4">
        <Grid templateColumns="repeat(2, 1fr)" gap={6}>
          {books.map((book, index) => (
            <GridItem
              boxShadow={"lg"}
              p="4"
              rounded={"lg"}
              key={index}
              cursor="pointer"
              onClick={() => handleBookClick(book)}
            >
                <Box mt={2} p="4">
                    <Heading textAlign="center">{book.title}</Heading></Box>
              <img
                src={book.coverImage}
                alt={book.title}
                objectFit="cover"
                height="300px"
              />
              
            </GridItem>
          ))}
        </Grid>
      </Box>
      {/* Modal to display PDF */}
      <Modal
        isOpen={selectedBook !== null}
        onClose={handleCloseModal}
        size="7xl"
      >
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody>
            <iframe
              src={selectedBook?.pdfUrl}
              width="100%"
              height="600px"
              title={selectedBook?.title}
            />
          </ModalBody>
        </ModalContent>
      </Modal>
      <Footer />
    </div>
  );
};

export default OtherBooks;
