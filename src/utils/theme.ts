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
                primary: '#7D3C98',
                secondary: '#2ECC71',
                background: '#121212',
                text: '#FAFAFA',
                textSecondary: '#BDBDBD',
                border: '#9B59B6',
                error: '#E74C3C',
        },
        effects: {
                shadow: '0px 4px 12px rgba(0, 0, 0, 0.25)',
                glow: '0px 0px 12px rgba(46, 204, 113, 0.7)',
                transition: 'all 0.3s ease-in-out',
                gradient: 'linear-gradient(135deg, #7D3C98, #2ECC71)',
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
                        regular: 'Lato',
                        bold: 'Lato-Bold',
                },
        },
};

export interface ThemeProps {
        theme: ThemeType
}

export default theme;