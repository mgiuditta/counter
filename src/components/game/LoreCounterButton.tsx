import React from 'react';
import {useRouter} from 'expo-router';
import styled from 'styled-components/native';
import {ThemeProps} from '@/utils/theme';
import {Ionicons} from '@expo/vector-icons';

export default function LoreCounterButton() {
        const router = useRouter();

        return (
            <ButtonContainer onPress={() => router.push('/counter')}>
                    <IconWrapper>
                            <Ionicons name="dice" size={28} color="#fff"/>
                    </IconWrapper>
                    <TextWrapper>
                            <Title>Lore Counter</Title>
                            <Subtitle>Inizia partita</Subtitle>
                    </TextWrapper>
            </ButtonContainer>
        );
}

const ButtonContainer = styled.TouchableOpacity`
    flex-direction: row;
    align-items: center;
    background-color: ${(props: ThemeProps) => props.theme.colors.primary};
    padding: ${(props: ThemeProps) => props.theme.spacing.lg}px;
    border-radius: 16px;
    margin: 0 ${(props: ThemeProps) => props.theme.spacing.md}px;
    shadow-color: #000;
    shadow-offset: 0px 4px;
    shadow-opacity: 0.2;
    shadow-radius: 6px;
    elevation: 5;
`;

const IconWrapper = styled.View`
    margin-right: ${(props: ThemeProps) => props.theme.spacing.md}px;
`;

const TextWrapper = styled.View``;

const Title = styled.Text`
    color: ${(props: ThemeProps) => props.theme.colors.text};
    font-size: ${(props: ThemeProps) => props.theme.fontSizes.lg}px;
    font-family: ${(props: ThemeProps) => props.theme.fonts.primary.bold};
`;

const Subtitle = styled.Text`
    color: ${(props: ThemeProps) => props.theme.colors.textSecondary};
    font-size: ${(props: ThemeProps) => props.theme.fontSizes.sm}px;
    font-family: ${(props: ThemeProps) => props.theme.fonts.primary.regular};
`;