type SocialMediaName = "instagram" | "facebook" | "twitter" | "linkedin" | "youtube"

export interface SocialMediaI {
  socialMedia: SocialMediaName;
  children:string;
  link:string;
  withText?:boolean;
}
