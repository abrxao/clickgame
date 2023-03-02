import {
  Box,
  ChakraProvider,
  Container,
  Progress,
  Text,
} from "@chakra-ui/react";
import React from "react";
import "./App.css";
import StartButton from "./components/StartButton/StartButton";
import CreateGame from "./components/CreateGame/CreateGame";
import Display from "./components/Display/Display";
import { useGameContext } from "./GameContext/GameContext";
import FormOptions from "./components/FormOptions/FormOptions";
//https://coolors.co/9d44b5-b5446e-525252-badefc-0affed
function App() {
  const GameContext = useGameContext();
  if (!GameContext) return null;
  const { isGameOn, quantity, points, targetsOptions } = GameContext;
  return (
    <ChakraProvider>
      <Container
        bg="#161616"
        minW="100%"
        minH="100vh"
        display="flex"
        alignItems="center"
        justifyContent='center'
      >
        <FormOptions />

        <Box w="700px" minH="500px" position="relative">
          <Box
            bg={"#f2f2f2"}
            zIndex={"0"}
            w="100%"
            maxW="350px"
            position={"absolute"}
            top="-150"
            right={0}
            p=".5em"
            pb="2.5em"
            borderRadius=".5em"
            fontSize="1.2em"
          >
            <Box display={"flex"} justifyContent="space-around" py="1em">
              <Box color="#210124" px=".5em">
                <Text fontWeight={"bold"}>Score</Text>
                <span color="#210124">
                  {points} / {quantity}
                </span>
              </Box>
              <Display status={isGameOn} points={points} quantity={quantity} />
            </Box>

            <Box border="1px solid #000" p="1" borderRadius={"1em"}>
              <Progress
                bg="#210124"
                value={(points / quantity) * 100}
                isAnimated={true}
                borderRadius="1em"
                colorScheme={"pink"}
              />
            </Box>
          </Box>

          <Box
            zIndex={2}
            position="absolute"
            bg={"#161616"}
            border="1px solid #fff5"
            padding={"1em"}
            w={"100%"}
            height={"500px"}
            display="flex"
            justifyContent="center"
            alignItems="center"
            borderRadius={"1em"}
          >
            {!isGameOn && <StartButton />}
            {isGameOn && <CreateGame array={targetsOptions} />}
          </Box>
        </Box>
      </Container>
    </ChakraProvider>
  );
}

export default App;
