/** @jsxImportSource @emotion/react */
import { Link, useLocation } from "react-router-dom";
import * as s from "./styles";

import { IoHomeOutline, IoAddCircleOutline } from "react-icons/io5";
import { MdOutlineExplore } from "react-icons/md";
import { useMeQuery } from "../../queries/usersQueries";
import AddPostModal from "../post/AddPostModal";
import { useRef, useState } from "react";

function LeftSideBar({children}) {
    const location = useLocation();
    const {pathname} = location;
    const [ addPostModalOpen, setAddPostModalOpen ] = useState(false);
    const layoutRef = useRef();

    const {isLoading, data} = useMeQuery();

    const handleAddPostModalOpenOnClick = () => {
        setAddPostModalOpen(true);
    }

    const addPostModalClose = () => {
        setAddPostModalOpen(false);
    }


    return <div css={s.sideBarLayout} ref={layoutRef}>
        <aside css={s.sideBarContainer}>
            <h1>Social Board</h1>
            <ul>
                <Link to={"/"}><li css={s.menuListItem(pathname === "/")}><div><IoHomeOutline /></div>Home</li></Link>
                <Link to={"/search"}><li css={s.menuListItem(pathname === "/search")}><div><MdOutlineExplore /></div>Explore</li></Link>
                <Link ><li css={s.menuListItem(false)} onClick={handleAddPostModalOpenOnClick}><div><IoAddCircleOutline /></div>Add a Post</li></Link>
                {
                    isLoading || <Link to={"/" + data.data.nickname}><li css={s.menuListItem(decodeURI(pathname)=== "/" + data.data.nickname)}><div><div css={s.profileImg(data.data.imgUrl)}></div></div>{data.data.nickname}</li></Link>
                }
            </ul>
            <div>
                <Link to={"/logout"}>Logout</Link>
            </div>
        </aside>
        <div>
            {children}
        </div>
        {
            !!layoutRef.current && addPostModalOpen &&
    // 부모 ref 가 있어야 자식이 ref요소를 가질 수 있음  그래서 &&써서 앞이 유효해야 뒤에가 유효할 수 있도록 함
        <AddPostModal
         isOpen={addPostModalOpen} 
         onRequestClose={addPostModalClose}
         layoutRef={layoutRef}/>
        }
    </div>
}

export default LeftSideBar;