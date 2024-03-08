import React, { useState } from "react";
import { ArrowDown } from "react-feather";
import Style from "./Body.module.css";
import Editor from "../editor/Editor";
const Body = () => {
  const colors = ["#001eff", "#80f55d", "#b32e3c", "#def241", "#db41f2"];
  const sections = {
    basicInfo: "Basic Info",
    workExp: "Work Experience",
    project: "Projects",
    education: "Education",
    achievements: "Achievements",
    summary: "Summary",
    other: "Other",
  };

  const [resumeInfo, setResumeInfo] = useState({
    [sections.basicInfo]: {
      id: sections.basicInfo,
      title: sections.basicInfo,
      detail: {},
    },
    [sections.workExp]: {
      id: sections.workExp,
      title: sections.workExp,
      details: [],
    },
    [sections.project]: {
      id: sections.project,
      title: sections.project,
      details: [],
    },
    [sections.education]: {
      id: sections.education,
      title: sections.education,
      details: [],
    },
    [sections.achievements]: {
      id: sections.achievements,
      title: sections.achievements,
      points: [],
    },
    [sections.summary]: {
      id: sections.summary,
      title: sections.summary,
      detail: "",
    },
    [sections.other]: {
      id: sections.other,
      title: sections.other,
      detail: "",
    },
  });

  return (
    <div className={Style.container}>
      <p className={Style.heading}>Resume Builder</p>
      <div className={Style.toolbar}>
        <div className={Style.colors}>
          {colors.map((item, index) => (
            <span
              key={index}
              style={{ backgroundColor: item }}
              className={Style.color}
            />
          ))}
        </div>
        <button>
          Download <ArrowDown />
        </button>
      </div>
      <div className={Style.main}>
        <Editor sections={sections} resumeinfo={resumeInfo}  setResumeInfo={setResumeInfo}/>
      </div>
    </div>
  );
};

export default Body;
