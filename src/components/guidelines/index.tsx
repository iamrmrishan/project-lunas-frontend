import React from 'react';

interface Step {
  title: string;
  description: string;
}

interface GuidelinesProps {
  topic: string;
  steps: Step[];
}

const Guidelines: React.FC<GuidelinesProps> = ({ topic, steps }) => {
  return (
    <div className="bg-white p-4 rounded shadow dark:bg-black">
      <h2 className="text-4xl font-bold mb-4 dark:text-white">{topic}</h2>
      <ul className="divide-y divide-black dark:divide-white">
        {steps.map((step, index) => (
          <li key={index} className="py-2 flex">
            <span className="mr-2 font-semibold text-white bg-black rounded-full w-6 h-6 flex items-center justify-center dark:text-black dark:bg-white">
              {index + 1}
            </span>
            <div>
              <h3 className="font-bold text-xl mb-1 dark:text-white">
                {step.title}
              </h3>
              <span className="dark:text-white font-semibold">
                {step.description}
              </span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Guidelines;
