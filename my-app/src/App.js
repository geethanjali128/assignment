import { faAngleRight, faDroplet } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import anime from "animejs";
import React, { useRef } from "react";

// dummy data
const data = [
  {
    title: "Emergency Plumbing Services",
    description:
      "Our plumbers are ready to go 24/7  for emergencies-including nights,weekends and holidays.",
    more: "EXPLORE THE SERVICE",
  },
  {
    title: "Plumbing and Drains",
    description:
      "As the largest plumbing and drain service company ,we make thousands of repairs every day.",
    more: "EXPLORE THE SERVICE",
  },
  {
    title: "Water Damage",
    description:
      "Our teams are equipped with state-of-the-art water extraction and cleanup equipment.",
    more: "EXPLORE THE SERVICE",
  },
  {
    title: "Water Heaters",
    description:
      "Trust Roto-Rooter for repair and replacement of gas , electric and tankless water heaters.",
    more: "EXPLORE THE SERVICE",
  },
];
function App() {
  // Creating a ref array to store individual refs for each card
  const cardRefs = useRef([]);

  const handleMouseOver = (index) => {
    anime({
      targets: cardRefs.current[index], // Accessing the specific card by index
      rotate: "1turn", // 1 turn = 360 degrees
      duration: 1000,
      easing: "easeInOutSine",
      complete: () => {
        // Reset rotation after the animation completes
        anime({
          targets: cardRefs.current[index],
          rotate: 0, // Reset to 0 degrees
          duration: 0, // Immediately reset
        });
      },
    });
  };
  return (
    <div
      id="assignment"
      className="bg-gradient-to-br from-indigo-900 to-gray-200 mt-20 mx-1 rounded-sm "
    >
      <h4 className="text-white text-4xl pt-3 ml-24 font-semibold">
        OUR SERVICES
      </h4>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 pb-8 mt-8 mx-24 ">
        {data.map((dataItem, index) => (
          <div key={dataItem.title} className=" w-64   mt-3   relative">
            <FontAwesomeIcon
              icon={faDroplet}
              className=" absolute z-10 left-[85px] -top-6 bg-white w-4 p-5 rounded-full border-2 border-solid border-indigo-900 "
            />
            <div
              ref={(el) => (cardRefs.current[index] = el)}
              className=" relative px-5 p-8 h-64  cursor-pointer bg-white rounded-sm shadow-xl"
              onMouseOver={() => handleMouseOver(index)}
            >
              <h6 className="my-3 text-center font-bold text-gray-700">
                {dataItem.title}
              </h6>
              <p className="mb-3 text-sm text-gray-500 font-semibold px-2">
                {dataItem.description}
              </p>
              <span className="text-blue-900 font-bold ">
                {dataItem.more}
                <FontAwesomeIcon
                  icon={faAngleRight}
                  className="text-blue-900"
                />
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
