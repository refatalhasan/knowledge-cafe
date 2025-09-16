import { useState } from 'react'
import './App.css'
import Blogs from './Components/Blogs'
import Bookmarks from './Components/Bookmarks'
import Header from './Components/Header'

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0);

  const handleAddToBookmark = blog => {
    const newBookmarks = [...bookmarks, blog];
    setBookmarks(newBookmarks);
  }

  const handleMarkasRead = time => {
    const newReadingTime = readingTime + time;
    setReadingTime(newReadingTime);
  }

  return (
    <>
      <Header></Header>
      <div className="flex justify-center w-4/5 h-fit mx-auto gap-5">
        <div className="w-4/7">
          <Blogs handleMarkasRead={handleMarkasRead} handleAddToBookmark={handleAddToBookmark}></Blogs>
        </div>
        <div className="w-2/7">
          <Bookmarks bookmarks={bookmarks} readingTime={readingTime}></Bookmarks>
        </div>
      </div>

    </>
  )
}

export default App
