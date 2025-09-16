import Bookmark from "./Bookmark";


const Bookmarks = ({bookmarks, readingTime}) => {
    return (
        <div className="h-fit w-full flex flex-col gap-5 bg-gray-100 p-5 rounded">
            <h3>Reading Time: {readingTime}</h3>
            <h1 className="font-extrabold text-2xl">Total Bookmarks: {bookmarks.length}</h1>
            {
                bookmarks.map(bookmark => <Bookmark key={bookmark.id} bookmark={bookmark} ></Bookmark>)
            }
        </div>
    );
};

export default Bookmarks;