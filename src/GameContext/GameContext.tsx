import { keyframes } from "@emotion/react";
import React, {
  createContext,
  FunctionComponent,
  PropsWithChildren,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import CreateParameters from "../utils/CreateParameters";

interface GameContextValue {
  isGameOn: boolean;
  changeIsGameOn: (update: boolean) => void;
  points: number;
  changePoints: (update: number) => void;
  velocity: number;
  changeVelocity: (update: number) => void;
  size: number;
  changeSize: (update: number) => void;
  quantity: number;
  changeQuantity: (update: number) => void;
  targetsOptions: any[];
  changeTargetsOptions: (array: any[]) => void;
}

const GameContext = createContext<GameContextValue | undefined>(undefined);

const GameProvider: FunctionComponent<PropsWithChildren> = ({ children }) => {
  const [isGameOn, setIsGameOn] = useState(false);
  const [points, setPoints] = useState(0);
  const [velocity, setVelocity] = useState(500);
  const [size, setSize] = useState(48);
  const [quantity, setQuantity] = useState(10);
  const [targetsOptions, setTargetsOptions] = useState([""]);

  useEffect(() => {
    if (points === quantity) {
      setIsGameOn(false);
    }
  }, [points]);

  const changeVelocity = (update: number) => {
    setVelocity(update);
  };
  const changeSize = (update: number) => {
    setSize(update);
  };
  const changeQuantity = (update: number) => {
    setQuantity(update);
  };
  const changeTargetsOptions = (array: any[]) => {
    setTargetsOptions(array);
  };

  const changeIsGameOn = (update: boolean) => {
    setIsGameOn(update);
  };

  const changePoints = (update: number) => {
    setPoints(update);
  };

  return (
    <GameContext.Provider
      value={{
        isGameOn,
        changeIsGameOn,
        points,
        changePoints,
        velocity,
        changeVelocity,
        size,
        changeSize,
        quantity,
        changeQuantity,
        targetsOptions,
        changeTargetsOptions,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export const useGameContext = () => {
  const context = useContext(GameContext);
  return context;
};

export default GameProvider;
