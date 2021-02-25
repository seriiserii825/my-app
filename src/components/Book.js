import React, {useContext} from 'react';
import {CustomContext} from "../hooks/Context";

function Book (props) {
  const {removeBook} = useContext(CustomContext);
  return (
    <div className="book">
      <h2 onClick={() => {removeBook(props.id)}}>{props.title}</h2>
    </div>
  );
}

export default Book;
