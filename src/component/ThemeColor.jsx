import React from "react";
import "./style/themeColor.css";
const ThemeColor = (props) => {
  return (
    <div className="theme-color-body">
      <button
        className="themecolor-close"
        onClick={() => props.themeColorRecive(false)}
      >
        X
      </button>
      <div className="colorPlate">
        <button
          className="ThemeColor ThemeColor1"
          onClick={() => {
            return (
              props.themeColorValueRecive({
                themeBgColor: "#f5deb3",
                themeCellColor: "#e4d6a7",
              }),
              props.themeColorRecive(false)
            );
          }}
        ></button>
        <button
          className="ThemeColor ThemeColor2"
          onClick={() => {
            return (
              props.themeColorValueRecive({
                themeBgColor: "pink",
                themeCellColor: "rgb(219, 167, 175)",
              }),
              props.themeColorRecive(false)
            );
          }}
        ></button>
        <button
          className="ThemeColor ThemeColor3"
          onClick={() => {
            return (
              props.themeColorValueRecive({
                themeBgColor: "lightsalmon",
                themeCellColor: "rgb(210, 132, 101)",
              }),
              props.themeColorRecive(false)
            );
          }}
        ></button>
        <button
          className="ThemeColor ThemeColor4"
          onClick={() => {
            return (
              props.themeColorValueRecive({
                themeBgColor: "lightgreen",
                themeCellColor: "rgb(119, 198, 119)",
              }),
              props.themeColorRecive(false)
            );
          }}
        ></button>
        <button
          className="ThemeColor ThemeColor5"
          onClick={() => {
            return (
              props.themeColorValueRecive({
                themeBgColor: "#c1a6e0",
                themeCellColor: "#aa93c4",
              }),
              props.themeColorRecive(false)
            );
          }}
        ></button>
        <button
          className="ThemeColor ThemeColor6"
          onClick={() => {
            return (
              props.themeColorValueRecive({
                themeBgColor: "lightblue",
                themeCellColor: "rgb(143, 178, 190)",
              }),
              props.themeColorRecive(false)
            );
          }}
        ></button>
        <button
          className="ThemeColor ThemeColor7"
          onClick={() => {
            return (
              props.themeColorValueRecive({
                themeBgColor: "lightseagreen",
                themeCellColor: "rgb(32, 148, 142)",
              }),
              props.themeColorRecive(false)
            );
          }}
        ></button>
        <button
          className="ThemeColor ThemeColor8"
          onClick={() => {
            return (
              props.themeColorValueRecive({
                themeBgColor: "rgb(167, 167, 167)",
                themeCellColor: "rgb(149, 149, 149)",
              }),
              props.themeColorRecive(false)
            );
          }}
        ></button>
        <button
          className="ThemeColor ThemeColor9"
          onClick={() => {
            return (
              props.themeColorValueRecive({
                themeBgColor: "lightskyblue",
                themeCellColor: "rgb(119, 178, 215)",
              }),
              props.themeColorRecive(false)
            );
          }}
        ></button>
        <button
          className="ThemeColor ThemeColor10"
          onClick={() => {
            return (
              props.themeColorValueRecive({
                themeBgColor: "rgb(166, 166, 125)",
                themeCellColor: "rgb(143, 143, 109)",
              }),
              props.themeColorRecive(false)
            );
          }}
        ></button>
      </div>
    </div>
  );
};

export default ThemeColor;
