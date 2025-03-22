import React from 'react';
import styled from 'styled-components/native';
import {Dimensions, FlatList} from 'react-native';
import {ThemeProps} from '@/utils/theme';
import {Shop} from '@/models/shop.model';
import {IEvent} from '@/models/event.model';
import TournamentCard from "@/s-components/events/TournamentCard";

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
                    {/*<LocationButton onPress={onLocationSearch}>*/}
                    {/*        <Ionicons name="location-outline" size={18} color="#fff"/>*/}
                    {/*        <LocationText>Trova tornei vicino a te</LocationText>*/}
                    {/*</LocationButton>*/}

                    <FlatList
                        data={events}
                        keyExtractor={(item) => item.id}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        snapToInterval={CARD_WIDTH + SPACING}
                        decelerationRate="fast"
                        contentContainerStyle={{paddingVertical: 20}}
                        renderItem={({item}) => (
                            <TournamentCard event={item} width={CARD_WIDTH} style={{marginRight: CARD_SPACING}}/>
                        )}
                    />
            </SectionContainer>
        );
}

const SectionContainer = styled.View`
    padding: ${(props: ThemeProps) => props.theme.spacing.md}px;
    width: 100%;
`;
