export interface LinkAbout {
  /**
   * @example "Mision"
   */
  title: string;
  /**
   * @example "#mision"
   */
  link: string;
}

export interface PropsAboutAmplus {
  title: string;
  imageSource: string;
  content: string;
  hrefs?: LinkAbout[];
  forward?:string;
  backward?:string;
}
