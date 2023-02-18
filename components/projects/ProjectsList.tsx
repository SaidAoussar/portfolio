import { Fragment } from "react";
import { Divider } from "antd";
import projectsData from "./projects-data";
import Project from "./Project";

const ProjectsList = () => {
  return (
    <>
      {projectsData.map((project, index) => (
        <Fragment key={project.id}>
          <Project project={project} />
          {projectsData.length !== index + 1 && <Divider />}
        </Fragment>
      ))}
    </>
  );
};

export default ProjectsList;
