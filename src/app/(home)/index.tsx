import {Text, TouchableOpacity, View} from "react-native";
import styled from "styled-components";
import {useTheme} from "styled-components/native";
import {SafeAreaView} from "react-native-safe-area-context";
import HomeLanding from "@/s-components/layouts/home/HomeLanding";
import {Link} from "expo-router";

export default function Index() {

    const theme = useTheme()

    const HomeView = styled(SafeAreaView)`
        height: 100%;
        width: 100%;
        background-color: ${theme.colors.background};
        display: flex;
        justify-content: flex-end;
        padding: ${theme.spacing.md}px;
    `;

    const HomeLayout = styled(View)`
        display: flex;
        flex-direction: column;
        gap: ${theme.spacing.xl}px;
    `

    const HomeButton = styled(TouchableOpacity)`
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: ${theme.colors.secondary};
        padding: 24px;
        border-radius: 48px;
    `

    const HomeButtonText = styled(Text)`
        font-family: ${theme.fonts.primary.regular};
        color: ${theme.colors.text};
        font-size: ${theme.fontSizes.md}px;
    `

    return (
        <HomeView>
            <HomeLayout>
                <HomeLanding/>
                <Link href={'/game'} asChild={true}>
                    <HomeButton>
                        <HomeButtonText>Play</HomeButtonText>
                    </HomeButton>
                </Link>
            </HomeLayout>
        </HomeView>
    );
}
