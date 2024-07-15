import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { preview } from "../assets";
import { getRendomPrompt } from "../utils";
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

  return <div>CreatePost</div>;
};

export default CreatePost;
