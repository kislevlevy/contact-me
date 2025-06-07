import {
  TypeScriptIcon,
  JavaScriptIcon,
  ReactIcon,
  HTML5Icon,
  CSS3Icon,
  NodeJSIcon,
  ExpressIcon,
  NextJSIcon,
  GitIcon,
  AdobeIcon,
  TailwindCSSIcon,
  ReduxIcon,
  ReactQueryIcon,
  MongoDBIcon,
  MySQLIcon,
  TensorFlowIcon,
  MUIIcon,
  ShadCNUIIcon,
  DockerIcon,
  DjangoIcon,
  PythonIcon,
} from "../components/icons";

// TechIcons mapping object
export const TechIcons = {
  typescript: TypeScriptIcon,
  javascript: JavaScriptIcon,
  react: ReactIcon,
  html5: HTML5Icon,
  css3: CSS3Icon,
  nodejs: NodeJSIcon,
  express: ExpressIcon,
  nextjs: NextJSIcon,
  git: GitIcon,
  adobe: AdobeIcon,
  tailwindcss: TailwindCSSIcon,
  redux: ReduxIcon,
  reactquery: ReactQueryIcon,
  mongodb: MongoDBIcon,
  mysql: MySQLIcon,
  tensorflow: TensorFlowIcon,
  mui: MUIIcon,
  shadcnui: ShadCNUIIcon,
  docker: DockerIcon,
  django: DjangoIcon,
  python: PythonIcon,
};

// Helper function to get icon component by name
export const getIconByName = (name: string) => {
  return TechIcons[name as keyof typeof TechIcons] || null;
};

// Array of all icons for easy iteration
export const allTechIcons = Object.values(TechIcons);

// Get all icon names
export const iconNames = Object.keys(TechIcons);

// Type definitions
export type IconName = keyof typeof TechIcons;
export type IconComponent = typeof TypeScriptIcon;
