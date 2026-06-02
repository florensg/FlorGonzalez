declare module "lucide-react" {
  import type { FC, SVGAttributes } from "react";

  interface LucideProps extends SVGAttributes<SVGSVGElement> {
    size?: number | string;
    absoluteStrokeWidth?: boolean;
  }

  export type Icon = FC<LucideProps>;

  export const Sun: Icon;
  export const Moon: Icon;
  export const Menu: Icon;
  export const X: Icon;
  export const MapPin: Icon;
  export const Globe: Icon;
  export const GraduationCap: Icon;
  export const FlaskConical: Icon;
  export const Mail: Icon;
  export const Linkedin: Icon;
  export const Github: Icon;
  export const Phone: Icon;
}
