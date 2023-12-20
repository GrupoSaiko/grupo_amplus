export interface PropsSlide {
  imageSrc?: string;
  subtitle?: string;
  leftToRight?:boolean;
  content: string|JSX.Element|JSX.Element[];
  objectPosition:string;
}
