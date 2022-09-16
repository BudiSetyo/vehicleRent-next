import { MainLayout, Search, Selects } from "@/components";
import { Avatar, Box } from "@chakra-ui/react";
import { useRouter } from "next/router";

const Chat = () => {
  const data = ["mie ayam"];

  const router = useRouter();

  const handleNavigate = (href) => router.push(href);
  return (
    <>
      <MainLayout>
        <section className="md:py-8 md:px-20 py-4 px-10">
          <div className="flex">
            <Search
              className="w-full mr-10 bg-boro-silver border-none"
              placeHolder="Search chat"
              placeHolderColor="#767680"
              backgroundIcon="#DADADA"
            />
            <div className="w-32">
              <Selects
                className="w-full px-5"
                background="#DADADA"
                placeHolder="Sort by"
                placeHolderColor="#767680"
                borderColor="#DADADA"
                data={data}
              />
            </div>
          </div>

          <section className="mt-10">
            <Box
              className="flex justify-between items-center pb-6 border-b-2 cursor-pointer"
              onClick={() => handleNavigate("/chats/messages/1")}
            >
              <div className="flex items-center">
                <Avatar size="lg" />
                <div className="md:ml-6 ml-3">
                  <h1 className="text-xl font-bold">User</h1>
                  <p className="text-lg font-medium">
                    Hey, is the vespa still available?
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center">
                <h2 className="w-20 text-center text-lg text-quick-silver">
                  Just now
                </h2>
                <div className="mt-2 flex justify-center items-center text-center bg-crayola-orange h-8 w-8 rounded-full">
                  <p className="font-bold">1</p>
                </div>
              </div>
            </Box>
          </section>
        </section>
      </MainLayout>
    </>
  );
};

export default Chat;
