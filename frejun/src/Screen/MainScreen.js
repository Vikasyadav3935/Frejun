import {
  View,
  Text,
  RefreshControl,
  FlatList,
  ActivityIndicator,
  Dimensions,
  StyleSheet,
 TouchableOpacity
} from 'react-native';
import {useState, useEffect} from 'react';

import {useDispatch, useSelector} from 'react-redux';
import {fetchData} from '../Redux/createSlice';
import RenderItem from '../Components/RenderItem';
import EmptyComponent from '../Components/EmptyComponent';
import {emptyState } from '../Redux/createSlice';
import {useIsFocused} from '@react-navigation/native';



const MainScreen = () => {
  
  const [page, setPage] = useState(1);
  const [refreshing,setRefreshing]=useState(false);
  const isfocused = useIsFocused();



  const dispatch = useDispatch();

  const data = useSelector(state => state.data);
    // console.log(data.data)
  const onRefresh=()=>{
    setRefreshing(true);
    setTimeout(() => {
      dispatch(emptyState())
      dispatch(fetchData(1))
      setRefreshing(false)
    }, 500);
  }

 useEffect(()=>{
  dispatch(emptyState())
   dispatch(fetchData(1))
 },[isfocused])

  useEffect(() => {
  loadState();
  }, [page,]);

  const loadState = () => {
    if (page>1){
    dispatch(fetchData(page));
    }
     
  };
  const EndReach=()=>{
   setPage(page+1)

  }
  const Footer = () => {
    if(data.data.length==0){
      return null
    }
    return (
      <View style={{width:'100%',justifyContent:'center',alignSelf:'center',marginBottom:35}}>
        <TouchableOpacity
      style={styles.btn}
      onPress={EndReach}
      disabled={data.status=='loading'}
        >
    <Text>Load More</Text>
    {data.status=='loading'?<ActivityIndicator style={{marginLeft:10,}} color={'white'} />:''}
        </TouchableOpacity>
      </View>
    )
  };



  return (
    <View>
     <View style={styles.view}>
     <Text>Pull to Refresh</Text>
     </View>
   { data.data.length>0 ?<FlatList
      data={data.data}
      renderItem={({item}) => (
        <RenderItem item={item}/>
      )}
      // onEndReached={EndReach}
      ListFooterComponent={<Footer />}
      ListEmptyComponent={<EmptyComponent/>}
    
      keyExtractor={el => el.id}
      refreshControl={
        <RefreshControl  refreshing={refreshing} onRefresh={onRefresh} />
      }
     
    />:<ActivityIndicator size={'large'} style={{alignSelf:'center',marginTop:20}} />}
    </View>
  );
};

export default MainScreen;

const styles=StyleSheet.create({
  view:{
   height:40,
   backgroundColor:'white',
   elevation:3,
   justifyContent:'center',
   alignItems:'center',
   backgroundColor:'#19a'
  },
  btn:{
  alignSelf:'center',

  height:40,
  alignItems:'center',
  backgroundColor:'#19d',
  paddingHorizontal:14,
  justifyContent:'center',
  margin:10,
  flexDirection:'row',
  borderRadius:5,



  }
})
