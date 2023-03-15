import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  FlatList,Dimensions,KeyboardAvoidingView
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {todos} from '../Components/data';
import RenderItem from '../Components/RenderItem';


const SecondScreen = () => {
  const [data, setData] = useState(todos);
  const [inputvalue, setInputValue] = useState();
  const [filter, setFilter] = useState([]);
  const [sort, setsort] = useState('asc');

  const handleInput = () => {
    const arr = data.filter(el => el.title.includes(inputvalue));
    setFilter(arr);
  };

  useEffect(() => {
    handleInput();
  }, [inputvalue]);

  const handleClear = () => {
    const newData=data
    setFilter(newData);
  };

  const sorting = () => {
    const sorted = filter.reverse();

    if (sort == 'asc') {
      setFilter(sorted);
      setsort('desc');
    } else if (sort == 'desc') {
      const rever = filter;
      setFilter(rever);
      setsort('asc');
    }
    
  };

  const EmptyComponent=()=>{
    return (
      <View style={{alignSelf:'center',marginTop:30}}>
        <Text>Type something in input and you will get titles in which this substring is present</Text>
      </View>
    )
  }

  return (
    

<View style={styles.view}>
      <View style={styles.top}>
        <TextInput
        placeholder='Type something'
          style={styles.input}
          onChangeText={setInputValue}
          value={inputvalue}
        />
        <TouchableOpacity style={styles.btn} onPress={handleClear}>
          <Text style={{color: 'white'}}>Clear</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPress={sorting}>
          <Text style={{color: 'white'}}>
            {sort === 'asc' ? 'Sort (Z-A)' : 'Sort (A-Z)'}{' '}
          </Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={filter}
        renderItem={({item}) => (
         <RenderItem item={item}/>
        )}
        keyExtractor={el => el.id}
        ListEmptyComponent={<EmptyComponent/>}
      />
    </View>

  );
};

export default SecondScreen;

const styles = StyleSheet.create({
  view: {
    marginTop: 20,
    width: '100%',
    alignSelf: 'center',
  },
  input: {
    borderWidth: 0.5,
    padding: 1,
    height: 50,
    width: '60%',
    borderRadius: 5,
    fontSize: 16,
    paddingHorizontal: 10,
    backgroundColor:'wheat'
  },
  top: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor:'white',
    elevation:4,
    padding:5
  },
  btn: {
    width: '16%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    backgroundColor: 'teal',
  },
});

