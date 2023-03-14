import {
  View,
  Text,
  RefreshControl,
  FlatList,
  ActivityIndicator,
  Dimensions,StyleSheet
} from 'react-native';
import {useState, useEffect} from 'react';

import {useDispatch, useSelector} from 'react-redux';
import {fetchData} from '../Redux/createSlice';
import RenderItem from '../Components/RenderItem';



const MainScreen = () => {
  const [user, setUser] = useState([]);
  const [page, setPage] = useState(1);
  const [refreshing,setRefreshing]=useState(false);


  const dispatch = useDispatch();

  const data = useSelector(state => state.data);

  const onRefresh=()=>{
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 1000);
  }

  useEffect(() => {
  loadState();
  }, [page]);

  const loadState = () => {
    dispatch(fetchData(page));
   
   
    
  };

  useEffect(()=>{
   if(data.data.length>0){
    setUser(prev => [...prev, ...data.data]);
   }
  },[data.data])

  const EndReach=()=>{
   setPage(page+1)
  }

  console.log(user.length);

  

  const Footer = () => {
    return <ActivityIndicator size="large" />;
  };

  return (
    <View>
     {/* <View style={styles.view}>

     </View> */}
    <FlatList
      data={user}
      renderItem={({item}) => (
        <RenderItem item={item}/>
      )}
      onEndReached={EndReach}
      ListFooterComponent={<Footer />}
    
      keyExtractor={el => el.id}
      refreshControl={
        <RefreshControl  refreshing={refreshing} onRefresh={onRefresh} />
      }
     
    />
    </View>
  );
};

export default MainScreen;

const styles=StyleSheet.create({
  view:{
   height:40,
   backgroundColor:'white',
   elevation:3,
  }
})
