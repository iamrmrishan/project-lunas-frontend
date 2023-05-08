import React from "react";

function NetworkQuestions() {
  const questions = [
    {
      pic: "https://picsum.photos/20",
      question: "This is a question",
    },
    {
      pic: "https://picsum.photos/20",
      question: "This is a question",
    },
    {
      pic: "https://picsum.photos/20",
      question: "This is a question",
    },
    {
      pic: "https://picsum.photos/20",
      question: "This is a question",
    },
    {
      pic: "https://picsum.photos/20",
      question: "This is a question",
    },
    {
      pic: "https://picsum.photos/20",
      question: "This is a question",
    },
  ];
  return (
    <div className="border dark:border-opacity-10 rounded px-10 py-5">
      <h1 className="text-lg font-semibold mb-5 text-primaryText dark:text-secondaryText">Hot Network Questions</h1>
      {questions.map((item) => (
        <div className="flex flex-row items-center">
          <div className="mr-5 my-1.5">
            <img src={item.pic} alt="pic" className="rounded-full" />
          </div>
          <div className=" text-sm text-primaryText dark:text-secondaryText hover:text-primaryText dark:hover:text-secondaryText cursor-pointer text-opacity-80 dark:text-opacity-80">{item.question}</div>
        </div>
      ))}
    </div>
  );
}

export default NetworkQuestions;
