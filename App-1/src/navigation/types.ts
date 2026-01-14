import { NavigatorScreenParams } from "@react-navigation/native";
import { Place } from "../constants/mockData";

export type RootStackParamList = {
  Welcome: undefined;
  Onboarding: undefined;
  Main: NavigatorScreenParams<TabParamList>;
  PlaceDetails: { place: Place };
  Chat: { conversationId: string };
};

export type TabParamList = {
  Home: undefined;
  Calendar: undefined;
  Search: undefined;
  Messages: undefined;
  Profile: undefined;
};
