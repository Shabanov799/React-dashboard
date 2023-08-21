import { Button, Input } from 'reactstrap'
import { FaSearch } from "react-icons/fa";
import americanFlag from '../../assets/images/american-flag.png'
import { RiArrowDropDownLine } from "react-icons/ri"
import { BsBell } from "react-icons/bs"
import profilePhoto from "../../assets/images/profile-photo.png"

function Header() {

    return (
        <div className='header'>
            <div className="header-logo">
                <h1>Dashboard</h1>
            </div>
            <div className="header-input">
                <FaSearch
                    className='icon'
                />
                <Input
                    placeholder='Search here...'
                />
            </div>
            <div className="header-language">
                <div className="language-img">
                    <img src={americanFlag} alt="flag" />
                </div>
                <div className='language-content'>
                    <span>Eng (US)</span>
                    <RiArrowDropDownLine
                        className='icon'
                    />
                </div>
            </div>
            <div className="header-profile">
                <div className="bell">
                    <BsBell
                        className='icon'
                    />
                </div>

                <div className="profile-photo">
                    <img src={profilePhoto} alt="pp" />
                </div>

                <div className="profile-name">
                    <span>Musfiq</span>
                    <span>Admin</span>
                </div>

                <RiArrowDropDownLine
                    className='icon'
                />

            </div>
        </div>
    )
}

export default Header