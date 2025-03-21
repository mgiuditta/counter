import {Slot} from "expo-router";
import theme from "@/utils/theme";
import {ThemeProvider} from "styled-components/native";
import * as SplashScreen from 'expo-splash-screen';
import {useAppFonts} from "@/utils/fonts";
import {useEffect} from "react";
import {SafeAreaView} from "react-native";
import {SafeAreaProvider} from "react-native-safe-area-context";

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
                    <SafeAreaProvider>
                            <SafeAreaView style={{flex: 1}}>
                                    <Slot/>
                            </SafeAreaView>
                    </SafeAreaProvider>
            </ThemeProvider>
        );
}