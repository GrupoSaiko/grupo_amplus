export type Divider = 'top' | 'topInverted' | 'bottom' | 'bottomInverted' | 'none';

export interface PropsSection {
  title: string;
  children: JSX.Element | JSX.Element[];
  topDivider?:Divider;
  bottomDivider?:Divider;
  id?:string;
  bgUrl?:string;
  bgDirection?:'left'|'right';
}
