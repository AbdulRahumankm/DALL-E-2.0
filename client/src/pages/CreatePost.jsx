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

  const generateImage = () => {};

  const handleSubmit = () => {};

  const handleChange = (e) => {
    setForm({...form,[e.target.name ]: e.target.value})
  };

  const handleSurpriseMe = () => {
    const randomPromot = getRandomPrompt(form.prompt)
    setForm({...form, prompt: randomPromot})
  };

  return (
    <section className="max-w-3xl mx-auto">
      <div>
        <h1 className="font-extrabold text-[#222328] text-[32px]">Create</h1>
        <p className="mt-2 text-[#666e75] text-[14px] max-w-[500px]">
          Create imaginative and visually stunning images through DALL-E AI and
          share them with the Community
        </p>
      </div>
      <section>
        <form className="mt-10 max-w-3xl" onSubmit={handleSubmit}>
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
            <div className="relative bg-gray-50 border border-grey-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-64 p-3 h-64 flex justify-center items-center">
              {form.photo ? (
                <img
                  src={form.photo}
                  alt={form.prompt}
                  className="w-full h-full object-contain"
                />
              ) : (
                <img
                  src={preview}
                  alt="preview"
                  className="w-9/12 h-9/12 object-contain opacity-40"
                />
              )}
              {genertingImg && (
                <div className="absolute inset-0 z-0 flex justify-center items-center bg-[rgba(0,0,0,0.5)] rounded-lg">
                  <Loader />
                </div>
              )}
            </div>
          </div>
          <div className="mt-5 flex gap-5d">
            <button
              type="button"
              onClick={generateImage}
              className="text-white bg-green-700 font-medium rounded-md text-sm px-5 py-2.5 text-center w-full sm:w-auto"
            >
              {genertingImg ? "Generating..." : "Generate"}
            </button>
          
          </div>
          <div className="mt-10">
                <p className="mt-2 text-[#666e75] text-[14px]">Once you have created the image you want, you can share it with others in the Community</p>
                <button
                type="submit"
                className="text-white bg-[#6469ff] font-medium rounded-md text-sm px-5 py-2.5 text-center w-full sm:w-auto mt-3"
                >
                    {loading ? 'Sharing...' : 'Share with the community'}
                </button>
            </div>
        </form>
      </section>
    </section>
  );
};

export default CreatePost;
