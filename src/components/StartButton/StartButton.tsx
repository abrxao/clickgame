import { Button } from "@chakra-ui/react";
import React from "react";
import { useGameContext } from "../../GameContext/GameContext";
import CreateParameters from "../../utils/CreateParameters";

const StartButton = () => {
  const GameContext = useGameContext();
  if (!GameContext) return null;
  const {
    changeIsGameOn,
    changePoints,
    velocity,
    size,
    quantity,
    changeTargetsOptions,
  } = GameContext;

  const handleClick = () => {
    if (quantity) {
      changeIsGameOn(true);
      changeTargetsOptions(CreateParameters(size, velocity, quantity));
      setTimeout(() => {
        changePoints(0);
      }, 1);
    }
  };

  return <Button onClick={(e) => handleClick()}>start</Button>;
};
export default StartButton;
