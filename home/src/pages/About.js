import React from "react";

const myHobbies = [
  {
    src: "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/325/bicycle_1f6b2.png",
    text: "fährt gerne Rennvelo.",
    altText: "bicycle",
  },
  {
    src: "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/apple/325/laptop_1f4bb.png",
    text: "arbeitet neu bei smartive.",
    altText: "notebook",
  },
  {
    src: "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/325/mountain_26f0-fe0f.png",
    text: "ist gerne in den Bergen",
    altText: "mountain",
  },
  {
    src: "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/325/hot-beverage_2615.png",
    altText: "coffee",
    text: "trinkt gerne Espresso.",
  },
];

const cv = [
  {
    yearStart: "2022",
    yearEnd: " ",
    work: "Software Engineering Praktikum bei smartive AG",
  },
  {
    yearStart: "2021",
    yearEnd: " 2022",
    work: "Business Analyst in der Trade Finance Abteilung bei Credit Suisse AG",
  },
  {
    yearStart: "2020",
    yearEnd: " 2021",
    work: "Projekt Management Praktikum in der Corporate Banking Products Abteilung bei Credit Suisse AG",
  },
  {
    yearStart: "2016",
    yearEnd: " 2020",
    work: "Bachelor Studium - Wirtschaftsinformatik an der Züricher Hochschule für angewandte Wissenschaften",
  },
];

function Home() {
  return (
    <div className="flex flex-col h-full bg-slate-300 items-center">
      <div className=" text-6xl pt-24 pb-20 bg-slate-300">
        about me. &#x1F64B;&#x1F3FB;
      </div>
      <div className=" mb-12 ml-10 text-xl w-[500px] bg-slate-300">
        {cv.map((element) => {
          return (
            <div className="mb-5">
              <div className="font-bold">
                {element.yearStart} -
                {element.yearEnd === "" ? "" : element.yearEnd}
              </div>{" "}
              <div> {element.work}</div>
            </div>
          );
        })}
      </div>

      <div className="flex flex-row justify-around w-full mt-20 p-16 bg-slate-100 ">
        {myHobbies.map((element) => {
          return (
            <div className="flex flex-col items-center content-center">
              <img
                className="mb-2"
                width={"100px"}
                src={element.src}
                alt="mountain"
              />
              <p className="mt-2">{element.text}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Home;
