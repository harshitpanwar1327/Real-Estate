export class ProjectsModels {
    constructor(projectData) {
        this.name = projectData.name;
        this.location = projectData.location;
        this.status = projectData.status;
        this.description = projectData.description;
    }
}