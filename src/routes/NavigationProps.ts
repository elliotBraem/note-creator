import { IFrameStackScreenProps } from "near-social-bridge/navigation";

// Navigation props
export type NavigationProps = {
  Home: undefined;
  LoggedOut: undefined;
};

// Screen props
export type PreHomeScreenProps = IFrameStackScreenProps<
  NavigationProps,
  "Home"
>;

export type LoggedOutScreenProps = IFrameStackScreenProps<
  NavigationProps,
  "LoggedOut"
>;
