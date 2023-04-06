import {
  MainLayout,
  Buttons,
  Modals,
  Inputs,
  Loading,
  DatePicker,
} from "@/components";
import { Avatar, IconButton, Icon, Input, Select } from "@chakra-ui/react";
import { FaPen } from "react-icons/fa";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { userUpdateAvatar } from "@/configs";
import moment from "moment";
import axios from "axios";
const api = process.env.API_URL;

const Profile = () => {
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.user);

  const [modal, setModal] = useState({
    editProfile: false,
    editPassword: false,
    editAvatar: false,
  });

  const [locations, setLocations] = useState([]);
  const [profile, setProfile] = useState({});
  const [upload, setUpload] = useState(null);
  const [loading, setLoading] = useState(false);

  //   console.log(profile);

  const [editProfile, setEditProfile] = useState({
    email: "",
    address: "",
    name: "",
    birth: "",
    locationId: "",
    gender: "",
    phoneNumber: "",
  });

  //   console.log(editProfile);

  const handleModal = {
    profile: () => setModal({ editProfile: !modal.editProfile }),
    password: () => setModal({ editPassword: !modal.editPassword }),
    avatar: () => setModal({ editAvatar: !modal.editAvatar }),
  };

  const handleEditImage = (e) => setUpload(e.target.files[0]);

  const handleProfile = {
    email: (e) => setEditProfile({ ...editProfile, email: e.target.value }),
    address: (e) => setEditProfile({ ...editProfile, address: e.target.value }),
    name: (e) => setEditProfile({ ...editProfile, name: e.target.value }),
    birth: (e) => setEditProfile({ ...editProfile, birth: e.target.value }),
    location: (e) =>
      setEditProfile({ ...editProfile, locationId: e.target.value }),
    gender: (e) => setEditProfile({ ...editProfile, gender: e.target.value }),
    phone: (e) =>
      setEditProfile({ ...editProfile, phoneNumber: e.target.value }),
  };

  const handleChangeProfile = () => {
    setLoading(true);

    axios({
      method: "patch",
      url: `${api}/users/edit-profile`,
      data: {
        ...editProfile,
        birth: moment(editProfile.birth).format("YYYY-MM-DD, h:mm:ss"),
      },
      headers: {
        Authorization: `Bearer ${userData.token}`,
      },
    })
      .then((_) => {
        fetchData();
        handleModal.profile();
      })
      .catch((err) => console.log(err));
  };

  const handleChangeImage = () => {
    setLoading(true);

    if (!upload) {
      setLoading(false);
      return console.log("file not found");
    }

    const formData = new FormData();
    formData.append("image", upload);

    axios({
      method: "patch",
      url: `${api}/users/avatar`,
      data: formData,
      headers: {
        Authorization: `Bearer ${userData.token}`,
      },
    })
      .then((result) => {
        fetchData();
        dispatch(userUpdateAvatar(result.data.image));
        setUpload(null);
        setModal({ editAvatar: !modal.editAvatar });
      })
      .catch((err) => console.log(err));
  };

  const fetchData = () => {
    setLoading(true);

    axios({
      method: "get",
      url: `${api}/users`,
      headers: {
        Authorization: `Bearer ${userData.token}`,
      },
    })
      .then((result) => {
        setLoading(false);
        const data = result.data.data[0];
        setEditProfile({
          ...editProfile,
          email: data.email || "",
          address: data.address || "",
          name: data.name || "",
          birth: new Date(),
          locationId: data.location?.id || "",
          gender: data.gender || "",
          phoneNumber: data.phoneNumber || "",
        });
        return setProfile(data);
      })
      .catch((err) => console.log(err));
  };

  const fetchLocationData = () => {
    setLoading(true);

    axios({
      method: "get",
      url: `${api}/locations`,
    })
      .then((result) => {
        setLoading(false);
        setLocations(result.data.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchData();
    fetchLocationData();
  }, []);

  return (
    <>
      <MainLayout>
        {loading ? <Loading /> : <div />}
        <section className="md:px-20 md:py-8 px-10 py-4">
          <h1 className="text-2xl font-bold">Profile</h1>
          <div className="mt-16 flex md:flex-row flex-col md:items-center">
            <div className="relative w-fit h-fit">
              <Avatar
                className="md:mx-0 mx-auto"
                src={profile.profileImage}
                w="220px"
                h="220px"
              />
              <div className="absolute top-0 right-0 mt-2 mr-2">
                <IconButton
                  onClick={handleModal.avatar}
                  variant="unstyled"
                  color="orange.300"
                  icon={<Icon as={FaPen} boxSize={8} />}
                />
              </div>
            </div>
            <div className="md:ml-10 md:mt-0 mt-8">
              <h1 className="text-2xl font-bold">{profile.name}</h1>
              <p className="text-lg text-pastel-blue">{profile.email}</p>
              <p className="text-lg text-pastel-blue">{profile.phoneNumber}</p>
              <p className="text-lg text-pastel-blue">
                Has been active since {moment(profile.createdAt).format("YYYY")}
              </p>
              <div className="flex">
                <h2 className="text-xl font-bold">{profile.gender}</h2>
              </div>
            </div>
          </div>

          <section className="mt-20">
            <h1 className="text-xl font-bold text-independence-black">
              Contacts
            </h1>
            <div className="mt-10 flex md:flex-row flex-col">
              <div className="w-full pb-4 border-b-2 md:mb-0 mb-4">
                <h2 className="text-lg text-quick-silver">Email address :</h2>
                <p className="text-lg text-onyx-black">{profile.email}</p>
              </div>
              <div className="w-20 md:block hidden" />
              <div className="w-full pb-4 border-b-2 md:mb-0 mb-4">
                <h2 className="text-lg text-quick-silver">Address :</h2>
                <p className="text-lg text-onyx-black">{profile.address}</p>
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
                <p className="text-lg text-onyx-black">{profile.name}</p>
              </div>
              <div className="w-20 md:block hidden" />
              <div className="w-full pb-4 border-b-2 md:mb-0 mb-4">
                <h2 className="text-lg text-quick-silver">DD/MM/YY</h2>
                <p className="text-lg text-onyx-black">
                  {moment(profile.birth).format("DD/MM/YY")}
                </p>
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
              onClick={handleModal.profile}
            />
            <Buttons
              className="w-full py-3 px-4 md:mx-2 md:my-0 my-2"
              text="Edit Password"
              textEdit="font-bold text-lg"
              onClick={handleModal.password}
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
              onClose={handleModal.profile}
              title="Edit profile"
            >
              <div>
                <label className="text-lg font-medium">Contacts</label>
                <Inputs
                  background="#DADADA"
                  placeholdercolor="#848484"
                  borderColor="#DADADA"
                  className="mt-4"
                  placeHolder="Email"
                  type="email"
                  onChange={handleProfile.email}
                  value={editProfile.email}
                />
                <Inputs
                  background="#DADADA"
                  placeholdercolor="#848484"
                  borderColor="#DADADA"
                  className="mt-4"
                  placeHolder="Phone number"
                  onChange={handleProfile.phone}
                  value={editProfile.phoneNumber}
                />
                <Inputs
                  background="#DADADA"
                  placeholdercolor="#848484"
                  borderColor="#DADADA"
                  className="mt-4"
                  placeHolder="Address"
                  onChange={handleProfile.address}
                  value={editProfile.address}
                />
              </div>

              <div className="mt-4">
                <label className="text-lg font-medium">Identity</label>
                <Inputs
                  background="#DADADA"
                  placeholdercolor="#848484"
                  borderColor="#DADADA"
                  className="mt-4"
                  placeHolder="Display name"
                  onChange={handleProfile.name}
                  value={editProfile.name}
                />
                {/* <Inputs
                  background="#DADADA"
                  placeholdercolor="#848484"
                  borderColor="#DADADA"
                  className="mt-4"
                  placeHolder="DD/MM/YY"
                  onChange={handleProfile.birth}
                  value={editProfile.birth}
                /> */}
                <div className="bg-boro-silver mt-4 rounded">
                  <DatePicker
                    date={editProfile.birth}
                    onChange={(date) =>
                      setEditProfile({ ...editProfile, birth: date })
                    }
                    className="px-4 py-2 rounded "
                  />
                </div>
                {/* <Inputs
                  background="#DADADA"
                  placeholdercolor="#848484"
                  borderColor="#DADADA"
                  className="mt-4"
                  placeHolder="Gender"
                  onChange={handleProfile.gender}
                  value={editProfile.gender}
                /> */}
                <div className="mt-4">
                  <Select
                    fontWeight="medium"
                    bg="#DADADA"
                    color="#202336"
                    placeholdercolor="#848484"
                    placeholder="Gender"
                    value={editProfile.gender}
                    onChange={handleProfile.gender}
                  >
                    <option>male</option>
                    <option>female</option>
                  </Select>
                </div>
              </div>

              <div className="mt-4">
                <label className="text-lg font-medium">Location</label>
                <div className="mt-4">
                  <Select
                    fontWeight="medium"
                    bg="#DADADA"
                    color="#202336"
                    placeholdercolor="#848484"
                    placeholder="Location"
                    onChange={handleProfile.location}
                  >
                    {locations.map((location, index) => {
                      return (
                        <option key={index} value={location.id}>
                          {location.name}
                        </option>
                      );
                    })}
                  </Select>
                </div>
              </div>

              <div className="mt-6 mb-4">
                <Buttons
                  className="w-full py-3 px-4"
                  text="Confirm"
                  textEdit="text-lg font-medium"
                  onClick={handleChangeProfile}
                />
              </div>
            </Modals>

            <Modals
              isOpen={modal.editPassword}
              onClose={handleModal.password}
              title="Edit password"
            >
              <div>
                <label className="text-lg font-medium">Old password</label>
                <Inputs
                  background="#DADADA"
                  placeholdercolor="#848484"
                  borderColor="#DADADA"
                  className="mt-4"
                  placeHolder="Type your old password"
                />
              </div>

              <div className="mt-4">
                <label className="text-lg font-medium">New password</label>
                <Inputs
                  background="#DADADA"
                  placeholdercolor="#848484"
                  borderColor="#DADADA"
                  className="mt-4"
                  placeHolder="Type your new password"
                />

                <Inputs
                  background="#DADADA"
                  placeholdercolor="#848484"
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

            <Modals
              isOpen={modal.editAvatar}
              onClose={handleModal.avatar}
              title="Edit Avatar"
            >
              <div className="w-full p-2 flex flex-col items-center">
                {/* <Avatar className="mb-4" w="150px" h="150px" /> */}

                <div className="w-full">
                  <Input
                    variant="unstyled"
                    className="p-2 mb-4"
                    size="lg"
                    type="file"
                    onChange={handleEditImage}
                  />
                </div>

                <Buttons
                  onClick={handleChangeImage}
                  className="py-2 px-4 w-full"
                  text="Confirm"
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
