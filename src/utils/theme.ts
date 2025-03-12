export interface ThemeType {
    colors: {
        primary: string;
        secondary: string;
        background: string;
        text: string;
        textSecondary: string;
        border: string;
        error: string;
    };
    effects: {
        shadow: string;
        glow: string;
        transition: string;
        gradient: string;
    };
    spacing: {
        xs: number;
        sm: number;
        md: number;
        lg: number;
        xl: number;
    };
    fontSizes: {
        xs: number;
        sm: number;
        md: number;
        lg: number;
        xl: number;
        xxl: number;
    };
    fonts: {
        primary: {
            regular: string;
            bold: string;
        };
        secondary: {
            regular: string;
            bold: string;
        };
    };
}

const theme: ThemeType = {
    colors: {
        primary: '#5A3EBA',
        secondary: '#F5A623',
        background: '#1C1C3C',
        text: '#FFFFFF',
        textSecondary: '#C0C0C0',
        border: '#7442F5',
        error: '#FF3B30',
    },
    effects: {
        shadow: '0px 4px 10px rgba(0, 0, 0, 0.2)',
        glow: '0px 0px 8px rgba(245, 166, 35, 0.8)',
        transition: 'all 0.3s ease-in-out',
        gradient: 'linear-gradient(135deg, #5A3EBA, #F5A623)',
    },
    spacing: {
        xs: 4,
        sm: 8,
        md: 16,
        lg: 24,
        xl: 32,
    },
    fontSizes: {
        xs: 12,
        sm: 14,
        md: 16,
        lg: 20,
        xl: 24,
        xxl: 32,
    },
    fonts: {
        primary: {
            regular: 'Poppins',
            bold: 'Poppins-Bold',
        },
        secondary: {
            regular: 'Roboto',
            bold: 'Roboto-Bold',
        },
    },
};

export default theme;