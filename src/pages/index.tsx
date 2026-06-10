"use client";
import * as react from "react";
import * as msi from "misaki-studio-internal";
import { useRouter } from "next/router";
import { Environment } from "../settings/environment";
import { SVGs } from "../design-system/images";
import * as ComponentsAtomsSlider from "../components/atoms/slider";
import styles from "./index.module.scss";

export default ({
  className = "",
  style,
  divProps,
}: {
  className?: string;
  style?: React.CSSProperties;
  divProps?: react.DOMAttributes<HTMLDivElement> & {
    ref?: (elm?: any) => void;
  };
}) => {
  const router = useRouter();
  const id = msi.utils.getCount();
  const rootElement = react.useRef<HTMLDivElement>(null);
  const screen_2 = (parameter: {}) => {
    return (
      <>
        <div
          {...divProps}
          style={{ ...style }}
          className={` ${id} ${styles["E3"]}`}
          ref={(element) => {
            (rootElement as any).current = element;
            divProps?.ref?.(element);
          }}
        >
          <div className={` ${id} ${styles["E4"]}`}>
            <div className={` ${id} ${styles["E5"]}`}>
              <span className={` ${id} ${styles["E6"]}`}>{"Kishan"}</span>
            </div>
          </div>
        </div>
      </>
    );
  };
  const screen_7 = (parameter: {}) => {
    return (
      <>
        <div
          {...divProps}
          style={{ ...style }}
          className={` ${id} ${styles["E8"]}`}
          ref={(element) => {
            (rootElement as any).current = element;
            divProps?.ref?.(element);
          }}
        >
          <div className={` ${id} ${styles["E9"]}`}>
            <div className={` ${id} ${styles["E10"]}`}>
              <span className={` ${id} ${styles["E11"]}`}>{"Devani"}</span>
            </div>
          </div>
        </div>
      </>
    );
  };
  return (
    <div
      {...divProps}
      style={{ ...style }}
      className={`${className}  ${id} ${styles["E12"]}`}
      ref={(element) => {
        (rootElement as any).current = element;
        divProps?.ref?.(element);
      }}
    >
      <ComponentsAtomsSlider.Component
        className={` ${id} ${styles["E13"]}`}
        divProps={{}}
        properties={{ count: 3 }}
        children={{
          item: (childrenParameter) => {
            const level_3 = { childrenParameter };
            return (
              <>
                {level_3?.childrenParameter?.index === 1 ? screen_2({}) : false}
                {level_3?.childrenParameter?.index === 2 ? screen_7({}) : false}
              </>
            );
          },
        }}
      />
    </div>
  );
};
