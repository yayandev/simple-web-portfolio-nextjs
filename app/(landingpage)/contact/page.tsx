import FormContact from "@/components/FormContact";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Yayan Faturrohman - Contact",
};

const PageContact = () => {
  return (
    <>
      <FormContact />
    </>
  );
};

export default PageContact;
