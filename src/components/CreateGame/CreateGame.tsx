import React, { FunctionComponent } from "react";
import TargetBlocks from "../TargetsBlocks/TargetBlocks";

interface GameStartProps {
  array: any[];
}

const CreateGame: FunctionComponent<GameStartProps> = ({ array }) => {
  return (
    <>
      {array.map((elem, index) => {
        return (
          <TargetBlocks
            key={`${index + 1}`}
            size={elem.size}
            positionY={elem.positionY}
            positionX={elem.positionX}
            animation={elem.animation}
          />
        );
      })}
    </>
  );
};
export default CreateGame;
