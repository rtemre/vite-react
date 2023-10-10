import { FC, useEffect, useState } from "react";

interface Props {
  title?: string;
  input: string[];
  startGenerating?: boolean;
  titleType?: string;
  evenTitles?: boolean;
  textClassName?: string;
}
const wordTimeout = 200;

const AiTextGenerator: FC<Props> = ({
  title,
  input,
  startGenerating,
  //   titleType = '',
  evenTitles,
  //   textClassName,
}) => {
  const [loading, setLoading] = useState(true);
  const [result, setResult] = useState(new Array(input.length).fill([]));

  const isEven = (n: number) => {
    return n === 0 || n % 2 === 0;
  };

  const textLoad = (text: string[], index: number, existing: string[]) => {
    if (text.length === 0) {
      if (index === input.length - 1) setLoading(false);
      return;
    }
    setTimeout(() => {
      setResult((prev) => {
        if (existing.length) existing.push(" ");
        existing.push(text.shift() || "");
        textLoad(text, index, existing);
        prev[index] = existing;
        return [...prev];
      });
    }, wordTimeout);
  };

  const gptLoad = (index = 0, timeout = 0) => {
    if (index >= input.length) return;
    setTimeout(() => {
      const text = input[index].split(" ");
      textLoad(text, index, []);
      gptLoad(index + 1, (text.length * wordTimeout) / 4);
    }, timeout);
  };

  useEffect(() => {
    if (startGenerating) gptLoad();
    console.log("loading", loading);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [startGenerating]);

  return (
    <div className="flex flex-col gap-2 px-default">
      <h4>
        {title}
        {/* {loading && (
          <Loader
            testId="loader"
            className="ml-default animate-spin h-4 w-4 fill-black-500 stroke-gray-500"
          />
        )} */}
      </h4>
      <div className="flex flex-col py-default">
        {result.map((data, index) => {
          if (evenTitles && isEven(index)) return <h4 key={index}>{data}</h4>;
          return <h4 key={index}>{data}</h4>;
        })}
      </div>
    </div>
  );
};

export default AiTextGenerator;
