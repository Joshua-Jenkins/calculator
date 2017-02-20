import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "body": {
        "backgroundImage": "url(\"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5zMJSxs75XUMZo3qVrkCcJbMK11TyGph_BC0Z34UBPgDrT2Nj7Q\")"
    },
    "h2": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "textAlign": "center",
        "position": "relative",
        "left": 10,
        "top": 27,
        "color": "#fff"
    },
    "box": {
        "height": 400,
        "width": 250,
        "backgroundColor": "#3d4543",
        "borderRadius": 10,
        "position": "relative",
        "top": 100,
        "left": "40%",
        "boxShadow": "10px 10px"
    },
    "display": {
        "backgroundColor": "#222",
        "width": 250,
        "borderRadius": 10,
        "position": "relative",
        "height": 40
    },
    "display input": {
        "position": "relative",
        "left": 26,
        "top": 4,
        "color": "black",
        "backgroundColor": "#bccd95",
        "fontSize": 21,
        "textAlign": "right",
        "borderRadius": 20
    },
    "keys": {
        "position": "relative",
        "top": 0.5,
        "marginTop": 10,
        "marginRight": 10,
        "marginBottom": 10,
        "marginLeft": 20
    },
    "clear": {
        "height": 140
    },
    "btn": {
        "width": 30,
        "height": 30,
        "border": "none",
        "borderRadius": "50%",
        "marginLeft": 12,
        "cursor": "pointer",
        "borderTop": "2px solid transparent",
        "boxShadow": "2px 2px red",
        "transition": "1s"
    },
    "num": {
        "width": 30,
        "height": 30,
        "border": "none",
        "borderRadius": "50%",
        "marginLeft": 19,
        "cursor": "pointer",
        "borderTop": "2px solid transparent",
        "boxShadow": "2px 2px red",
        "transition": "1s"
    },
    "b": {
        "backgroundColor": "grey",
        "height": 40,
        "width": 97,
        "fontWeight": "bold",
        "fontSize": 20,
        "boxShadow": "2px 2px red",
        "transition": "1s, transform 0.8s"
    },
    "u": {
        "width": 80,
        "fontWeight": "bold",
        "fontSize": 20,
        "backgroundColor": "grey"
    },
    "btn:hover": {
        "backgroundColor": "red"
    },
    "num:hover": {
        "backgroundColor": "red"
    }
});