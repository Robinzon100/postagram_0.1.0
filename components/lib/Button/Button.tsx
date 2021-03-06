import { CSSProperties, FC } from "react";
import { colorStyles, sizeStyles, defaultStyles } from "./Button.styles";

interface buttonInterface {
  color?: "yellow" | "black" | "blue";
  size?: "large" | "medium" | "small";
  width?: string;
  onClick?: () => void;
  className?: string;
  id?: string;
  style?: CSSProperties;
}

const Button: FC<buttonInterface> = ({
  children,
  color,
  size,
  width,
  onClick,
  className,
  id,
  style,
}) => {
  return (
    <>
      <div className={`button ${className}`} style={style} onClick={onClick} id={id}>
        {children}

      </div>






      <style jsx>{`
        .button {
        //   margin-left: 8px;
          display: inline-flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          border-radius: 12px;
          position: relative;
          cursor: pointer;
          transition: box-shadow 0.15s ease;
          user-select: none;
          width: ${width && width};
          padding: ${size ? sizeStyles[size].padding : defaultStyles.padding};
          background: ${color ? colorStyles[color].bg : defaultStyles.bg};
          border: ${color ? colorStyles[color].border : defaultStyles.border};
        }

        .button p {
          color: var(--primary-white);
        }
      `}</style>
    </>
  );
};

export default Button;
