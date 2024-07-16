import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { preview } from "../assets";
import { getRandomPrompt } from "../utils";
import { FormField, Loader } from "../components";

const CreatePost = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    prompt: "",
    photo: "",
  });
  const [genertingImg, setGeneratingImg] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = () => {};

  const handleChange = (e) => {};

  const handleSurpriseMe = () => {};

  return (
    <section className="max-w-7xl">
      <div>
        <h1 className="font-extrabold text-[#222328]">Create</h1>
        <p className="mt-2 text-[#666e75] text-[14px] max-w-[500px]">
          Create imaginative and visually stunning images through DALL-E AI and
          share them with the Community
        </p>
      </div>
      <section>
        <form className="mt-16 max-w-3xl" onSubmit={handleSubmit}>
          <div className="flex flex-col gap-5">
            <FormField
              labalName="Your name"
              type="text"
              name="name"
              placeholder="e.g abdul rahuman"
              value={form.name}
              handleChange={handleChange}
            />
          </div>
          <div className="flex flex-col gap-5">
            <FormField
              labalName="Prompt"
              type="text"
              name="Prompt"
              placeholder="a pencil and watercolor drawing of a bright city in the future with flying cars"
              value={form.prompt}
              handleChange={handleChange}
              isSurpriseMe
              handleSurpriseMe={handleSurpriseMe}
            />
          </div>
        </form>
      </section>
    </section>
  );
};

export default CreatePost;
