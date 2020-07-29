import React from "react";
import {
  DarkTheme,
  DefaultTheme,
  Provider as PaperProvider,
  configureFonts,
} from "react-native-paper";
import { useColorScheme } from "react-native-appearance";

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
