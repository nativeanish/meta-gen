export interface MetaTag {
  tag: string;
  text?: string;
  attrs?: Record<string, string>;
  selfClosing?: boolean;
}

export interface MetaGeneratorOptions {
  title?: string;
  desc?: string;
  url?: string;
  name?: string;
  img?: string;
  img_alt?: string;
  charset?: string;
  generator?: string;
  comments?: boolean;
  site_name?: string;
  robots?: string;
  uuid?: string;
  arns_name?: string;
  crawlers?: Record<string, string>;
  preconnect?: string | Array<string | { url: string; crossorigin?: boolean }>;
  dns_prefetch?: string | string[];
  css?: string | string[];
  inline_css?:
    | string
    | string[]
    | Array<{ css: string; [key: string]: string }>;
  js?: string | string[];
  inline_js?: string | string[] | Array<{ js: string; [key: string]: string }>;
  locale?: string;
  og_title?: string;
  og_desc?: string;
  og_image?: string;
  type?: string;
  img_width?: number;
  img_height?: number;
  og_comment?: string;
  og_img_type?: string;
  og_secure_img_url?: string;
  og_audio?: string;
  og_video?: string;
  og_determiner?: "a" | "an" | "the" | "auto" | "";
  og_alternate_locales?: string[];
  twitter_card_type?: "summary" | "summary_large_image" | "app" | "player";
  twitter_handle?: string;
  creator_handle?: string;
  twitter_title?: string;
  twitter_image?: string;
  twitter_image_alt?: string;
  twitter_desc?: string;
  twitter_comment?: string;
  twitter_attr_name?: string;
  custom?: MetaTag[];
  minified?: boolean;
  favicon?: string;
}
