import {
  Box,
  Radio,
  RadioGroup,
  Stack,
  RangeSlider,
  RangeSliderTrack,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useGameContext } from "../../GameContext/GameContext";

const FormOptions = () => {
  const [size, setSize] = useState("48");
  const [velocity, setVelocity] = useState("500");

  const GameContext = useGameContext();
  if (!GameContext) return null;

  const { changeSize, changeQuantity, changeVelocity,quantity } = GameContext;

  return (
    <Box
      color="#210124"
      p="8"
      pr="16"
      marginRight={"-1em"}
      bg="#f2f2f2"
      borderRadius={"1em"}
    >
      <Box py="1em">
        <Text fontWeight={"bold"}>Size</Text>
        <RadioGroup
          onChange={(e) => {
            setSize(e);
            changeSize(parseInt(e));
          }}
          value={size}
          colorScheme="pink"
        >
          <Stack direction="row">
            <Radio value="32">small</Radio>
            <Radio value="48">medium</Radio>
            <Radio value="64">large</Radio>
          </Stack>
        </RadioGroup>
      </Box>

      <Box py="1em">
        <Text fontWeight={"bold"}>Velocity</Text>
        <RadioGroup
          onChange={(e) => {
            setVelocity(e);
            changeVelocity(parseInt(e));
          }}
          value={velocity}
          colorScheme="pink"
        >
          <Stack direction="row">
            <Radio value="300">hard</Radio>
            <Radio value="500">normal</Radio>
            <Radio value="700">easy</Radio>
          </Stack>
        </RadioGroup>
      </Box>

      <Box py="1em">
        <Text fontWeight={"bold"}>Quantity {quantity}</Text>
        <Box px={2}></Box>
        <RangeSlider
          aria-label={["min", "max"]}
          min={10}
          max={70}
          defaultValue={[0, quantity]}
          onChange={(e) => changeQuantity(e[1])}
          colorScheme="pink"
        >
          <RangeSliderTrack>
            <RangeSliderFilledTrack />
          </RangeSliderTrack>
          <RangeSliderThumb index={1} />
        </RangeSlider>
      </Box>
    </Box>
  );
};

export default FormOptions;
