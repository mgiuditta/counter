import React from 'react';
import styled from 'styled-components/native';
import {Dimensions, FlatList} from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import {ThemeProps} from '@/utils/theme';
import {Shop} from '@/models/shop.model';
import {IEvent} from '@/models/event.model';

const {width} = Dimensions.get('window');
const PADDING_HORIZONTAL = 16;
const CARD_WIDTH = width - PADDING_HORIZONTAL * 2;
const CARD_SPACING = 12;

type EventWithShop = IEvent & { shop: Shop };

type Props = {
        events: EventWithShop[];
        onLocationSearch?: () => void;
};

export default function NearbyTournamentsSection({events, onLocationSearch}: Props) {
        const CARD_WIDTH = width * 0.85;
        const SPACING = 16;

        return (
            <SectionContainer>
                    <LocationButton onPress={onLocationSearch}>
                            <Ionicons name="location-outline" size={18} color="#fff"/>
                            <LocationText>Trova tornei vicino a te</LocationText>
                    </LocationButton>

                    <FlatList
                        data={events}
                        keyExtractor={(item) => item.id}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        snapToInterval={CARD_WIDTH + SPACING}
                        decelerationRate="fast"
                        contentContainerStyle={{paddingVertical: 20}}
                        renderItem={({item}) => (
                            <BigCard style={{width: CARD_WIDTH, marginRight: SPACING}}>
                                    <CardHeader>
                                            <EventName numberOfLines={1}>{item.name}</EventName>
                                            <DateBadge>
                                                    <DateText>
                                                            {new Date(item.startDate).toLocaleDateString('it-IT', {
                                                                    day: 'numeric',
                                                                    month: 'short',
                                                            })}
                                                    </DateText>
                                            </DateBadge>
                                    </CardHeader>

                                    <ShopInfo>
                                            <Ionicons name="location-sharp" size={16} color="#fff"/>
                                            <ShopText>{item.shop.address.city}</ShopText>
                                    </ShopInfo>
                            </BigCard>
                        )}
                    />
            </SectionContainer>
        );
}

const SectionContainer = styled.View`
    padding: ${(props: ThemeProps) => props.theme.spacing.md}px;
    width: 100%;
`;

const LocationButton = styled.TouchableOpacity`
    flex-direction: row;
    align-items: center;
    background-color: ${(props: ThemeProps) => props.theme.colors.secondary};
    padding: ${(props: ThemeProps) => props.theme.spacing.sm}px ${(props: ThemeProps) => props.theme.spacing.md}px;
    border-radius: 12px;
`;

const LocationText = styled.Text`
    color: #fff;
    font-family: ${(props: ThemeProps) => props.theme.fonts.primary.bold};
    font-size: ${(props: ThemeProps) => props.theme.fontSizes.md}px;
    margin-left: 8px;
`;

const BigCard = styled.View`
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
