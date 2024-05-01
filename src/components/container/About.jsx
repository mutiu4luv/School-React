import React from "react";
import about from "../../assets/About.jpg";

const About = () => {
  const typewriterElement = document.getElementById("typewriter-text");

  // Your typewriter animation logic here (replace with your actual implementation)
  function typeWriter() {
    const text = typewriterElement;
    let i = 0;
    let speed = 50; // Adjust typing speed here (milliseconds)

    const type = () => {
      if (i < text) {
        typewriterElement += text.charAt(i);
        i++;
        setTimeout(type, speed);
      } else {
        // Add logic for pausing, backspacing, or other effects here (optional)
      }
    };

    type();
  }

  typeWriter(); // Call t

  return (
    <div className="section" id="about">
      <div className="grid md:grid-cols-2 gap-8 place-items-center">
        <div className="border-[3px] border-solid border-Teal rounded-lg">
          <img src={about} alt="" className="p-4" />
        </div>

        <div className="flex flex-col items-center">
          <div className="flex flex-col items-center">
            <div class="font-bold text-red-500 mb-5">
              {" "}
              <span id="typewriter-text">
                {" "}
                We provide the <br /> best{" "}
                <span className="text-Teal">online courses</span>
              </span>
            </div>
            {/* Rest of your code remains the same */}
          </div>

          <p className="text-sm text-gray leading-7 mb-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Repudiandae, totam earum. Minus deleniti repellat id! Ratione quia
            eum, explicabo quos eos magni vel corporis voluptatibus, inventore
            doloremque aliquam pariatur recusandae.
          </p>
          <button className="py-3 px-6 text-sm hover:bg-red-500 hover:text-black border border-solid border-gray rounded-lg font-bold">
            Know More
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
