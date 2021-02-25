import React, {useContext} from 'react';
import {CustomContext} from "../hooks/Context";
import Book from "./Book";

function Books () {
  const {books = []} = useContext(CustomContext);
  return (
    <div className="Books">
      {books.map(item => {
        return <Book {...item} key={item.id}/>;
      })}
    </div>
  );
}

export default Books;
