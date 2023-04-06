import { Box } from "@chakra-ui/react";

const Buttons = ({
  text,
  variant,
  className,
  color,
  textColor,
  onClick,
  textEdit,
  type,
}) => {
  return (
    <Box
      className={`rounded-lg ${
        variant === "outline"
          ? `border border-${color || "crayola-orange"}`
          : ""
      } ${className}`}
      as="button"
      bg={variant === "outline" ? "" : color || "#FFCD61"}
      onClick={onClick}
      type={type}
    >
      <p className={`text-${textColor} ${textEdit}`}>{text}</p>
    </Box>
  );
};

export default Buttons;
