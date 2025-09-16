import { useEffect, useState } from "react";
import Blog from "./Blog";

const Blogs = ({ handleAddToBookmark, handleMarkasRead }) => {

    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch('/public/blogs.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])

    return (
        <div>
            {
                blogs.map(blog => <Blog
                    handleAddToBookmark={handleAddToBookmark}
                    handleMarkasRead={handleMarkasRead}
                    key={blog.id} blog={blog}
                ></Blog>)
            }
        </div>
    );
};

export default Blogs;