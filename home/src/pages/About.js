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
    text: "arbeitet neu bei smartive.",
  },
];

const cv = [
  {
    yearStart: "2022",
    yearEnd: "",
    work: "Software Engineering Praktikum bei smartive AG",
  },
  {
    yearStart: "2022",
    yearEnd: "2021",
    work: "Business Analyst in der Trade Finance Abteilung bei Credit Suisse AG",
  },
  {
    yearStart: "2021",
    yearEnd: "2020",
    work: "Projekt Management Praktikum in der Corporate Banking Products Abteilung bei Credit Suisse AG",
  },
  {
    yearStart: "2020",
    yearEnd: "2016",
    work: "Bachelor Studium - Wirtschaftsinformatik an der Züricher Hochschule für angewandte Wissenschaften",
  },
];

function Home() {
  return (
    <div className="flex flex-col h-screen bg-slate-300 items-center">
      <div className=" text-6xl pt-10 pb-20 ">about me. &#x1F64B;&#x1F3FB;</div>
      <div className="ml-10 text-lg w-[500px] pb-10">
        {cv.map((element) => {
          return (
            <div className="">
              <div className="font-bold">
                {element.yearStart} -
                {element.yearEnd === "" ? "" : element.yearEnd}
              </div>{" "}
              <div> {element.work}</div>
            </div>
          );
        })}
      </div>

      <div className="flex flex-row justify-around w-full mt-20 ">
        {myHobbies.map((element) => {
          return (
            <div className="flex flex-col">
              <img width={"100px"} src={element.src} alt="mountain" />
              <p className="mt-2">{element.text}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Home;
