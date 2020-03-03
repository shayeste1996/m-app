import React from "react";

const Navbar = () => {
  return (
    <section>
      <nav>
        <div>
          <img src="/Assests/Images/logo.png" alt="logo" />
        </div>
        <div>
          <ul>
            <li>
              <a href="#">home</a>
            </li>
            <li>
              <a href="#">feature</a>
            </li>
            <li>
              <a href="#">gallery</a>
            </li>
            <li>
              <a href="#">video</a>
            </li>
            <li>
              <a href="#">prices</a>
            </li>
            <li>
              <a href="#">testimonial</a>
            </li>
            <li>
              <a href="#">download</a>
            </li>
            <li>
              <a href="#">contact</a>
            </li>
          </ul>
        </div>
      </nav>
      <div>
        <div>
          <h1>Simple, Beautiful and Amazing</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim vel
            ea sed ducimus reprehenderit corrupti quae ipsa, ipsam suscipit{" "}
          </p>
          <div>
            <div>
              <Button btn="BtnBlue">learn more</Button>
            </div>
            <div className="colMd6 nopadding">
              <Button btn="BtnOutline">download</Button>
            </div>
          </div>
          <div>
            <div>
              <p>Available on :</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
