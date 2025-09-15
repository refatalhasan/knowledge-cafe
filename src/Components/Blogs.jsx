import { useEffect, useState } from "react";
import Blog from "./Blog";

const Blogs = ({ handleAddToBookmark }) => {

    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch('/public/blogs.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])

    return (
        <div>
            {
                blogs.map(blog => <Blog handleAddToBookmark={handleAddToBookmark} key={blog.id} blog={blog}></Blog>)
            }
        </div>
    );
};

export default Blogs;