
import {
    UserLinks,
    UserLi,
    UserUl,
    UserNav
} from "./HomeBarStyle"


function HomeBar() {



    return (

        <>
            <UserNav>
                    <UserUl>
                        <UserLi>
                            <UserLinks className="active
                            " to="/">
                                Cliente
                            </UserLinks>
                        </UserLi>
                        <UserLi>
                            <UserLinks to="/terapeuta">
                                Terapeuta
                            </UserLinks>
                        </UserLi>
                    </UserUl>
            </UserNav>
        </>
    )
}

export default HomeBar;