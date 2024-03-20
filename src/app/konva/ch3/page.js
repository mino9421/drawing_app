"use client";
import dynamic from "next/dynamic";

const ColorChanger = dynamic(() => import("../../../components/ColorChanger"), {
  ssr: false,
});

export default function Page(props) {
  return <h1>the page was deprecated- WIP</h1>;
  // <ColorChanger />;
}
