import React from 'react';
import { View, Text } from 'react-native';

import { Container, TableNumber, OpenTable, TableBox, OpenTableBox, 
  OpenTableText,
  RemoveBtn,
  RemoveText
 } from './styles';

export default function Table({data, remove}) {
  return (
    <Container>
      <TableBox>
        <RemoveBtn onPress={() => remove(data.key)}><RemoveText>X</RemoveText></RemoveBtn>
        <Text style={{fontSize:26, color:'white'}}>Mesa</Text>
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
