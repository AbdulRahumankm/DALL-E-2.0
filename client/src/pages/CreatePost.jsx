import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { preview } from "../assets";
/*  import { getRendomPrompt } from "../utils"; */
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

  return (
    <section className="max-w-7xl">
      <div>
        <h1 className="font-extrabold text-[#222328]">
          Create
        </h1>
        <p className="mt-2 text-[#666e75] text-[14px] max-w-[500px]">
          Create imaginative and visually stunning
          images through DALL-E AI and share them with the Community
        </p>
      </div>
    </section>
  );
};

export default CreatePost;
