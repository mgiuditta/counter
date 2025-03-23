import {Tabs} from 'expo-router';
import {useTheme} from 'styled-components/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {SafeAreaView} from 'react-native';
import theme from '@/utils/theme';
import {Ionicons} from '@expo/vector-icons';

export default function TabsLayout() {
        return (
            <SafeAreaProvider>
                    <SafeAreaView style={{flex: 1, backgroundColor: theme.colors.background}}>
                            <ThemedTabs/>
                    </SafeAreaView>
            </SafeAreaProvider>
        );
}

function ThemedTabs() {
        const theme = useTheme();

        return (
            <Tabs
                screenOptions={({route}) => ({
                        headerShown: false,
                        tabBarShowLabel: false,
                        tabBarStyle: {
                                backgroundColor: theme.colors.background,
                                borderTopColor: theme.colors.border,
                                height: 80,
                                paddingBottom: 20,
                                paddingTop: 10,
                        },
                        tabBarActiveTintColor: theme.colors.primary,
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
                                        case 'game':
                                                iconName = focused ? 'game-controller' : 'game-controller-outline';
                                                break;
                                }

                                return <Ionicons
                                    name={iconName}
                                    size={size}
                                    color={color}/>;
                        },
                })}
            >
                    <Tabs.Screen name="index" options={{title: 'Home'}}/>
                    <Tabs.Screen name="game" options={{title: 'Tornei'}}/>
            </Tabs>
        );
}