import {extendTheme} from '@mui/joy/styles';

declare module '@mui/joy/styles'{
    interface PaletteNeutral{
        910: string
    }

    interface PaletteBackground{
        bodyDark: string
    }
}

const theme=extendTheme({
    colorSchemes: {
        dark: {
            palette: {
                neutral: {
                    910: "#0e0e15"
                },
                background: {
                    bodyDark: "var(--joy-palette-neutral-910, #0e0e15)"
                }
            }
        }
    }
})

export default theme