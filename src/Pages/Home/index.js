import React, { useEffect, useState } from "react";
import { AsyncStorage, FlatList, Image } from "react-native";
import Filter from "../../assets/img/filter.png";
import Menu from "../../assets/img/menu.png";
import Table from "../../components/Table";
import {
    AddTable,
    AddTableBox,
    AddTableContainer,
    AddTableText,
    Container,
    EmptyTableText,
    MenuBtn
} from "./styles";

export default function Home({ navigation }) {
    const [tables, setTables] = useState([]);
    const [sort, setSort] = useState("desc");

    function sortByAsc(object) {
        //Do maior para o menor
        object.sort((a, b) => b.number - a.number);
    }

    function sortByDesc(object) {
        //Do menor para o maior
        object.sort((a, b) => a.number - b.number);
    }

    function loadList() {
        AsyncStorage.getItem("tables").then(res => {
            if (res != "" && res != null) {
                let tablesJson = JSON.parse(res);
                setTables(tablesJson);
            }
        });
    }

    useEffect(() => {
        loadList();
        AsyncStorage.getItem("tables").then(res => {
            if (res == null) {
                AsyncStorage.setItem("tables", JSON.stringify(tables));
            }
        });
    }, []);

    navigation.setOptions({
        headerLeft: () => (
            <MenuBtn
                onPress={() => {
                    AsyncStorage.removeItem("tables");
                }}
            >
                <Image
                    source={Menu}
                    style={{ marginLeft: 10, width: 24, height: 24 }}
                />
            </MenuBtn>
        ),
        headerRight: () => (
            <MenuBtn
                onPress={() => {
                    let tablesJson = tables;

                    if (sort == "desc") {
                        sortByAsc(tablesJson);
                        setTables(tablesJson);
                        setSort("asc");
                    } else if (sort == "asc") {
                        sortByDesc(tablesJson);
                        setTables(tablesJson);
                        setSort("desc");
                    }
                }}
            >
                <Image
                    source={Filter}
                    style={{ marginRight: 10, width: 24, height: 24 }}
                />
            </MenuBtn>
        )
    });

    function EndList(id) {
        AsyncStorage.getItem("tables").then(res => {
            let tablesJson = JSON.parse(res);

            for (const i in tablesJson) {
                if (tablesJson[i].key == id) {
                    tablesJson.splice(i, 1);
                }
            }

            let tablesSTR = JSON.stringify(tablesJson);
            AsyncStorage.setItem("tables", tablesSTR);

            setTables(tablesJson);
        });
    }

    function AddingTable() {
        AsyncStorage.getItem("tables").then(res => {
            let tablesJson = JSON.parse(res);
            tablesJson.push({
                key: Math.random().toString(),
                number: tables.length + 1,
                status: "Livre"
            });

            let tablesSTR = JSON.stringify(tablesJson);
            AsyncStorage.setItem("tables", tablesSTR);

            setTables(tablesJson);
        });
    }

    function attStatus(id, status) {
        AsyncStorage.getItem("tables").then(res => {
            //Transformo a string em Json
            let tablesJson = JSON.parse(res);

            for (let i in tablesJson) {
                if (tablesJson[i].key == id) {
                    tablesJson[i].status = status;
                }
            }

            //transforma o json em string
            let tablesSTR = JSON.stringify(tablesJson);
            AsyncStorage.setItem("tables", tablesSTR);

            // setTables(tablesJson);
        });
    }

    function RenderTables() {
        if (tables.length == 0) {
            return (
                <Container>
                    <EmptyTableText>Adicione Algumas Mesas</EmptyTableText>
                </Container>
            );
        }
        return (
            <Container>
                <FlatList
                    data={tables}
                    renderItem={({ item }) => (
                        <Table
                            attStatus={attStatus}
                            remove={EndList}
                            data={item}
                        />
                    )}
                    keyExtractor={item => item.key}
                />
            </Container>
        );
    }

    return (
        <>
            <RenderTables />
            <AddTableContainer>
                <AddTable onPress={AddingTable}>
                    <AddTableBox>
                        <AddTableText>+</AddTableText>
                    </AddTableBox>
                </AddTable>
            </AddTableContainer>
        </>
    );
}
