import React, { useState } from "react";
import axios from "axios";

const NewPost = ({ userId }) => {
  const [message, setMessage] = useState("");

  const handleForm = (e) => {
    e.preventDefault();

    axios.post("http://localhost:5000/post/", {
      message,
      author: userId,
    });
    setMessage("");
  };

  return (
    <form onSubmit={(e) => handleForm(e)} className="new-post-container">
      <textarea
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Quoi de neuf ?"
        value={message}
      ></textarea>
      <input type="submit" value="Envoyer" />
    </form>
  );
};
export default NewPost;
