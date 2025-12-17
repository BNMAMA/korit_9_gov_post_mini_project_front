import { useQuery } from "@tanstack/react-query"
import { requestMe } from "../apis/users/usersApi"

export const useMeQuery = () => {
    const accessToken = localStorage.getItem("AccessToken"); //정보가 바뀌면 토큰 다시 발급
    return useQuery({
        queryKey: ["me", accessToken],
        queryFn: async() => { //return 값들이 캐시에 저장
            try {
            return await requestMe(); //백앤드 요청 여기로!
            } catch(error) {
                return error.response;
            }
        },
        staleTime: 1000 * 60 * 60 * 24,
        gcTime: 1000 * 60 * 60 * 24,
    });
}