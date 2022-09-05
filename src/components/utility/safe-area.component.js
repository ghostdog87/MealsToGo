import styled from "styled-components/native";
import { StatusBar, SafeAreaView, Platform } from "react-native";

export const SafeArea = styled(SafeAreaView)`
  flex: 1;
  ${Platform.OS === "ios" && `margin-top: ${StatusBar.currentHeight}px`};
`;
