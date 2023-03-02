import { ArrowRightIcon } from "@heroicons/react/24/outline";
import Button from "../Button/Button";

const Input = ({
  value,
  setValue,
  placeholder,
  type,
  // hasSubmittedEmail,
  // setHasSubmittedEmail,
}) => {
  return (
    <div>
      <form
        // onSubmit={onSubmitHandler}
        className="h-full flex md:flex-col justify-left space-x-3 md:space-x-0 items-center md:items-start"
      >
        <input
          type={type}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder={placeholder}
          // disabled={hasSubmittedEmail}
          className="text-base font-normal md:mb-2 leading-normal bg-white border border-[#d1d5db] rounded-lg py-[9px] px-4 min-w-[325px] text-black-100 outline-none transition-all placeholder:text-neutral-400  focus:outline-none active:outline-none"
        />
        <Button type="submit" text="Subscribe" />
      </form>
    </div>
  );
};

export default Input;
