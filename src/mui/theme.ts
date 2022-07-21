import { createTheme } from "@mui/material"

declare module '@mui/material/styles' {
    interface TypographyVariants {
        fontWeightHeavy: number;
        fontWeightFat: number;
    }

    // allow configuration using `createTheme`
    interface TypographyVariantsOptions {
        fontWeightHeavy?: number;
        fontWeightFat?: number;
    }
}

// Update the Typography's variant prop options
declare module '@mui/material/Typography' {
    interface TypographyPropsVariantOverrides {
        fontWeightHeavy: true;
        fontWeightFat: true;
    }
}

const theme = createTheme({
    direction: 'rtl',
    palette: {
        primary: {
            main: "#227872",
            light: "#30aca3",
            dark: "#1b625d"
        }
    },
    typography: {
        fontFamily: `"YekanBakh", "Roboto", "Arial"`,
        fontWeightLight: 300,
        fontWeightRegular: 400,
        fontWeightMedium: 500,
        fontWeightBold: 700,
        fontWeightHeavy: 800,
        fontWeightFat: 900,
    },
})

export default theme