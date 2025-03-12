import {Text, TouchableOpacity, View} from "react-native";
import styled from "styled-components";
import {useTheme} from "styled-components/native";

export default function Game() {

    const theme = useTheme();

    const GameView = styled(View)`
        flex: 1;
        background-color: ${theme.colors.background};
    `

    const TopHalfTouchable = styled(TouchableOpacity)`
        flex: 1;
        justify-content: center;
        align-items: center;
        background-color: ${theme.colors.secondary};
        padding: ${theme.spacing.md}px;
    `;

    const BottomHalfTouchable = styled(TouchableOpacity)`
        flex: 1;
        justify-content: center;
        align-items: center;
        background-color: ${theme.colors.background};
        padding: ${theme.spacing.md}px;
    `;

    const ScoreText = styled(Text)`
        font-size: 72px;
        font-family: ${theme.fonts.primary.bold};
        color: ${theme.colors.text};
        margin-bottom: ${theme.spacing.md}px;
    `;

    const ScoreTextUpside = styled(Text)`
        font-size: 72px;
        font-family: ${theme.fonts.primary.bold};
        color: ${theme.colors.text};
        margin-bottom: ${theme.spacing.md}px;
        transform:rotate(-180deg);
    `;

    return (
        <GameView>
            <TopHalfTouchable>
                <ScoreTextUpside>5</ScoreTextUpside>
            </TopHalfTouchable>
            <BottomHalfTouchable>
                <ScoreText>10</ScoreText>
            </BottomHalfTouchable>
        </GameView>
    )
}