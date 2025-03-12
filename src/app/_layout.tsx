import {Stack} from "expo-router";
import theme from "@/utils/theme";
import {ThemeProvider} from "styled-components/native";

export default function RootLayout() {
    return (
        <ThemeProvider theme={theme}>
            <Stack/>
        </ThemeProvider>
    );
}
