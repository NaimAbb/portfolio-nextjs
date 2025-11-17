import { StaticImageData } from "next/image";

type ImageProject = string | StaticImageData | null;

export class Project {
  image?: ImageProject;
  title: string;
  description: string;
  link: string;
  constructor(
    image: ImageProject,
    title: string,
    description: string,
    link: string
  ) {
    this.image = image;
    this.title = title;
    this.description = description;
    this.link = link;
  }
}
