import React, { useState, useRef } from "react";
import { ArrowDown } from "react-feather";
import Style from "./Body.module.css";
import Editor from "../editor/Editor";
import Resume from "../resume/Resume";
import ReactToPrint from "react-to-print";
const Body = () => {
  const resumeRef = useRef();
  const colors = ["#239ce2", "#80f55d", "#b32e3c", "#def241", "#db41f2"];
  const [color, setColor] = useState("#001eff");
  const sections = {
    basicInfo: "BasicInfo",
    workExp: "WorkExperience",
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
              onClick={() => setColor(item)}
              key={index}
              style={{ backgroundColor: item }}
              className={`${Style.color} ${color === item ? Style.active : ""}`}
            />
          ))}
        </div>
        <ReactToPrint
          trigger={() => (
            <button>
              {" "}
              Download <ArrowDown />{" "}
            </button>
          )}
          content={() => resumeRef.current}
        />
      </div>
      <div className={Style.main}>
        <Editor
          sections={sections}
          resumeinfo={resumeInfo}
          setResumeInfo={setResumeInfo}
        />
        <Resume color={color} ref={resumeRef} resumeInfo={resumeInfo} />
      </div>
    </div>
  );
};

export default Body;
