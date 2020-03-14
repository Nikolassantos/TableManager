import React from "react";
import { Modal, Text } from "react-native";
import {
    BackIcon,
    CloseModal,
    ContainerModal,
    ModalHeader,
    OptionBtn,
    OptionsContainer,
    OptionSelect,
    OptionsIcon,
    OptionsModal,
    OptionText
} from "./modalStyles";

export const ModalTable = ({
    data,
    visible,
    onPressOptions,
    onPressClose,
    backIcon,
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
                        Mesa {data.number}
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
