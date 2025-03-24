import React from "react";
import styled from "styled-components/native";
import {Link, useLocalSearchParams} from "expo-router";
import {ThemeProps} from "@/utils/theme";
import {mockedEvents} from "../../mocks/mockedEvents";
import {SafeAreaView} from "react-native-safe-area-context";

export default function EventDetailScreen() {
        const {id} = useLocalSearchParams();
        const event = mockedEvents.find((ev) => ev.id === id);

        if (!event) {
                return (
                    <StyledSafeArea>
                            <Container>
                                    <ErrorText>Evento non trovato. ID: {id}</ErrorText>
                            </Container>
                    </StyledSafeArea>
                );
        }

        return (
            <StyledSafeArea>
                    <Container>
                            <Title>{event.name}</Title>
                            <EventType>{event.eventType}</EventType>

                            <Label>Data inizio:</Label>
                            <Value>{String(event.startDate)}</Value>

                            <Label>Data fine:</Label>
                            <Value>{String(event.endDate)}</Value>

                            <Label>Descrizione:</Label>
                            <Value>{event.description ?? "N/A"}</Value>

                            <Label>Shop associato:</Label>
                            {event.shop ? (
                                <ShopLink href={`/shops/${event.shop.shopId}`}>
                                        <ShopName>{event.shop.name}</ShopName>
                                </ShopLink>
                            ) : (
                                <Value>Shop non disponibile</Value>
                            )}
                    </Container>
            </StyledSafeArea>
        );
}

const StyledSafeArea = styled(SafeAreaView)`
    flex: 1;
    background-color: ${(props: ThemeProps) => props.theme.colors.background};
`;

const Container = styled.ScrollView`
    flex: 1;
    padding: ${(props: ThemeProps) => props.theme.spacing.md}px;
    background-color: ${(props: ThemeProps) => props.theme.colors.background};
`;

const ErrorText = styled.Text`
    color: ${(props: ThemeProps) => props.theme.colors.error};
    font-size: ${(props: ThemeProps) => props.theme.fontSizes.md}px;
    font-family: ${(props: ThemeProps) => props.theme.fonts.primary.bold};
`;

const Title = styled.Text`
    font-size: ${(props: ThemeProps) => props.theme.fontSizes.xl}px;
    font-family: ${(props: ThemeProps) => props.theme.fonts.primary.bold};
    color: ${(props: ThemeProps) => props.theme.colors.text};
    margin-bottom: ${(props: ThemeProps) => props.theme.spacing.sm}px;
`;

const EventType = styled.Text`
    font-size: ${(props: ThemeProps) => props.theme.fontSizes.md}px;
    font-family: ${(props: ThemeProps) => props.theme.fonts.primary.regular};
    color: ${(props: ThemeProps) => props.theme.colors.textSecondary};
    margin-bottom: ${(props: ThemeProps) => props.theme.spacing.md}px;
`;

const Label = styled.Text`
    font-size: ${(props: ThemeProps) => props.theme.fontSizes.sm}px;
    font-family: ${(props: ThemeProps) => props.theme.fonts.primary.bold};
    color: ${(props: ThemeProps) => props.theme.colors.text};
    margin-top: ${(props: ThemeProps) => props.theme.spacing.md}px;
`;

const Value = styled.Text`
    font-size: ${(props: ThemeProps) => props.theme.fontSizes.md}px;
    font-family: ${(props: ThemeProps) => props.theme.fonts.primary.regular};
    color: ${(props: ThemeProps) => props.theme.colors.text};
    margin-bottom: ${(props: ThemeProps) => props.theme.spacing.sm}px;
`;

const ShopLink = styled(Link)`
    margin-top: ${(props: ThemeProps) => props.theme.spacing.xs}px;
`;

const ShopName = styled.Text`
    font-size: ${(props: ThemeProps) => props.theme.fontSizes.md}px;
    font-family: ${(props: ThemeProps) => props.theme.fonts.secondary.bold};
    color: ${(props: ThemeProps) => props.theme.colors.primary};
    text-decoration: underline;
`;