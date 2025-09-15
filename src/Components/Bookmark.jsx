
const Bookmark = ({bookmark}) => {
    const {title} = bookmark;
    return (
        <div className="bg-gray-200 p-3 rounded">
            <h3 className="font-bold">{title}</h3>
        </div>
    );
};

export default Bookmark;