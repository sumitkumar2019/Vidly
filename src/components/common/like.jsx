import React from "react";
//stateless function component: controlled
//input: liked
//onClick: liked=true: event raised
//font-awesome: like = true then class changed
//font-awesome: like = false then class changed
function Like({ liked, onClick }) {
  let classes = "clickable fa fa-heart";
  return (
    <i
      className={liked ? classes : classes + "-o"}
      aria-hidden="true"
      onClick={onClick}
    ></i>
  );
}

export default Like;
