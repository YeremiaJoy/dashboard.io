import {
  CheckIcon,
  DeleteIcon,
  SmallCloseIcon,
  WarningTwoIcon,
} from "@chakra-ui/icons";
import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import {
  ActionContainer,
  ModalDelete,
  UserDetailContent,
  UserDetailData,
  UserDetailStyle,
} from "../styles/search";
import { useRouter } from "next/router";
import axios from "axios";

function UserDetail({ data, showDetail, toggleShow }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const router = useRouter();
  const toast = useToast();

  function onDelete() {
    axios
      .delete(`https://delman-fe-api.fly.dev/users/${data.id}`, {
        data: {
          id: data.id,
          name: data.name,
          email: data.email,
        },
      })
      .then(function () {
        toast({
          title: "User has been deleted",
          variant: "left-accent",
          isClosable: true,
          position: "top-right",
          status: "success",
          icon: <CheckIcon w={5} h={5} />,
          duration: 5000,
          containerStyle: {
            maxWidth: "312px",
            fontSize: "14px",
          },
        });
      })
      .catch(function () {
        toast({
          title: "Error Deleted",
          variant: "left-accent",
          isClosable: true,
          position: "top-right",
          status: "error",
          icon: <WarningTwoIcon w={6} h={6} />,
          duration: 5000,
          containerStyle: {
            width: "312px",
            fontSize: "14px",
            backgroundColor: "#fff",
          },
        });
      });
    router.push("/users");
  }

  return (
    <UserDetailStyle show={showDetail}>
      <SmallCloseIcon
        className="detail-close-btn"
        w={5}
        h={5}
        onClick={toggleShow}
      />
      <h2>User Details</h2>
      <p>This is inquiry about user with email: {data?.email}.</p>
      <UserDetailContent>
        {data &&
          Object.keys(data).map((val, i) => {
            return (
              <UserDetailData key={i}>
                <p>
                  {/* replace the "_" symbol with white space and change to Proper Case*/}
                  {val
                    .replace(/_/g, " ")
                    .replace(/(\b[a-z](?!\s))/g, function (x) {
                      return x.toUpperCase();
                    })}
                </p>
                <p>: {data[val]}</p>
              </UserDetailData>
            );
          })}
      </UserDetailContent>
      <ActionContainer>
        <Button className="cancel-btn" onClick={toggleShow}>
          Cancel
        </Button>
        <Button className="delete-user-btn" onClick={onOpen}>
          Delete User
        </Button>
      </ActionContainer>
      {/* Modal Delete */}
      <Modal onClose={onClose} isCentered size="md" isOpen={isOpen}>
        <ModalDelete>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Delete User</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <DeleteIcon className="delete-icon" w={88} h={88} />
              <h2>Are you sure you want this user ?</h2>
              <p>This action will delete: {data?.name} from the database</p>
            </ModalBody>
            <ModalFooter>
              <Button className="cancel-btn" onClick={onClose}>
                Cancel
              </Button>
              <Button className="primary-btn" onClick={onDelete}>
                Delete User
              </Button>
            </ModalFooter>
          </ModalContent>
        </ModalDelete>
      </Modal>
    </UserDetailStyle>
  );
}

export default UserDetail;
