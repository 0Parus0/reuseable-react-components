import classNames from "classnames";
import { twMerge } from "tailwind-merge";

function Button({
  children,
  primary,
  secondary,
  success,
  warning,
  danger,
  outline,
  rounded,
  ...rest
}) {
  const classes = twMerge(
    classNames(rest.className, "flex items-center px-3 py-1.5 border", {
      "border-blue-500 bg-blue-500 text-white": primary,
      "border-gray-900 bg-gray-800 text-white": secondary,
      "border-green-500 bg-green-500 text-white": success,
      "border-yellow-500 bg-yellow-800 text-white": warning,
      "border-red-500 bg-red-400 text-white": danger,
      "rounded-full": rounded,
      "bg-white": outline,
      "text-blue-500": primary && outline,
      "text-gray-800": secondary && outline,
      "text-green-500": success && outline,
      "text-yellow-700": warning && outline,
      "text-red-300": danger && outline,
    })
  );
  return (
    <button {...rest} className={classes}>
      {children}
    </button>
  );
}
Button.propTypes = {
  checkVariationValue({ primary, secondary, success, warning, danger }) {
    const count =
      Number(!!primary) +
      Number(!!secondary) +
      Number(!!warning) +
      Number(!!success) +
      Number(!!danger);

    if (count > 1) {
      return new Error(
        "Only one of primary, secondary, success, warning, danger can be true"
      );
    }
  },
};

export default Button;
