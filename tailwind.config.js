const plugin = require("tailwindcss/plugin");
module.exports = {
  content: [
    "../../library/generic-frontend/src/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  media: false, // or 'media' or 'class'
  mode: "jit",
  theme: {
    namedGroups: ["parent", "one", "two"],
    extend: {
      textShadow: {
        "level-1":
          "0px 1px 2px rgba(0, 52, 102, 0.12), 0px 1px 3px rgba(0, 52, 102, 0.06);",
        "level-2":
          "0px 2px 4px rgba(0, 52, 102, 0.1), 0px 3px 6px rgba(0, 52, 102, 0.05);",
      },
      minWidth: {
        ...(() => {
          const list = {};
          for (let index = 0; index < 1000; index++) {
            list[index] = `${index}px`;
          }
          return list;
        })(),
      },
      minHeight: {
        ...(() => {
          const list = {};
          for (let index = 0; index < 1000; index++) {
            list[index] = `${index}px`;
          }
          return list;
        })(),
      },
      maxWidth: {
        ...(() => {
          const list = {};
          for (let index = 0; index < 1000; index++) {
            list[index] = `${index}px`;
          }
          return list;
        })(),
      },
      maxHeight: {
        ...(() => {
          const list = {};
          for (let index = 0; index < 1000; index++) {
            list[index] = `${index}px`;
          }
          return list;
        })(),
      },
      width: {
        ...(() => {
          const list = {};
          for (let index = 0; index < 1000; index++) {
            list[index] = `${index}px`;
          }
          return list;
        })(),
      },
      height: {
        ...(() => {
          const list = {};
          for (let index = 0; index < 1000; index++) {
            list[index] = `${index}px`;
          }
          return list;
        })(),
      },
      gap: {
        ...(() => {
          const list = {};
          for (let index = 0; index < 500; index++) {
            list[index] = `${index}px`;
          }
          return list;
        })(),
      },
      columnGap: {
        ...(() => {
          const list = {};
          for (let index = 0; index < 500; index++) {
            list[index] = `${index}px`;
          }
          return list;
        })(),
      },
      rowGap: {
        ...(() => {
          const list = {};
          for (let index = 0; index < 500; index++) {
            list[index] = `${index}px`;
          }
          return list;
        })(),
      },
      borderRadius: {
        ...(() => {
          const list = {};
          for (let index = 0; index < 100; index++) {
            list[index] = `${index}px`;
          }
          return list;
        })(),
      },
      colors: (theme) => {
        return {
          white: {
            DEFAULT: "#ffffff",
            f5: "#f5f5f5",
            f0: "#F0F0F0",
            f2: "#F2F2F2",
          },
          blue: {
            sel: "#00A3FF",
          },
          gray: {
            e0: "#E0E0E0",
            ef: "#EFEFEF",
            ee: "#EEEEEE",
            e5: "#E5E5E5",
            d4: "#d4d4d4",
            d0: "#D0D0D0",
          },
          dark: {
            99: "#999999",
            66: "#666666",
          },
          aqua: "#00BBFF",
        };
      },
      fontWeight: (theme) => {
        const list = {};
        for (let index = 0; index < 9; index++) {
          list[`${index}00`] = `${index}00`;
        }
        return list;
      },
      fontFamily: {
        robot: [
          `"Roboto Condensed", sans-serif, Roboto, -apple-system,
          BlinkMacSystemFont, Segoe UI, Oxygen, Ubuntu, Cantarell, Fira Sans,
          Droid Sans, Helvetica Neue, sans-serif`,
        ],
      },
      fontSize: {
        ...(() => {
          const list = {};
          for (let index = 0; index < 100; index++) {
            list[index] = `${index}px`;
          }
          return list;
        })(),
      },
      boxShadow: (theme) => ({
        ...theme.boxShadow,
        "level-1":
          "0px 1px 3px rgba(0, 52, 102, 0.06), 0px 1px 2px rgba(0, 52, 102, 0.12);",
        "level-2":
          "0px 3px 6px rgba(0, 52, 102, 0.05), 0px 2px 4px rgba(0, 52, 102, 0.1);",
        "level-3":
          "0px 2px 6px rgba(0, 52, 102, 0.06), 0px 8px 20px rgba(0, 52, 102, 0.1);",
        "level-4":
          "0px 5px 10px rgba(0, 52, 102, 0.03), 0px 15px 25px rgba(0, 52, 102, 0.1);",
        "level-5": "0px 20px 40px rgba(0, 52, 102, 0.15);",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      const newUtilities = {
        ...(() => {
          const list = {};
          for (let index = 0; index < 1000; index++) {
            list[`.w-${index}%`] = {
              width: `${index}%`,
            };
            list[`.h-${index}%`] = {
              height: `${index}%`,
            };

            list[`.left-${index}`] = {
              left: `${index}px`,
            };
            list[`.right-${index}`] = {
              right: `${index}px`,
            };
            list[`.top-${index}`] = {
              top: `${index}px`,
            };
            list[`.bottom-${index}`] = {
              bottom: `${index}px`,
            };

            list[`.-left-${index}`] = {
              left: `-${index}px`,
            };
            list[`.-right-${index}`] = {
              right: `-${index}px`,
            };
            list[`.-top-${index}`] = {
              top: `-${index}px`,
            };
            list[`.-bottom-${index}`] = {
              bottom: `-${index}px`,
            };
          }

          list[`.left-auto`] = {
            left: `auto`,
          };
          list[`.right-auto`] = {
            right: `auto`,
          };
          list[`.top-auto`] = {
            top: `auto`,
          };
          list[`.cb-auto`] = {
            bottom: `auto`,
          };

          for (let index = 0; index < 500; index++) {
            // for line height
            list[`.lh-${index}`] = {
              "line-height": `${index}px`,
            };
            // for pending
            list[`.p-${index}`] = {
              "padding-left": `${index}px`,
              "padding-right": `${index}px`,
              "padding-top": `${index}px`,
              "padding-bottom": `${index}px`,
            };
            list[`.pl-${index}`] = {
              "padding-left": `${index}px`,
            };
            list[`.pr-${index}`] = {
              "padding-right": `${index}px`,
            };
            list[`.pt-${index}`] = {
              "padding-top": `${index}px`,
            };
            list[`.pb-${index}`] = {
              "padding-bottom": `${index}px`,
            };
            list[`.px-${index}`] = {
              "padding-left": `${index}px`,
              "padding-right": `${index}px`,
            };
            list[`.py-${index}`] = {
              "padding-top": `${index}px`,
              "padding-bottom": `${index}px`,
            };

            // for margin
            list[`.m-${index}`] = {
              "margin-left": `${index}px`,
              "margin-right": `${index}px`,
              "margin-top": `${index}px`,
              "margin-bottom": `${index}px`,
            };
            list[`.ml-${index}`] = {
              "margin-left": `${index}px`,
            };
            list[`.mr-${index}`] = {
              "margin-right": `${index}px`,
            };
            list[`.mt-${index}`] = {
              "margin-top": `${index}px`,
            };
            list[`.mb-${index}`] = {
              "margin-bottom": `${index}px`,
            };
            list[`.mx-${index}`] = {
              "margin-left": `${index}px`,
              "margin-right": `${index}px`,
            };

            list[`.-ml-${index}`] = {
              "margin-left": `-${index}px`,
            };
            list[`.-mr-${index}`] = {
              "margin-right": `-${index}px`,
            };
            list[`.-mt-${index}`] = {
              "margin-top": `-${index}px`,
            };
            list[`.-mb-${index}`] = {
              "margin-bottom": `-${index}px`,
            };
          }

          list[".w-fit"] = {
            width: "fit-content",
          };
          list[".h-fit"] = {
            height: "fit-content",
          };

          return list;
        })(),
      };
      addUtilities(newUtilities, ["responsive"]);
    }),
    require("tailwindcss-named-groups"),
  ],
};
