import React from "react";
import { Provider } from "react-redux";
import { store } from "./src/store";
import CounterScreen from "./src/screen/CounterScreen";

export default function App() {
  return (
    <Provider store={store}>
      <CounterScreen/>
    </Provider>
  );
}