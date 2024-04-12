// Bu dosyayı değiştirmenize gerek yok
import React from "react";

const Yorum = (props) => {
  // 🔥 Bu bileşenin parentının aşağıdaki propları düzgün gönderdiğinden emin olun.
  const { yorum } = props;
  const { username, text } = yorum;

  return (
    <div className="comment-text">
      <span className="user">{username}</span>{" "}
      <span className="comment">{text}</span>
    </div>
  );
};

export default Yorum;
