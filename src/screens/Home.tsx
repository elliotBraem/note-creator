import { Box } from "@chakra-ui/react";
import { PreHomeScreenProps } from "../routes/NavigationProps";
import CreatorForm from "../components/CreatorForm";

const Home: React.FC<PreHomeScreenProps> = ({ navigation }) => {
  return (
    <Box maxWidth={500} margin={"auto"}>
      <CreatorForm />
    </Box>
  );
};

export default Home;
