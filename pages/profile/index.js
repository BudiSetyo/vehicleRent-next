import { MainLayout, Buttons, Modals, Inputs } from "@/components";
import { Avatar } from "@chakra-ui/react";
import { useState } from "react";

const Profile = () => {
  const [modal, setModal] = useState({
    editProfile: false,
    editPassword: false,
  });

  const handleEditProfileModal = () =>
    setModal({ editProfile: !modal.editProfile });
  const handleEditPasswordModal = () =>
    setModal({ editPassword: !modal.editPassword });

  return (
    <>
      <MainLayout>
        <section className="md:px-20 md:py-8 px-10 py-4">
          <h1 className="text-2xl font-bold">Profile</h1>
          <div className="mt-16 flex md:flex-row flex-col md:items-center">
            <Avatar className="md:mx-0 mx-auto" w="220px" h="220px" />
            <div className="md:ml-10 md:mt-0 mt-8">
              <h1 className="text-2xl font-bold">Samantha Doe</h1>
              <p className="text-lg text-pastel-blue">samanthadoe@mail.com</p>
              <p className="text-lg text-pastel-blue">+62833467823</p>
              <p className="text-lg text-pastel-blue">
                Has been active since 2013
              </p>
              <div className="flex">
                <h2 className="text-xl font-bold">Female</h2>
              </div>
            </div>
          </div>

          <section className="mt-20">
            <h1 className="text-xl font-bold text-independence-black">
              Contacts
            </h1>
            <div className="mt-10 flex md:flex-row flex-col">
              <div className="w-full pb-4 border-b-2 md:mb-0 mb-4">
                <h2 className="text-lg text-quick-silver">Email adress :</h2>
                <p className="text-lg text-onyx-black">zulaikha17@gmail.com</p>
              </div>
              <div className="w-20 md:block hidden" />
              <div className="w-full pb-4 border-b-2 md:mb-0 mb-4">
                <h2 className="text-lg text-quick-silver">Adress :</h2>
                <p className="text-lg text-onyx-black">
                  Iskandar Street no. 67 Block A Near Bus Stop
                </p>
              </div>
            </div>
          </section>

          <section className="mt-20">
            <h1 className="text-xl font-bold text-independence-black">
              Identity
            </h1>
            <div className="mt-10 flex md:flex-row flex-col">
              <div className="w-full pb-4 border-b-2 md:mb-0 mb-4">
                <h2 className="text-lg text-quick-silver">Display name :</h2>
                <p className="text-lg text-onyx-black">Samantha</p>
              </div>
              <div className="w-20 md:block hidden" />
              <div className="w-full pb-4 border-b-2 md:mb-0 mb-4">
                <h2 className="text-lg text-quick-silver">DD/MM/YY</h2>
                <p className="text-lg text-onyx-black">03/09/2003</p>
              </div>
            </div>
          </section>

          <div className="mt-16 flex md:flex-row flex-col">
            <Buttons
              className="w-full py-3 px-4 md:mx-2 md:my-0 my-2"
              color="#393939"
              text="Edit Profile"
              textEdit="font-bold text-lg"
              textColor="crayola-orange"
              onClick={handleEditProfileModal}
            />
            <Buttons
              className="w-full py-3 px-4 md:mx-2 md:my-0 my-2"
              text="Edit Password"
              textEdit="font-bold text-lg"
              onClick={handleEditPasswordModal}
            />
            <Buttons
              className="w-full py-3 px-4 md:mx-2 md:my-0 my-2"
              color="#393939"
              text="Log out"
              textEdit="font-bold text-lg"
              textColor="crayola-orange"
            />
          </div>

          <section>
            <Modals
              isOpen={modal.editProfile}
              onClose={handleEditProfileModal}
              title="Edit profile"
            >
              <div>
                <label className="text-lg font-medium">Contacts</label>
                <Inputs
                  background="#DADADA"
                  placeHolderColor="#848484"
                  borderColor="#DADADA"
                  className="mt-4"
                  placeHolder="Email"
                />
                <Inputs
                  background="#DADADA"
                  placeHolderColor="#848484"
                  borderColor="#DADADA"
                  className="mt-4"
                  placeHolder="Adress"
                />
              </div>

              <div className="mt-4">
                <label className="text-lg font-medium">Identity</label>
                <Inputs
                  background="#DADADA"
                  placeHolderColor="#848484"
                  borderColor="#DADADA"
                  className="mt-4"
                  placeHolder="Display name"
                />
                <Inputs
                  background="#DADADA"
                  placeHolderColor="#848484"
                  borderColor="#DADADA"
                  className="mt-4"
                  placeHolder="DD/MM/YY"
                />
              </div>

              <div className="mt-6 mb-4">
                <Buttons
                  className="w-full py-3 px-4"
                  text="Confirm"
                  textEdit="text-lg font-medium"
                />
              </div>
            </Modals>

            <Modals
              isOpen={modal.editPassword}
              onClose={handleEditPasswordModal}
              title="Edit password"
            >
              <div>
                <label className="text-lg font-medium">Old password</label>
                <Inputs
                  background="#DADADA"
                  placeHolderColor="#848484"
                  borderColor="#DADADA"
                  className="mt-4"
                  placeHolder="Type your old password"
                />
              </div>

              <div className="mt-4">
                <label className="text-lg font-medium">New password</label>
                <Inputs
                  background="#DADADA"
                  placeHolderColor="#848484"
                  borderColor="#DADADA"
                  className="mt-4"
                  placeHolder="Type your new password"
                />

                <Inputs
                  background="#DADADA"
                  placeHolderColor="#848484"
                  borderColor="#DADADA"
                  className="mt-4"
                  placeHolder="Retype your new password"
                />
              </div>

              <div className="mt-6 mb-4">
                <Buttons
                  className="w-full py-3 px-4"
                  text="Confirm"
                  textEdit="text-lg font-medium"
                />
              </div>
            </Modals>
          </section>
        </section>
      </MainLayout>
    </>
  );
};

export default Profile;
