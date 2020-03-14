import styled from "styled-components/native";

export const Container = styled.View`
    height: 105px;
    background: #ffe4c4;
    align-items: center;
    justify-content: center;
    border-top-color: #fafafa;
    border-top-width: 1px;
    flex-direction: row;
`;
export const TableNumber = styled.Text`
    color: #fafafa;
    font-size: 26px;
`;
export const OpenTableText = styled.Text`
    color: #fff;
    background: #000;
`;
export const StatusText = styled.Text`
    color: #58bc82;
    font-size: 22px;
    font-weight: bold;
`;

export const OpenTable = styled.TouchableWithoutFeedback``;
export const OpenTableBox = styled.View`
    height: 60px;
    width: 60px;
    justify-content: center;
    align-items: center;
    margin-left: 30px;
`;
export const TableBox = styled.View`
    flex: 1;
    height: 100px;
    justify-content: center;
    align-items: center;
`;
export const RemoveBtn = styled.TouchableWithoutFeedback``;
export const CloseModal = styled.TouchableWithoutFeedback``;
export const OptionsModal = styled.TouchableWithoutFeedback``;
export const OptionBtn = styled.TouchableWithoutFeedback``;
export const OpenMenu = styled.TouchableWithoutFeedback``;

export const ContainerModal = styled.View`
    background: #333;
    flex: 1;
`;
export const OptionsContainer = styled.View`
    background: #222;
    flex: 1;
`;
export const ModalHeader = styled.View`
    background: #333;
    flex-direction: row;
    justify-content: space-between;
    margin: 10px;
`;
export const OptionsIcon = styled.Image``;
export const BackIcon = styled.Image``;
export const TableImage = styled.Image``;
export const OpenMenuIcon = styled.Image`
    height: 60px;
    width: 60px;
`;

export const RemoveText = styled.Text`
    position: absolute;
    left: 0;
    top: 0;
    padding: 5px;
    background: red;
    margin: 10px 5px;
`;
export const OptionSelect = styled.View`
    background: #ee2121;
    height: 50px;
    margin: 5px;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
`;
export const TableStatus = styled.View`
    flex: 1;
    height: 30px;
    border-width: 2px;
    padding: 15px 0;
    border-color: #333;
    align-items: center;
    justify-content: center;
    background: #fff0f5;
    border-radius: 5px;
`;
export const ContainerPicker = styled.View`
    background: red;
`;
export const OptionText = styled.Text`
    font-size: 22px;
    font-weight: bold;
    color: #fff;
`;
