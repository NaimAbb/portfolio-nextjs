import { Project } from "./project";

export class Category {
  title: string;
  projects: Project[];
  constructor(title: string, projects: Project[]) {
    this.title = title;
    this.projects = projects;
  }
}
