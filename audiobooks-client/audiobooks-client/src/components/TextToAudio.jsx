import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import {
  Textarea,
  Button,
  Box,
  Heading,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const TextToAudio = () => {
  const [text, setText] = useState("");
  const [audioUrl, setAudioUrl] = useState("");
  const [isPlaying, setIsPlaying] = useState(false);
  const [audioPlayer, setAudioPlayer] = useState(null);
  const audioRef = useRef(null); // Create a ref

  useEffect(() => {
    // No need for a separate initialization function
    if (audioRef.current) {
      audioRef.current.addEventListener("ended", () => {
        // Automatically handle 'ended' event for cleaner flow
      });
    }
  }, []);

  const handleConvertTextToAudio = async () => {
    try {
      const response = await axios.post(`http://localhost:5000/convert`, {
        text,
      });
      setAudioUrl(response.data.audioUrl);
      setIsPlaying(true);
    } catch (err) {
      console.error("Error converting text to audio:", err);
    }
  };

  const handlePlayPause = () => {
    if (audioRef.current) {
      if (audioRef.current.paused) {
        audioRef.current.play();
      } else {
        audioRef.current.pause();
      }
    } else {
      console.error("Audio player element not found");
    }
  };

  return (
    <div>
      <Navbar />
      <br />
      <br /> <br />
      <br /> <br />
      <div>
        <br />
        <Box>
          {" "}
          <Heading
            textAlign={"center"}
            fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
          >
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
                bg: "green.400",
                zIndex: -1,
              }}
            >
              Convert any Text{"  "}
            </Text>{" "}
            <Text color={"red.400"} as={"span"}>
              to Audio
            </Text>
          </Heading>
        </Box>

        <Box m="8">
          <Textarea
            border="solid #ccc 3px"
            placeholder="Paste text here..."
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </Box>
        <Box w="20%" m="auto">
          <Button
            textAlign="center"
            alignContent="center"
            m="2"
            colorScheme="teal"
            onClick={handleConvertTextToAudio}
            disabled={text.trim() === ""}
          >
            Convert to Audio
          </Button>
        </Box>
        {audioUrl && (
          <audio
            id="audioPlayer"
            controls
            src={audioUrl}
            ref={audioRef} // Assign the ref
          />
        )}
      </div>{" "}
      <br />
      <br /> <br />
      <br /> <br />
      <Footer />
    </div>
  );
};

export default TextToAudio;
