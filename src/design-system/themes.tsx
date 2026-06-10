import { createContext, useState } from "react";
import styled from "styled-components";
const cndUrl = (process.env.CDN_URL as string) || "";
export const ThemeRoot = styled.div`
  display: contents;
  &.default_1 {
  }
  &.default_2 {
  }
  &.default_3 {
  }
  &.default_4 {
  }
`;
export const Themes = { default: "default" };
export type ThemeType = keyof typeof Themes;
export type Layer = 1 | 2 | 3 | 4;

export const ComponentFileContext = createContext<{
  type: ThemeType;
  layer: Layer;
  setTheme: (type: ThemeType) => void;
  setLayer: (layer: Layer) => void;
}>({
  layer: 1,
  type: "default",
  setTheme: () => {},
  setLayer: () => {},
});

export const ThemesLayer = ({
  defaultType,
  children,
  defaultLayer,
}: {
  defaultType: ThemeType;
  defaultLayer: 1 | 2 | 3 | 4;
  children: React.JSX.Element;
}) => {
  const [currentTheme, setTheme] = useState(defaultType);
  const [currentLayer, setLayer] = useState(defaultLayer);
  return (
    <ComponentFileContext.Provider
      value={{
        layer: currentLayer,
        type: currentTheme,
        setTheme: (type) => setTheme(type),
        setLayer: (layer) => setLayer(layer),
      }}
    >
      <ThemeRoot className={`${currentTheme}_${currentLayer}`}>
        {children}
      </ThemeRoot>
    </ComponentFileContext.Provider>
  );
};
