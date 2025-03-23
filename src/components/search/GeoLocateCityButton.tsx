import React, {useState} from 'react';
import {ActivityIndicator, Alert} from 'react-native';
import styled from 'styled-components/native';
import * as Location from 'expo-location';
import {ThemeProps} from '@/utils/theme';

type GeoLocateCityButtonProps = {
        onCityFound: (city: string) => void;
};

const GeoLocateCityButton: React.FC<GeoLocateCityButtonProps> = ({onCityFound}) => {
        const [loading, setLoading] = useState(false);

        const handlePress = async () => {
                setLoading(true);
                try {
                        const {status} = await Location.requestForegroundPermissionsAsync();
                        if (status !== 'granted') {
                                Alert.alert(
                                    'Permesso negato',
                                    'Non hai concesso il permesso di accedere alla geolocalizzazione.'
                                );
                                setLoading(false);
                                return;
                        }

                        const location = await Location.getCurrentPositionAsync({});

                        const geocode = await Location.reverseGeocodeAsync({
                                latitude: location.coords.latitude,
                                longitude: location.coords.longitude,
                        });

                        if (geocode && geocode.length > 0) {
                                const address = geocode[0];
                                const city = address.city || address.region || 'Città sconosciuta';
                                onCityFound(city);
                        } else {
                                Alert.alert(
                                    'Errore',
                                    "Impossibile determinare la città dalla tua posizione."
                                );
                        }
                } catch (error) {
                        console.error('Errore nella geolocalizzazione:', error);
                        Alert.alert(
                            'Errore',
                            "Si è verificato un errore durante la geolocalizzazione."
                        );
                }
                setLoading(false);
        };

        return (
            <ButtonContainer onPress={handlePress}>
                    {loading ? (
                        <ActivityIndicator color="#FFF"/>
                    ) : (
                        <ButtonText>Usa la mia posizione</ButtonText>
                    )}
            </ButtonContainer>
        );
};

export default GeoLocateCityButton;

const ButtonContainer = styled.TouchableOpacity`
    background-color: ${(props: ThemeProps) => props.theme.colors.secondary};
    padding: ${(props: ThemeProps) => props.theme.spacing.md}px ${(props: ThemeProps) => props.theme.spacing.lg}px;
    border-radius: 24px;
    align-items: center;
    justify-content: center;
`;

const ButtonText = styled.Text`
    color: ${(props: ThemeProps) => props.theme.colors.text};
    font-family: ${(props: ThemeProps) => props.theme.fonts.primary.bold};
    font-size: ${(props: ThemeProps) => props.theme.fontSizes.md}px;
`;