import React from 'react';
import styled from 'styled-components/native';
import {ScrollViewProps, ViewProps} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {ThemeProps} from '@/utils/theme';

type TabScreenWrapperProps = {
        children: React.ReactNode;
        scrollable?: boolean;
} & ViewProps & ScrollViewProps;

export default function TabScreenWrapper({children, scrollable = false, ...rest}: TabScreenWrapperProps) {
        const insets = useSafeAreaInsets();

        if (scrollable) {
                return (
                    <StyledScrollView
                        contentContainerStyle={{
                                paddingTop: insets.top + 16,
                                paddingBottom: insets.bottom + 16,
                                paddingHorizontal: 16,
                        }}
                        {...rest}
                    >
                            {children}
                    </StyledScrollView>
                );
        }

        return (
            <StyledView
                style={{
                        paddingHorizontal: 16,
                }}
                {...rest}
            >
                    {children}
            </StyledView>
        );
}

const StyledView = styled.View`
    flex: 1;
    background-color: ${(props: ThemeProps) => props.theme.colors.background};
`;

const StyledScrollView = styled.ScrollView`
    flex: 1;
    background-color: ${(props: ThemeProps) => props.theme.colors.background};
`;