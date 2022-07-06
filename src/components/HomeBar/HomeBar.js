import { useState } from 'react'
import {
    UserLinks,
    UserLi,
    UserUl,
    UserNav
} from "./HomeBarStyle"


function HomeBar() {
    const [ClientStatus, setClientStatus] = useState("active");
    const [TherapistStatus, setTherapistStatus] = useState();

    function handleClick(id){
        if(id === "client"){
            setClientStatus("active");
            setTherapistStatus("");
        }else{
            setTherapistStatus("active"); 
            setClientStatus("");
        }
    }
    return (
        <>
            <UserNav>
                <UserUl>
                    <UserLi>
                        <UserLinks onClick={(e) => handleClick(e.target.id)} id="client" className={ClientStatus} to="/">
                            Cliente
                        </UserLinks>
                    </UserLi>
                    <UserLi>
                        <UserLinks onClick={(e) => handleClick(e.target.id)} id="therapist" className={TherapistStatus} to="/terapeuta">
                            Terapeuta
                        </UserLinks>
                    </UserLi>
                </UserUl>
            </UserNav>
        </>
    )
}

export default HomeBar;