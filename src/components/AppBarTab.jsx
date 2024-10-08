import { Pressable, StyleSheet } from "react-native";
import Text from "./Text";

const styles = StyleSheet.create({
  tab: {
    color: "#ffffff",
    margin: 15,
  },
});

const AppBarTab = ({ text }) => {
  return (
    <Pressable>
      <Text fontSize="subheading" fontWeight="bold" style={styles.tab}>
        {text}
      </Text>
    </Pressable>
  );
};

export default AppBarTab;
