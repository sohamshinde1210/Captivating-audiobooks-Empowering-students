import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  Button,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import one from "../Assets/one.jpg";
import two from "../Assets/two.png";

export default function AboutUsComp() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <Stack minH={"90vh"} direction={{ base: "column", md: "row" }}>
        <Flex
          data-aos="fade-right"
          data-aos-duration="1000"
          data-aos-easing="easeInOutSine"
          data-aos-frameRate="60"
          p={8}
          flex={1}
          align={"center"}
          justify={"center"}
        >
          <Stack spacing={6} w={"full"} maxW={"lg"}>
            <Heading fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}>
              <Text
                as={"span"}
                position={"relative"}
                _after={{
                  content: "''",
                  width: "full",
                  height: useBreakpointValue({ base: "20%", md: "30%" }),
                  position: "absolute",
                  bottom: 1,
                  left: 0,
                  bg: "blue.400",
                  zIndex: -1,
                }}
              >
                Start
              </Text>
              <br />{" "}
              <Text color={"blue.400"} as={"span"}>
               Learning
              </Text>{" "}
            </Heading>
            <Text fontSize={{ base: "md", lg: "lg" }} color={"gray.500"}>
              Unlocking knowledge and efficiency: Audiobooks curated for diploma
              success.Ditch the heavy textbooks, embrace accessible learning
              with engaging audiobooks.
            </Text>
        
          </Stack>
        </Flex>
        <Flex
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-easing="easeInOutSine"
          data-aos-frameRate="60"
          flex={1}
        >
          <Image alt={"features img"} objectFit={"cover"} src="https://images.unsplash.com/photo-1542641806058-922fa0dae86b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YXVkaW9ib29rfGVufDB8fDB8fHww" />
        </Flex>
      </Stack>{" "}
      <Stack minH={"90vh"} direction={{ base: "column", md: "row" }}>
        <Flex
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-easing="easeInOutSine"
          data-aos-frameRate="60"
          flex={1}
        >
          <Image alt={"Login Image"} objectFit={"cover"} src="https://images.unsplash.com/photo-1610116306796-6fea9f4fae38?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Ym9va3N8ZW58MHx8MHx8fDA%3D" />
        </Flex>{" "}
        <Flex
          data-aos="fade-right"
          data-aos-duration="1000"
          data-aos-easing="easeInOutSine"
          data-aos-frameRate="60"
          p={8}
          flex={1}
          align={"center"}
          justify={"center"}
        >
          <Stack spacing={6} w={"full"} maxW={"lg"}>
            <Heading fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}>
              <Text
                as={"span"}
                position={"relative"}
                _after={{
                  content: "''",
                  width: "full",
                  height: useBreakpointValue({ base: "20%", md: "30%" }),
                  position: "absolute",
                  bottom: 1,
                  left: 0,
                  bg: "blue.400",
                  zIndex: -1,
                }}
              >
             Learning
              </Text>
              <br />{" "}
              <Text color={"blue.400"} as={"span"}>
               at your fingertips
              </Text>{" "}
            </Heading>
            <Text fontSize={{ base: "md", lg: "lg" }} color={"gray.500"}>
              This innovative platform delivers curated audiobooks specifically
              designed for diploma students. Ditch the heavy tomes and listen to
              engaging narrators explain complex concepts, real-world
              applications, and key exam topics. Benefits:
            </Text>
            <Stack direction={{ base: "column", md: "row" }} spacing={4}>
              <Button
                rounded={"full"}
                bg={"blue.400"}
                color={"white"}
                _hover={{
                  bg: "blue.300",
                }}
              >
                Start Learning
              </Button>
              <Button rounded={"full"}>About us</Button>
            </Stack>
          </Stack>
        </Flex>
      </Stack>
    </>
  );
}
