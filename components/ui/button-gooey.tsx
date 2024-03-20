import { ArrowRightIcon } from "@radix-ui/react-icons";
import { PropsWithChildren } from "react";

export const ButtonGooey = ({ children }: PropsWithChildren) => {
  return (
    <>
      <div className="wrapper">
        <button className="button">
          {children}
          <div className="bubble">
            <ArrowRightIcon className="h-6 w-6" />
          </div>
        </button>
      </div>

      <svg
        className="absolute hidden"
        width="0"
        height="0"
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
      >
        <defs>
          <filter id="gooey">
            <feGaussianBlur
              in="SourceGraphic"
              stdDeviation="10"
              result="blur"
            />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 20 -10"
              result="gooey"
            />
            <feComposite in="SourceGraphic" in2="gooey" operator="atop" />
          </filter>
        </defs>
      </svg>

      <style jsx>{`
        .wrapper {
          filter: url("#gooey");
          height: 100%;
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .button {
          background: hsl(var(--secondary));
          color: #eee;
          display: inline-flex;
          font-weight: bold;
          padding: 0 24px 0 24px;
          border-radius: 12px;
          font-size: 1rem;
          line-height: 1rem;
          height: 48px;
          align-items: center;
        }

        .bubble {
          color: #fff;
          z-index: -10;
          display: flex;
          background: hsl(var(--secondary));
          align-items: center;
          justify-content: center;
          width: 48px;
          height: 48px;
          position: absolute;
          content: "";
          border-radius: 12px;
          transition: transform 0.4s;
          transition-timing-function: bezier(0.2, 0.8, 0.2, 1.2);
          transform: translateX(80%) translateY(0%);
        }

        .button:hover .bubble {
          transform: translateX(230%) translateY(0%);
        }
      `}</style>
    </>
  );
};
