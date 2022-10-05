import React from "react";
import List from "./List";


const Content = ({ handleCheck, handleDelete, items }) => {


  return (
    <>
      {items.length == 0 ? <h2>Empty list !</h2> :
        <List
          items={items}
          handleCheck={handleCheck}
          handleDelete={handleDelete} />
      }

    </>
  );
};

export default Content;
