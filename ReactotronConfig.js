import Reactotron from "reactotron-react-native";
import { AsyncStorage } from "react-native";
import { reactotronRedux } from "reactotron-redux";

const reactotron = Reactotron.setAsyncStorageHandler(AsyncStorage) // AsyncStorage would either come from `react-native` or `@react-native-community/async-storage` depending on where you get it from
  .configure({ host: "192.168.0.106" }) // controls connection & communication settings
  .use(reactotronRedux())
  .useReactNative() // add all built-in react native plugins
  .connect(); // let's connect!

console.tron = Reactotron;

export default reactotron;
