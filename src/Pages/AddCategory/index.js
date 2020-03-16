import React, { useState } from "react";
import { FlatList, Text, View } from "react-native";
import { ModalAddCategory } from "../../components/Modal";
import {
    Container,
    NewCategoryBtn,
    NewCategoryContainer,
    NewCategoryText
} from "./styles";

export default function AddCategory() {
    const [categories, setCategories] = useState([]);
    const [modalVisible, setModalVisible] = useState(false);
    return (
        <Container>
            <View
                style={{
                    alignItems: "center",
                    justifyContent: "center",
                    height: 30
                }}
            >
                <Text>Categorias</Text>
            </View>
            <FlatList
                data={categories}
                renderItem={({ item }) => <Text>...</Text>}
            />
            <View style={{ alignItems: "center", marginBottom: 5 }}>
                <NewCategoryBtn onPress={() => setModalVisible(true)}>
                    <NewCategoryContainer>
                        <NewCategoryText>
                            Adicionar nova categoria
                        </NewCategoryText>
                    </NewCategoryContainer>
                </NewCategoryBtn>
            </View>
            <ModalAddCategory
                onPress={() => setModalVisible(false)}
                visible={modalVisible}
            />
        </Container>
    );
}
