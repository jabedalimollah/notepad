import React, { useEffect, useState } from "react";
import { BsArrowLeft } from "react-icons/bs";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaSave } from "react-icons/fa";
import "./style/textcomponent.css";
import { useDispatch } from "react-redux/es/exports";
import { createPost, getPosts } from "../redux/slice/notebookSlice";
const TextComponent = (props) => {
  const [condition, setCondition] = useState(false);
  const [details, setDetails] = useState({
    date: "",
    time: "",
    day: "",
    month: "",
    title: "",
    textcontent: "",
  });
  const [saveCondition, setSaveCondition] = useState(false);
  const dispatch = useDispatch();
  function formatAMPM() {
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let ampm = hours >= 12 ? "pm" : "am";
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? "0" + minutes : minutes;
    let strTime = hours + ":" + minutes + " " + ampm;
    let updatedate = `${date.getDate()}/${
      date.getMonth() + 1
    }/${date.getFullYear()}`;
    let setDay = date.getDate();
    let MonthName = "";
    switch (date.getMonth()) {
      case 0:
        MonthName = "Jan";
        // code block
        break;
      case 1:
        MonthName = "Fab";
        // code block
        break;
      case 2:
        MonthName = "Mar";
        break;
      case 3:
        MonthName = "Apr";
        break;
      case 4:
        MonthName = "May";
        break;
      case 5:
        MonthName = "Jun";
        break;
      case 6:
        MonthName = "Jul";
        break;
      case 7:
        MonthName = "Aug";
        break;
      case 8:
        MonthName = "Sep";
        break;
      case 9:
        MonthName = "Oct";
        break;
      case 10:
        MonthName = "Nov";
        break;
      case 11:
        MonthName = "Dec";
        break;
      // code block
    }
    setDetails({
      ...details,
      date: updatedate,
      time: strTime,
      day: setDay,
      month: MonthName,
    });
  }
  useEffect(() => {
    formatAMPM();
  }, []);
  const textBackbutton = () => {
    props.createDataRecive(false);
    dispatch(getPosts());
  };
  const savebtn = () => {
    setCondition(false);
    console.log(details);
    dispatch(createPost(details));
    dispatch(getPosts());
    setSaveCondition(false);
  };
  const textChange = (e) => {
    setDetails({
      ...details,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <div className="TextArea">
      <div className="textHeader">
        <button className="textBack-btn" onClick={textBackbutton}>
          <BsArrowLeft></BsArrowLeft>
        </button>
        <h4 className="NotebookText">Notebook</h4>
        <button
          className="textareaMenu"
          onClick={() => {
            return setCondition(!condition), setSaveCondition(!saveCondition);
          }}
        >
          <BsThreeDotsVertical></BsThreeDotsVertical>
        </button>
      </div>
      {condition ? (
        <div className="threedotmenu">
          <button className="savebtn" onClick={savebtn}>
            <span>
              <FaSave></FaSave>
            </span>
            <span> Save</span>
          </button>
          {/* <input type="color" name="" id="" className="textBgcolor" /> */}
        </div>
      ) : null}
      <div className="dateAndTime">
        <span className="date">{details.date}</span>
        <span className="time">{details.time}</span>
      </div>
      <input
        type="text"
        className="textTitle"
        placeholder="Write Title : "
        name="title"
        onChange={(e) => textChange(e)}
        disabled={saveCondition}
      />

      <textarea
        className="textContent"
        name="textcontent"
        onChange={(e) => textChange(e)}
        disabled={saveCondition}
      ></textarea>
    </div>
  );
};

export default TextComponent;
