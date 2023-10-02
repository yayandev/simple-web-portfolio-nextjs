import FormAddProject from "@/components/FormAddProject";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Add Projects",
};

const PageProjects = () => {
  return (
    <section className="my-3 w-full border p-3">
      <FormAddProject />
    </section>
  );
};

export default PageProjects;
