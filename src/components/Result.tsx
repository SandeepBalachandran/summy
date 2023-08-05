import React from "react";
import Image from "next/image";
import Loader from "./Loader";
type Props = {
  isFetching: any;
  error: any;
  article: any;
};

const Result = ({ isFetching, error, article }: Props) => {
  return (
    <>
      <div className="flex items-center justify-center max-w-full my-10">
        {isFetching ? (
          //   <Image src="/assets/loader.svg" width={30} height={30} alt="logo" className="object-contain w-20 h-20" />
         <Loader/>
        ) : error ? (
          <p className="font-bold text-center text-black font-inter">
            Well, that was not supposed to happen...
            <br />
            <span className="font-normal text-gray-700 font-satoshi">{error?.data?.error}</span>
          </p>
        ) : (
          article?.summary && (
            <div className="flex flex-col gap-3">
              <h2 className="text-xl font-bold text-gray-600 font-satoshi">
                Article <span className="blue_gradient">Summary</span>
              </h2>
              <div className="p-3 overflow-auto summary_box max-h-80">
                <p className="text-sm font-medium text-gray-700 font-inter">{article?.summary}</p>
              </div>
            </div>
          )
        )}
      </div>
    </>
  );
};

export default Result;
