import React from "react";
import {SafeAreaView} from "react-native-safe-area-context";
import {Link, useLocalSearchParams} from "expo-router";
import styled from "styled-components/native";
import {ThemeProps} from "@/utils/theme";
import {mockedEvents} from "../../mocks/mockedEvents";


export default function EventDetailScreen() {
        const {id} = useLocalSearchParams();
        const event = mockedEvents.find((ev) => ev.id === id);

        if (!event) {
                return (
                    <StyledSafeArea>
                            <HeaderContainer>
                                    <HeaderTitle>Oops...</HeaderTitle>
                            </HeaderContainer>

                            <ContentContainer>
                                    <ErrorText>Evento non trovato. ID: {id}</ErrorText>
                            </ContentContainer>
                    </StyledSafeArea>
                );
        }

        return (
            <StyledSafeArea>
                    {/* Header con effetto gradiente */}
                    <HeaderContainer>
                            <HeaderTitle>{event.name}</HeaderTitle>
                            <HeaderSubtitle>{event.eventType}</HeaderSubtitle>
                    </HeaderContainer>

                    {/* Contenuto in una card centrale */}
                    <ContentContainer>
                            <DetailCard>
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
                            </DetailCard>
                    </ContentContainer>
            </StyledSafeArea>
        );
}

/* --- STYLED COMPONENTS --- */

const StyledSafeArea = styled(SafeAreaView)`
    flex: 1;
    background-color: ${(props: ThemeProps) => props.theme.colors.background};
`;

const HeaderContainer = styled.View`
    padding: ${(props: ThemeProps) => props.theme.spacing.lg}px ${(props: ThemeProps) => props.theme.spacing.md}px;
    /* Se vuoi un leggero effetto 'glow' intorno al container: */
    shadow-color: #000;
    shadow-offset: 0px 4px;
    shadow-opacity: 0.25;
    shadow-radius: 4.65px;
    elevation: 8;
`;

const HeaderTitle = styled.Text`
    font-size: ${(props: ThemeProps) => props.theme.fontSizes.xl}px;
    color: #ffffff;
    font-family: ${(props: ThemeProps) => props.theme.fonts.primary.bold};
    margin-bottom: ${(props: ThemeProps) => props.theme.spacing.xs}px;
`;

const HeaderSubtitle = styled.Text`
    font-size: ${(props: ThemeProps) => props.theme.fontSizes.md}px;
    color: #ffffff;
    font-family: ${(props: ThemeProps) => props.theme.fonts.primary.regular};
    opacity: 0.9;
`;

const ContentContainer = styled.View`
    flex: 1;
    padding: ${(props: ThemeProps) => props.theme.spacing.md}px;
`;

const DetailCard = styled.View`
    background-color: ${(props: ThemeProps) => props.theme.colors.background};
    border-radius: 16px;
    padding: ${(props: ThemeProps) => props.theme.spacing.lg}px;
    border: 1px solid ${(props: ThemeProps) => props.theme.colors.border};

    shadow-color: #000;
    shadow-offset: 0px 4px;
    shadow-opacity: 0.25;
    shadow-radius: 4.65px;
    elevation: 4;
`;

const ErrorText = styled.Text`
    font-size: ${(props: ThemeProps) => props.theme.fontSizes.md}px;
    color: ${(props: ThemeProps) => props.theme.colors.error};
    font-family: ${(props: ThemeProps) => props.theme.fonts.primary.bold};
`;

const Label = styled.Text`
    font-size: ${(props: ThemeProps) => props.theme.fontSizes.sm}px;
    color: ${(props: ThemeProps) => props.theme.colors.text};
    font-family: ${(props: ThemeProps) => props.theme.fonts.primary.bold};
    margin-top: ${(props: ThemeProps) => props.theme.spacing.md}px;
`;

const Value = styled.Text`
    font-size: ${(props: ThemeProps) => props.theme.fontSizes.md}px;
    color: ${(props: ThemeProps) => props.theme.colors.textSecondary};
    font-family: ${(props: ThemeProps) => props.theme.fonts.primary.regular};
    margin-top: ${(props: ThemeProps) => props.theme.spacing.xs}px;
`;

const ShopLink = styled(Link)`
    margin-top: ${(props: ThemeProps) => props.theme.spacing.xs}px;
`;

const ShopName = styled.Text`
    font-size: ${(props: ThemeProps) => props.theme.fontSizes.md}px;
    font-family: ${(props: ThemeProps) => props.theme.fonts.secondary.bold};
    color: ${(props: ThemeProps) => props.theme.colors.secondary};
    text-decoration: underline;
`;