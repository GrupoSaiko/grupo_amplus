import Link from "next/link";
import React from "react";

export default function NotFouned() {
  return (
    <div className="error404">
      <div className="error404Message">
        <p>Ooops, no se puede mostrar la página que solicitaste ＞﹏＜</p>
        <Link href={"/"}>Regresa aquí</Link>
      </div>
    </div>
  );
}
