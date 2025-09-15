import porfile from '../images/profile.png'

const Header = () => {
    return (
        <div className='flex justify-around items-center py-4'>
                <h1 className="text-3xl font-extrabold">Knowledge cafe</h1>
            <img src={porfile} alt="" />
        </div>
    );
};

export default Header;