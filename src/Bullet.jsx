import React from "react";
import { Icon } from "@iconify/react";
import style from "./Bullet.module.css";

const Bullet = () => {
  const bulletPoint = "material-symbols:circle-outline";
  const penIcon = "fluent:pen-sparkle-32-regular";
  const trashIcon = "ant-design:delete-outlined";
  return (
    <div className={style.bullet}>
      <span>
        <Icon
          icon={bulletPoint}
          style={{ color: "#414141", width: "0.75rem", height: "0.75rem" }}
        ></Icon>
      </span>
      <input type="text" />
      <span>
        <Icon
          icon={penIcon}
          style={{ color: "#5B7FFF", width: "1.63894rem", height: "1.8125rem" }}
        ></Icon>
      </span>
      <span>
        <Icon
          icon={trashIcon}
          style={{ color: "#5B7FFF", width: "1.63894rem", height: "1.8125rem" }}
        ></Icon>
      </span>
    </div>
  );
};

export default Bullet;
