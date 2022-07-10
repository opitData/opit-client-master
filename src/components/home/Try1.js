import React, {useEffect, useState} from 'react';
import {Button, SafeAreaView, TextInput} from 'react-native';
import Welcome from '../try/Welcome';

export default ({navigation}) => {
  const [name, setName] = useState('');

  return (
    <>
      <SafeAreaView>
        <TextInput
          placeholder={'name'}
          onChangeText={txt => {
            setName(txt);
          }}
          style={{
            width: '90%',
            height: 50,
            borderWidth: 2,
            borderColor: 'black',
            alignSelf: 'center',
          }}
        />
        <Button
          title={'submit'}
          // onPress={()=>}
        />
      </SafeAreaView>
    </>
  );
};
