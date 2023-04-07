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
  disabled,
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
      disabled={disabled || false}
    >
      <p className={`text-${textColor} ${textEdit}`}>{text}</p>
    </Box>
  );
};

export default Buttons;
