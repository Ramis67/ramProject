import { useNavigate, Outlet } from "react-router-dom";
import Title from "../StyledComponents/Title.js";
import Wrapper from "../StyledComponents/Wrapper.js";
import Button from "../StyledComponents/Button.js";
import TitleTwo from "../StyledComponents/TitleTwo.js";
import Link from "../StyledComponents/Link.js";

function Layout(){

    const navigate = useNavigate();

    return (
        <> 
            <Wrapper page>
                <Wrapper main>
                    <Wrapper>
                        <Title>make your todo list, find out random facts, know the currency</Title>
                    </Wrapper>
                    <Wrapper primary>
                        <Button onClick={() => navigate(`/`)}>На главную</Button>
                        <Button onClick={() => navigate(`/ToDoList`)}>ToDo List</Button>
                        <Button onClick={() => navigate(`/Counter`)}>Секундомер</Button>
                        <Button onClick={() => navigate(`/RandomFact`)}>Рандомный факт</Button>
                        <Button onClick={() => navigate(`/Currency`)}>Стоимость валют</Button>
                    </Wrapper>
                    <Outlet />
                </Wrapper>
                <Wrapper footer>
                    <Wrapper footerblock>
                        <Wrapper footerinfo>
                            <TitleTwo footertitles>Me in social media</TitleTwo>
                            <Wrapper footersocialmedia>
                                <Link href="https://t.me/ra_ram">telegram</Link>
                                <Link href="https://vk.com/ra_ram">vk</Link>
                                <Link href="https://instagram.com/ra_ram">instagram</Link>
                            </Wrapper>
                        </Wrapper>
                        <Wrapper footerinfo>
                            <TitleTwo footertitles>Don't forget about mems</TitleTwo>
                            <Wrapper footersocialmedia>
                                <Link href="https://instagram.com/9gag">9gag</Link>
                            </Wrapper>
                        </Wrapper>
                        <Wrapper footerinfo>
                            <TitleTwo footertitles>All rights reserved 2022</TitleTwo>
                        </Wrapper>
                    </Wrapper>
                </Wrapper>
            </Wrapper>
        </>
    )
}

export default Layout