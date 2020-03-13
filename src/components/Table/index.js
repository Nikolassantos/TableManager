import React, { useState } from "react";
import { Modal, Text, View } from "react-native";
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
    StatusText,
    TableBox,
    TableImage,
    TableNumber,
    TableStatus
} from "./styles";

export default function Table({ data, remove }) {
    const [modalTableVisible, setModalTableVisible] = useState(false);
    const [modalOptionsVisible, setModalOptionsVisible] = useState(false);
    const [status, setStatus] = useState("Livre");

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
        if (status == "Livre") {
            return <Text>{status}</Text>;
        } else if (status == "Finalizado") {
            return <Text style={{ color: "red" }}>{status}</Text>;
        } else if (status == "Limpar") {
            return <Text style={{ color: "#FFD700" }}>{status}</Text>;
        }
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
                <StatusText>
                    <CheckStatus />
                </StatusText>
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
