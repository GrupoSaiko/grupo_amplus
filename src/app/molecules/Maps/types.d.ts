export interface PropsMaps {
  /**
   * The link must be from open street map
   * @example
   * https://www.openstreetmap.org/export/embed.html?bbox=-100.38780659437182%2C25.670858704135025%2C-100.38439482450487%2C25.673060997317517&amp;layer=mapnik&amp;marker=25.67195985581232%2C-100.38610070943832
   */
  src: string;
  address?: string;
  phone?: string;
  title?: string;
  contact?: JSX.Element | JSX.Element[];

  /**
   * Google link to open the map view into a new window with more details about
   * @example https://maps.app.goo.gl/nugDPe1aL3KcACwM9
   */
  link?: string;
}
