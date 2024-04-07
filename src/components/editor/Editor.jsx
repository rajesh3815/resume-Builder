import React, { useEffect, useState } from "react";
import Style from "./Editor.module.css";
import { X } from "react-feather";
import Inputcontrol from "../inputcontroler/Inputcontrol";
const Editor = ({ sections, resumeinfo, setResumeInfo }) => {
  const [activesection, setactivesection] = useState(Object.keys(sections)[0]);
  const [activeinfo, setActiveinfo] = useState(
    resumeinfo[sections[Object.keys(sections)[0]]]
  );
  const [sectiontitle, setSectiontitle] = useState(Object.keys(sections)[0]);

  const [values, setValues] = useState({
    name: activeinfo?.detail?.name || "",
    title: activeinfo?.detail?.title || "",
    linkedin: activeinfo?.detail?.linkedin || "",
    github: activeinfo?.detail?.github || "",
    phone: activeinfo?.detail?.phone || "",
    email: activeinfo?.detail?.email || "",
  });
  const [activeIndex, setActiveIndex] = useState(0);
  const pointUpdateChange = (value, index) => {
    const temp = { ...values };
    if (!Array.isArray(temp.points)) temp.points = [];
    temp.points[index] = value;
    setValues(temp);
  };

  const workExpBody = (
    <div className={Style.detail}>
      <div className={Style.row}>
        <Inputcontrol
          label="Title"
          placeholder="Enter title eg.Backend devloper"
          defaultValue={values.title}
          onChange={(e) =>
            setValues((prev) => ({ ...prev, title: e.target.value }))
          }
        />
        <Inputcontrol
          label="Company Name"
          placeholder="Enter Company name"
          defaultValue={values.companyName}
          onChange={(e) =>
            setValues((prev) => ({ ...prev, companyName: e.target.value }))
          }
        />
      </div>
      <div className={Style.row}>
        <Inputcontrol
          label="Certificate link"
          placeholder="Enter certificate link"
          defaultValue={values.certificationLink}
          onChange={(e) =>
            setValues((prev) => ({
              ...prev,
              certificationLink: e.target.value,
            }))
          }
        />
        <Inputcontrol
          label="Work type"
          placeholder="Eenter work eg. Remote"
          defaultValue={values.workType}
          onChange={(e) =>
            setValues((prev) => ({ ...prev, workType: e.target.value }))
          }
        />
      </div>
      <div className={Style.row}>
        <Inputcontrol
          label="Start Date"
          type="date"
          placeholder="Enter start date"
          defaultValue={values.startDate}
          onChange={(e) =>
            setValues((prev) => ({ ...prev, startDate: e.target.value }))
          }
        />
        <Inputcontrol
          label="end date"
          type="date"
          placeholder="Enter end date"
          defaultValue={values.endDate}
          onChange={(e) =>
            setValues((prev) => ({ ...prev, endDate: e.target.value }))
          }
        />
      </div>
      <div className={Style.column}>
        <label> Enter work description</label>
        <Inputcontrol
          placeholder="Line 1"
          defaultValue={values.points ? values.points[0] : ""}
          onChange={(e) => pointUpdateChange(e.target.value, 0)}
        />
        <Inputcontrol
          placeholder="Line 2"
          defaultValue={values.points ? values.points[1] : ""}
          onChange={(e) => pointUpdateChange(e.target.value, 1)}
        />
      </div>
    </div>
  );
  const projectBody = (
    <div className={Style.detail}>
      <div className={Style.row}>
        <Inputcontrol
          label="Title"
          placeholder="Enter title eg. Chat app"
          defaultValue={values.title}
          onChange={(e) =>
            setValues((prev) => ({ ...prev, title: e.target.value }))
          }
        />
      </div>
      <Inputcontrol
        label="Overview"
        placeholder="Enter basic overview of project"
        defaultValue={values.overview}
        onChange={(e) =>
          setValues((prev) => ({ ...prev, overview: e.target.value }))
        }
      />
      <div className={Style.row}>
        <Inputcontrol
          label="Deployed Link"
          placeholder="Enter deployed link of project"
          defaultValue={values.deployLink}
          onChange={(e) =>
            setValues((prev) => ({ ...prev, deployLink: e.target.value }))
          }
        />
        <Inputcontrol
          label="Github Link"
          placeholder="Enter github link of project"
          defaultValue={values.githubLink}
          onChange={(e) =>
            setValues((prev) => ({ ...prev, githubLink: e.target.value }))
          }
        />
      </div>
      <div className={Style.column}>
        <label>Enter project description</label>
        <Inputcontrol
          placeholder="Line 1"
          defaultValue={values.points ? values.points[0] : ""}
          onChange={(e) => pointUpdateChange(e.target.value, 0)}
        />
        <Inputcontrol
          placeholder="Line 2"
          defaultValue={values.points ? values.points[1] : ""}
          onChange={(e) => pointUpdateChange(e.target.value, 1)}
        />
        <Inputcontrol
          placeholder="Line 3"
          defaultValue={values.points ? values.points[2] : ""}
          onChange={(e) => pointUpdateChange(e.target.value, 2)}
        />
        <Inputcontrol
          placeholder="Line 4"
          defaultValue={values.points ? values.points[3] : ""}
          onChange={(e) => pointUpdateChange(e.target.value, 3)}
        />
      </div>
    </div>
  );
  const educationBody = (
    <div className={Style.detail}>
      <div className={Style.row}>
        <Inputcontrol
          label="Title"
          placeholder="Enter title eg. B-tech"
          defaultValue={values.title}
          onChange={(e) =>
            setValues((prev) => ({ ...prev, title: e.target.value }))
          }
        />
      </div>
      <Inputcontrol
        label="College/School Name"
        placeholder="Enter name of your college/school"
        defaultValue={values.college}
        onChange={(e) =>
          setValues((prev) => ({ ...prev, college: e.target.value }))
        }
      />
      <div className={Style.row}>
        <Inputcontrol
          label="Start Date"
          type="date"
          placeholder="Enter start date of this education"
          defaultValue={values.startDate}
          onChange={(e) =>
            setValues((prev) => ({ ...prev, startDate: e.target.value }))
          }
        />
        <Inputcontrol
          label="End Date"
          type="date"
          placeholder="Enter end date of this education"
          defaultValue={values.endDate}
          onChange={(e) =>
            setValues((prev) => ({ ...prev, endDate: e.target.value }))
          }
        />
      </div>
    </div>
  );
  const basicInfoBody = (
    <div className={Style.detail}>
      <div className={Style.row}>
        <Inputcontrol
          label="Name"
          placeholder="Enter your full name eg. Aashu"
          defaultValue={values.name}
          onChange={(e) =>
            setValues((prev) => ({ ...prev, name: e.target.value }))
          }
        />
        <Inputcontrol
          label="Title"
          placeholder="Enter your title eg. Frontend developer"
          defaultValue={values.title}
          onChange={(e) =>
            setValues((prev) => ({ ...prev, title: e.target.value }))
          }
        />
      </div>
      <div className={Style.row}>
        <Inputcontrol
          label="Linkedin Link"
          placeholder="Enter your linkedin profile link"
          defaultValue={values.linkedin}
          onChange={(e) =>
            setValues((prev) => ({ ...prev, linkedin: e.target.value }))
          }
        />
        <Inputcontrol
          label="Github Link"
          placeholder="Enter your github profile link"
          defaultValue={values.github}
          onChange={(e) =>
            setValues((prev) => ({ ...prev, github: e.target.value }))
          }
        />
      </div>
      <div className={Style.row}>
        <Inputcontrol
          label="Email"
          placeholder="Enter your email"
          defaultValue={values.email}
          onChange={(e) =>
            setValues((prev) => ({ ...prev, email: e.target.value }))
          }
        />
        <Inputcontrol
          label="Enter phone"
          defaultValue={values.phone}
          placeholder="Enter your phone number"
          onChange={(e) =>
            setValues((prev) => ({ ...prev, phone: e.target.value }))
          }
        />
      </div>
    </div>
  );
  const achievementsBody = (
    <div className={Style.detail}>
      <div className={Style.column}>
        <label>List your achievements</label>
        <Inputcontrol
          placeholder="Line 1"
          defaultValue={values.points ? values.points[0] : ""}
          onChange={(e) => pointUpdateChange(e.target.value, 0)}
        />
        <Inputcontrol
          placeholder="Line 2"
          defaultValue={values.points ? values.points[1] : ""}
          onChange={(e) => pointUpdateChange(e.target.value, 1)}
        />
        <Inputcontrol
          placeholder="Line 3"
          defaultValue={values.points ? values.points[2] : ""}
          onChange={(e) => pointUpdateChange(e.target.value, 2)}
        />
        <Inputcontrol
          placeholder="Line 4"
          defaultValue={values.points ? values.points[3] : ""}
          onChange={(e) => pointUpdateChange(e.target.value, 3)}
        />
      </div>
    </div>
  );
  const summaryBody = (
    <div className={Style.detail}>
      <Inputcontrol
        label="Summary"
        placeholder="Enter your objective/summary"
        defaultValue={values.summary}
        onChange={(e) =>
          setValues((prev) => ({ ...prev, summary: e.target.value }))
        }
      />
    </div>
  );
  const otherBody = (
    <div className={Style.detail}>
      <Inputcontrol
        label="Other"
        placeholder="Enter something"
        defaultValue={values.other}
        onChange={(e) =>
          setValues((prev) => ({ ...prev, other: e.target.value }))
        }
      />
    </div>
  );

  const generateBody = () => {
    switch (sections[activesection]) {
      case sections.basicInfo:
        return basicInfoBody;
      case sections.workExp:
        return workExpBody;
      case sections.project:
        return projectBody;
      case sections.education:
        return educationBody;
      case sections.achievements:
        return achievementsBody;
      case sections.summary:
        return summaryBody;
      case sections.other:
        return otherBody;
      default:
        return null;
    }
  };
  // effect for chips showing
  useEffect(() => {
    const activeinformation = resumeinfo[sections[activesection]];
    setActiveinfo(activeinformation);
    setSectiontitle(sections[activesection]);
    setActiveIndex(0);
    setValues(() => ({
      name: activeinfo?.detail?.name || "",
      title: activeinfo?.details
        ? activeinfo.details[0]?.title || ""
        : activeinfo?.detail?.title || "",
      linkedin: activeinfo?.detail?.linkedin || "",
      github: activeinfo?.detail?.github || "",
      phone: activeinfo?.detail?.phone || "",
      email: activeinfo?.detail?.email || "",
      companyName: activeinfo?.details
        ? activeinfo.details[0]?.companyName || ""
        : "",
      certificationLink: activeinfo?.details
        ? activeinfo.details[0]?.certificationLink || ""
        : "",
      workType: activeinfo?.details
        ? activeinfo.details[0]?.workType || ""
        : "",
      startDate: activeinfo?.details
        ? activeinfo.details[0]?.startDate || ""
        : "",
      endDate: activeinfo?.details ? activeinfo.details[0]?.endDate || "" : "",
      overview: activeinfo?.details
        ? activeinfo.details[0]?.overview || ""
        : "",
      deployLink: activeinfo?.details
        ? activeinfo.details[0]?.deployLink || ""
        : "",
      githubLink: activeinfo?.details
        ? activeinfo.details[0]?.githubLink || ""
        : "",
      college: activeinfo?.details ? activeinfo.details[0]?.college || "" : "",
      summary: typeof activeinfo?.detail !== "object" ? activeinfo.detail : "",
      other: typeof activeinfo?.detail !== "object" ? activeinfo.detail : "",
      points: activeinfo?.details
        ? activeinfo.details[0]?.points
          ? [...activeinfo.details[0]?.points]
          : ""
        : activeinfo?.points
        ? [...activeinfo.points]
        : "",
    }));
  }, [activesection]);

  useEffect(() => {
    console.log(resumeinfo);
  }, [resumeinfo]);

  useEffect(() => {
    setValues({
      title: activeinfo?.details
        ? activeinfo.details[activeIndex]?.title || ""
        : activeinfo?.detail?.title || "",
      companyName: activeinfo?.details
        ? activeinfo.details[activeIndex]?.companyName || ""
        : "",
      certificationLink: activeinfo?.details
        ? activeinfo.details[activeIndex]?.certificationLink || ""
        : "",
      workType: activeinfo?.details
        ? activeinfo.details[activeIndex]?.workType || ""
        : "",
      startDate: activeinfo?.details
        ? activeinfo.details[activeIndex]?.startDate || ""
        : "",
      endDate: activeinfo?.details
        ? activeinfo.details[activeIndex]?.endDate || ""
        : "",
      overview: activeinfo?.details
        ? activeinfo.details[activeIndex]?.overview || ""
        : "",
      deployLink: activeinfo?.details
        ? activeinfo.details[activeIndex]?.deployLink || ""
        : "",
      githubLink: activeinfo?.details
        ? activeinfo.details[activeIndex]?.githubLink || ""
        : "",
      college: activeinfo?.details
        ? activeinfo.details[activeIndex]?.college || ""
        : "",
      points: activeinfo?.details
        ? activeinfo.details[activeIndex]?.points
          ? [...activeinfo.details[activeIndex]?.points]
          : ""
        : activeinfo?.points
        ? [...activeinfo.points]
        : "",
    });
  }, [activeIndex]);

  useEffect(() => {
    setActiveinfo(resumeinfo[sections[activesection]]);
  }, [resumeinfo]);

  const handelsubmit = (e) => {
    e.preventDefault();
    switch (sections[activesection]) {
      case sections.basicInfo: {
        const temp = {
          name: values.name,
          title: values.title,
          linkedin: values.linkedin,
          github: values.github,
          email: values.email,
          phone: values.phone,
        };
        setResumeInfo((prev) => ({
          ...prev,
          [sections.basicInfo]: {
            ...prev[sections.basicInfo],
            detail: temp,
            sectiontitle,
          },
        }));
        break;
      }
      case sections.workExp: {
        const temp = {
          title: values.title,
          certificationLink: values.certificationLink,
          startDate: values.startDate,
          endDate: values.endDate,
          companyName: values.companyName,
          workType: values.workType,
          points: values.points,
        };
        const temps = [...resumeinfo[sections.workExp]?.details];
        temps[activeIndex] = temp;
        setResumeInfo((prev) => ({
          ...prev,
          [sections.workExp]: {
            ...prev[sections.workExp],
            details: temps,
            sectiontitle,
          },
        }));
        break;
      }
      case sections.project: {
        const temp = {
          overview: values.overview,
          title: values.title,
          deployLink: values.deployLink,
          githubLink: values.githubLink,
          points: values.points,
        };
        const temps = [...resumeinfo[sections.project]?.details];
        temps[activeIndex] = temp;
        setResumeInfo((prev) => ({
          ...prev,
          [sections.project]: {
            ...prev[sections.project],
            details: temps,
            sectiontitle,
          },
        }));
        break;
      }
      case sections.education: {
        const temp = {
          college: values.college,
          title: values.title,
          startDate: values.startDate,
          endDate: values.endDate,
          points: values.points,
        };
        const temps = [...resumeinfo[sections.education]?.details];
        temps[activeIndex] = temp;
        setResumeInfo((prev) => ({
          ...prev,
          [sections.education]: {
            ...prev[sections.education],
            details: temps,
            sectiontitle,
          },
        }));
        break;
      }
      case sections.achievements: {
        const temp = values.points;

        setResumeInfo((prev) => ({
          ...prev,
          [sections.achievements]: {
            ...prev[sections.achievements],
            points: temp,
            sectiontitle,
          },
        }));
        break;
      }
      case sections.summary: {
        const temp = values.summary;
        setResumeInfo((prev) => ({
          ...prev,
          [sections.summary]: {
            ...prev[sections.summary],
            detail: temp,
            sectiontitle,
          },
        }));
        break;
      }
      case sections.other: {
        const temp = values.other;
        setResumeInfo((prev) => ({
          ...prev,
          [sections.other]: {
            ...prev[sections.other],
            detail: temp,
            sectiontitle,
          },
        }));
        break;
      }
      default:
    }
  };

  const addNew = () => {
    const details = activeinfo?.details;
    if (!Object.keys(details).length) return;
    const lastItem = details[details.length - 1];
    if (!Object.keys(lastItem).length) return;
    details.push({});
    setResumeInfo((prev) => ({
      ...prev,
      [sections[activesection]]: {
        ...resumeinfo[sections[activesection]],
        details: details,
      },
    }));
    setActiveIndex(details?.length - 1);
  };
  const handleDelete = (index) => {
    const details = activeinfo?.details;
    if (!Object.keys(details).length) return;
    details.splice(index, 1);
    setResumeInfo((prev) => ({
      ...prev,
      [sections[activesection]]: {
        ...resumeinfo[sections[activesection]],
        details: details,
      },
    }));
    // console.log(index);
    setActiveIndex((prev) => (prev === 0 ? 0 : prev - 1));
  };
  return (
    <div className={Style.container}>
      <div className={Style.header}>
        {Object.keys(sections)?.map((item) => (
          <div
            className={`${Style.section} ${
              activesection === item ? Style.active : ""
            }`}
            key={item}
            onClick={() => {
              setactivesection(item);
            }}
          >
            {sections[item]}
          </div>
        ))}
      </div>
      <div className={Style.body}>
        <Inputcontrol
          label="Title"
          placeholder={"Enter section title"}
          value={sectiontitle}
          onChange={(e) => setSectiontitle(e.target.value)}
        />
        <div className={Style.chips}>
          {activeinfo?.details
            ? activeinfo?.details?.map((item, idx) => {
                return (
                  <div
                    className={`${Style.chip} ${
                      activeIndex === idx ? Style.active : ""
                    }`}
                    key={idx}
                    onClick={() => setActiveIndex(idx)}
                  >
                    <p>
                      {sections[activesection]}
                      {idx + 1}
                    </p>
                    <X
                      onClick={(e) => {
                        e.stopPropagation();
                        handleDelete(idx);
                      }}
                    />
                  </div>
                );
              })
            : ""}
          {activeinfo?.details && activeinfo?.details?.length > 0 ? (
            <div className={Style.new} onClick={addNew}>
              +New
            </div>
          ) : (
            ""
          )}
        </div>
        {/* generating body of each active section  */}
        {generateBody()}
        <button onClick={handelsubmit}>save</button>
      </div>
    </div>
  );
};

export default Editor;
