import React from "react";

export default function Footer() {
    const d=new Date();
  return <footer><p>© {d.getFullYear()} Aldin Velić. All rights reserved.</p></footer>;
}
