import React, {useState} from "react";
import styled from "styled-components/native";
import TopHalf from "@/s-components/game/TopHalf";
import {ThemeProps} from "@/utils/theme";
import BottomHalf from "@/s-components/game/BottomHalf";

const GameContainer = styled.View`
    flex: 1;
    background-color: ${(props: ThemeProps) => props.theme.colors.background};
`;

export default function Game() {
    const [topScore, setTopScore] = useState(0);
    const [bottomScore, setBottomScore] = useState(0);

    return (
        <GameContainer>
            <TopHalf
                score={topScore}
                onIncrement={() => setTopScore((prev: number): number => prev + 1)}
                onDecrement={() => setTopScore((prev: number): number => (prev > 0 ? prev - 1 : 0))}
            />
            <BottomHalf
                score={bottomScore}
                onIncrement={() => setBottomScore((prev: number): number => prev + 1)}
                onDecrement={() =>
                    setBottomScore((prev: number): number => (prev > 0 ? prev - 1 : 0))
                }
            />
        </GameContainer>
    );
}