import React from 'react';
import styled from 'styled-components/native';
import {ScrollView} from 'react-native'; // se vuoi uno scroll verticale
import {ThemeProps} from '@/utils/theme';
import {Shop} from '@/s-models/Shop';
import {IEvent} from '@/s-models/IEvent';
import {format} from 'date-fns';
import {it} from 'date-fns/locale';

type EventWithShop = IEvent & { shop: Shop };

type Props = {
        events: EventWithShop[];
        onLocationSearch?: () => void;
};

export default function NearbyTournamentsSection({events}: Props) {
        return (
            <SectionContainer>
                    {/* Se vuoi renderli scorrevoli, avvolgi in uno ScrollView */}
                    <ScrollView>
                            {events.map((event) => (
                                <EventCard key={event.id}>
                                        <EventHeader>
                                                <EventName>{event.name}</EventName>
                                                <EventType>{event.eventType}</EventType>
                                        </EventHeader>

                                        <EventBody>
                                                <EventDate>
                                                        {format(new Date(event.startDate), 'dd MMM yyyy HH:mm', {locale: it})} - {format(new Date(event.endDate), 'HH:mm', {locale: it})}
                                                </EventDate>
                                                <Description>{event.description}</Description>
                                        </EventBody>

                                        <EventFooter>
                                                {/* Nome shop e indirizzo */}
                                                <ShopName>{event.shop.name}</ShopName>
                                                <AddressText>
                                                        {event.shop.address.street}, {event.shop.address.city}
                                                </AddressText>
                                        </EventFooter>
                                </EventCard>
                            ))}
                    </ScrollView>
            </SectionContainer>
        );
}

const SectionContainer = styled.View`
    width: 100%;
    margin-top: ${(props: ThemeProps) => props.theme.spacing.md}px;
`;

const EventCard = styled.TouchableOpacity`
    background-color: ${(props: ThemeProps) => props.theme.colors.background};
    border: 1px solid ${(props: ThemeProps) => props.theme.colors.border};
    border-radius: 8px;
    margin-bottom: ${(props: ThemeProps) => props.theme.spacing.md}px;
    padding: ${(props: ThemeProps) => props.theme.spacing.md}px;
`;

const EventHeader = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: ${(props: ThemeProps) => props.theme.spacing.sm}px;
`;

const EventName = styled.Text`
    font-size: ${(props: ThemeProps) => props.theme.fontSizes.lg}px;
    color: ${(props: ThemeProps) => props.theme.colors.text};
    font-family: ${(props: ThemeProps) => props.theme.fonts.primary.bold};
`;

const EventType = styled.Text`
    font-size: ${(props: ThemeProps) => props.theme.fontSizes.sm}px;
    color: ${(props: ThemeProps) => props.theme.colors.textSecondary};
    font-family: ${(props: ThemeProps) => props.theme.fonts.primary.regular};
`;

const EventBody = styled.View`
    margin-bottom: ${(props: ThemeProps) => props.theme.spacing.sm}px;
`;

const EventDate = styled.Text`
    font-size: ${(props: ThemeProps) => props.theme.fontSizes.sm}px;
    color: ${(props: ThemeProps) => props.theme.colors.textSecondary};
    font-family: ${(props: ThemeProps) => props.theme.fonts.primary.regular};
    margin-bottom: ${(props: ThemeProps) => props.theme.spacing.xs}px;
`;

const Description = styled.Text`
    font-size: ${(props: ThemeProps) => props.theme.fontSizes.md}px;
    color: ${(props: ThemeProps) => props.theme.colors.text};
    font-family: ${(props: ThemeProps) => props.theme.fonts.primary.regular};
`;

const EventFooter = styled.View`
    border-top-width: 1px;
    border-top-color: ${(props: ThemeProps) => props.theme.colors.border};
    padding-top: ${(props: ThemeProps) => props.theme.spacing.sm}px;
    margin-top: ${(props: ThemeProps) => props.theme.spacing.sm}px;
`;

const ShopName = styled.Text`
    font-size: ${(props: ThemeProps) => props.theme.fontSizes.md}px;
    color: ${(props: ThemeProps) => props.theme.colors.primary};
    font-family: ${(props: ThemeProps) => props.theme.fonts.secondary.bold};
    margin-bottom: ${(props: ThemeProps) => props.theme.spacing.xs}px;
`;

const AddressText = styled.Text`
    font-size: ${(props: ThemeProps) => props.theme.fontSizes.sm}px;
    color: ${(props: ThemeProps) => props.theme.colors.textSecondary};
    font-family: ${(props: ThemeProps) => props.theme.fonts.primary.regular};
`;


