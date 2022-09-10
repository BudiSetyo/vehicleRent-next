import { ButtonArrow, Cards, Modals, Buttons } from "@/components";

import { Wrap } from "@chakra-ui/react";
import { useState } from "react";

import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from "@chakra-ui/react";

const Cars = () => {
  const [modal, setModal] = useState(false);

  const handleModal = () => {
    return setModal(!modal);
  };

  return (
    <section>
      <section className="mt-20">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold">Cars</h1>
          <ButtonArrow onClick={handleModal} text="View all" />
        </div>

        <Wrap className="mt-10" justify="space-between" spacing="30px">
          <Cards />
          <Cards />
          <Cards />
          <Cards />
        </Wrap>
      </section>

      <Modals isOpen={modal} title="Cars" onClose={handleModal}>
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
  );
};

export default Cars;
