import React, {useState} from "react";
import styled from "styled-components/native";
import TopHalf from "@/s-components/game/TopHalf";
import BottomHalf from "@/s-components/game/BottomHalf";
import MenuModal from "@/s-components/game/MenuModal";
import {ThemeProps} from "@/utils/theme";
import CenterMenuButton from "@/s-components/game/CenterMenuButton";

const GameContainer = styled.View`
    flex: 1;
    background-color: ${(props: ThemeProps) => props.theme.colors.background};
    position: relative;
`;

export default function Game() {
    const [topScore, setTopScore] = useState<number>(0);
    const [bottomScore, setBottomScore] = useState<number>(0);
    const [modalVisible, setModalVisible] = useState<boolean>(false);

    return (
        <GameContainer>
            <TopHalf
                score={topScore}
                onIncrement={() => setTopScore((prev) => prev + 1)}
                onDecrement={() => setTopScore((prev) => (prev > 0 ? prev - 1 : 0))}
            />
            <BottomHalf
                score={bottomScore}
                onIncrement={() => setBottomScore((prev) => prev + 1)}
                onDecrement={() => setBottomScore((prev) => (prev > 0 ? prev - 1 : 0))}
            />
            <CenterMenuButton onPress={() => setModalVisible(true)}/>
            <MenuModal
                visible={modalVisible}
                onClose={() => setModalVisible(false)}
                onHome={() => {
                    setModalVisible(false);
                }}
                onReset={() => {
                    setTopScore(0);
                    setBottomScore(0);
                    setModalVisible(false);
                }}
            />
        </GameContainer>
    );
}