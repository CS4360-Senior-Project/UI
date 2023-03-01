import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'

export default createVuetify ({
    theme: {
        themes: {
            light: {
                colors: {
                    primary: "#041d51",
                    secondary: "#000000",
                    accent: "#bb53b8",
                    error: "#b71c1c",
                    success: "#208111",
                    action: "20811",
                    inactive: "#6a6a6a",
                    base: "#efefef"
                }
            },
            dark: {
                colors: {
                    primary: "#202b47",
                    accent: "#ffc649",
                    success: "#208111",
                    action: "#208111",
                    secondary: "#FFFFFF",
                    error: "#b71c1c",
                    inactive: "#6a6a6a",
                    base: "#202b47"
                },
            },
        },
    },
})