import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faReact,
} from "@fortawesome/free-brands-svg-icons";
import {
    faPeopleGroup,
    faUser,
    faUserSecret,
    faArrowRightFromBracket,
    faAddressCard,
} from "@fortawesome/free-solid-svg-icons";
import {useDispatch, useSelector} from "react-redux";
import {deleteUserInfo} from "../store/userSlice";
import {useNavigate} from "react-router-dom";
import {deleteData} from "../store/hitSlice";

function Header() {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const toggleBars = () => {
        document.querySelector("#nav-links").classList.toggle("is-active");
    };
    let userName = useSelector(state => state.user.username);
    let authorized = useSelector(state => state.user.authorized);
    let userId = useSelector(state => state.user.id);
    const author = {
        name: "Пушкин Антон Сергееич",
        group: "P32121",
        variant: 121027,
    };

    const userExited = () => {
        dispatch(deleteUserInfo());
        dispatch(deleteData());
        navigate('/', {replace: true});
    }

    return (
        <nav id="navbar" className="navbar has-shadow is-success mb-3 py-4 px-3 has-background-black" >
            <div className="navbar-brand is-centered has-background-black">
                <a className="navbar-burger has-background-black" id="burger" onClick={toggleBars}>
                    <span/>
                    <span/>
                    <span/>
                </a>
            </div>

            <div className="navbar-menu" id="nav-links">
                <div className="navbar-start bd-navbar-start bd-is-original">


                    <div className="navbar-item has-dropdown is-hoverable">
                        <a className="navbar-link has-background-black">Info</a>
                        <div className="navbar-dropdown is-boxed has-background-info-light">
                            <p className="navbar-item ">
                <span className="icon has-text-dark mr-2">
                  <FontAwesomeIcon icon={faUser}/>
                </span>
                                <span>{author.name}</span>
                            </p>
                            <p className="navbar-item">
                <span className="icon has-text-dark mr-2">
                  <FontAwesomeIcon icon={faPeopleGroup}/>
                </span>
                                <span>{author.group}</span>
                            </p>
                            <p className="navbar-item">
                <span className="icon has-text-dark mr-2">
                  <FontAwesomeIcon icon={faReact}/>
                </span>
                                <span>{author.variant}</span>
                            </p>

                        </div>
                    </div>
                </div>

                <div className="navbar-end">
                    <div className="navbar-item is-hoverable " >
                        <p className="control">
                            <p className="has-text-white">
                                <span className="icon pr-2">
                                    <FontAwesomeIcon icon={authorized ? faUser : faUserSecret}/>
                                </span>
                                <span>{userName}</span>
                            </p>
                            {!authorized ? null :
                                <div className="navbar-dropdown is-boxed is-right has-background-info-light">
                                    <span className="navbar-item">
                                        <span className="icon has-text-dark mr-2">
                                            <FontAwesomeIcon icon={faAddressCard}/>
                                        </span>
                                        <span>{userId}</span>
                                    </span>
                                    <hr className="navbar-divider" />
                                    <a className="navbar-item" onClick={userExited}>
                                        <span className="icon has-text-dark mr-2">
                                            <FontAwesomeIcon icon={faArrowRightFromBracket}/>
                                        </span>
                                        <span>{"Exit"}</span>
                                    </a>
                                </div>
                            }
                        </p>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Header;
