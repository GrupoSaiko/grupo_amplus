type SocialMediaName = "instagram" | "facebook" | "twitter" | "linkedin"

export interface SocialMediaI {
  socialMedia: SocialMediaName;
  children:string;
  link:string;
  withText?:boolean;
}
