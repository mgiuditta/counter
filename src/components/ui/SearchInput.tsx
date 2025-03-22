import React from 'react';
import styled from 'styled-components/native';
import { TextInputProps } from 'react-native';
import { useTheme } from 'styled-components/native';
import { ThemeProps } from '@/utils/theme';

const StyledInput = styled.TextInput`
    background-color: ${(props: ThemeProps) => props.theme.colors.textSecondary}22;
    color: ${(props: ThemeProps) => props.theme.colors.text};
    padding: ${(props: ThemeProps) => props.theme.spacing.sm}px ${(props: ThemeProps) => props.theme.spacing.md}px;
    border-radius: 12px;
    font-family: ${(props: ThemeProps) => props.theme.fonts.primary.regular};
    font-size: ${(props: ThemeProps) => props.theme.fontSizes.md}px;
    border: 1px solid ${(props: ThemeProps) => props.theme.colors.border};
    margin-bottom: ${(props: ThemeProps) => props.theme.spacing.md}px;
`;

export default function SearchInput(props: TextInputProps) {
        const theme = useTheme();

        return (
            <StyledInput
                placeholderTextColor={theme.colors.textSecondary}
                {...props}
            />
        );
}