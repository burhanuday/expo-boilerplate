# Expo Boilerplate

A highly opinionated boilerplate for React Native Expo apps. Aimed at to be used in quickly prototyping projects without having to setup new codebases everytime! 

## Features
1. Absolute imports
```
Import components, screens and hooks with
import Input from "@components/formik";
import Home from "@screens/Home";
import useHook from "@hooks/useHook";
```

2. Uses React Native Paper for components. Inbuilt day-night theming for components

3. Uses React Navigation for navigation. Automatic day-night theming for headers and other components

4. Extends `eslint-config` from the `@react-native-community/eslint-config`

5. Formik and Yup for forms and validation. Custom components for integration of react-native-paper and Formik in the `components/formik` folder

6. Axios as the default networking library

7. Redux with Thunks for state management

8. Reactotron for logging, redux actions and state viewing

9. `moment` for time library

10. `react-native-svg` and `react-native-svg-transformer` for using svg images in the app

11. Husky and lint-staged for precommit linting and formatting

12. Uses prettier as the formatter

13. React Native Reanimated for animation library

## Usage
```
git clone https://github.com/burhanuday/expo-boilerplate.git
cd expo-boilerplate
rm -rf .git
yarn
yarn start
```

## License
```MIT```