import {
  Button,
  Flex,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Textarea,
  useDisclosure
} from "@chakra-ui/react";
import { useState } from "react";
import Loading from "./Loading";
import createThing from "../services/createThing";

const CreatorForm = () => {
  // UPDATE STATE TO HANDLE YOUR TYPE
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  
  const [isLoading, setIsLoading] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [message, setMessage] = useState<string>("");

  // UPDATE HANDLE METHODS TO MATCH YOUR STATE
  const handleTitleChange = (event: { target: { value: any } }) => {
    setTitle(event.target.value);
  };

  const handleDescriptionChange = (event: { target: { value: any } }) => {
    setDescription(event.target.value);
  };

  const handleSubmit = async () => {
    setIsLoading(true);
    // UPDATE OBJECT TO MATCH YOUR TYPE
    const response = await createThing({
      title,
      description,
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

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <Flex flexDirection="column" alignItems="left" mt={2}>
        {/* ADD YOUR INPUTS HERE */}
        <Input
          placeholder="Title"
          value={title}
          onChange={handleTitleChange}
          mb={2}
        />
        <Textarea
          placeholder="Description"
          value={description}
          onChange={handleDescriptionChange}
          mb={4}
        />
        <Button
          onClick={handleSubmit}
          isDisabled={title.length < 1 || description.length < 1}
        >
          Submit
        </Button>
      </Flex>
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
