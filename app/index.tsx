import { View, Button } from "react-native";
import React from "react";

import { router } from "expo-router";

const IndexPage = () => {
  return (
    <View style={{ flex: 1, backgroundColor: "red" }}>
      <Button onPress={() => router.push("/test")} title="Hola" />
    </View>
  );
};

export default IndexPage;
