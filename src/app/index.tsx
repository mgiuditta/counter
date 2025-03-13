import React, { useEffect, useState } from "react";
import styled from "styled-components/native";
import TopHalf from "@/s-components/game/TopHalf";
import BottomHalf from "@/s-components/game/BottomHalf";
import MenuModal from "@/s-components/game/MenuModal";
import { ThemeProps } from "@/utils/theme";
import { router } from 'expo-router';
import ConfettiCannon from "react-native-confetti-cannon";
import CenterMenuButton from "@/s-components/game/CenterMenuButton";

const GameContainer = styled.View`
    flex: 1;
    background-color: ${(props: ThemeProps) => props.theme.colors.background};
    position: relative;
`;

export default function Index() {
    const [topScore, setTopScore] = useState<number>(0);
    const [bottomScore, setBottomScore] = useState<number>(0);
    const [modalVisible, setModalVisible] = useState<boolean>(false);
    const [showConfetti, setShowConfetti] = useState<boolean>(false);

    useEffect(() => {
        if ((topScore >= 20 || bottomScore >= 20) && !modalVisible) {
            setShowConfetti(true);
            setModalVisible(true);
            setTopScore(0);
            setBottomScore(0);
        }
    }, [topScore, bottomScore]);

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
            <CenterMenuButton
                onPress={() => {
                    setModalVisible(true);
                }}
            />
            {showConfetti && (
                <ConfettiCannon
                    count={200}
                    origin={{ x: -10, y: 0 }}
                    fadeOut={true}
                    onAnimationEnd={() => setShowConfetti(false)}
                />
            )}
            <MenuModal
                visible={modalVisible}
                onClose={() => setModalVisible(false)}
                onHome={() => {
                    setModalVisible(false);
                    router.back();
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