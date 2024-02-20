import { Pressable, Text, View } from "react-native";
import { NativeWindStyleSheet } from "nativewind";
import { useState } from "react";


NativeWindStyleSheet.setOutput({
  default: "native",
});

WORK_MIN = 25;
SHORT_BREAK_MIN = 5;
LONG_BREAK_MIN = 25;
let reps = 0;
let timer = null;

export default function App() {
  const [time, setTime] = useState("00:00");
  const [label, setLabel] = useState("Break");
  const [mark, setMark] = useState("");

  function resetTimer() {
    reps = 0;
    setTime("00:00");
    if (timer) {
      clearTimeout(timer);
    }
  }

  function startTimer() {
    reps += 1;

    if (reps % 8 == 0) {
      countdown(LONG_BREAK_MIN * 60);
      setLabel("Break");
    } else if (reps % 2 == 0) {
      countdown(SHORT_BREAK_MIN * 60);
      setLabel("Break");
    } else {
      countdown(WORK_MIN * 60);
      setLabel("Work");
    }
  }

  function countdown(count) {
    const countMin = Math.floor(count / 60);
    let countSec = count % 60;

    if (countSec < 10) {
      countSec = `0${countSec}`;
    }

    setTime(`${countMin}:${countSec}`);

    if (count > 0) {
      timer = setTimeout(() => countdown(count - 1), 1000);
    } else {
      startTimer();
      let mark = "";
      let work_session = Math.floor(reps / 2);
      for (let _ = 0; _ < work_session; _++) {
        mark += "✔";
        setMark(mark);
      }
    }
  }

  const pomodoro = new Pomodoro()

  return (
    <View className="flex-1 w-full">
      <Text className="text-green-500 text-4xl">{label}</Text>
      <Text className="text-green-500 text-4xl">{time}</Text>
      <Text className="text-green-500 text-4xl">{mark}</Text>
      <Pressable onPress={resetTimer}>Reset</Pressable>
      <Pressable onPress={startTimer}>Start</Pressable>
    </View>
  );
}
