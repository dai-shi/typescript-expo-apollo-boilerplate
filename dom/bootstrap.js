import { RNDomInstance } from "react-native-dom";
import appJson from "../app.json";

// Path to RN Bundle Entrypoint ================================================
const rnBundlePath = "./entry.bundle?platform=dom&dev=true";

// React Native DOM Runtime Options =============================================
const ReactNativeDomOptions = {
  enableHotReload: false,
  nativeModules: []
};

// App Initialization ============================================================
const app = new RNDomInstance(
  rnBundlePath,
  appJson.expo.name,
  document.body,
  ReactNativeDomOptions
);

app.start();
