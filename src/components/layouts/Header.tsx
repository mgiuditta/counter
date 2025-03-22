import React from 'react';
import styled from 'styled-components/native';
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';
import { ThemeProps } from '@/utils/theme';

type HeaderProps = {
        username?: string;
        onProfilePress?: () => void;
};

export default function Header({ username = 'Illuminatore', onProfilePress }: HeaderProps) {
        return (
            <Container>
                    <WelcomeText>Ciao, {username} 👋</WelcomeText>
                    <TouchableOpacity onPress={onProfilePress}>
                            <Ionicons name="person-circle-outline" size={36} color="#FAFAFA" />
                    </TouchableOpacity>
            </Container>
        );
}

const Container = styled.View`
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: ${(props: ThemeProps) => props.theme.spacing.md}px;
    padding-top: ${(props: ThemeProps) => props.theme.spacing.lg}px;
`;

const WelcomeText = styled.Text`
    font-family: ${(props: ThemeProps) => props.theme.fonts.primary.bold};
    font-size: ${(props: ThemeProps) => props.theme.fontSizes.lg}px;
    color: ${(props: ThemeProps) => props.theme.colors.text};
`;