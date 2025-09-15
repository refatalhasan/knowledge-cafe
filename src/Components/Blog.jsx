import { CiBookmark } from "react-icons/ci";

const Blog = ({ blog, handleAddToBookmark }) => {

    const { cover_image, title, author, author_image, posted_date, hashtag, reading_time } = blog;

    return (
        <div className="gap-3 flex flex-col mb-10 bg-gray-100 p-8 rounded">
            <img className="rounded" src={cover_image} alt="" />        
                <h2 className='text-3xl font-bold'>{title}</h2>
                <p className='text-l font-light'>Reading time: {reading_time} m</p>
            <div className="flex gap-3 items-center justify-between mt-12">
                <div className='flex gap-4'>
                    <img className="h-13 rounded-full" src={author_image} alt="" />
                    <div>
                        <h4 className="text-2xl font-bold">{author}</h4>
                        <p><small>Posted date: {posted_date}</small></p>
                    </div>
                </div>
                <div >
                    <button style={{cursor:'pointer'}} onClick={() => handleAddToBookmark(blog)}>
                    <CiBookmark  className="size-10"/>
                    </button>
                </div>
            </div>
            <p>
                {
                    hashtag.map(hash => <span className='text-blue-800'>    <a
                        href={`https://www.google.com/search?q=${encodeURIComponent(hash)}`}
                        target="_blank"
                        rel="noopener noreferrer">
                        {hash}
                    </a></span>)
                }
            </p>
        </div>
    );
};

export default Blog;