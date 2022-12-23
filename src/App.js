import { MdColorLens } from "react-icons/md";
import { BsThreeDotsVertical } from "react-icons/bs";
import { AiFillCaretDown } from "react-icons/ai";
import { AiOutlinePlus } from "react-icons/ai";
import { FiSearch } from "react-icons/fi";
import { FaUserAlt } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import UserComponent from "./component/UserComponent";
import "./App.css";
import { useState, useEffect } from "react";
import TextComponent from "./component/TextComponent";
import ThreeDot from "./component/ThreeDot";
import ThemeColor from "./component/ThemeColor";
import { useSelector, useDispatch } from "react-redux";
import { deletePost, getPosts } from "./redux/slice/notebookSlice";
import UpdateData from "./component/UpdateData";
import SearchData from "./component/SearchData";
function App() {
  const [condition, setCondition] = useState({
    usercondition: false,
    createCondition: false,
    homeMenuCondition: false,
    themeColorCondition: false,
    updateContent: false,
    searchBox: false,
  });
  const [idValue, setIdValue] = useState({
    id: "",
    value: {},
  });
  const [view, setView] = useState(1);
  const [theme, setTheme] = useState({
    cellColor: " #e4d6a7",
    containerColor: "#f5deb3",
  });
  const { posts, loading } = useSelector((state) => state.notebook);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPosts());
  }, []);
  const userRecive = (recive) => {
    setCondition({ usercondition: recive });
  };
  const createDataRecive = (recive) => {
    setCondition({ createCondition: recive });
  };
  const croseMenuRecive = (recive) => {
    setCondition({ homeMenuCondition: recive });
  };
  const viewRecive = (recive) => {
    setView(recive);
  };
  const themeColorRecive = (recive) => {
    setCondition({ themeColorCondition: recive });
  };
  const themeColorValueRecive = ({ themeBgColor, themeCellColor }) => {
    setTheme({
      cellColor: themeCellColor,
      containerColor: themeBgColor,
    });
  };
  const searchValueRecive = (recive) => {
    setCondition({ searchBox: recive });
  };
  const deleteItem = (id) => {
    dispatch(deletePost(id));
    dispatch(getPosts());
  };
  const selectId = (ids, index) => {
    setIdValue({ id: ids, value: posts[index] });
    setCondition({ updateContent: true });
  };

  return (
    <div className="App">
      <div
        className="container"
        style={{ backgroundColor: theme.containerColor }}
      >
        <div className="topbar">
          <h3 className="logo">
            <font color=" #616161">Note</font>
            <font color=" #C95E5E">book</font>
          </h3>
          <div className="btn">
            <button
              className="theme-color"
              onClick={() => setCondition({ themeColorCondition: true })}
            >
              <MdColorLens></MdColorLens>
            </button>
            <button
              className="three-dot"
              onClick={() => setCondition({ homeMenuCondition: true })}
            >
              <BsThreeDotsVertical></BsThreeDotsVertical>
            </button>
          </div>
        </div>
        <div className="titlebar">
          <button className="sortbtn">
            Sort by modified time
            <AiFillCaretDown></AiFillCaretDown>
          </button>
        </div>
        <div className="content">
          {view === 1 ? (
            loading === "pending" ? (
              <h1>Loading ....</h1>
            ) : loading === "error" ? (
              <h1>404 Not Found</h1>
            ) : (
              posts.map((item, index) => {
                if (!(item.id === 1)) {
                  return (
                    <div
                      className="cell"
                      style={{ backgroundColor: theme.cellColor }}
                      key={item.id}
                    >
                      <h4
                        className="title"
                        onClick={() => selectId(item.id, index)}
                      >
                        {item.title}
                      </h4>
                      <span className="time">
                        {item.day} {item.month}
                      </span>
                      <button
                        className="delete-btn"
                        onClick={() => deleteItem(item.id)}
                      >
                        <MdDelete></MdDelete>
                      </button>
                    </div>
                  );
                }
              })
            )
          ) : view === 2 ? (
            loading === "pending" ? (
              <h1>Loading ....</h1>
            ) : loading === "error" ? (
              <h1>404 Not Found</h1>
            ) : (
              posts.map((item, index) => {
                if (!(item.id === 1)) {
                  return (
                    <div
                      className="cell1"
                      style={{ backgroundColor: theme.cellColor }}
                      key={item.id}
                    >
                      <h4
                        className="cell1title"
                        onClick={() => selectId(item.id, index)}
                      >
                        {item.title}
                      </h4>
                      <p
                        className="cell1content"
                        onClick={() => selectId(item.id, index)}
                      >
                        {item.textcontent}
                      </p>
                      <span className="cell1time">
                        {/* {item.day} {item.month}  */}
                        {item.time} {item.date}
                        <button
                          className="cell1delete-btn"
                          onClick={() => deleteItem(item.id)}
                        >
                          <MdDelete></MdDelete>
                        </button>
                      </span>
                    </div>
                  );
                }
              })
            )
          ) : view === 3 ? (
            loading === "pending" ? (
              <h1>Loading ....</h1>
            ) : loading === "error" ? (
              <h1>404 Not Found</h1>
            ) : (
              posts.map((item, index) => {
                if (!(item.id === 1)) {
                  return (
                    <div
                      className="cell2"
                      style={{ backgroundColor: theme.cellColor }}
                      key={item.id}
                    >
                      <h4
                        className="cell2title"
                        onClick={() => selectId(item.id, index)}
                      >
                        {item.title}
                      </h4>
                      <p
                        className="cell2content"
                        onClick={() => selectId(item.id, index)}
                      >
                        {item.textcontent}
                      </p>
                      <span className="cell1time">
                        {item.day} {item.month}{" "}
                        <button
                          className="cell1delete-btn"
                          onClick={() => deleteItem(item.id)}
                        >
                          <MdDelete></MdDelete>
                        </button>
                      </span>
                    </div>
                  );
                }
              })
            )
          ) : view === 4 ? (
            loading === "pending" ? (
              <h1>Loading ....</h1>
            ) : loading === "error" ? (
              <h1>404 Not Found</h1>
            ) : (
              posts.map((item, index) => {
                if (!(item.id === 1)) {
                  return (
                    <div
                      className="cell3"
                      style={{ backgroundColor: theme.cellColor }}
                      key={item.id}
                    >
                      <h4
                        className="cell2title"
                        onClick={() => selectId(item.id, index)}
                      >
                        {item.title}
                      </h4>
                      <p
                        className="cell2content"
                        onClick={() => selectId(item.id, index)}
                      >
                        {item.textcontent}
                      </p>
                      <span className="cell2time">
                        {/* {item.day} {item.month}{" "} */}
                        {item.date}
                        <button
                          className="cell1delete-btn"
                          onClick={() => deleteItem(item.id)}
                        >
                          <MdDelete></MdDelete>
                        </button>
                      </span>
                    </div>
                  );
                }
              })
            )
          ) : null}
        </div>
        <div className="bottombar">
          <button
            className="search-btn"
            onClick={() => setCondition({ searchBox: true })}
          >
            <FiSearch></FiSearch>
          </button>
          <button
            className="add-btn"
            onClick={() => setCondition({ createCondition: true })}
          >
            <AiOutlinePlus></AiOutlinePlus>
          </button>

          <button
            className="user"
            onClick={() => {
              setCondition({ usercondition: true });
            }}
          >
            <FaUserAlt></FaUserAlt>
          </button>
        </div>
      </div>
      {condition.usercondition ? (
        <UserComponent userRecive={userRecive} />
      ) : null}
      {condition.createCondition ? (
        <TextComponent createDataRecive={createDataRecive} />
      ) : null}
      {condition.homeMenuCondition ? (
        <ThreeDot croseMenuRecive={croseMenuRecive} viewRecive={viewRecive} />
      ) : null}
      {condition.themeColorCondition ? (
        <ThemeColor
          themeColorRecive={themeColorRecive}
          themeColorValueRecive={themeColorValueRecive}
        />
      ) : null}
      {condition.updateContent ? (
        <UpdateData ids={idValue} createDataRecive={createDataRecive} />
      ) : null}

      {condition.searchBox ? (
        <SearchData searchValueRecive={searchValueRecive} />
      ) : null}
    </div>
  );
}

export default App;

// ------------------------------------------------
{
  /* ..................... */
}
{
  /* <div className="cell" style={{ backgroundColor: theme.cellColor }}>
            <h4 className="title">
              Dear Alex Smith Lorem ipsum dolor sit, amet consectetur
              adipisicing elit. Sunt, deserunt? Voluptate, rerum?
            </h4>
            <span className="time">1:38pm</span>
            <button className="delete-btn">
              <MdDelete></MdDelete>
            </button>
          </div> */
}
{
  /* ............... */
}
