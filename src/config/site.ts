import authorAvatar from "../../public/images/author/hicoco.png";
export const siteConfig = {
  name: "Hi, I’m Diko Mahendra",
  description:
    "This blog is a collection of my personal notes, thoughts, and everything I’ve learned along the way. It’s my space to document and share knowledge, insights, and ideas.",
  author: "diko.dev99@gmail.com",
  authorImage: authorAvatar,
  social: {
    github: "https://github.com/devbertskie",
    twitter: "https://twitter.com",
    facebook: "https://facebook.com",
  },
};

export type SiteConfig = typeof siteConfig;
