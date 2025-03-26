import React from "react";
import {Platform, Text, TouchableOpacity, View} from "react-native";
import styled from "styled-components/native";
import {ThemeProps} from "@/utils/theme";

interface TopHalfProps {
        score: number;
        onIncrement: () => void;
        onDecrement: () => void;
}

const TopHalfContainer = styled(TouchableOpacity)`
    flex: 1;
    justify-content: center;
    align-items: center;
    background-color: ${(props: ThemeProps) => props.theme.colors.secondary};
    padding: ${(props: ThemeProps) => props.theme.spacing.md}px;
    position: relative;
`;

const ScoreText = styled(Text)`
    font-size: 72px;
    font-family: ${(props: ThemeProps) => props.theme.fonts.primary.bold};
    color: ${(props: ThemeProps) => props.theme.colors.text};
    margin-bottom: ${(props: ThemeProps) => props.theme.spacing.md}px;
    transform: rotate(180deg);
`;

const ActionButton = styled(TouchableOpacity)`
    background-color: ${(props: ThemeProps) => props.theme.colors.primary};
    padding: ${(props: ThemeProps) => props.theme.spacing.sm}px;
    margin-top: ${(props: ThemeProps) => props.theme.spacing.sm}px;
    width: 200%;
    height: 45%;
    position: absolute;
    top: -15%;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: flex-end;
`;

const TopHalf: React.FC<TopHalfProps> = ({score, onIncrement, onDecrement}) => {
        return (
            <TopHalfContainer onPress={onIncrement}>
                    <ActionButton onPress={(e: Event) => {
                            e.stopPropagation();
                            onDecrement();
                    }}>
                    </ActionButton>
                    <View style={{
                            transform: Platform.OS === 'ios'
                                ? [{rotateY: '-180deg'}, {scaleX: -1}]
                                : [{rotateY: '-180deg'}],
                            transformOrigin: 'center'
                    }}>
                            <ScoreText>{score}</ScoreText>
                    </View>
            </TopHalfContainer>
        );
};

export default TopHalf;