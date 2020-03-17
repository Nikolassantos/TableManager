import React, { useEffect, useState } from "react";
import {
    ActivityIndicator,
    AsyncStorage,
    FlatList,
    Image,
    View
} from "react-native";
import Modal from "react-native-modal";
import AddButton from "../../assets/img/addButton.png";
import Filter from "../../assets/img/filter.png";
import Menu from "../../assets/img/menu.png";
import AsideMenuBtn from "../../components/AsideMenuBtn";
import Table from "../../components/Table";
import {
    AddTable,
    AddTableBox,
    AddTableContainer,
    AddTableIcon,
    Container,
    LoadContainer,
    LoadText,
    MenuBtn,
    MenuBtnContainer,
    ModalUserInfo,
    UserAvatar,
    UserName
} from "./styles";

export default function Home({ navigation }) {
    const [tables, setTables] = useState([]);
    const [sort, setSort] = useState("desc");
    const [showMenu, setShowMenu] = useState(false);
    const AsyncGetTables = AsyncStorage.getItem("tables");

    function sortByAsc(object) {
        //Do maior para o menor
        object.sort((a, b) => b.number - a.number);
        setTables(object);
        setSort("asc");
    }

    function sortByDesc(object) {
        //Do menor para o maior
        object.sort((a, b) => a.number - b.number);
        setTables(object);
        setSort("desc");
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
                    } else if (sort == "asc") {
                        sortByDesc(tablesJson);
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
                    number: tables.length + 2,
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
                    <LoadContainer>
                        <ActivityIndicator size="large" color="#ee2121" />
                        <LoadText>Carregando...</LoadText>
                    </LoadContainer>
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

    function ResetTables() {
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
                <ModalUserInfo>
                    <UserAvatar
                        source={{
                            uri:
                                "https://wedologos.bladecdn.net/wp-content/uploads/2016/01/logo-restaurante-9.jpg"
                        }}
                    />
                    <UserName>La Casona</UserName>
                </ModalUserInfo>
                <View
                    style={{
                        flex: 2,
                        width: 230,
                        backgroundColor: "#A52A2A",
                        borderBottomRightRadius: 5
                    }}
                >
                    <AsideMenuBtn
                        menuText="Adicionar Categorias"
                        onPress={() => {
                            setShowMenu(false);
                            navigation.navigate("AddCategory");
                        }}
                    />
                    <AsideMenuBtn
                        menuText="Adicionar Produtos"
                        onPress={() => {
                            setShowMenu(false);
                            navigation.navigate("AddProducts");
                        }}
                    />
                    <AsideMenuBtn menuText="Configurações" onPress={() => {}} />
                    <AsideMenuBtn menuText="Avaliar o app" onPress={() => {}} />
                    <AsideMenuBtn
                        menuText="Remover Mesas"
                        onPress={ResetTables}
                    />
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
