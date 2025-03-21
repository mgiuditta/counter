import {Tabs} from 'expo-router';

export default function TabsLayout() {
        return (
            <Tabs screenOptions={{headerShown: false}}>
                    <Tabs.Screen name="index" options={{title: 'Home'}}/>
                    <Tabs.Screen name="multiplayer" options={{title: 'Multiplayer'}}/>
                    <Tabs.Screen name="profile" options={{title: 'Profile'}}/>
            </Tabs>
        );
}