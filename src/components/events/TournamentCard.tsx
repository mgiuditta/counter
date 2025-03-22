import React from 'react';
import styled from 'styled-components/native';
import {Ionicons} from '@expo/vector-icons';
import {useRouter} from 'expo-router';
import {ThemeProps} from '@/utils/theme';
import {IEvent} from '@/models/event.model';
import {Shop} from '@/models/shop.model';

type Props = {
        event: IEvent & { shop: Shop };
        width: number;
        style?: any;
};

export default function TournamentCard({event, width, style}: Props) {
        const router = useRouter();

        return (
            <CardContainer
                activeOpacity={0.9}
                style={[{width}, style]}
            >
                    <CardHeader>
                            <EventName numberOfLines={1}>{event.name}</EventName>
                            <DateBadge>
                                    <DateText>
                                            {new Date(event.startDate).toLocaleDateString('it-IT', {
                                                    day: 'numeric',
                                                    month: 'short',
                                            })}
                                    </DateText>
                            </DateBadge>
                    </CardHeader>

                    <ShopInfo>
                            <Ionicons name="location-sharp" size={16} color="#fff"/>
                            <ShopText>{event.shop.address.city}</ShopText>
                    </ShopInfo>
            </CardContainer>
        );
}

/* STYLED */

const CardContainer = styled.TouchableOpacity`
    background-color: ${(props: ThemeProps) => props.theme.colors.primary}22;
    border-radius: 16px;
    padding: ${(props: ThemeProps) => props.theme.spacing.lg}px;
    justify-content: space-between;
    shadow-color: #000;
    shadow-offset: 0px 4px;
    shadow-opacity: 0.2;
    shadow-radius: 8px;
    elevation: 5;
`;

const CardHeader = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

const EventName = styled.Text`
    font-family: ${(props: ThemeProps) => props.theme.fonts.primary.bold};
    font-size: ${(props: ThemeProps) => props.theme.fontSizes.lg}px;
    color: ${(props: ThemeProps) => props.theme.colors.text};
    flex: 1;
    margin-right: 8px;
`;

const DateBadge = styled.View`
    background-color: ${(props: ThemeProps) => props.theme.colors.secondary};
    padding: 4px 8px;
    border-radius: 8px;
`;

const DateText = styled.Text`
    color: #fff;
    font-size: ${(props: ThemeProps) => props.theme.fontSizes.sm}px;
    font-family: ${(props: ThemeProps) => props.theme.fonts.primary.bold};
`;

const ShopInfo = styled.View`
    flex-direction: row;
    align-items: center;
    margin-top: ${(props: ThemeProps) => props.theme.spacing.md}px;
`;

const ShopText = styled.Text`
    margin-left: 6px;
    color: ${(props: ThemeProps) => props.theme.colors.textSecondary};
    font-size: ${(props: ThemeProps) => props.theme.fontSizes.sm}px;
    font-family: ${(props: ThemeProps) => props.theme.fonts.primary.regular};
`;