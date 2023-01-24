import { View, Text, Button, SafeAreaView, Image, StyleSheet } from 'react-native'
import React, { useLayoutEffect, useState } from 'react'
import { styled } from 'nativewind'
import { useNavigation } from '@react-navigation/native';
const StyledText = styled(Text);

const HomeScreen = () => {
    const navigation = useNavigation()

    const styles = StyleSheet.create({
        container: {
          paddingTop: 50,
        },
        tinyLogo: {
          width: 50,
          height: 50,
        },
        logo: {
          width: 66,
          height: 58,
        },
        btn: {
            border: '5px solid black',
            padding: '10px'
        }
      });

      const [isPressed, setIsPressed] = useState(false);

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown:false
        })
    }, [])

    const handleOnPress = () => {
        setIsPressed(!isPressed)
    }

  return (
    <SafeAreaView>
      <StyledText className='text-red-500'>
        <View style={styles.container}>
            <Image 
            style={styles.tinyLogo}
            source={{
                uri: "https://links.papareact.com/wru"
            }} 
            className="h-7 w-7 bg-gray-300 p-4 rounded-full"
            />
            <Button title='Toggle Color' color={isPressed ? 'black' : 'red'} onPress={handleOnPress}/>
        </View>
      </StyledText>
    </SafeAreaView>
  )
}

export default HomeScreen