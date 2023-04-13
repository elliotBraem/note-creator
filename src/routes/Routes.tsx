import { createStackNavigator } from "near-social-bridge/navigation";
import { NavigationProps } from "./NavigationProps";

import Loading from "../components/Loading";
import Home from "../screens/Home";

const { Navigator, Screen } = createStackNavigator<NavigationProps>(
  <Loading />
);

const Routes: React.FC = () => {
  return (
    <>
      <Navigator>
        <Screen name="Home" component={Home} iframeHeight={500} />
      </Navigator>
    </>
  );
};

export default Routes;
