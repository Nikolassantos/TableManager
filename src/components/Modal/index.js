import React from "react";
import { Modal, Text } from "react-native";
import backIcon from "../../assets/img/back.png";
import {
    AddCategoryContainer,
    BackIcon,
    CloseModal,
    ContainerModal,
    ImageCategory,
    ImageContainer,
    InputsContainer,
    ModalHeader,
    NameCategory,
    OptionBtn,
    OptionsContainer,
    OptionSelect,
    OptionsIcon,
    OptionsModal,
    OptionText
} from "./styles";

export const ModalTable = ({
    visible,
    onPressOptions,
    onPressClose,
    optIcon
}) => {
    return (
        <Modal animationType="slide" visible={visible}>
            <ContainerModal>
                <ModalHeader>
                    <CloseModal onPress={onPressClose}>
                        <BackIcon source={backIcon} />
                    </CloseModal>

                    <Text
                        style={{
                            fontSize: 26,
                            color: "white",
                            textAlign: "center"
                        }}
                    >
                        Pedidos
                    </Text>
                    <OptionsModal onPress={onPressOptions}>
                        <OptionsIcon source={optIcon} />
                    </OptionsModal>
                </ModalHeader>
            </ContainerModal>
        </Modal>
    );
};

export const ModalOptions = ({
    visible,
    onPressDelete,
    onPressClose,
    onPressAlt
}) => {
    return (
        <Modal animationType="fade" visible={visible}>
            <OptionsContainer>
                <OptionBtn onPress={onPressAlt}>
                    <OptionSelect>
                        <OptionText>Alterar Mesa</OptionText>
                    </OptionSelect>
                </OptionBtn>
                <OptionBtn onPress={onPressDelete}>
                    <OptionSelect>
                        <OptionText>Excluir Mesa</OptionText>
                    </OptionSelect>
                </OptionBtn>
                <OptionBtn onPress={onPressClose}>
                    <OptionSelect>
                        <OptionText>Voltar</OptionText>
                    </OptionSelect>
                </OptionBtn>
            </OptionsContainer>
        </Modal>
    );
};

export const ModalAddCategory = ({ visible, onPress }) => {
    return (
        <Modal visible={visible}>
            <AddCategoryContainer>
                <CloseModal onPress={onPress}>
                    <BackIcon source={backIcon} />
                </CloseModal>
                <ImageContainer>
                    <ImageCategory
                        source={{
                            uri:
                                "https://lh3.googleusercontent.com/proxy/oqCMMaw6znTG2TZTcpf22-Zm8lXVSxTlX9DHOpnHsQonnMUgXzUkjZzV4emn-2i281aaE47WKnJazEA_UTcQvP-MqadLP4HltENGVyOf9c9mQhnt"
                        }}
                    />
                </ImageContainer>
                <InputsContainer>
                    <NameCategory placeholder="Adicione o nome da categoria" />
                </InputsContainer>
            </AddCategoryContainer>
        </Modal>
    );
};
