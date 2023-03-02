import { Box, Text } from "@chakra-ui/react";
import React, { useState,  useMemo, useEffect } from "react";

interface DisplayProps{
  status: boolean
  points: number
  quantity: number
}

const Display: React.FC<DisplayProps>= ({status, points,quantity}) => {  
  const [ms, setMs] = useState(0);
  const [intervalId, setIntervalId] = useState("");
  const seconds = useMemo(() => {
    return Math.trunc(ms / 100);
  }, [ms]);
  const minute = useMemo(() => {
    return Math.trunc(seconds / 60);
  }, [seconds]);
  
  var crono:any;
  
  useEffect(() => {
    if(status){
      if (points == quantity) {
        crono = setInterval(() => {
          setMs((ms) => ms + 5);
        }, 50);
        setIntervalId(crono);
        setMs(0);
      } else {
        crono = setInterval(() => {
          setMs((ms) => ms + 5);
        }, 50);
        setIntervalId(crono);
      }
    }
    else {
      handleFinalizar();
    }
  },[status])
  
  const handleFinalizar= () => {
    if (ms !== 0) {
      clearInterval(intervalId);
    }
  }
  return (
    <Box color="#210124">
      <Text fontWeight={"bold"} textAlign='center'>
        Timer
      </Text>

      <Box>
        {String(minute % 60).padStart(2, "0")} :{" "}
        {String(seconds % 60).padStart(2, "0")} :{" "}
        {String(ms % 100).padStart(2, "0")}
      </Box>
    </Box>
  );
  }
  
  export default Display;
  