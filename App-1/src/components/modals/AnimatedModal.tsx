import React, { useEffect } from "react";
import {
  View,
  StyleSheet,
  Modal,
  TouchableWithoutFeedback,
  Dimensions,
  Platform,
} from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withSpring,
  runOnJS,
  Easing,
  SlideInDown,
  SlideOutDown,
  FadeIn,
  FadeOut,
} from "react-native-reanimated";
import {
  GestureHandlerRootView,
  PanGestureHandler,
} from "react-native-gesture-handler";
import { COLORS } from "../../constants/colors";
import { BORDER_RADIUS } from "../../constants/spacing";

const { height: SCREEN_HEIGHT } = Dimensions.get("window");

interface AnimatedModalProps {
  visible: boolean;
  onClose: () => void;
  children: React.ReactNode;
  snapPoints?: number[]; // Percentage of screen height, e.g. [0.5, 0.9]
}

const AnimatedModal: React.FC<AnimatedModalProps> = ({
  visible,
  onClose,
  children,
}) => {
  const translateY = useSharedValue(SCREEN_HEIGHT);

  useEffect(() => {
    if (visible) {
      translateY.value = withTiming(0, {
        duration: 300,
        easing: Easing.out(Easing.quad),
      });
    } else {
      translateY.value = withTiming(SCREEN_HEIGHT, {
        duration: 250,
      });
    }
  }, [visible]);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: translateY.value }],
    };
  });

  const handleGesture = (event: any) => {
    if (event.nativeEvent.translationY > 100) {
      runOnJS(onClose)();
    }
  };

  if (!visible) return null;

  return (
    <Modal
      transparent
      visible={visible}
      onRequestClose={onClose}
      animationType="none"
      statusBarTranslucent
    >
      <View style={styles.overlay}>
        <TouchableWithoutFeedback onPress={onClose}>
          <Animated.View
            entering={FadeIn.duration(200)}
            exiting={FadeOut.duration(200)}
            style={styles.backdrop}
          />
        </TouchableWithoutFeedback>

        <GestureHandlerRootView style={styles.modalContainer}>
          <Animated.View style={[styles.modalContent, animatedStyle]}>
            <PanGestureHandler onGestureEvent={handleGesture}>
              <Animated.View style={styles.indicatorContainer}>
                <View style={styles.indicator} />
              </Animated.View>
            </PanGestureHandler>
            {children}
          </Animated.View>
        </GestureHandlerRootView>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: "flex-end",
  },
  backdrop: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: COLORS.overlay,
  },
  modalContainer: {
    justifyContent: "flex-end",
    flex: 1,
  },
  modalContent: {
    backgroundColor: COLORS.background,
    borderTopLeftRadius: BORDER_RADIUS.lg + 10,
    borderTopRightRadius: BORDER_RADIUS.lg + 10,
    minHeight: SCREEN_HEIGHT * 0.5,
    maxHeight: SCREEN_HEIGHT * 0.9,
    paddingBottom: Platform.OS === "ios" ? 40 : 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: -5,
    },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 20,
  },
  indicatorContainer: {
    alignItems: "center",
    paddingVertical: 20,
    width: "100%",
  },
  indicator: {
    width: 40,
    height: 5,
    borderRadius: 3,
    backgroundColor: COLORS.border,
  },
});

export default AnimatedModal;
