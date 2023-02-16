import Link from "next/link";

const Button = ({
  click,
  text,
  variant,
  size,
  asLink,
  href,
  type = "button",
}) => {
  let className = "transition-all duration-200 rounded-lg ";

  switch (size) {
    case "sm":
      className +=
        "text-16 font-poppins font-bold py-[14px] px-8 border border-primary ";
      break;
    case "md":
      className +=
        "text-18 font-poppins font-bold py-5 px-9 border border-primary ";
      break;
    case "lg":
      className +=
        "text-22 font-poppins font-bold py-5 px-[68px] border border-primary ";
      break;
    default:
      className +=
        "text-sm font-poppins font-medium leading-[21px] py-[10px] px-5 border border-primary ";
      break;
  }

  switch (variant) {
    case "outline":
      className += "bg-white text-primary hover:text-white hover:bg-primary";
      break;
    default:
      className += "bg-primary text-white hover:bg-white hover:text-primary";
      break;
  }

  return asLink ? (
    <Link href={href} target="_blank" className={className}>
      {text}
    </Link>
  ) : (
    <button type={type} onClick={click} className={className}>
      {text}
    </button>
  );
};

export default Button;
