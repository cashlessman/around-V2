import { ImageResponse } from "next/og";

export const alt = "See who joined Around you";
export const size = {
  width: 600,
  height: 400,
};

export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div tw="h-full w-full flex flex-col justify-center items-center relative bg-white">
        <h3 tw="text-3xl">See who joined Around you</h3>
        <h3 tw="text-3xl">Around you</h3>

      </div>
    ),
    {
      ...size,
    },
  );
}
