"use client";

import React from "react";
import { type Editor } from "@tiptap/react";
import {
  Bold,
  Strikethrough,
  Italic,
  List,
  ListOrdered,
  Heading2,
  Underline,
  Quote,
  Undo,
  Redo,
  Code,
} from "lucide-react";

type Props = {
  editor: Editor | null;
  content: string;
};

const Toolbar = ({ editor, content }: Props) => {
  if (!editor) {
    return null;
  }
  return (
    <div
      className="px-4 py-3 rounded-tl-md rounded-tr-md flex justify-between items-start
    gap-5 w-full bg-[#F0F0F0] flex-wrap border border-[#F0F0F0]"
    >
      <div className="flex justify-start items-center gap-5 w-full lg:w-full flex-wrap">
        <button
          onClick={(e) => {
            e.preventDefault();
            editor.chain().focus().toggleBold().run();
          }}
          className={
            editor.isActive("bold")
              ? "bg-[#38589C] text-white p-2 rounded-lg"
              : "text-black hover:bg-[#38589C] hover:text-white p-1 hover:rounded-lg"
          }
        >
          <Bold className="w-5 h-5" />
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            editor.chain().focus().toggleItalic().run();
          }}
          className={
            editor.isActive("italic")
              ? "bg-[#38589C] text-white p-2 rounded-lg"
              : "text-black hover:bg-[#38589C] hover:text-white p-1 hover:rounded-lg"
          }
        >
          <Italic className="w-5 h-5" />
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            editor.chain().focus().toggleUnderline().run();
          }}
          className={
            editor.isActive("underline")
              ? "bg-[#38589C] text-white p-2 rounded-lg"
              : "text-black hover:bg-[#38589C] hover:text-white p-1 hover:rounded-lg"
          }
        >
          <Underline className="w-5 h-5" />
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            editor.chain().focus().toggleStrike().run();
          }}
          className={
            editor.isActive("strike")
              ? "bg-[#38589C] text-white p-2 rounded-lg"
              : "text-black hover:bg-[#38589C] hover:text-white p-1 hover:rounded-lg"
          }
        >
          <Strikethrough className="w-5 h-5" />
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            editor.chain().focus().toggleHeading({ level: 2 }).run();
          }}
          className={
            editor.isActive("heading", { level: 2 })
              ? "bg-[#38589C] text-white p-2 rounded-lg"
              : "text-black hover:bg-[#38589C] hover:text-white p-1 hover:rounded-lg"
          }
        >
          <Heading2 className="w-5 h-5" />
        </button>

        <button
          onClick={(e) => {
            e.preventDefault();
            editor.chain().focus().toggleBulletList().run();
          }}
          className={
            editor.isActive("bulletList")
              ? "bg-[#38589C] text-white p-2 rounded-lg"
              : "text-black hover:bg-[#38589C] hover:text-white p-1 hover:rounded-lg"
          }
        >
          <List className="w-5 h-5" />
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            editor.chain().focus().toggleOrderedList().run();
          }}
          className={
            editor.isActive("orderedList")
              ? "bg-[#38589C] text-white p-2 rounded-lg"
              : "text-black hover:bg-[#38589C] hover:text-white p-1 hover:rounded-lg"
          }
        >
          <ListOrdered className="w-5 h-5" />
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            editor.chain().focus().toggleBlockquote().run();
          }}
          className={
            editor.isActive("blockquote")
              ? "bg-[#38589C] text-white p-2 rounded-lg"
              : "text-black hover:bg-[#38589C] hover:text-white p-1 hover:rounded-lg"
          }
        >
          <Quote className="w-5 h-5" />
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            editor.chain().focus().setCode().run();
          }}
          className={
            editor.isActive("code")
              ? "bg-[#38589C] text-white p-2 rounded-lg"
              : "text-black hover:bg-[#38589C] hover:text-white p-1 hover:rounded-lg"
          }
        >
          <Code className="w-5 h-5" />
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            editor.chain().focus().undo().run();
          }}
          className={
            editor.isActive("undo")
              ? "bg-[#38589C] text-white p-2 rounded-lg"
              : "text-black hover:bg-[#38589C] hover:text-white p-1 hover:rounded-lg"
          }
        >
          <Undo className="w-5 h-5" />
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            editor.chain().focus().redo().run();
          }}
          className={
            editor.isActive("redo")
              ? "bg-[#38589C] text-white p-2 rounded-lg"
              : "text-black hover:bg-[#38589C] hover:text-white p-1 hover:rounded-lg"
          }
        >
          <Redo className="w-5 h-5" />
        </button>
      </div>
      {/* {content && (
        <button
          type="submit"
          className="px-4 bg-[#38589C] text-white py-2 rounded-md"
        >
          Add Story
        </button>
      )} */}
    </div>
  );
};

export default Toolbar;
