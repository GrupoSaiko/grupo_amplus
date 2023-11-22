export interface PropsMaps {
  /**
   * The link must be from open street map
   */
  src: string;
  address?: string;
  phone?: string;
  title?: string;
  contact?: JSX.Element | JSX.Element[];

  /**
   * Google link to open the map view into a new window with more details about
   */
  link?: string;
}
