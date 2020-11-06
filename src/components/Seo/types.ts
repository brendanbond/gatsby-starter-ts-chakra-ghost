export type SeoProps = {
  description?: string;
  lang?: string;
  title?: string;
  image?: {
    src: string;
    height: number;
    width: number;
  };
  meta?: any[];
  pathname?: string;
};
