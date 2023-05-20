import { Stack, useRouter } from "expo-router";
import { View, Text, SafeAreaView, ScrollView } from "react-native";
import { COLORS, SIZES, images } from "../constants";
import ScreenHeaderBtn from "../components/common/header/ScreenHeaderBtn";
import Welcome from "../components/home/welcome/Welcome";
import Findjobs from "../components/home/findjob/Findjobs";
import { useState } from "react";

const Home = () => {
  const router = useRouter();
  const [search, setSearch] = useState("");
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: COLORS.lightWhite },
          headerShadowVisible: false,
          headerLeft: () => (
            <ScreenHeaderBtn iconUrl={images.menu} dimension="60%" />
          ),
          headerRight: () => (
            <ScreenHeaderBtn iconUrl={images.profile} dimension="100%" />
          ),
          headerTitle: "",
        }}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            flex: 1,
            padding: SIZES.medium,
          }}
        >
          <Welcome
            search={search}
            setSearch={setSearch}
            handleClick={() => {
              if (search) {
                router.push(`/search/${setSearch}`);
              }
            }}
          />
          <Findjobs />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
