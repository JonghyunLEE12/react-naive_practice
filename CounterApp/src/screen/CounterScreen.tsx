import React from "react";
import { AppDispatch, RootState } from "../store";
import { Text, View, Button, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { increament, decrement, reset } from "../store/CounterSlice";
import { useDispatch, useSelector } from "react-redux";


export default function CounterScreen() {
    const count = useSelector((state : RootState) => state.counter.count);
    const dispatch = useDispatch<AppDispatch>();

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.count}>
                {count}
            </Text>
            <Button title="+1" onPress={() => dispatch(increament())}></Button>
            <Button title="-1" onPress={() => dispatch(decrement())}></Button>
            <Button title="reset" onPress={() => dispatch(reset())}></Button>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  count: {
    fontSize: 48,
    marginBottom: 20,
  },
});