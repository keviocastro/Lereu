import { SafeAreaView } from "react-native-safe-area-context";
import styles from "./Container.style";

const Container = ({ children }) => {
  return <SafeAreaView style={styles.container}>{children}</SafeAreaView>;
}

export default Container;