import {Slot} from "expo-router";
import * as SplashScreen from 'expo-splash-screen';
import {useAppFonts} from "@/utils/fonts";
import {useEffect} from "react";
import {ThemeProvider} from "styled-components/native";
import theme from "@/utils/theme";

export default function RootLayout() {

        const [loaded, error] = useAppFonts();

        useEffect(() => {
                if (loaded || error) {
                        SplashScreen.hideAsync();
                }
        }, [loaded, error]);

        if (!loaded && !error) {
                return null;
        }

        return (
            <ThemeProvider theme={theme}>
                    <Slot/>
            </ThemeProvider>
        );
}