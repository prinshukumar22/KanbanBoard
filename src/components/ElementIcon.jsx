/* eslint-disable react/prop-types */
import urgImg from "../assets/SVG - Urgent Priority colour.svg";
import highImg from "../assets/Img - High Priority.svg";
import medImg from "../assets/Img - Medium Priority.svg";
import lowImg from "../assets/Img - Low Priority.svg";
import noImg from "../assets/No-priority.svg";
import todo from "../assets/To-do.svg";
import inprog from "../assets/in-progress.svg";
import backlog from "../assets/Backlog.svg";
import cancelled from "../assets/Cancelled.svg";
import done from "../assets/Done.svg";

const elementToIconMapping = {
  Urgent: urgImg,
  High: highImg,
  Medium: medImg,
  Low: lowImg,
  "No priority": noImg,
  Todo: todo,
  "In progress": inprog,
  Backlog: backlog,
  Cancelled: cancelled,
  Done: done,
};

export const ElementIcon = ({ element }) => {
  const imgsrc = elementToIconMapping[element];

  if (!imgsrc) {
    // Handle the case when no icon is found for the element
    return null;
  }

  return <img src={imgsrc} alt="img" />;
};
