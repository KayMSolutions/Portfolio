import React from "react";

export default function Footer() {
  return (
    <footer className="site-footer">
        <p>Developed by Kaylie Moskal</p>
        <p>© {new Date().getFullYear()} KM</p>
    </footer>
  );
}