import React from "react";

type Props = {
  height?: string;
  className?: string;
  children: any;
};

const Card = (props: Props) => {
  const classs = ["card"];

  if (props.className) {
    classs.push(props.className);
  }

  const height = props.height ? props.height : "auto";

  return (
    <div className={classs.join(" ")} style={{ height: height }}>
      {props.children}
    </div>
  );
};

export default Card;
