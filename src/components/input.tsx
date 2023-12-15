import React, {
  useState,
  FocusEvent,
  ReactNode,
  InputHTMLAttributes,
} from "react";
import { RegisterOptions, UseFormRegister } from "react-hook-form";

interface InputProps {
  children?: ReactNode;
  inputColor: "primary" | "secondary";
  type: string;
  placeholder: string;
  className: string;
  id: string;
  name: string;
  register: UseFormRegister<any>;
  registerOptions?: RegisterOptions;
}

const primaryColor = "border-grayblue-300";
const secondaryColor = "border-pink-200";

const colors = {
  primary: primaryColor,
  secondary: secondaryColor,
};

const Input: React.FC<InputProps> = ({
  children,
  inputColor,
  type,
  placeholder,
  className,
  id,
  name,
  register,
  registerOptions,
  ...props
}) => {
  const [isInputFocused, setIsInputFocused] = useState<boolean>(false);

  const handleInputFocus = () => {
    console.log("focus", isInputFocused, inputColor);
    setIsInputFocused(true);
  };

  const handleInputBlur = (e: FocusEvent<HTMLInputElement>) => {
    console.log("blur", isInputFocused, inputColor);
    setIsInputFocused(false);
  };

  const colorInput = () => {
    if (inputColor === "primary") {
      return "secondary";
    } else {
      return "primary";
    }
  };

  return (
    <input
      className={`${className} ${
        isInputFocused ? colors[colorInput()] : colors[inputColor]
      }`}
      placeholder={placeholder}
      type={type}
      onFocus={handleInputFocus}
      id={id}
      {...register(name, {...registerOptions})}
      {...props}
    >
      {children}
    </input>
  );
};

export default Input;
