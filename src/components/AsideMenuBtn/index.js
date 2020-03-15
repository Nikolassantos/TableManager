import React from "react";
import { MenuBtn, MenuContainer, MenuText } from "./styles";

export default function AsideMenuBtn({ menuText, onPress }) {
    return (
        <MenuBtn onPress={onPress}>
            <MenuContainer>
                <MenuText>{menuText}</MenuText>
            </MenuContainer>
        </MenuBtn>
    );
}
