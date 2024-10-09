import React from "react";
import "primeicons/primeicons.css";

const ProjectsModal = ({ showProjectModal, handleClose, projectIndex }) => {
  const projects = [
    {
      title: "Project Title 1",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis, ante a sodales rutrum, felis nunc facilisis ex, ac tincidunt ligula neque eu nunc. Donec non arcu vel mauris tristique semper non in lectus.",
      location: "New York, USA",
      date: "2022-01-01",
    },
    {
      title: "Project Title 2",
      description:
        "ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis, ante a sodales rutrum, felis nunc facilisis ex, ac tincidunt ligula neque eu nunc. Donec non arcu vel mauris tristique semper non in lectus.",
      location: "Los Angeles, USA",
      date: "2022-02-02",
    },
    {
      title: "Project Title 3",
      description:
        "dolor sit amet, consectetur adipiscing elit. Nulla convallis, ante a sodales rutrum, felis nunc facilisis ex, ac tincidunt ligula neque eu nunc. Donec non arcu vel mauris tristique semper non in lectus.",
      location: "Chicago, USA",
      date: "2022-03-03",
    },
    {
      title: "Project Title 4",
      description:
        "sit amet, consectetur adipiscing elit. Nulla convallis, ante a sodales rutrum, felis nunc facilisis ex, ac tincidunt ligula neque eu nunc. Donec non arcu vel mauris tristique semper non in lectus.",
      location: "Tokyo, Japan",
      date: "2022-04-04",
    },
    {
      title: "Project Title 5",
      description:
        "amet, consectetur adipiscing elit. Nulla convallis, ante a sodales rutrum, felis nunc facilisis ex, ac tincidunt ligula neque eu nunc. Donec non arcu vel mauris tristique semper non in lectus.",
      location: "Sydney, Australia",
      date: "2022-05-05",
    },
  ];
  return (
    <div className="project-modal">
      <div>
        <div className="project-modal__content">
          <div className="video_modal_header">
            <button onClick={() => handleClose()} className="pi pi-times" />
          </div>
          <h3>{projects[projectIndex].title}</h3>

          <p>{projects[projectIndex].description}</p>
          <i></i>
        </div>
      </div>
    </div>
  );
};

export default ProjectsModal;
