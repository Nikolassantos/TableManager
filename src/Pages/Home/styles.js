import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    background: #ffe4c4;
`;
export const AddTableContainer = styled.View`
    background: #ffe4c4;
    height: 60px;
    align-items: center;
    justify-content: center;
`;
export const EmptyTableText = styled.Text``;
export const UserName = styled.Text`
    font-size: 20px;
    font-weight: bold;
`;
export const MenuBtnContainer = styled.View`
    padding: 15px;
`;

export const MenuBtn = styled.TouchableNativeFeedback``;



// Botão de Adicionar Mesas
export const AddTable = styled.TouchableNativeFeedback`
 

`;
export const AddTableIcon = styled.Image`
    width: 80px;
    height: 80px;
`;
export const AddTableBox = styled.View`
    height: 50px;
    width: 50px;
    justify-content: center;
    align-items: center;
    border-radius: 25px;
    padding-bottom:50px;
`;
export const UserAvatar = styled.Image`
    width: 120px;
    height: 120px;
    border-radius: 60px;
`;

export const LoadContainer = styled.View`
    justify-content: center;
    align-items: center;
    flex: 1;
`;
export const ModalUserInfo = styled.View`
    background: #ffe4c4;
    width: 230px;
    flex: 1;
    align-items: center;
    justify-content: center;
    border-color: #ee2121;
    border-top-right-radius: 5px;
`;
export const LoadText = styled.Text`
    margin-top: 8px;
    color: #000;
    font-size: 20px;
    font-weight: bold;
`;
