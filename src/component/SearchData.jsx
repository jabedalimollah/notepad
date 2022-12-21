import React from "react";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { BsArrowLeft } from "react-icons/bs";
import { MdDelete } from "react-icons/md";
import "./style/searchData.css";
import {
  deletePost,
  getPosts,
  searchCondition,
} from "../redux/slice/notebookSlice";
import UpdateData from "./UpdateData";
const SearchData = (props) => {
  const { posts, loading } = useSelector((state) => state.notebook);
  const [idValue, setIdValue] = useState({
    id: "",
    value: {},
  });
  const [cancelCondition, setCancelCondition] = useState(false);
  const [searchHistory, setSearchHistory] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [theme, setTheme] = useState({
    cellColor: " #e4d6a7",
    containerColor: "#f5deb3",
  });
  const dispatch = useDispatch();
  const selectId = (ids, index) => {
    console.log(ids, searchHistory[index]);
    setIdValue({ id: ids, value: searchHistory[index] });
    setCondition({ updateContent: true });
  };
  const [condition, setCondition] = useState({
    updateContent: false,
  });
  const createDataRecive = (recive) => {
    setCondition({ createCondition: recive });
  };
  let data = [];
  const searchText = (e) => {
    setSearchValue(e.target.value);
    // .............
    data = posts.filter((item) => {
      if (!(item.id === 1)) {
        let itemName = item.title.toLowerCase();
        let searchItem = searchValue.toLowerCase();
        if (itemName.search(searchItem) != -1) {
          return item;
        }
        return false;
      }
    });
    setCancelCondition(true);
    setSearchHistory(data);

    // ..........
    if (e.target.value == "") {
      setSearchHistory(posts);
      setCancelCondition(false);
    }
  };
  const HandleSearchCancleBtn = () => {
    setSearchHistory(posts);
    setSearchValue("");
    setCancelCondition(false);
  };
  useEffect(() => {
    dispatch(getPosts());
    setSearchHistory(posts);
  }, []);
  const deleteItem = (id) => {
    dispatch(deletePost(id));

    dispatch(getPosts());
    setSearchHistory(posts);
  };
  return (
    <>
      <div className="searchBox">
        <button
          className="searchBack"
          onClick={() => props.searchValueRecive(false)}
        >
          <BsArrowLeft></BsArrowLeft>
        </button>
        <div className="searchInput">
          <input
            type="text"
            value={searchValue}
            className="searchInputBox"
            onChange={searchText}
            placeholder="Search Title"
          />

          {cancelCondition ? (
            <button className="searchCancle" onClick={HandleSearchCancleBtn}>
              x
            </button>
          ) : null}
        </div>
        <div className="searchcontent">
          {loading === "pending" ? (
            <h1>Loading ....</h1>
          ) : loading === "error" ? (
            <h1>404 Not Found</h1>
          ) : (
            searchHistory.map((item, index) => {
              if (!(item.id === 1)) {
                return (
                  <div
                    className="cell"
                    style={{ backgroundColor: theme.cellColor }}
                    key={item.id}
                  >
                    <h4
                      className="title"
                      onClick={() => {
                        return selectId(item.id, index);
                      }}
                    >
                      {item.title}
                    </h4>
                    <span className="time">
                      {item.day} {item.month}
                    </span>
                    <button
                      className="delete-btn"
                      onClick={() => {
                        return (
                          deleteItem(item.id),
                          setSearchValue(""),
                          setCancelCondition(false)
                        );
                      }}
                    >
                      <MdDelete></MdDelete>
                    </button>
                  </div>
                );
              }
            })
          )}
        </div>
      </div>

      {condition.updateContent ? (
        <UpdateData ids={idValue} createDataRecive={createDataRecive} />
      ) : null}
    </>
  );
};

export default SearchData;
