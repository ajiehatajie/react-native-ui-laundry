import * as React from "react";
import {
  StyleSheet,
  Dimensions,
  Text,
  View,
  Image,
  Platform,
  Button,
  Alert,
  SafeAreaView,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { isIphoneX } from "react-native-iphone-x-helper";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { LinearGradient } from "expo-linear-gradient";
import {
  MaterialCommunityIcons,
  AntDesign,
  Ionicons,
} from "@expo/vector-icons";
import Animated from "react-native-reanimated";
import faker from "faker";
import { useRef } from "react";

const DATA = Array(10)
  .fill(null)
  .map((_, idx) => ({
    id: idx,
    avatar: faker.image.avatar(),
    fullName: `${faker.name.firstName()} ${faker.name.lastName()}`,
  }));

const colors = {
  themeColor: "#27ae60",
  white: "#fff",
  greyish: "#a4a4a4",
};
const scr = {
  height: Dimensions.get("window").height,
  width: Dimensions.get("window").width,
};
const HEADER_MAX_HEIGHT = 240;
const HEADER_MIN_HEIGHT = 84;
const HEADER_SCROLL_DISTANCE = HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT;

const orders = [
  {
    orderId: "#123456",
  },
  {
    orderId: "#123456",
  },
  {
    orderId: "#123456",
  },
  {
    orderId: "#123456",
  },
];
export default function TabOneScreen() {
  const scrollY = useRef(new Animated.Value(0)).current;
  const headerTranslateY = scrollY.interpolate({
    inputRange: [0, HEADER_SCROLL_DISTANCE],
    outputRange: [0, -HEADER_SCROLL_DISTANCE],
    extrapolate: "clamp",
  });

  const imageOpacity = scrollY.interpolate({
    inputRange: [0, HEADER_SCROLL_DISTANCE / 2, HEADER_SCROLL_DISTANCE],
    outputRange: [1, 1, 0],
    extrapolate: "clamp",
  });
  const imageTranslateY = scrollY.interpolate({
    inputRange: [0, HEADER_SCROLL_DISTANCE],
    outputRange: [0, 100],
    extrapolate: "clamp",
  });

  const titleScale = scrollY.interpolate({
    inputRange: [0, HEADER_SCROLL_DISTANCE / 2, HEADER_SCROLL_DISTANCE],
    outputRange: [1, 1, 0.9],
    extrapolate: "clamp",
  });
  const titleTranslateY = scrollY.interpolate({
    inputRange: [0, HEADER_SCROLL_DISTANCE / 2, HEADER_SCROLL_DISTANCE],
    outputRange: [0, 0, -8],
    extrapolate: "clamp",
  });

  const header = () => {
    return (
      <View
        style={{
          backgroundColor: colors.themeColor,
          paddingBottom: scr.height * 0.2,
          borderBottomLeftRadius: scr.width * 0.1,
          borderBottomRightRadius: scr.width * 0.1,
          paddingTop: Platform.OS === "ios" ? 5 : 15,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            paddingHorizontal: 30,
            marginVertical: 20,
            justifyContent: "space-between",
          }}
        >
          <MaterialCommunityIcons
            name="menu"
            size={25}
            color="#FFF"
            onPress={() => Alert.alert("", "Show Menu")}
          />
          <Ionicons
            name="notifications-outline"
            size={25}
            color="#FFF"
            onPress={() => Alert.alert("", "Notifikasi")}
          />
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "flex-start",
            paddingHorizontal: 20,
            alignItems: "center",
          }}
        >
          <Image
            source={require("../assets/images/user.png")}
            resizeMode="contain"
          />
          <View>
            <Text style={{ color: "#FFF" }}>Ajie Hatajie</Text>
            <Text style={{ color: "#FFF" }}>React Native Developer</Text>
          </View>
        </View>
      </View>
    );
  };

  const myBalance = () => {
    return (
      <View
        style={{
          backgroundColor: colors.white,
          marginHorizontal: 32,
          // padding: 20,
          borderRadius: 20,
          marginTop: -130,
          elevation: 8,
          marginBottom: 16,
          paddingTop: 20,
          paddingBottom: 20,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginVertical: 8,
            paddingLeft: 20,
            paddingRight: 20,
          }}
        >
          <Text style={{ color: "rgba(156, 154, 154, 1)" }}>My Balance</Text>
          <Text style={{ color: "rgba(33, 43, 54, 1)" }}>Rp.1000.000,00</Text>
        </View>
        <View
          style={{
            borderBottomWidth: 0.3,
            borderColor: "rgba(156, 154, 154, 1)",
          }}
        />
        <View style={{ marginVertical: 10, paddingLeft: 20, paddingRight: 20 }}>
          <View style={{ flexDirection: "row" }}>
            <View style={{ flex: 1, alignItems: "center" }}>
              <Image
                source={require("../assets/images/user.png")}
                resizeMode="contain"
                style={{ width: 80, height: 80 }}
              />
              <Text style={{ fontSize: 10, fontWeight: "bold" }}>Drop off</Text>
            </View>
            <View style={{ flex: 1, alignItems: "center" }}>
              <Image
                source={require("../assets/images/user.png")}
                style={{ width: 80, height: 80 }}
                resizeMode="contain"
              />
              <Text style={{ fontSize: 10, fontWeight: "bold" }}>Pick Up</Text>
            </View>
            <View style={{ flex: 1, alignItems: "center" }}>
              <Image
                source={require("../assets/images/user.png")}
                style={{ width: 80, height: 80 }}
                resizeMode="contain"
              />
              <Text style={{ fontSize: 10, fontWeight: "bold" }}>Shop</Text>
            </View>
            <View style={{ flex: 1, alignItems: "center" }}>
              <Image
                source={require("../assets/images/user.png")}
                style={{ width: 80, height: 80 }}
                resizeMode="contain"
              />
              <Text style={{ fontSize: 10, fontWeight: "bold" }}>Top Up</Text>
            </View>
          </View>
        </View>
      </View>
    );
  };
  const menuContent = () => {
    return (
      <View style={{ marginHorizontal: 32, paddingTop: 30, marginBottom: 20 }}>
        <View style={{ flexDirection: "row" }}>
          <View style={{ flex: 1, alignItems: "center" }}>
            <Image
              source={require("../assets/images/user.png")}
              resizeMode="contain"
              style={{ width: 80, height: 80 }}
            />
            <Text style={{ fontSize: 10, fontWeight: "bold" }}>
              Every Day Wear
            </Text>
          </View>
          <View style={{ flex: 1, alignItems: "center" }}>
            <Image
              source={require("../assets/images/user.png")}
              style={{ width: 80, height: 80 }}
              resizeMode="contain"
            />
            <Text style={{ fontSize: 10, fontWeight: "bold" }}>T-Shirt</Text>
          </View>
          <View style={{ flex: 1, alignItems: "center" }}>
            <Image
              source={require("../assets/images/user.png")}
              style={{ width: 80, height: 80 }}
              resizeMode="contain"
            />
            <Text style={{ fontSize: 10, fontWeight: "bold" }}>Jeans</Text>
          </View>
          <View style={{ flex: 1, alignItems: "center" }}>
            <Image
              source={require("../assets/images/user.png")}
              style={{ width: 80, height: 80 }}
              resizeMode="contain"
            />
            <Text style={{ fontSize: 10, fontWeight: "bold" }}>Long Dress</Text>
          </View>
        </View>
      </View>
    );
  };
  const orderHistory = () => {
    return (
      <>
        <View style={{ marginHorizontal: 32 }}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginVertical: 8,
              paddingBottom: 10,
            }}
          >
            <Text style={{ fontWeight: "bold", fontSize: 25 }}>
              Active Order (2)
            </Text>

            <TouchableOpacity onPress={() => Alert.alert("", "order history")}>
              <LinearGradient
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                colors={[
                  colors.themeColor,
                  "#3498db",
                  colors.themeColor,
                  "#27ae60",
                  "#2980b9",
                ]}
                style={{
                  paddingHorizontal: 10,
                  paddingVertical: 10,
                  borderRadius: 10,
                }}
              >
                <Text style={{ color: "white" }}>Order HIstory</Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ marginHorizontal: 32, marginBottom: 10 }}>
          {orders.map((_, i) => {
            return (
              <View
                style={{
                  backgroundColor: "#FFF",
                  height: 78,
                  borderRadius: 16,
                  flexDirection: "row",
                  padding: 16,
                  alignItems: "center",
                  zIndex: 3,
                  marginBottom: 10,
                }}
                key={i}
              >
                <View
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: 20,
                    backgroundColor: "#FFF",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Image
                    source={require("../assets/images/user.png")}
                    resizeMode="contain"
                    style={{ height: 50, width: 50 }}
                  />
                </View>
                <View
                  style={{
                    flex: 1,
                    justifyContent: "space-between",
                    marginLeft: 16,
                  }}
                >
                  <Text style={{ fontSize: 15 }}>Order No : {_.orderId}</Text>
                  <Text style={{ color: "#3498db" }}>Order Confirmed</Text>
                </View>
              </View>
            );
          })}
        </View>
      </>
    );
  };

  const renderListItem = (item) => (
    <View key={item.id} style={styles.card}>
      <Image style={styles.avatar} source={{ uri: item.avatar }} />
      <Text style={styles.fullNameText}>{item.fullName}</Text>
    </View>
  );

  return (
    <View style={styles.saveArea}>
      <StatusBar backgroundColor={colors.themeColor} />
      <Animated.ScrollView
        scrollEventThrottle={16}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: true }
        )}
      >
        {header()}
        {myBalance()}
        <View style={{ marginHorizontal: 32, flexDirection: "row" }}>
          <View style={{ flex: 0.7 }}>
            <Text style={{ fontWeight: "bold", fontSize: 25 }}>
              Explore OLLO Life{" "}
            </Text>
            <Text style={{ color: "rgba(156, 154, 154, 1)" }}>
              Discover more things and grab Offers
            </Text>
          </View>
          <View
            style={{
              flex: 0.3,
              justifyContent: "flex-end",
              alignItems: "center",
            }}
          >
            <TouchableOpacity onPress={() => Alert.alert("", "Show All")}>
              <LinearGradient
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                colors={[
                  colors.themeColor,
                  "#3498db",
                  colors.themeColor,
                  "#27ae60",
                  "#2980b9",
                ]}
                style={{
                  paddingHorizontal: 10,
                  paddingVertical: 10,
                  borderRadius: 10,
                }}
              >
                <Text style={{ color: "white" }}>Show All</Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </View>

        {menuContent()}
        {orderHistory()}
      </Animated.ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  saveArea: {
    flex: 1,
    backgroundColor: "#eff3fb",
    marginTop: isIphoneX() ? 20 : 0,
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
  header: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    overflow: "hidden",
    height: HEADER_MAX_HEIGHT,
  },
  headerBackground: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    width: null,
    height: HEADER_MAX_HEIGHT,
    resizeMode: "cover",
  },
  topBar: {
    marginTop: 20,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
  },
  card: {
    flexDirection: "row",
    alignItems: "center",
    shadowColor: "#402583",
    backgroundColor: "#ffffff",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 1,
    borderRadius: 10,
    marginHorizontal: 12,
    marginTop: 12,
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  avatar: {
    height: 54,
    width: 54,
    resizeMode: "contain",
    borderRadius: 54 / 2,
  },
  fullNameText: {
    fontSize: 16,
    marginLeft: 24,
  },
});
