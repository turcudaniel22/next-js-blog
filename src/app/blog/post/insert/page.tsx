"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { v4 as uuidv4 } from "uuid";
import { User } from "@/app/lib/definition";
import { getSession } from "next-auth/react";

export default function Page() {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);
  const [formData, setFormData] = useState({
    id: "",
    title: "",
    content: "",
    date: new Date().toISOString().slice(0, 10),
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const uuid = uuidv4();
    fetch(
      `/api/posts?id=${uuid}&title=${formData.title}&author=${user?.name}&content=${formData.content}&date=${formData.date}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...formData, id: uuid }),
      }
    )
      .then(() => {
        // Clear form fields
        setFormData({
          id: "",
          title: "",
          content: "",
          date: "",
        });
        router.push("/blog/posts");
      })
      .catch(console.error);
  };

  useEffect(() => {
    console.log("API KEY", process.env.OPENAI_API_KEY);
    getSession().then((session) => {
      setUser(session?.user || null);
      if (!session?.user) {
        router.push("/blog/posts");
      }
    });
  });

  return (
    <div className=" shadow-lg p-8 rounded shadow">
      <h2 className="text-2xl mb-4 text-purple-700">New Blog Post</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label
            htmlFor="title"
            className="block font-medium  border-b-gray-900"
          >
            Title:
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="w-full border-2  p-2 rounded-md focus:border-purple-800 focus:outline-none text-black    border-purple-500 "
          />
        </div>
        <div>
          <label htmlFor="content" className="block font-medium">
            Content:
          </label>
          <textarea
            id="content"
            name="content"
            rows={4}
            value={formData.content}
            onChange={handleChange}
            className="w-full border-2 border-purple-500 p-2 rounded-md focus:border-purple-200 focus:outline-none text-black"
          ></textarea>
        </div>
        <div>
          <label htmlFor="date" className="block font-medium">
            Date:
          </label>
          <input
            type="text"
            id="date"
            name="date"
            value={formData.date}
            readOnly
            className="w-full border-2 border-purple-500 p-2 rounded-md focus:border-purple-200 focus:outline-none text-black"
          />
        </div>
        <div>
          <button
            type="submit"
            className="bg-purple-950 text-white px-4 py-2 rounded-md bg-purple-600  hover:bg-purple-500"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
