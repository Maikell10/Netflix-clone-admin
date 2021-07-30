import "./widgetSm.css";
import { Visibility } from "@material-ui/icons";
import { useEffect, useState } from "react";
import axios from "../../axios";

export default function WidgetSm() {
    const [newUsers, setNewUsers] = useState([]);

    useEffect(() => {
        const getNewUsers = async () => {
            try {
                const res = await axios.get("/users?new=true", {
                    headers: {
                        token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwZmFlZGRjZWRiMDBkMjBmODljOWI1MSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYyNzI0MjkxMSwiZXhwIjoxNjI3Njc0OTExfQ.jktCuQdcgaSWLSxVSPeuzUluGyIbsUwr-WiNT56MjHU",
                    },
                });
                setNewUsers(res.data);
            } catch (err) {
                console.log(err);
            }
        };
        getNewUsers();
    }, []);

    console.log(newUsers);
    return (
        <div className="widgetSm">
            <span className="widgetSmTitle">New Join Members</span>
            <ul className="widgetSmList">
                {newUsers.map((user) => (
                    <li className="widgetSmListItem" key={user._id}>
                        <img
                            src={user.profilePic}
                            alt=""
                            className="widgetSmImg"
                        />
                        <div className="widgetSmUser">
                            <span className="widgetSmUsername">
                                {user.username}
                            </span>
                        </div>
                        <button className="widgetSmButton">
                            <Visibility className="widgetSmIcon" />
                            Display
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}
