"use client";
import * as react from "react";
import * as msi from "misaki-studio-internal";
import { useRouter } from "next/router";
import { Environment } from "../../settings/environment";
import { SVGs } from "../../design-system/images";
import styles from "./slider.module.scss";

export type Props = { count: number };
export type States = { currentItem: number };
export type Children = { item?: (param: { index: number }) => React.ReactNode };

export const DefaultProps: Props = { count: 6 };

export const Component = ({
  className = "",
  style,
  divProps,
  properties = DefaultProps,
  onStatesChange,
  children,
}: {
  className?: string;
  style?: React.CSSProperties;
  divProps?: react.DOMAttributes<HTMLDivElement> & {
    ref?: (elm?: any) => void;
  };
  properties?: Props;
  onStatesChange?: (states: States) => void;
  children?: Children;
}) => {
  const router = useRouter();
  const id = msi.utils.getCount();
  const rootElement = react.useRef<HTMLDivElement>(null);
  const {
    state: states,
    getState,
    setState: setStateFn,
  } = msi.storage.useStates<States>({ currentItem: 1 });
  const setState = (states: States) => {
    if (setStateFn(states)) onStatesChange?.(states);
  };
  return (
    <div
      {...divProps}
      style={{ ...style }}
      className={`${className}  ${id} ${styles["E24"]}`}
      ref={(element) => {
        (rootElement as any).current = element;
        divProps?.ref?.(element);
      }}
    >
      <div className={` ${id} ${styles["E25"]}`}>
        <div className={` ${id} ${styles["E26"]}`}>
          {children?.item === undefined ? (
            <div className={` ${id} ${styles["E27"]}`}>
              <span className={` ${id} ${styles["E28"]}`}>{"Slide."}</span>
              <span className={` ${id} ${styles["E29"]}`}>
                {msi.utils.toText(states?.currentItem) ?? "No"}
              </span>
            </div>
          ) : undefined}
          {children?.item?.({ index: states?.currentItem })}
        </div>
        <div className={` ${id} ${styles["E30"]}`}>
          <div className={` ${id} ${styles["E31"]}`}>
            <div
              className={` ${id} ${styles["E32"]}`}
              onClick={(originalEvent) => {
                const event = msi.utils.prepareMouseEvent(originalEvent);
                if (states?.currentItem > 1) {
                  const states = getState();
                  states.currentItem -= 1;
                  setState(states);
                } else {
                  const states = getState();
                  states.currentItem = properties?.count;
                  setState(states);
                }
              }}
            >
              <svg
                preserveAspectRatio="original"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
                color="currentColor"
                fill="none"
                stroke="currentColor"
                stroke-width="1"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M15 6C15 6 9.00001 10.4189 9 12C8.99999 13.5812 15 18 15 18"></path>
              </svg>
            </div>
          </div>
          <div className={` ${id} ${styles["E33"]}`}>
            <div
              className={` ${id} ${styles["E34"]}`}
              onClick={(originalEvent) => {
                const event = msi.utils.prepareMouseEvent(originalEvent);
                if (states?.currentItem < properties?.count) {
                  const states = getState();
                  states.currentItem += 1;
                  setState(states);
                } else {
                  const states = getState();
                  states.currentItem = 1;
                  setState(states);
                }
              }}
            >
              <svg
                preserveAspectRatio="original"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
                color="currentColor"
                fill="none"
                stroke="currentColor"
                stroke-width="1"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M15 6C15 6 9.00001 10.4189 9 12C8.99999 13.5812 15 18 15 18"></path>
              </svg>
            </div>
          </div>
          <div className={` ${id} ${styles["E35"]}`}>
            {msi.utils.loopOnRange(1, properties?.count, (step) => {
              const output = { step };
              const level_5 = { repeater: { output } };
              return (
                <>
                  <div
                    className={` ${id} ${styles["E36"]}${states?.currentItem === level_5?.repeater?.output?.step ? ` ${styles["E37"]}` : ""}`}
                    onClick={(originalEvent) => {
                      const event = msi.utils.prepareMouseEvent(originalEvent);
                      const states = getState();
                      states.currentItem = level_5?.repeater?.output?.step;
                      setState(states);
                    }}
                  />
                </>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
