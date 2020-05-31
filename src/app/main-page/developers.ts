export class DevelopersInfo {
  name: string;
  projects: string[];
  id: number;

  constructor(name: string, projects: string[], id: number) {
    this.name = name;
    this.projects = projects;
    this.id = id;
  }
  
}