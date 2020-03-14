import styled from "styled-components/native";

export const CloseModal = styled.TouchableWithoutFeedback``;
export const OptionsModal = styled.TouchableWithoutFeedback``;
export const ContainerModal = styled.View`
    background: #333;
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

//Options Modal
export const OptionsContainer = styled.View`
    background: #222;
    flex: 1;
`;

export const OptionBtn = styled.TouchableWithoutFeedback``;
export const OptionSelect = styled.View`
    background: #ee2121;
    height: 50px;
    margin: 5px;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
`;
export const OptionText = styled.Text`
    font-size: 22px;
    font-weight: bold;
    color: #fff;
`;
