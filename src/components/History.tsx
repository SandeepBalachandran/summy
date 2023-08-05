"use client";
import React from "react";
import { v4 as uuidv4 } from "uuid";
import { BiCopy } from "react-icons/bi";
import { AiOutlineDelete } from "react-icons/ai";


type Article = {
  url: string;
  summary: string;
};

type Props = {
  allArticles: Article[];
  setArticle: (article: Article) => void;
  copied: string;
  handleCopy: any;
  deleteItem:any;
};

const History = (props: Props) => {
  return (
    <div className="flex flex-col gap-1 overflow-y-auto max-h-60">
      {props.allArticles.map((ele: Article, index: number) => (
        <div key={uuidv4()}  className="flex justify-between link_card" >
          <div className="copy_btn" onClick={() => props.handleCopy(ele.url)}>
            <BiCopy className="object-contain w-[40%] h-[40%]" />
          </div>
          <p className="flex-1 text-sm font-medium text-blue-700 truncate font-satoshi" onClick={() => props.setArticle(ele)}>{ele.url}</p>
          <div className="z-50 text-red-700 delete_btn" onClick={() => props.deleteItem(ele.url)}>
            <AiOutlineDelete className="object-contain w-[40%] h-[40%]" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default History;
