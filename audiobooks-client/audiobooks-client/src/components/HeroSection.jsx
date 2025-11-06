import {
  Stack,
  Flex,
  Button,
  Text,
  VStack,
  useBreakpointValue,
} from "@chakra-ui/react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import three from "../Assets/three.jpg";

export default function HeroSection() {
  useEffect(() => {
    AOS.init();
    setTimeout(() => {
      AOS.refresh(); // Manually trigger animation after a delay
    }, 100);
  }, []);

  return (
    <Flex
      w={"full"}
      h={"90vh"}
      backgroundImage={three}
      backgroundSize={"cover"}
      backgroundPosition={"center center"}
    >
      <VStack
        w={"full"}
        justify={"center"}
        align={"center"}
        px={useBreakpointValue({ base: 4, md: 8 })}
        bgGradient={"linear(to-r, blackAlpha.600, transparent)"}
      >
        <Stack maxW={"3xl"} align={"center"} spacing={8}>
          {/* Center items vertically */}
          <Text
            textAlign="center"
            color={"white"}
            fontWeight={800}
            lineHeight={1.4}
            fontFamily="Raleway"
            fontSize={useBreakpointValue({ base: "5xl", md: "7xl" })}
            data-aos="fade-left"
          >
            Captivating audiobooks for diploma
          </Text>
          <Stack direction={"row"} spacing={4}>
            <Link to="/contactus">
              <Button
                bg={"whiteAlpha.300"}
                rounded={"full"}
                color={"white"}
                _hover={{ bg: "whiteAlpha.500" }}
                data-aos="fade-right"
              >
                Getting Started
              </Button>
            </Link>
            <Link to="/aboutus">
              <Button
                bg={"whiteAlpha.300"}
                rounded={"full"}
                color={"white"}
                _hover={{ bg: "whiteAlpha.500" }}
                data-aos="fade-left"
              >
                About Us
              </Button>
            </Link>
          </Stack>
        </Stack>
      </VStack>
    </Flex>
  );
}
