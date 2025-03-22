import React from 'react';
import styled, {useTheme} from 'styled-components/native';
import {TextInputProps} from 'react-native';
import {ThemeProps} from '@/utils/theme';

const StyledInput = styled.TextInput`
    background-color: ${(props: ThemeProps) => props.theme.colors.textSecondary}22;
    color: ${(props: ThemeProps) => props.theme.colors.text};
    padding: ${(props: ThemeProps) => props.theme.spacing.sm}px ${(props: ThemeProps) => props.theme.spacing.md}px;
    border-radius: 12px;
    width: 100%;
    font-family: ${(props: ThemeProps) => props.theme.fonts.primary.regular};
    font-size: ${(props: ThemeProps) => props.theme.fontSizes.md}px;
    border: 1px solid ${(props: ThemeProps) => props.theme.colors.border};
`;

export default function SearchInput(props: TextInputProps) {
        const theme = useTheme();
        return (
            <Container>
                    <StyledInput placeholderTextColor={theme.colors.textSecondary} {...props} />
            </Container>)
}

const Container = styled.View`
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: ${(props: ThemeProps) => props.theme.spacing.md}px;
    padding-top: ${(props: ThemeProps) => props.theme.spacing.lg}px;
`;