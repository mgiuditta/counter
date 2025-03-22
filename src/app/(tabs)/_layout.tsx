import {Tabs} from 'expo-router';
import {ThemeProvider, useTheme} from 'styled-components/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {SafeAreaView} from 'react-native';
import theme from '@/utils/theme';
import {Ionicons} from '@expo/vector-icons';

export default function TabsLayout() {
        return (
            <ThemeProvider theme={theme}>
                    <SafeAreaProvider>
                            <SafeAreaView style={{flex: 1, backgroundColor: theme.colors.background}}>
                                    <ThemedTabs/>
                            </SafeAreaView>
                    </SafeAreaProvider>
            </ThemeProvider>
        );
}

function ThemedTabs() {
        const theme = useTheme();

        return (
            <Tabs
                screenOptions={({route}) => ({
                        headerShown: false,
                        tabBarStyle: {
                                backgroundColor: theme.colors.background,
                                borderTopColor: theme.colors.border,
                                height: 70,
                                paddingBottom: 20,
                                paddingTop: 10,
                        },
                        tabBarActiveTintColor: theme.colors.secondary,
                        tabBarInactiveTintColor: theme.colors.textSecondary,
                        tabBarLabelStyle: {
                                fontFamily: theme.fonts.primary.regular,
                                fontSize: theme.fontSizes.sm,
                        },
                        tabBarIcon: ({focused, color, size}) => {
                                let iconName: keyof typeof Ionicons.glyphMap = 'home';

                                switch (route.name) {
                                        case 'index':
                                                iconName = focused ? 'home' : 'home-outline';
                                                break;
                                        case 'multiplayer':
                                                iconName = focused ? 'people' : 'people-outline';
                                                break;
                                        case 'tournaments':
                                                iconName = focused ? 'trophy' : 'trophy-outline';
                                                break;
                                }

                                return <Ionicons name={iconName} size={size} color={color}/>;
                        },
                })}
            >
                    <Tabs.Screen name="index" options={{title: 'Home'}}/>
                    <Tabs.Screen name="multiplayer" options={{title: 'Multiplayer'}}/>
                    <Tabs.Screen name="tournaments" options={{title: 'Tornei'}}/>
            </Tabs>
        );
}