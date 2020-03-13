import React from "react";
import { Text } from "react-native";
import {
    Container,
    OpenTable,
    OpenTableBox,
    OpenTableText,
    RemoveBtn,
    RemoveText,
    TableBox,
    TableNumber
} from "./styles";

export default function Table({ data, remove }) {
    return (
        <Container>
            <TableBox>
                <RemoveBtn onPress={() => remove(data.key)}>
                    <RemoveText>X</RemoveText>
                </RemoveBtn>
                <Text style={{ fontSize: 26, color: "white" }}>Mesa</Text>
                <TableNumber>{data.number}</TableNumber>
            </TableBox>
            <OpenTable onPress={() => alert("Abrir Mesa")}>
                <OpenTableBox>
                    <OpenTableText>Abrir</OpenTableText>
                </OpenTableBox>
            </OpenTable>
        </Container>
    );
}
