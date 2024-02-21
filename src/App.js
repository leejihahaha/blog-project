import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import React, { useReducer, useRef } from "react";

const reducer = (state, action) => {
  let newState = [];
  switch (action.type) {
    case "INIT": {
      return action.data;
    }

    case "CREATE": {
      newState = [action.data, ...state];
      break;
    }
    case "REMOVE": {
      newState = state.filter((it) => it.id !== action.targetId);
      break;
    }
    case "EDIT": {
      newState = state.map((it) =>
        it.id === action.data.id ? { ...action.data } : it
      );
      break;
    }

    default:
      return state;
  }
  return newState;
};

export const PostStateContext = React.createContext();
export const PostDispatchContext = React.createContext();

const dummyData = [
  {
    id: 1,
    title: "오늘의 일기 제목 1번",
    content: "오늘의 일기 내용 1번",
    date: 1708501178356,
  },
  {
    id: 2,
    title: "오늘의 일기 제목 2번",
    content: "오늘의 일기 내용 2번",
    date: 1708501178357,
  },
  {
    id: 3,
    title: "오늘의 일기 제목 3번",
    content: "오늘의 일기 내용 3번",
    date: 1708501178358,
  },
];

export default function App() {
  const [data, dispatch] = useReducer(reducer, dummyData);
  const dataId = useRef(0);

  //CREATE
  const onCreate = (date, content, title) => {
    dispatch({
      type: "CREATE",
      data: {
        id: dataId.current,
        date: new Date(date).getTime(),
        content,
        title,
      },
    });
    dataId.current += 1;
  };
  //REMOVE
  const onRemove = (targetId) => {
    dispatch({ type: "REMOVE", targetId });
  };
  //EDIT

  const onEdit = (targetId, date, content, title) => {
    dispatch({
      type: "Edit",
      data: {
        id: targetId,
        date: new Date(date).getTime(),
        content,
        title,
      },
    });
  };

  return (
    <>
      <PostStateContext.Provider value={data}>
        <PostDispatchContext.Provider value={{ onCreate, onRemove, onEdit }}>
          <Navbar />
          <Outlet />
        </PostDispatchContext.Provider>
      </PostStateContext.Provider>
    </>
  );
}
