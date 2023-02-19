import { Fragment } from "react";
import { ProjectComponent } from "../components/ProjectCompoent";
import secondImage from "../resources/img/2.jpg";
import thirdImage from "../resources/img/3.jpg";
import MainCover from "../resources/img/main-cover.png";

export default function ProjectPage() {
  return (
    <Fragment>
      <div className="cover-page">
        <div className="tit">
          <h1>Project</h1>
          <ul className="breadcrumb">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#" className="active">
                project
              </a>
            </li>
          </ul>
        </div>
      </div>

      <section id="project">
        <div className="flex project pt-30">
          <ProjectComponent
            image={secondImage}
            title="project title can be here"
          />
          <ProjectComponent
            image={thirdImage}
            title="project title can be here"
          />
          <ProjectComponent
            image={MainCover}
            title="project title can be here"
          />
        </div>
        <div className="flex project pt-30">
          <ProjectComponent
            image={secondImage}
            title="project title can be here"
          />
          <ProjectComponent
            image={thirdImage}
            title="project title can be here"
          />
          <ProjectComponent
            image={MainCover}
            title="project title can be here"
          />
        </div>
        <div className="flex project pt-30">
          <ProjectComponent
            image={secondImage}
            title="project title can be here"
          />
          <ProjectComponent
            image={thirdImage}
            title="project title can be here"
          />
          <ProjectComponent
            image={MainCover}
            title="project title can be here"
          />
        </div>
        <div className="flex project pt-30">
          <ProjectComponent
            image={secondImage}
            title="project title can be here"
          />
          <ProjectComponent
            image={thirdImage}
            title="project title can be here"
          />
          <ProjectComponent
            image={MainCover}
            title="project title can be here"
          />
        </div>
        <div className="flex project">
          <ProjectComponent
            image={secondImage}
            title="project title can be here"
          />
          <ProjectComponent
            image={thirdImage}
            title="project title can be here"
          />
          <ProjectComponent
            image={MainCover}
            title="project title can be here"
          />
        </div>
      </section>
    </Fragment>
  );
}
