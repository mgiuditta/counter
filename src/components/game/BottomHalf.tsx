import React from "react";
import {TouchableOpacity, Text} from "react-native";
import styled from "styled-components/native";
import {ThemeProps} from "@/utils/theme";
import {MaterialIcons} from "@expo/vector-icons";

interface BottomHalfProps {
    score: number;
    onIncrement: () => void;
    onDecrement: () => void;
}

const BottomHalfContainer = styled(TouchableOpacity)`
    flex: 1;
    justify-content: center;
    align-items: center;
    background-color: ${(props: ThemeProps) => props.theme.colors.background};
    padding: ${(props: ThemeProps) => props.theme.spacing.md}px;
`;

const ScoreText = styled(Text)`
    font-size: 72px;
    font-family: ${(props: ThemeProps) => props.theme.fonts.primary.bold};
    color: ${(props: ThemeProps) => props.theme.colors.text};
    margin-bottom: ${(props: ThemeProps) => props.theme.spacing.md}px;
`;

const ActionButton = styled(TouchableOpacity)`
    background-color: ${(props: ThemeProps) => props.theme.colors.secondary};
    padding: ${(props: ThemeProps) => props.theme.spacing.sm}px;
    margin-top: ${(props: ThemeProps) => props.theme.spacing.sm}px;
    transform: rotate(180deg);
    width: 200%;
    height: 40%;
    position: absolute;
    bottom: -10%;
    border-radius: 50%;
`;

const DecrementIcon = styled(MaterialIcons).attrs(
    (props: ThemeProps) => ({
        name: "remove",
        size: props.theme.fontSizes.md,
        color: props.theme.colors.background,
    })
)``;

const BottomHalf: React.FC<BottomHalfProps> = ({score, onIncrement, onDecrement}) => {
    return (
        <BottomHalfContainer onPress={onIncrement}>
            <ScoreText>{score}</ScoreText>
            <ActionButton onPress={(e: Event) => {
                e.stopPropagation();
                onDecrement();
            }}>
            </ActionButton>
        </BottomHalfContainer>
    );
};

export default BottomHalf;