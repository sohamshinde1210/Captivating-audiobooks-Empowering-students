import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  Box,
  chakra,
  Flex,
  SimpleGrid,
  Stat,
  StatLabel,
  StatNumber,
  useColorModeValue,
} from "@chakra-ui/react";

import { ReactNode } from "react";
import { GiCalendarHalfYear } from "react-icons/gi";
import { MdOutlineSubject } from "react-icons/md";
import { IoBookSharp } from "react-icons/io5";

function StatsCard(props) {
  const { title, stat, icon } = props;
  return (
    <Stat
      data-aos="fade-up"
      data-aos-duration="1000"
      data-aos-easing="easeInOutSine"
      data-aos-frameRate="60"
      px={{ base: 2, md: 4 }}
      py={"5"}
      shadow={"xl"}
      border={"1px solid"}
      borderColor={useColorModeValue("gray.800", "gray.500")}
      rounded={"lg"}
    >
      <Flex justifyContent={"space-between"}>
        <Box pl={{ base: 2, md: 4 }}>
          <StatLabel fontWeight={"medium"} isTruncated>
            {title}
          </StatLabel>
          <StatNumber fontSize={"2xl"} fontWeight={"medium"}>
            {stat}
          </StatNumber>
        </Box>
        <Box
          my={"auto"}
          color={useColorModeValue("gray.800", "gray.200")}
          alignContent={"center"}
        >
          {icon}
        </Box>
      </Flex>
    </Stat>
  );
}

export default function BasicStatistics() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <Box maxW="7xl" mx={"auto"} pt={5} px={{ base: 2, sm: 12, md: 17 }}>
      <chakra.h1
        textAlign={"center"}
        fontSize={"4xl"}
        py={10}
        fontWeight={"bold"}
        fontFamily="Raleway"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-easing="easeInOutSine"
        data-aos-frameRate="60"
      >
        Learn on the go - during commutes, workouts, or any free moment
      </chakra.h1>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 5, lg: 8 }}>
        <StatsCard
          title={"Books"}
          stat={"10 +"}
          icon={<IoBookSharp size={"3em"} />}
        />
        <StatsCard
          title={"Departments"}
          stat={"4 +"}
          icon={<MdOutlineSubject size={"3em"} />}
        />
        <StatsCard
          title={"Years"}
          stat={"3 +"}
          icon={<GiCalendarHalfYear size={"3em"} />}
        />
      </SimpleGrid>
    </Box>
  );
}
