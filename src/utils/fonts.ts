import { useFonts } from 'expo-font';

export const useAppFonts = () => {
    return useFonts({
        'Poppins': require('@/assets/fonts/Poppins-Regular.ttf'),
        'Poppins-Bold': require('@/assets/fonts/Poppins-Bold.ttf'),
        'Roboto': require('@/assets/fonts/Roboto-Regular.ttf'),
        'Roboto-Bold': require('@/assets/fonts/Roboto-Bold.ttf'),
    });
};