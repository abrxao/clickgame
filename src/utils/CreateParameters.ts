import { keyframes } from "@emotion/react";

const CreateParameters = (size: number, velocity: number, quantity: number) => {
  var array: any[] = [];
  const displayAnimation = keyframes`
    0%{
        opacity:0;
        pointer-events: none;
    }
    99%{
        opacity:0;
        pointer-events:auto;
    }
    100%{
        opacity:1;
        pointer-events:auto;
    }
    `;
  for (var i = 0; i < quantity; i++) {
    const aux = {
      size: size,
      positionX: `calc(${(Math.random() * (668-size))+16}px)`,
      positionY: `calc(${(Math.random() * (468-size))+16}px)`,
      animation: `${displayAnimation} ${i * velocity}ms`,
    };
    array.push(aux);
  }
  return array;
};
export default CreateParameters;