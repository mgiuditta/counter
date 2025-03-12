import React from "react";
import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { ThemeProps } from "@/utils/theme";
import { MaterialIcons } from "@expo/vector-icons";

interface CenterMenuButtonProps {
    onPress: () => void;
}

const CenterButtonContainer = styled(TouchableOpacity)(({ theme }: ThemeProps) => ({
    position: "absolute",
    alignSelf: "center",
    top: "50%",
    zIndex: 3,
    backgroundColor: theme.colors.primary,
    padding: theme.spacing.md,
    borderRadius: 50,
}));

const MenuIcon = styled(MaterialIcons).attrs(({ theme }: ThemeProps) => ({
    name: "menu",
    size: theme.fontSizes.xl,
    color: theme.colors.background,
}))``;

const CenterMenuButton: React.FC<CenterMenuButtonProps> = ({ onPress }) => {
    return (
        <CenterButtonContainer onPress={onPress}>
            <MenuIcon />
        </CenterButtonContainer>
    );
};

export default CenterMenuButton;