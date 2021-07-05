import React from "react";

export default function Header() {
  return (
    <header>
      <div className="header-inner">
        <div className="logo">Powerhouse Performance.</div>
        <nav>
          <ul>
            <li>
              <a href="/">Services</a>
            </li>
            <li>
              <a href="/">Awards</a>
            </li>
            <li>
              <a href="/">Team</a>
            </li>
            <li>
              <a href="/">Blog</a>
            </li>
            <li className="btn">
              <a href="/">Hire Us</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
