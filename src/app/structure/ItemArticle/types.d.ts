export interface PropsArticleItem {
  title: string;
  img: string;
  content: JSX.Element | JSX.Element[];
  direction:"leftToRight"|"rightToLeft";
}
