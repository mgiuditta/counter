import {Stack} from "expo-router";
import theme from "@/utils/theme";
import {ThemeProvider} from "styled-components/native";
import {useAppFonts} from "@/utils/fonts";

export default function RootLayout() {

    const [loaded, error] = useAppFonts();

    return (
        <ThemeProvider theme={theme}>
            <Stack screenOptions={{headerShown: false}}>
                <Stack.Screen name={'game'}/>
            </Stack>
        </ThemeProvider>
    );
}