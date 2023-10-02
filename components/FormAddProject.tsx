"use client";

import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { SyntheticEvent, useState } from "react";

const FormAddProject = () => {
  const [file, setFile] = useState(null);
  const [demo, setDemo] = useState("");
  const [code, setCode] = useState("");
  const [title, setTitle] = useState("");
  const [descriptin, setDescription] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();
    setIsLoading(true);

    let formData = new FormData();

    formData.append("name", title);
    formData.append("demo", demo);
    formData.append("code", code);
    formData.append("description", descriptin);
    formData.append("file", file!);

    const res = await axios.post("/api/projects", formData);

    if (res.data.success) {
      router.push("/projects");
    } else {
      setError(res.data.message);
    }
    setIsLoading(false);
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile: any = e.target.files?.[0] || null;

    if (selectedFile) {
      setFile(selectedFile);
    }
  };

  return (
    <form className="w-full space-y-5" onSubmit={handleSubmit}>
      <div>
        <Link href="/projects" className="p-2 rounded bg-slate-900 text-white">
          Back
        </Link>
      </div>
      <input
        type="text"
        required
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="p-3 w-full border focus:outline-none"
        placeholder="Title"
      />
      <input
        type="url"
        required
        value={demo}
        onChange={(e) => setDemo(e.target.value)}
        className="p-3 w-full border focus:outline-none"
        placeholder="Link demo"
      />
      <input
        type="url"
        required
        value={code}
        onChange={(e) => setCode(e.target.value)}
        className="p-3 w-full border focus:outline-none"
        placeholder="Link code"
      />
      <input
        type="file"
        required
        onChange={handleImageChange}
        className="p-3 w-full border focus:outline-none"
      />
      <textarea
        rows={5}
        value={descriptin}
        onChange={(e) => setDescription(e.target.value)}
        className="p-3 w-full border focus:outline-none"
        placeholder="Description"
      ></textarea>
      <button
        disabled={isLoading}
        type="submit"
        className="p-3 bg-slate-900 text-white disabled:bg-slate-700"
      >
        {isLoading ? "Submiting..." : "Submit"}
      </button>
    </form>
  );
};

export default FormAddProject;
