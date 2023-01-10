import { ButtonArrow, Cards, Modals, Buttons } from "@/components";

import { Wrap } from "@chakra-ui/react";
import { useState } from "react";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";

import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from "@chakra-ui/react";

const VehicleList = ({ title, children, viewAll }) => {
  const router = useRouter();

  const [modal, setModal] = useState(false);
  // const vehicleData = useSelector((state) => state.vehicles);

  const handleModal = () => {
    return setModal(!modal);
  };

  // const handleNavigate = (href) => {
  //   return router.push(href);
  // };
  return (
    <>
      <section>
        <section className="mt-20">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold">{title || "Your title"}</h1>
            <ButtonArrow onClick={viewAll} text="View all" />
          </div>

          <Wrap className="mt-10" justify="space-between" spacing="30px">
            {children}
          </Wrap>
        </section>

        <Modals
          isOpen={modal}
          title={title || "Your title"}
          onClose={handleModal}
        >
          <div className="mb-5">
            <TableContainer>
              <Table>
                <Thead>
                  <Tr>
                    <Th>Vehicle</Th>
                    <Th>Location</Th>
                    <Th></Th>
                  </Tr>
                </Thead>

                <Tbody>
                  <Tr>
                    <Td>Lamborgini</Td>
                    <Td>Jakarta</Td>
                    <Td>
                      <Buttons className="py-2 px-4" text="Detail" />
                    </Td>
                  </Tr>
                </Tbody>
              </Table>
            </TableContainer>
          </div>
        </Modals>
      </section>
    </>
  );
};

export default VehicleList;
