import { CheckIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Checkbox,
  Flex,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  VStack,
  useDisclosure,
} from "@chakra-ui/react";
import { useState } from "react";
import Select from "react-select";
import createThing from "../services/createThing";
import Loading from "./Loading";
import RichTextExample from "./RichTextEditor";

const CreatorForm = () => {
  // UPDATE STATE TO HANDLE YOUR TYPE
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const [value, setValue] = useState([
    { type: "paragraph", children: [{ text: "" }] },
  ]);
  const [selectedDomains, setSelectedDomains] = useState([]);
  const [publish, setPublish] = useState(false);

  const [isLoading, setIsLoading] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [message, setMessage] = useState<string>("");

  const handleSubmit = async () => {
    setIsLoading(true);
    // UPDATE OBJECT TO MATCH YOUR TYPE
    const response = await createThing({
      value,
      selectedDomains,
      publish,
    });
    if (response.error) {
      setMessage(response.error);
      onOpen();
    } else {
      setMessage("successfully created");
      onOpen();
      setTitle("");
      setDescription("");
    }
    setIsLoading(false);
  };
  const domains = [
    { value: "domain1", label: "Domain 1" },
    { value: "domain2", label: "Domain 2" },
    { value: "domain3", label: "Domain 3" },
  ];

  const handleDomainChange = (selectedOptions: any) => {
    setSelectedDomains(selectedOptions);
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <VStack spacing={4} width="100%" height="100vh">
        <Box>
          <RichTextExample />
        </Box>
        <Flex>
          <Select
            isMulti
            options={domains}
            onChange={handleDomainChange}
            placeholder="Select domains to post"
          />
        <Checkbox
          isChecked={publish}
          onChange={(e) => setPublish(e.target.checked)}
        >
          Publish
        </Checkbox>
        <Button
          leftIcon={<CheckIcon />}
          colorScheme="blue"
          onClick={handleSubmit}
        >
          Submit
        </Button>
        </Flex>
      </VStack>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Error</ModalHeader>
          <ModalBody>
            <p>{message}</p>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default CreatorForm;
