import {View, Text} from "react-native";
import {useTheme} from "styled-components/native";
import styled from "styled-components";

export default function HomeLanding() {

    const theme = useTheme();

    const HomeText = styled(Text)`
        font-family: ${theme.fonts.primary.bold};
        font-size: ${theme.fontSizes.lg}px;
        color: ${theme.colors.text};
    `


    return (
        <View>

        </View>
    )
}