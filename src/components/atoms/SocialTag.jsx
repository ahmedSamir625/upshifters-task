import React from "react";
import facebook from "../../assets/social-icons/facebook.svg";
import instagram from "../../assets/social-icons/instagram.svg";
import tiktok from "../../assets/social-icons/tiktok.svg";

const SocialTag = ({ platform }) => {
  const getIcon = () => {
    switch (platform) {
      case "facebook":
        return { img: facebook, color: "#EBF4FF" };
      case "instagram":
        return { img: instagram, color: "#FFF2F2" };
      case "tiktok":
        return { img: tiktok, color: "#F2F2F2" };
    }
  };

  const { img, color } = getIcon(platform);

  return (
    <>
      {platform && (
        <div className={`h-8 w-8 p-2 rounded-full`} style={{ backgroundColor: color }}>
          <img src={img} alt="icon" />
        </div>
      )}
    </>
  );
};

export default SocialTag;
