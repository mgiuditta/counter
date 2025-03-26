import React, {useState} from "react";
import {Modal} from "react-native";
import {Ionicons} from "@expo/vector-icons";
import styled from "styled-components/native";
import {ThemeProps} from "@/utils/theme";
import {useSafeAreaInsets} from "react-native-safe-area-context";
import SearchBar from "@/s-components/search/SearchBar";
import GeoLocateCityButton from "@/s-components/search/GeoLocateCityButton";

export default function Search() {
        const [city, setCity] = useState("Milano");
        const [isModalVisible, setIsModalVisible] = useState(false);
        const [tempCity, setTempCity] = useState(city);

        const handleSearchBarPress = () => {
                setTempCity(city);
                setIsModalVisible(true);
        };

        const handleConfirmCity = () => {
                const newCity = tempCity.trim() === "" ? "Milano" : tempCity;
                setCity(newCity);
                setIsModalVisible(false);
        };

        const handleCancel = () => {
                setIsModalVisible(false);
        };

        const handleFilterPress = () => {
                console.log("Filtro premuto!");
        };

        return (
            <>
                    <SearchBar
                        city={city}
                        onSearchBarPress={handleSearchBarPress}
                        onFilterPress={handleFilterPress}
                    />

                    <Modal
                        visible={isModalVisible}
                        animationType="slide"
                        presentationStyle="fullScreen"
                        onRequestClose={handleCancel}
                    >
                            <ModalContent
                                tempCity={tempCity}
                                onChangeCity={setTempCity}
                                onClose={handleCancel}
                                onConfirm={handleConfirmCity}
                            />
                    </Modal>
            </>
        );
}

type ModalContentProps = {
        tempCity: string;
        onChangeCity: (val: string) => void;
        onClose: () => void;
        onConfirm: () => void;
};

const ModalContent: React.FC<ModalContentProps> = ({
                                                           tempCity,
                                                           onChangeCity,
                                                           onClose,
                                                           onConfirm,
                                                   }) => {
        const insets = useSafeAreaInsets();

        return (
            <SafeModalContainer
                style={{
                        paddingTop: insets.top,
                        paddingBottom: insets.bottom,
                }}
            >
                    <Header>
                            <CloseButton onPress={onClose}>
                                    <Ionicons name="close" size={24} color="#FFFFFF"/>
                            </CloseButton>
                            <Title>Dove vuoi cercare?</Title>
                            <RightPlaceholder/>
                    </Header>

                    <SearchWrapper>
                            <SearchLabel>Inserisci la città</SearchLabel>
                            <SearchInput
                                value={tempCity}
                                onChangeText={onChangeCity}
                                placeholder="Es. Roma"
                                placeholderTextColor="#AAA"
                            />
                            <GeoLocateCityButton onCityFound={(cityFound) => {
                                    const newCity = cityFound.trim() === "" ? "Città sconosciuta" : cityFound;
                                    onChangeCity(newCity);
                            }}/>
                    </SearchWrapper>

                    <Footer>
                            <CTAButton onPress={onConfirm}>
                                    <CTAButtonText>Conferma</CTAButtonText>
                            </CTAButton>
                    </Footer>
            </SafeModalContainer>
        );
};

const SafeModalContainer = styled.View`
    flex: 1;
    background-color: ${(props: ThemeProps) => props.theme.colors.background};
`;

const Header = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    background-color: ${(props: ThemeProps) => props.theme.colors.primary};
    padding-vertical: ${(props: ThemeProps) => props.theme.spacing.md}px;
    padding-horizontal: ${(props: ThemeProps) => props.theme.spacing.md}px;
`;

const CloseButton = styled.TouchableOpacity`
    padding: ${(props: ThemeProps) => props.theme.spacing.sm}px;
`;

const Title = styled.Text`
    flex: 1;
    text-align: center;
    color: #ffffff;
    font-family: ${(props: ThemeProps) => props.theme.fonts.primary.bold};
    font-size: ${(props: ThemeProps) => props.theme.fontSizes.lg}px;
`;

const RightPlaceholder = styled.View`
    width: 36px;
`;

const SearchWrapper = styled.View`
    margin-top: ${(props: ThemeProps) => props.theme.spacing.lg}px;
    padding-horizontal: ${(props: ThemeProps) => props.theme.spacing.md}px;
`;

const SearchLabel = styled.Text`
    font-size: ${(props: ThemeProps) => props.theme.fontSizes.sm}px;
    color: ${(props: ThemeProps) => props.theme.colors.textSecondary};
    font-family: ${(props: ThemeProps) => props.theme.fonts.primary.regular};
    margin-bottom: ${(props: ThemeProps) => props.theme.spacing.xs}px;
`;

const SearchInput = styled.TextInput`
    background-color: #2c2c38;
    color: ${(props: ThemeProps) => props.theme.colors.text};
    font-family: ${(props: ThemeProps) => props.theme.fonts.primary.regular};
    font-size: ${(props: ThemeProps) => props.theme.fontSizes.md}px;
    border-radius: 4px;
    padding: ${(props: ThemeProps) => props.theme.spacing.sm}px;
    margin-bottom: ${(props: ThemeProps) => props.theme.spacing.md}px;
`;

const Footer = styled.View`
    margin-top: auto;
    padding: ${(props: ThemeProps) => props.theme.spacing.md}px;
`;

const CTAButton = styled.TouchableOpacity`
    background-color: ${(props: ThemeProps) => props.theme.colors.primary};
    padding-vertical: ${(props: ThemeProps) => props.theme.spacing.md}px;
    border-radius: 24px;
    align-items: center;
    justify-content: center;
    shadow-color: #000;
    shadow-offset: 0px 4px;
    shadow-opacity: 0.25;
    shadow-radius: 5px;
    elevation: 4;
`;

const CTAButtonText = styled.Text`
    color: ${(props: ThemeProps) => props.theme.colors.text};
    font-family: ${(props: ThemeProps) => props.theme.fonts.primary.bold};
    font-size: ${(props: ThemeProps) => props.theme.fontSizes.md}px;
`;