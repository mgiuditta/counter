import {Stack} from "expo-router";
import theme from "@/utils/theme";
import {ThemeProvider} from "styled-components/native";

export default function CounterLayout() {
        return (
            <ThemeProvider theme={theme}>
                    <Stack screenOptions={{headerShown: false}}/>
            </ThemeProvider>
        );
}