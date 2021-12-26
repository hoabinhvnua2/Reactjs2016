import axios from "axios";
import {useEffect, useState } from "react";
import {Link} from "react-router-dom";
import "./Sidebar.css";
function Sidebar(){
    const [cats, setCats] = useState([]);
    useEffect(() => {
        const getCats = async () => {
          const res = await axios.get("/categories");
          setCats(res.data);
        };
        getCats();
    }, []);
    return(
        <div className="sidebar">
            <div className="sidebarItem">
                <span className="sidebarTitle">ABOUT ME</span>
                <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnzjC6RalAw5KJVTShXR5_igHY31lHsHiJjw_ziHIzlwK-3shXbSWSNSUEDLnaoBe1RoE&usqp=CAU"
                    alt=""
                />
                <p>
                    Hi, my name is Hoang Nguyen and you are visiting my custom blog, enjoy your day!
                </p>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">CATEGORIES</span>
                <ul className="sidebarList">
                    {cats.map((c) => (
                <Link to={`/?cat=${c.name}`} className="link">
                    <li className="sidebarListItem">{c.name}</li>
                </Link>
                    ))}
                </ul>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">FOLLOW ME</span>
                <div className="sidebarSocial">
                <i className="sidebarIcon fab fa-facebook-square"></i>
                <i className="sidebarIcon fab fa-twitter-square"></i>
                <i className="sidebarIcon fab fa-pinterest-square"></i>
                <i className="sidebarIcon fab fa-instagram-square"></i>
                </div>
            </div>
        </div>
    );
}
export default Sidebar;