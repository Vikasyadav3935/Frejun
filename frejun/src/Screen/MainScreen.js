import { View, Text ,Button} from 'react-native'
import {useState} from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'

const MainScreen = () => {
    const [data,setData]=useState([]);

    const Apidata=()=>{
        fetch('https://jsonplaceholder.typicode.com/posts?_page=1&_limit=10')
        .then(res=>res.json())
        .then(res=>setData(res))
      }

  return (
    <View style={{flex:1,justifyContent:'center'}}>
    <Button title='Call' onPress={Apidata} />
     {
       data.map((el)=>(
         <Text key={el.id}>{el.id}.{el.title}</Text>
       ))
     }
    </View>
  )
}

export default MainScreen