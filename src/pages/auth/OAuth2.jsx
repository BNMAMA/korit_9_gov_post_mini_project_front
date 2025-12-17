import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useMeQuery } from "../../queries/usersQueries";

function OAuth2() {
    const navigate = useNavigate();
    const [ searchParams ] = useSearchParams(); //searchParam -> get요청 때 사용된 param들을 가지고 오는 역할을 한다.
    const accessToken = searchParams.get("accessToken");
       
    if (!!accessToken) { //주소창에 토큰 있으면 스토리지에 넣겠다
            localStorage.setItem("AccessToken", accessToken); //AccessToken = 키값
        }

    const meQuery = useMeQuery();

    useEffect(() => {
        const {isLoading, data} = meQuery;
       if (!isLoading) {
            if(data.status !== 200) {
                alert("인증이 필요합니다.");
                navigate("/auth/login");
            } else {
                alert("로그인 성공")
                navigate("/")
            }
       }
    },[meQuery.data]);
    

    return <></>
}

export default OAuth2;