import React from "react";

type Props = {
  className?: string;
  children: any;
};

const Card = (props: Props) => {
  const classs = ["card"];

  if (props.className) {
    classs.push(props.className);
  }

  return <div className={classs.join(" ")}>{props.children}</div>;
};

export default Card;
