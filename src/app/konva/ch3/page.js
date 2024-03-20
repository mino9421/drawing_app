"use client";
import dynamic from "next/dynamic";

const ColorChanger = dynamic(() => import("../../../components/ColorChanger"), {
  ssr: false,
});

export default function Page(props) {
  return <ColorChanger />;
}
