import TabScreenWrapper from "@/s-components/layouts/TabsWrapper";
import styled from "styled-components/native";
import {ThemeProps} from "@/utils/theme";
import {router} from 'expo-router';

export default function Game() {

        const handlePress = () => {
                router.push("/counter");
        };

        return (
            <TabScreenWrapper scrollable>
                    <Container>
                            <TitleText>Tieni traccia del tuo Lore facilmente!</TitleText>
                            <SubtitleText>Tocca qui sotto per iniziare a contare il Lore.</SubtitleText>

                            <CTAButton onPress={handlePress}>
                                    <CTAButtonText>Vai al Lore Counter</CTAButtonText>
                            </CTAButton>
                    </Container>
            </TabScreenWrapper>
        )
}

const Container = styled.View`
    flex: 1;
    background-color: ${(props: ThemeProps) => props.theme.colors.background};
    padding: ${(props: ThemeProps) => props.theme.spacing.lg}px;
    justify-content: center;
    align-items: center;
`;

const TitleText = styled.Text`
    font-size: ${(props: ThemeProps) => props.theme.fontSizes.xl}px;
    color: ${(props: ThemeProps) => props.theme.colors.text};
    font-family: ${(props: ThemeProps) => props.theme.fonts.primary.bold};
    text-align: center;
    margin-bottom: ${(props: ThemeProps) => props.theme.spacing.sm}px;
`;

const SubtitleText = styled.Text`
    font-size: ${(props: ThemeProps) => props.theme.fontSizes.md}px;
    color: ${(props: ThemeProps) => props.theme.colors.textSecondary};
    font-family: ${(props: ThemeProps) => props.theme.fonts.primary.regular};
    text-align: center;
    margin-bottom: ${(props: ThemeProps) => props.theme.spacing.xl}px;
    max-width: 80%;
`;

const CTAButton = styled.TouchableOpacity`
    background-color: ${(props: ThemeProps) => props.theme.colors.primary};
    padding: ${(props: ThemeProps) => props.theme.spacing.md}px ${(props: ThemeProps) => props.theme.spacing.lg}px;
    border-radius: 24px;
    align-items: center;
    justify-content: center;
`;

const CTAButtonText = styled.Text`
    font-size: ${(props: ThemeProps) => props.theme.fontSizes.md}px;
    color: ${(props: ThemeProps) => props.theme.colors.text};
    font-family: ${(props: ThemeProps) => props.theme.fonts.primary.bold};
`;