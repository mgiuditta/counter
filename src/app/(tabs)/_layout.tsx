import {Tabs} from 'expo-router';
import theme from "@/utils/theme";
import {SafeAreaView} from "react-native";
import {SafeAreaProvider} from "react-native-safe-area-context";
import {ThemeProvider} from "styled-components/native";

export default function TabsLayout() {
        return (
            <ThemeProvider theme={theme}>
                    <SafeAreaProvider>
                            <SafeAreaView style={{flex: 1}}>
                                    <Tabs screenOptions={{headerShown: false}}>
                                            <Tabs.Screen name="index" options={{title: 'Home'}}/>
                                            <Tabs.Screen name="multiplayer" options={{title: 'Multiplayer'}}/>
                                            <Tabs.Screen name="profile" options={{title: 'Profile'}}/>
                                    </Tabs>
                            </SafeAreaView>
                    </SafeAreaProvider>
            </ThemeProvider>
        );
}