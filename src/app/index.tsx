import {Text, View} from "react-native";
import styled from "styled-components";

export default function Index() {

    const CustomText = styled(Text)`
        color: blue;
        font-size: 20px;
    `

    return (
        <View
            style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <CustomText>Edit app/index.tsx to edit this screen.</CustomText>
        </View>
    );
}
