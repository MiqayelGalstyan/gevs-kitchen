declare module "@mui/private-theming" {
    import type { Theme } from "@mui/material/styles";
  
    interface DefaultTheme extends Theme {}
  }
  
  declare module "*.svg" {
    import React = require("react");
  
    export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
    const src: string;
    export default src;
  }
  
  declare module "*.jpg" {
    const content: string;
    export default content;
  }
  
  declare module "*.png" {
    const content: string;
    export default content;
  }
  
  declare module "'*.json" {
    const content: string;
    export default content;
  }
  
  declare module "'*.ttf" {
    const content: string;
    export default content;
  }
  
  declare module "*.woff";
  declare module "*.woff2";
  