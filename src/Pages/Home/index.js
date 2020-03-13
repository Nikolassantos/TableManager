import React, {useState, useEffect} from 'react';
import { FlatList, Image, Text, View, AsyncStorage } from 'react-native';
import Menu from '../../assets/img/menu.png';
import { 
    Container,
    MenuBtn,
    EmptyTableText,
    AddTableText,
    AddTable,
    AddTableBox
 } from './styles';
 import Table from '../../components/Table';

export default function Home( { navigation } ) {

    const [tables, setTables] = useState([]);

    useEffect(() => {
        loadList();
        AsyncStorage.getItem('tables')
        .then(res => {
            if (res == null) {
                AsyncStorage.setItem('tables', JSON.stringify(tables));
            }
        })        
    }, [])

    navigation.setOptions({
        headerLeft: () => (
            <MenuBtn onPress={() => {alert("Abrir Menu")}}>
                <Image  source={Menu} style={{marginLeft:10,width:24, height:24}} />
            </MenuBtn>            
          )
    })

    function loadList(){
        AsyncStorage.getItem('tables')
        .then(res => {
            if (res != '' && res != null) {
                 let tablesJson = JSON.parse(res);
                 setTables(tablesJson);
            }
        })
    }

    function EndList(id){
        AsyncStorage.getItem('tables')
        .then(res => {
            
           let tablesJson = JSON.parse(res);

           for (let i in tablesJson) {
               if (tablesJson[i].key == id) {
                tablesJson.splice(i, 1);
               }
           }
           
           let tablesSTR = JSON.stringify(tablesJson);
           AsyncStorage.setItem('tables', tablesSTR);

           setTables(tablesJson);
                        
        }) 
    }

    function AddingTable() {      
        AsyncStorage.getItem('tables')
        .then(res => {

            let tablesJson = JSON.parse(res);
            tablesJson.push({
                key:Math.random().toString(),
                number:Math.floor(Math.random() * 100) 
            })

            let tablesSTR = JSON.stringify(tablesJson)
            AsyncStorage.setItem('tables', tablesSTR);

            setTables(tablesJson)
        })        
    }

    function RenderTables() {
        if(tables.length == 0){
            return(
                <Container>
                 <EmptyTableText>Adicione Algumas Mesas</EmptyTableText>                
                </Container>
            )
        }else{
            return(
                <Container>
                <FlatList
                    data={tables}
                    renderItem={({item}) => <Table remove={EndList} data={item} />}
                    keyExtractor={item => item.key }
                />
                </Container>
            )
        }
    }

  return( 
      <>
      <RenderTables />
      <AddTable onPress={AddingTable}>
          <AddTableBox>
            <AddTableText>+</AddTableText>
          </AddTableBox>
      </AddTable>
      </>
  )
}
