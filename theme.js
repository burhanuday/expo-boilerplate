import React from "react";
import {
  DarkTheme,
  DefaultTheme,
  Provider as PaperProvider,
  configureFonts,
} from "react-native-paper";
import { useColorScheme } from "react-native-appearance";

// colors

// dayMode {
//   "accent": "#03dac6",
//   "backdrop": "rgba(0, 0, 0, 0.5)",
//   "background": "#121212",
//   "disabled": "rgba(255, 255, 255, 0.38)",
//   "error": "#CF6679",
//   "notification": "#ff80ab",
//   "onBackground": "#FFFFFF",
//   "onSurface": "#FFFFFF",
//   "placeholder": "rgba(255, 255, 255, 0.54)",
//   "primary": "#BB86FC",
//   "surface": "#121212",
//   "text": "#ffffff",
// }
// nightMode {
//   "accent": "#03dac4",
//   "backdrop": "rgba(0, 0, 0, 0.5)",
//   "background": "#f6f6f6",
//   "disabled": "rgba(0, 0, 0, 0.26)",
//   "error": "#B00020",
//   "notification": "#f50057",
//   "onBackground": "#000000",
//   "onSurface": "#000000",
//   "placeholder": "rgba(0, 0, 0, 0.54)",
//   "primary": "#6200ee",
//   "surface": "#ffffff",
//   "text": "#000000",
// }

export default function ThemeProvider(props) {
  const scheme = useColorScheme();

  const fontConfig = {
    default: {
      regular: {
        fontFamily: "Inter_400Regular",
        fontWeight: "normal",
      },
      medium: {
        fontFamily: "Inter_500Medium",
        fontWeight: "normal",
      },
      light: {
        fontFamily: "Inter_300Light",
        fontWeight: "normal",
      },
      thin: {
        fontFamily: "Inter_100Thin",
        fontWeight: "normal",
      },
    },
  };

  const theme = scheme === "dark" ? DarkTheme : DefaultTheme;
  const paperTheme = {
    ...theme,
    fonts: configureFonts(fontConfig),
    colors: {
      ...theme.colors,
    },
  };

  return <PaperProvider theme={paperTheme}>{props.children}</PaperProvider>;
}
