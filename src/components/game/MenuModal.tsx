import React from "react";
import {Modal, TouchableOpacity} from "react-native";
import styled from "styled-components/native";
import theme, {ThemeProps} from "@/utils/theme";
import {MaterialIcons} from "@expo/vector-icons";
import {Router, useRouter} from "expo-router";

interface MenuModalProps {
        visible: boolean;
        onClose: () => void;
        onHome: () => void;
        onReset: () => void;
}

const ModalOverlay = styled.View`
    flex: 1;
    background-color: rgba(0, 0, 0, 0.5);
    justify-content: center;
    align-items: center;
`;

const ModalContent = styled.View`
    width: 80%;
    background-color: ${(props: ThemeProps) => props.theme.colors.background};
    padding: ${(props: ThemeProps) => props.theme.spacing.lg}px;
    border-radius: 16px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const ModalButton = styled(TouchableOpacity)`
    flex-direction: row;
    background-color: ${(props: ThemeProps) => props.theme.colors.secondary};
    padding: ${(props: ThemeProps) => props.theme.spacing.sm}px ${(props: ThemeProps) => props.theme.spacing.md}px;
    border-radius: 48px;
    margin-top: ${(props: ThemeProps) => props.theme.spacing.md}px;
    align-items: center;
    width: 100%;
`;

const ButtonText = styled.Text`
    font-size: ${(props: ThemeProps) => props.theme.fontSizes.md}px;
    font-family: ${(props: ThemeProps) => props.theme.fonts.primary.regular};
    color: ${(props: ThemeProps) => props.theme.colors.background};
    margin-left: ${(props: ThemeProps) => props.theme.spacing.sm}px;
`;

const ResetIcon = styled(MaterialIcons).attrs(
    (props: ThemeProps) => ({
            name: "refresh",
            size: props.theme.fontSizes.lg,
            color: props.theme.colors.background,
    })
)``;

const CloseIcon = styled(MaterialIcons).attrs(
    (props: ThemeProps) => ({
            name: "close",
            size: props.theme.fontSizes.lg,
            color: props.theme.colors.background,
    })
)``;

const HomeIcon = styled(MaterialIcons).attrs(
    (props: ThemeProps) => ({
            name: "home",
            size: props.theme.fontSizes.lg,
            color: props.theme.colors.background,
    })
)``;

const MenuModal: React.FC<MenuModalProps> = ({visible, onClose, onHome, onReset}) => {
        const router: Router = useRouter();

        const goHome = (): void => {
                router.back();
        }

        return (
            <Modal visible={visible} transparent animationType="fade">
                    <ModalOverlay>
                            <ModalContent>
                                    <ModalButton style={{backgroundColor: theme.colors.primary}} onPress={goHome}>
                                            <HomeIcon/>
                                            <ButtonText>Home</ButtonText>
                                    </ModalButton>
                                    <ModalButton onPress={onReset}>
                                            <ResetIcon/>
                                            <ButtonText>Reset Score</ButtonText>
                                    </ModalButton>
                                    <ModalButton style={{backgroundColor: theme.colors.error}} onPress={onClose}>
                                            <CloseIcon/>
                                            <ButtonText>Close</ButtonText>
                                    </ModalButton>
                            </ModalContent>
                    </ModalOverlay>
            </Modal>
        );
};

export default MenuModal;