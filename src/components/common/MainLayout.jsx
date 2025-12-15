/**@jsxImportSource @emotion/react */

import * as s from "./styles";

function MainLayout({children}) {
    return <div css={s.layout}>
        <div css={s.frame}>
            <div css={s.frameContaier}>
                {children} 
                {/* 페이지 전환 */}
            </div>
        </div>
    </div>
}

export default MainLayout;