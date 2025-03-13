import React from "react";
import {TouchableOpacity} from "react-native";
import styled from "styled-components/native";
import {ThemeProps} from "@/utils/theme";
import LogoSvg from "@/s-components/icons/LogoSvg";

interface CenterMenuButtonProps {
    onPress: () => void;
}

const CenterButtonContainer = styled(TouchableOpacity)(({theme}: ThemeProps) => ({
    position: "absolute",
    alignSelf: "center",
    top: "50%",
    backgroundColor: theme.colors.background,
    padding: theme.spacing.md,
    borderRadius: 50,
    display: "flex",
    justifyContent: "center",
})) as unknown as typeof TouchableOpacity;

const CenterMenuButton: React.FC<CenterMenuButtonProps> = ({onPress}) => {
    return (
        <CenterButtonContainer style={{transform: [{translateY: -35}]}} onPress={onPress}>

        </CenterButtonContainer>
    );
};

export default CenterMenuButton;