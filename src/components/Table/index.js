import React, { useEffect, useState } from "react";
import { AsyncStorage, Picker, View } from "react-native";
import ChevronIcon from "../../assets/img/back.png";
import Book from "../../assets/img/openMenu.png";
import SettingsIcon from "../../assets/img/settings.png";
import TableIcon from "../../assets/img/table.png";
import { ModalOptions, ModalTable } from "./modals";
import {
    Container,
    OpenMenuIcon,
    OpenTable,
    OpenTableBox,
    TableBox,
    TableImage,
    TableNumber,
    TableStatus,
    TableView
} from "./styles";

export default function Table({ data, remove, attStatus }) {
    const AsyncGetTables = AsyncStorage.getItem("tables");
    const [modalTableVisible, setModalTableVisible] = useState(false);
    const [modalOptionsVisible, setModalOptionsVisible] = useState(false);
    const [status, setStatus] = useState("Livre");
    const [statusOpt] = useState([
        { value: "Livre", color: "green" },
        { value: "Finalizado", color: "red" },
        { value: "Limpar", color: "#FFD700" }
    ]);

    useEffect(() => {
        AsyncGetTables.then(res => {
            //Transformo a string em Json
            let tablesJson = JSON.parse(res);

            for (let i in tablesJson) {
                if (tablesJson[i].key == data.key) {
                    setStatus(tablesJson[i].status);
                }
            }
        });
    }, []);

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
    function changeStatus(item) {
        attStatus(data.key, item);
        setStatus(item);
        AsyncGetTables.then(res => {
            let tablesJson = JSON.parse(res);

            for (let i in tablesJson) {
                if (tablesJson[i].key == data.key) {
                    setStatus(item);
                }
            }
        });
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
                onValueChange={itemValue => changeStatus(itemValue)}
            >
                {statusOpt.map(value => (
                    <Picker.Item
                        key={value.value}
                        label={value.value}
                        color={value.color}
                        value={value.value}
                    />
                ))}
            </Picker>
        );
    }

    return (
        <Container>
            <ModalTable
                data={data}
                visible={modalTableVisible}
                optIcon={SettingsIcon}
                backIcon={ChevronIcon}
                onPressOptions={openSettings}
                onPressClose={closeTable}
            />
            <ModalOptions
                visible={modalOptionsVisible}
                onPressAlt={() => {
                    alert("Alterar Mesa");
                }}
                onPressDelete={dropTable}
                onPressClose={closeSettings}
            />

            <TableBox>
                <TableView>
                    <TableNumber>{data.number}</TableNumber>
                </TableView>

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
