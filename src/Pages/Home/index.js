import React, { useEffect, useState } from "react";
import {
    ActivityIndicator,
    AsyncStorage,
    FlatList,
    Image,
    Text,
    View
} from "react-native";
import Modal from "react-native-modal";
import AddButton from "../../assets/img/addButton.png";
import Filter from "../../assets/img/filter.png";
import Menu from "../../assets/img/menu.png";
import Table from "../../components/Table";
import {
    AddTable,
    AddTableBox,
    AddTableContainer,
    AddTableIcon,
    Container,
    MenuBtn,
    MenuBtnContainer
} from "./styles";

export default function Home({ navigation }) {
    const [tables, setTables] = useState([]);
    const [sort, setSort] = useState("desc");
    const [showMenu, setShowMenu] = useState(false);
    const AsyncGetTables = AsyncStorage.getItem("tables");

    function sortByAsc(object) {
        //Do maior para o menor
        object.sort((a, b) => b.number - a.number);
    }

    function sortByDesc(object) {
        //Do menor para o maior
        object.sort((a, b) => a.number - b.number);
    }

    function loadList() {
        AsyncGetTables.then(res => {
            if (res != "" && res != null) {
                let tablesJson = JSON.parse(res);
                setTables(tablesJson);
            }
        });

        AsyncGetTables.then(res => {
            if (res == null) {
                AsyncStorage.setItem("tables", JSON.stringify(tables));
            }
        });
    }

    useEffect(() => {
        //Backup
        // AsyncStorage.removeItem("tables");
        // AsyncStorage.setItem("tables", JSON.stringify(tables));
        loadList();
    }, []);

    navigation.setOptions({
        headerLeft: () => (
            <MenuBtn onPress={() => setShowMenu(true)}>
                <MenuBtnContainer>
                    <Image source={Menu} style={{ width: 24, height: 24 }} />
                </MenuBtnContainer>
            </MenuBtn>
        ),
        headerRight: () => (
            <MenuBtn
                useForeground={true}
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
                <MenuBtnContainer>
                    <Image source={Filter} style={{ width: 24, height: 24 }} />
                </MenuBtnContainer>
            </MenuBtn>
        )
    });

    function EndList(id) {
        AsyncGetTables.then(res => {
            let tablesJson = JSON.parse(res);

            for (let i in tablesJson) {
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
        AsyncGetTables.then(res => {
            if (res != "" && res != null) {
                let tablesJson = JSON.parse(res);
                tablesJson.push({
                    key: Math.random().toString(),
                    number: tables.length + 1,
                    status: "Livre"
                });

                if (sort == "asc") {
                    sortByAsc(tablesJson);
                } else {
                    sortByDesc(tablesJson);
                }

                let tablesSTR = JSON.stringify(tablesJson);
                AsyncStorage.setItem("tables", tablesSTR);

                setTables(tablesJson);
            }
        });
    }

    function attStatus(id, status) {
        AsyncGetTables.then(res => {
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
                    <View
                        style={{
                            justifyContent: "center",
                            alignItems: "center",
                            flex: 1
                        }}
                    >
                        <ActivityIndicator size="large" color="#ee2121" />
                        <Text
                            style={{
                                marginTop: 8,
                                color: "#000",
                                fontSize: 20,
                                fontWeight: "bold"
                            }}
                        >
                            Carregando...
                        </Text>
                    </View>
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
            <Modal
                style={{ margin: 0 }}
                animationIn="slideInLeft"
                animationOut="slideOutLeft"
                coverScreen={true}
                coverScreen={true}
                onBackdropPress={() => setShowMenu(false)}
                isVisible={showMenu}
                onSwipeComplete={() => setShowMenu(false)}
                swipeDirection="left"
            >
                <View
                    style={{
                        flex: 1,
                        width: 230,
                        backgroundColor: "#fff",
                        justifyContent: "flex-end"
                    }}
                >
                    <MenuBtn
                        onPress={() => {
                            AsyncGetTables.then(res => {
                                let tablesJson = JSON.parse(res);

                                for (let i in tablesJson) {
                                    tablesJson.splice(i);
                                }

                                tablesJson.push({
                                    key: Math.random().toString(),
                                    number: 1,
                                    status: "Livre"
                                });

                                let tablesSTR = JSON.stringify(tablesJson);
                                AsyncStorage.setItem("tables", tablesSTR);

                                setTables(tablesJson);
                            });
                        }}
                    >
                        <View
                            style={{
                                justifyContent: "center",
                                alignItems: "center",
                                backgroundColor: "#333",
                                height: 40
                            }}
                        >
                            <Text
                                style={{
                                    color: "#fff",
                                    fontSize: 20,
                                    fontWeight: "bold"
                                }}
                            >
                                Resetar Mesas
                            </Text>
                        </View>
                    </MenuBtn>
                </View>
            </Modal>
            <RenderTables />
            <AddTableContainer>
                <AddTable onPress={AddingTable}>
                    <AddTableBox>
                        <AddTableIcon source={AddButton} />
                    </AddTableBox>
                </AddTable>
            </AddTableContainer>
        </>
    );
}
