import { Spinner } from "@chakra-ui/react";

const Loading = () => {
  return (
    <>
      <div className="fixed inset-0" style={{ zIndex: "99999" }}>
        <div className="w-full h-full bg-wrap-loading flex justify-center items-center">
          <Spinner speed="0.65s" color="orange.500" size="xl" />
        </div>
      </div>
    </>
  );
};

export default Loading;
