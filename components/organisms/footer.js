import Image from "next/image";
import { Icon, IconButton, Wrap } from "@chakra-ui/react";
import {
  FaTwitter,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  const destinations = [
    "Bali",
    "Yogyakarta",
    "Jakarta",
    "Kalimantan",
    "Malang",
  ];
  const vehicles = ["Bike", "Cars", "Motorbike", "Return Times", "FAQs"];
  const interests = [
    "Adventure Travel",
    "Art And Culture",
    "Wildlife And Nature",
    "Family Holidays",
    "Culinary Trip",
  ];

  return (
    <section className="bg-ghost-white">
      <footer className="max-w-screen-xl mx-auto md:py-10 md:px-20 py-5 px-10">
        <div className="flex justify-between border-b-2 border-sand-silver pb-20">
          <div className="lg:max-w-sm w-full">
            <div className="w-10 h-10">
              <Image src="/logo.svg" width={"100%"} height={"100%"} />
            </div>

            <div className="mt-7">
              <p className="text-lg text-old-silver">
                Plan and book your perfect trip with expert advice, travel tips
                for vehicle information from us
              </p>

              <p className="mt-14 text-lg text-old-silver">
                ©2020 Vehicle Rental Center. All rights reserved
              </p>
            </div>
          </div>

          <div className="hidden lg:flex w-1/2 justify-between pt-8">
            <Wrap direction="column">
              <h1 className="text-xl text-onyx-black font-bold">
                Destinations
              </h1>
              {destinations.map((item, index) => {
                return (
                  <p key={index} className="text-lg text-old-silver">
                    {item}
                  </p>
                );
              })}
            </Wrap>

            <Wrap direction="column">
              <h1 className="text-xl text-onyx-black font-bold">Vehicle</h1>
              {vehicles.map((item, index) => {
                return (
                  <p key={index} className="text-lg text-old-silver">
                    {item}
                  </p>
                );
              })}
            </Wrap>

            <Wrap direction="column">
              <h1 className="text-xl text-onyx-black font-bold">Interests</h1>
              {interests.map((item, index) => {
                return (
                  <p key={index} className="text-lg text-old-silver">
                    {item}
                  </p>
                );
              })}
            </Wrap>
          </div>
        </div>

        <div className="pt-6 w-full flex justify-center">
          <Wrap>
            <IconButton
              variant="unstyled"
              icon={<Icon as={FaTwitter} w={6} h={6} />}
            />
            <IconButton
              variant="unstyled"
              icon={<Icon as={FaFacebookF} w={6} h={6} />}
            />
            <IconButton
              variant="unstyled"
              icon={<Icon as={FaInstagram} w={6} h={6} />}
            />
            <IconButton
              variant="unstyled"
              icon={<Icon as={FaLinkedinIn} w={6} h={6} />}
            />
            <IconButton
              variant="unstyled"
              icon={<Icon as={FaYoutube} w={6} h={6} />}
            />
          </Wrap>
        </div>
      </footer>
    </section>
  );
};

export default Footer;
