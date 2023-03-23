import { BrowserRouter, Routes } from "react-router-dom"
import ClientState from "../../classes/client/ClientState"
import S from "./Router.style"

export default function Router(props: { clientState: ClientState }) {
    return (
        <S.Wrap>
            <BrowserRouter>
                <Routes></Routes>
            </BrowserRouter>
        </S.Wrap>
    )
}
