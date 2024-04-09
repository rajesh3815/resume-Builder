import React, { forwardRef, useRef } from "react";
import Style from "./Resume.module.css";
import { MdOutlineAttachEmail } from "react-icons/md";
import { FiLinkedin } from "react-icons/fi";
import { HiOutlinePhone } from "react-icons/hi";
import { LuGithub } from "react-icons/lu";
import { CiCalendar } from "react-icons/ci";
import { FaLink } from "react-icons/fa6";
import { IoLocationOutline } from "react-icons/io5";

const Resume = forwardRef(({ resumeInfo, color }, ref) => {
  const BasicDetails = resumeInfo?.BasicInfo?.detail;
  const EducationDetail = resumeInfo?.Education?.details;
  const prjectsDetail = resumeInfo?.Projects?.details;
  const AchievementsDetail = resumeInfo?.Achievements?.points;
  const WorkExperienceDetail = resumeInfo?.WorkExperience?.details;
  const SummaryDetail = resumeInfo?.Summary?.detail;
  const OtherDetail = resumeInfo?.Other?.detail;
  // console.log(BasicDetails.github);

  const formatDate = (inputDate) => {
    const date = new Date(inputDate);
    const options = { month: "long", year: "numeric" };
    return date.toLocaleDateString("en-US", options);
  };

  return (
    <div ref={ref} className={Style.container}>
      <div className={Style.header}>
        <p className={Style.heading}>{BasicDetails.name}</p>
        <p className={Style.subHeading} style={{ color: color }}>
          {BasicDetails.title}
        </p>
        <div className={Style.links}>
          <p>
            <MdOutlineAttachEmail style={{ color: color }} />
            {BasicDetails.email}
          </p>
          <p>
            <HiOutlinePhone style={{ color: color }} />
            {BasicDetails.phone}
          </p>
          <a
            href={BasicDetails.linkedin}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FiLinkedin style={{ color: color }} />{" "}
            <span>Linkedin profile</span>
          </a>
          <a
            href={BasicDetails.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            <LuGithub style={{ color: color }} />
            <span>Github Profile</span>
          </a>
        </div>
      </div>
      <div className={Style.containerInner}>
        <div className={Style.left}>
          <div className={Style.Education}>
            <p className={Style.sectionHeader}>Education</p>
            {EducationDetail?.map((edu, index) => {
              return (
                <div key={index} className={Style.educationChip}>
                  <div className={Style.educationChipLeft}>
                    <p>{edu.title}</p>
                    <p>{edu.college}</p>
                  </div>
                  <div className={Style.educationChipRight}>
                    <p className={Style.dates}>
                      {" "}
                      <CiCalendar
                        style={{ fontSize: "1.1rem", color: color }}
                      />
                      {formatDate(edu.startDate)} - {formatDate(edu.endDate)}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
          <div className={Style.prjects}>
            <p className={Style.sectionHeader}>Projects</p>
            {prjectsDetail?.map((project, ind) => {
              return (
                <div key={ind} className={Style.projectChip}>
                  <p
                    style={{
                      fontSize: "1.2rem",
                      marginBottom: "7px",
                      letterSpacing: "1px",
                      color: "#666666",
                    }}
                  >
                    {project.title}
                  </p>
                  <span className={Style.linkSpan} style={{ color: color }}>
                    <FaLink style={{ color: color }} />{" "}
                    <a href={project.deployLink}>{project.deployLink}</a>
                    <br />
                  </span>
                  <span className={Style.linkSpan} style={{ color: color }}>
                    <LuGithub style={{ color: color }} />{" "}
                    <a href={project.githubLink}>{project.githubLink}</a>
                  </span>
                  <p className={Style.overview}>Project Overview:</p>
                  <p style={{ wordBreak: "break-word", marginBottom: "5px" }}>
                    {project.overview}
                  </p>
                  <ul>
                    {project.points &&
                      project.points?.map((point, index) => {
                        return <li key={index}>{point}</li>;
                      })}
                  </ul>
                </div>
              );
            })}
          </div>
          <div className={Style.achivement}>
            <p className={Style.sectionHeader}>Achievements</p>
            <ul>
              {AchievementsDetail.map((point, index) => {
                return (
                  <li key={index}>
                    <p>{point}</p>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <div className={Style.right}>
          <div className={Style.workexp}>
            <p className={Style.sectionHeader}>Work Experience</p>
            {WorkExperienceDetail.map((work, index) => {
              return (
                <div className={Style.workChip}>
                  <p style={{ fontSize: "1.4rem", marginBottom: "10px" }}>
                    {work.title}
                  </p>
                  <p
                    style={{
                      fontSize: "1.1rem",
                      fontWeight: "bold",
                      letterSpacing: "1px",
                      marginBottom: "5px",
                      color: color,
                    }}
                  >
                    {work.companyName}
                  </p>
                  <p className={Style.linkSpan}>
                    <CiCalendar style={{ color: color }} />
                    {formatDate(work.startDate)} - {formatDate(work.endDate)}
                  </p>
                  <p className={Style.linkSpan}>
                    <IoLocationOutline style={{ color: color }} />
                    {work.workType}
                  </p>
                  <ul>
                    {console.log(work.points)}

                    {work.points &&
                      work?.points?.map((point, index) => (
                        <li key={index}>{point}</li>
                      ))}
                  </ul>
                </div>
              );
            })}
          </div>
          <div className={Style.summary}>
            <p className={Style.sectionHeader}>Summary</p>
            <p style={{ fontSize: "1.18rem", marginBottom: "10px" }}>
              {SummaryDetail}
            </p>
          </div>
          <div className={Style.other}>
            <p className={Style.sectionHeader}>Other</p>
            <p style={{ fontSize: "1.18rem", marginBottom: "10px" }}>
              {OtherDetail}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
});

export default Resume;
