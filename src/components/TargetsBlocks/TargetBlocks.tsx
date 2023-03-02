import { Box, keyframes} from "@chakra-ui/react";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { useGameContext } from "../../GameContext/GameContext";

interface BlockProps{
    size: number,
    positionX: string,
    positionY: string,
    animation: any
}

const targetBlock = keyframes`
  0% { transform: scale(1) rotate(0) }
  100% { transform: scale(0) rotate(0) }
`;

const animation2 = `${targetBlock} 100ms linear`

const TargetBlocks:React.FC<BlockProps> = ({size,positionX,positionY,animation}) => {
  const GameContext = useGameContext();
  const [isShow, setIsShow] = useState(true);
  const [isAnimate, setAnimate] = useState(false)
  if (!GameContext) return null;
  const { changePoints, points } = GameContext;

  const handleClick = () =>{
    setAnimate(true)
    changePoints(points + 1)
    setTimeout(()=>setIsShow(false),90);
  }

  return (
    <>
      {isShow && (
        <Box
          as={motion.div}
          className="targetBlock"
          onClick={handleClick}
          borderRadius="50%"
          w={`${size}px`}
          h={`${size}px`}
          bg="pink.500"
          pos="absolute"
          top={positionY}
          left={positionX}
          animation={`${isAnimate ? animation2 : animation}`}
        />
      )}
    </>
  );
};
export default TargetBlocks;
