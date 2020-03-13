import React, { useState } from "react";
import { Modal, Picker, Text, View } from "react-native";
import ChevronIcon from "../../assets/img/back.png";
import Book from "../../assets/img/openMenu.png";
import SettingsIcon from "../../assets/img/settings.png";
import TableIcon from "../../assets/img/table.png";
import {
    BackIcon,
    CloseModal,
    Container,
    ContainerModal,
    ModalHeader,
    OpenMenuIcon,
    OpenTable,
    OpenTableBox,
    OptionBtn,
    OptionsContainer,
    OptionSelect,
    OptionsIcon,
    OptionsModal,
    OptionText,
    TableBox,
    TableImage,
    TableNumber,
    TableStatus
} from "./styles";

export default function Table({ data, remove }) {
    const [modalTableVisible, setModalTableVisible] = useState(false);
    const [modalOptionsVisible, setModalOptionsVisible] = useState(false);
    const [status, setStatus] = useState("Livre");
    const [statusOpt, setStatusOpt] = useState([
        { value: "Livre" },
        { value: "Finalizado" },
        { value: "Limpar" }
    ]);

    function openTable() {
        setModalTableVisible(true);
    }
    function closeTable() {
        setModalTableVisible(false);
    }

    function openSettings() {
        setModalOptionsVisible(true);
    }
    function closeSettings() {
        setModalOptionsVisible(false);
    }

    function tempOcupado() {
        setStatus("Finalizado");
    }
    function tempLimpar() {
        setStatus("Limpar");
    }

    function dropTable() {
        closeTable();
        closeSettings();
        remove(data.key);
    }

    function CheckStatus() {
        return (
            <Picker
                mode="dialog"
                prompt="Escolha o status da mesa"
                style={{
                    width: 120
                }}
                selectedValue={status}
                onValueChange={itemValue => setStatus(itemValue)}
            >
                {statusOpt.map(value => (
                    <Picker.Item
                        key={value.value}
                        label={value.value}
                        value={value.value}
                    />
                ))}
            </Picker>
        );
    }

    return (
        <Container>
            <Modal animationType="slide" visible={modalTableVisible}>
                <ContainerModal>
                    <ModalHeader>
                        <CloseModal onPress={closeTable}>
                            <BackIcon source={ChevronIcon} />
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
                        <OptionsModal onPress={openSettings}>
                            <OptionsIcon source={SettingsIcon} />
                        </OptionsModal>
                    </ModalHeader>
                </ContainerModal>
            </Modal>
            <Modal animationType="fade" visible={modalOptionsVisible}>
                <OptionsContainer>
                    <OptionBtn
                        onPress={() => {
                            alert("Alterar Mesa");
                        }}
                    >
                        <OptionSelect>
                            <OptionText>Alterar Mesa</OptionText>
                        </OptionSelect>
                    </OptionBtn>
                    <OptionBtn onPress={dropTable}>
                        <OptionSelect>
                            <OptionText>Excluir Mesa</OptionText>
                        </OptionSelect>
                    </OptionBtn>
                    <OptionBtn onPress={closeSettings}>
                        <OptionSelect>
                            <OptionText>Voltar</OptionText>
                        </OptionSelect>
                    </OptionBtn>
                </OptionsContainer>
            </Modal>

            <TableBox>
                <View
                    style={{
                        backgroundColor: "#222",
                        width: 64,
                        alignItems: "center",
                        marginTop: 10,
                        marginBottom: -5,
                        borderColor: "#A0522D",
                        borderWidth: 3
                    }}
                >
                    <TableNumber>{data.number}</TableNumber>
                </View>

                <TableImage source={TableIcon} />
            </TableBox>
            <TableStatus>
                <CheckStatus />
            </TableStatus>
            <View style={{ flex: 1 }}>
                <OpenTable onPress={openTable}>
                    <OpenTableBox>
                        <OpenMenuIcon source={Book} />
                    </OpenTableBox>
                </OpenTable>
            </View>
        </Container>
    );
}
