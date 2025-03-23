import React from 'react';
import styled from 'styled-components/native';
import {ThemeProps} from "@/utils/theme";
import {Ionicons} from "@expo/vector-icons";

interface SearchBarProps {
        city: string;
        onFilterPress: () => void;
}

const SearchBar: React.FC<SearchBarProps> = ({city, onFilterPress}) => {
        return (
            <SearchBarContainer>
                    <LeftColumn>
                            <Ionicons name={'search'} size={20} color="#FFFFFF"/>
                            <LeftTextWrapper>
                                    <TitleText>Find events</TitleText>
                                    <SubtitleText>in {city}</SubtitleText>
                            </LeftTextWrapper>
                    </LeftColumn>

                    <FilterButton>
                            <Ionicons name={'filter'} size={20} color="#FFFFFF"/>
                    </FilterButton>
            </SearchBarContainer>
        );
};

export const SearchBarContainer = styled.View`
    background-color: ${(props: ThemeProps) => props.theme.colors.background};
    padding: 8px ${(props: ThemeProps) => props.theme.spacing.sm}px 8px 16px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    align-content: center;
    border: 1px solid ${(props: ThemeProps) => props.theme.colors.border};
    border-radius: 48px;
    margin-top: ${(props: ThemeProps) => props.theme.spacing.md}px;
`;

export const LeftColumn = styled.View`
    flex-direction: row;
    align-items: center;
    gap: ${(props: ThemeProps) => props.theme.spacing.md}px;
`;

export const LeftTextWrapper = styled.View`
    flex-direction: column;
    align-items: flex-start;
`;

export const TitleText = styled.Text`
    font-size: ${(props: ThemeProps) => props.theme.fontSizes.md}px;
    color: ${(props: ThemeProps) => props.theme.colors.text};
    font-family: ${(props: ThemeProps) => props.theme.fonts.primary.bold};
`;

export const SubtitleText = styled.Text`
    margin-right: ${(props: ThemeProps) => props.theme.spacing.xs}px;
    font-size: ${(props: ThemeProps) => props.theme.fontSizes.sm}px;
    color: ${(props: ThemeProps) => props.theme.colors.textSecondary};
    font-family: ${(props: ThemeProps) => props.theme.fonts.primary.regular};
`;

export const FilterButton = styled.TouchableOpacity`
    border-radius: 48px;
    border: 1px solid ${(props: ThemeProps) => props.theme.colors.border};
    padding: ${(props: ThemeProps) => props.theme.spacing.md}px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export default SearchBar;