import { Button, WrapItem } from "@chakra-ui/react";

const Buttons = ({ text, variant, className, color, textColor }) => {
  return (
    <>
      <div>
        <Button variant="outline" colorScheme="yellow">
          <h1 className={`text-${textColor}`}>{text}</h1>
        </Button>
      </div>
    </>
  );
};

export default Buttons;
