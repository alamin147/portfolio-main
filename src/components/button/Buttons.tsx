import { Button } from "flowbite-react";

const Buttons = ({ text }: { text: string }) => {
  return (
    <>
      <Button className="me-2 bg-gradient-to-r from-indigo-950 to-indigo-800 border-0 py-1 px-3 font-bold hover:bg-gradient-to-r hover:from-indigo-800 hover:to-indigo-950 transition duration-200 ease-in-out rounded-full">
        {text}
      </Button>
    </>
  );
};
export default Buttons;
