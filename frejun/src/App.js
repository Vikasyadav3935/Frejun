import {View,Text} from 'react-native';
import TabNavigator from './Navigator/TabNavigator';
import { Provider } from 'react-redux';
import { store } from './Redux/store';
const App=()=>{

  return (
    <Provider store={store}>
    <TabNavigator/>
    </Provider>
  )
}

export default App;
