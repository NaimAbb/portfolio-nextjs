import React, { forwardRef } from "react";

interface InputProps {
  title: string;
  id: string;
  type?: string;
  tag?: any;
  [x: string]: any;
}

const Input: React.FC<InputProps> = forwardRef(function (
  { title, id, tag = "input", type = "text", ...props },
  ref: any
) {
  const Tag = tag;

  const isTextArea = tag === "textarea";

  return (
    <div>
      <label
        htmlFor={id}
        className="block text-white font-bold text-lg mb-[12px]"
      >
        {title}
      </label>
      <Tag
        ref={ref}
        id={id}
        name={id}
        type={type}
        className={`border border-[#D6DDED] rounded-[10px] text-white ${
          isTextArea ? "h-[222px] resize-none py-4" : "h-[70px]"
        } outline-none w-full bg-transparent px-4 caret-white placeholder:text-[#8987A1] placeholder:font-normal placeholder:text-lg`}
        {...props}
      />
    </div>
  );
});

export default Input;
