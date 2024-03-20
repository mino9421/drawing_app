"use client";
import dynamic from "next/dynamic";

const Drawing = dynamic(() => import("../../../components/Drawing"), {
  ssr: false,
});

export default function Page(props) {
  return <Drawing />;
}
