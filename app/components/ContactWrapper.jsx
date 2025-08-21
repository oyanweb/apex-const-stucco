// app/components/ContactWrapper.jsx
"use client";

import dynamic from "next/dynamic";

const Contact = dynamic(() => import("./Contact"), {
  ssr: false,
  loading: () => <div style={{ height: 300 }} />,
});

export default function ContactWrapper() {
  return <Contact />;
}
