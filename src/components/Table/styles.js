import styled from 'styled-components/native';

export const Container = styled.View`
  
  height:100px;
  background: #333;
  align-items:center;
  justify-content:center;
  border-bottom-color:#ddd;
  border-bottom-width:1px;
  flex-direction:row;
`;
export const TableNumber = styled.Text`
  color:#fff;
  margin-top:5px;
  font-size:18px;
`;
export const OpenTableText = styled.Text`
  color:#fff;
  background: #000;
`;

export const OpenTable = styled.TouchableWithoutFeedback`
   
`;
export const OpenTableBox = styled.View` 
  height: 80px;
  width:80px;
  justify-content:center;
  align-items:center;
  background: #000;
  margin-right:10px;
  border-radius:40px;
`;
export const TableBox = styled.View`
  flex:2;
  height: 100px;
  justify-content:center;
  align-items:center;
`;
export const RemoveBtn = styled.TouchableWithoutFeedback`
 
`;
export const RemoveText = styled.Text`
  position: absolute;
  left:0;
  top:0;
  padding:5px;
  background:red;
  margin:10px 5px;
`;