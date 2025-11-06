import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Box, Heading, Text } from '@chakra-ui/react';
import VideoFeaures from "../components/VideoFeatures";
import AboutUsComp from "../components/AboutUsComp";
function AboutUs() {
  return (
    <div>
      <Navbar />
      <br />
      <br />
      <br />
      <Box  p={20}>
      <Heading textAlign={"center"} mb={4}>About Us</Heading>
     <AboutUsComp/>
      <br/>
      <br/>
      <Text fontSize="lg" mb={4}>
        Welcome to Captivating Audiobooks for Diploma, your go-to destination for transforming traditional books into captivating audio experiences tailored for students pursuing their diplomas.
      </Text>
      <Text fontSize="lg" mb={4}>
        Our mission is to make learning more accessible and enjoyable by providing audio versions of essential textbooks and study materials. We understand the challenges students face in balancing their academic responsibilities, and we believe that by offering audiobooks, we can help alleviate some of the stress associated with traditional learning methods.
      </Text>
      <Text fontSize="lg" mb={4}>
        At Captivating Audiobooks for Diploma, we prioritize quality and accessibility. Our team of experienced narrators and technicians work diligently to ensure that each audiobook is professionally recorded and easily accessible to all learners. Whether you're commuting to class, exercising at the gym, or simply prefer auditory learning, our audiobooks are designed to seamlessly integrate into your daily routine.
      </Text>
      <Text fontSize="lg" mb={4}>
        Additionally, we understand the importance of visual learning aids. That's why we also provide PDF versions of the books featured on our website. This allows users to switch between audio and visual formats according to their preferences and learning styles.
      </Text>
      <Text fontSize="lg">
        Thank you for choosing Captivating Audiobooks for Diploma. We're committed to enhancing your learning experience and helping you succeed on your academic journey.
      </Text>
    </Box>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Footer />
    </div>
  );
}

export default AboutUs;
