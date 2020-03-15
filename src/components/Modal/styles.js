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
export const ImageCategory = styled.Image`
    width: 100px;
    height: 100px;

    border-width: 1px;
    border-color: #888;
`;

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
export const AddCategoryContainer = styled.View`
    flex: 1;
    background: #a52a2a;
    padding: 10px;
`;
export const InputsContainer = styled.View`
    flex: 1;
`;
export const NameCategory = styled.TextInput`
    flex: 1;
    margin: 0 30px;
    max-height: 40px;
    background: #fff;
    padding-left: 16px;
    border-width: 1px;
    border-color: #888;
    color: #000;
`;
export const ImageContainer = styled.View`
    justify-content: center;
    align-items: center;

    margin-bottom: 30px;
`;
export const OptionText = styled.Text`
    font-size: 22px;
    font-weight: bold;
    color: #fff;
`;
