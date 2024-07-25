import { Tabs } from 'expo-router';
import { FontAwesome } from '@expo/vector-icons';


export default function Layout() {
    return (
        <Tabs>
            <Tabs.Screen
                name="index"
                options={{
                    title: 'Pomodoro',
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesome name="bell" size={24} color="black" />
                    ),
                }}
            />
            <Tabs.Screen
                name="graph"
                options={{
                    title: 'Graph',
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesome name="bar-chart-o" size={24} color="black" />
                    ),
                }}
            />

            <Tabs.Screen
                name="setting"
                options={{
                    title: 'Setting',
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesome name="gear" size={24} color="black" />
                    ),
                }}
            />
            <Tabs.Screen
                name="information"
                options={{
                    title: 'Information',
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesome name="info" size={24} color="black" />
                    ),
                }}
            />
        </Tabs>
    );
}