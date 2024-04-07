import React from "react";
import './Footer.css'

export default function Footer() {
  return (
    <div className="footerparent">
      <div className="container">
        <footer className="d-flex flex-wrap justify-content-center align-items-center ">
          <div className="col-md-4 d-flex align-items-center justify-content-center py-3 my-5 border-top">
            <span className="text-muted">
              © 2024 Star Wars Duniya by Ayan Raza
            </span>
          </div>
        </footer>
      </div>
    </div>
  );
}
