import { View, Text, ActivityIndicator } from 'react-native'
import React from 'react'

const EmptyComponent = () => {
  return (
    <View style={{height:300,width:'100%',alignItems:'center',justifyContent:'center'}}>
      <ActivityIndicator size={'large'} />
    </View>
  )
}

export default EmptyComponent;