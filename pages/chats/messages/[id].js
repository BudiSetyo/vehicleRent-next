import { MainLayout } from "@/components";
import {
  Avatar,
  Icon,
  IconButton,
  Box,
  InputGroup,
  Input,
  InputRightElement,
} from "@chakra-ui/react";
import { FaAngleLeft, FaCheck, FaCamera } from "react-icons/fa";

const Messages = () => {
  const messageData = [
    {
      type: "sender",
      message: "Hello, how are you?",
      time: "12:00 pm",
      read: true,
    },
    {
      type: "receiver",
      message: "Im fine thank you",
      time: "15:00 pm",
      read: false,
    },
  ];
  return (
    <>
      <MainLayout>
        <section className="md:px-20 md:py-8 px-10 py-4">
          <div className="flex items-center">
            <IconButton
              variant="unstyled"
              icon={<Icon w={10} h={10} as={FaAngleLeft} />}
            />
            <div className="ml-6 flex items-center">
              <Avatar size="lg" />
              <h1 className="ml-4 text-2xl font-bold">User</h1>
            </div>
          </div>

          <section className="mt-12">
            {messageData.map((item, index) => {
              return (
                <div
                  className={`w-full flex ${
                    item.type === "sender" ? "justify-end" : "justify-start"
                  }`}
                  key={index}
                >
                  <div className="mb-6 w-fit flex flex-col items-end">
                    <Box
                      className={`max-w-sm px-4 py-2 rounded-md ${
                        item.type === "sender"
                          ? "bg-onyx-black"
                          : "bg-crayola-orange"
                      }`}
                    >
                      <p
                        className={`text-lg ${
                          item.type === "sender"
                            ? "text-crayola-orange"
                            : "text-onyx-black"
                        }`}
                      >
                        {item.message}
                      </p>
                    </Box>
                    <div className="mt-4 flex items-center">
                      <p className="mr-2 text-md text-sand-silver">
                        {item.time}
                      </p>
                      <div className={`${item.read ? "block" : "hidden"}`}>
                        <Icon color="#FFCD61" w={6} h={6} as={FaCheck} />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </section>

          <div className="mt-8 mb-4">
            <InputGroup>
              <InputRightElement>
                <Box as="button" className="mt-2 px-2">
                  <Icon
                    className="mr-2"
                    color="#C4C4C4"
                    w={8}
                    h={8}
                    as={FaCamera}
                  />
                </Box>
              </InputRightElement>
              <Input
                size="lg"
                borderColor="#F9F9FB"
                placeholder="Type a message"
                borderRadius="6px"
                background="#F9F9FB"
              />
            </InputGroup>
          </div>
        </section>
      </MainLayout>
    </>
  );
};

export default Messages;
