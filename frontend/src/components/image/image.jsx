import { IKImage } from "imagekitio-react";

export default function Images({ path, h, w, onclick, color, className }) {
  return (
    <IKImage
      urlEndpoint={import.meta.env.VITE_IK_URL_ENDPOINT}
      path={path}
      transformation={[
        {
          height: h,
          width: w,
        },
      ]}
      style={{ height: h, width: w }}
      onClick={onclick}
      color={color}
      className={className}
    />
  );
}
