import { Easing } from "react-native";

export const animationTimings = {
  welcomeScreen: {
    total: 3000,
    backgroundFade: 500,
    swirlDraw: 500,
    logoFade: 700,
    textStagger: 1000,
    badgeSlide: 800,
  },
  loadingScreen: {
    total: 2500,
    iconScale: 300,
    progressDuration: 2000,
    pulseDuration: 1000,
  },
  confirmationScreen: {
    total: 2000,
    checkmarkBounce: 400,
    textSlide: 500,
  },
  successScreen: {
    total: 2500,
    badgeScale: 500,
    confettiSpawn: 1200,
    itemStagger: 200,
  },
};

export const easingPresets = {
  elastic: Easing.elastic(1.2),
  bounce: Easing.bounce,
  smooth: Easing.bezier(0.25, 0.1, 0.25, 1),
};
