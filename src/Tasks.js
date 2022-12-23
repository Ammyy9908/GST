import React, {useEffect, useState} from 'react'
import {StyleSheet, Modal,  Text, View, Image,TouchableOpacity,SafeAreaView,ScrollView} from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import {BlurView} from 'expo-blur'
import RNPickerSelect from "react-native-picker-select";

export default function Tasks( { navigation }){
    const [modalOpen, setModalOpen] = useState(false);

    const getData = async () => {
        try {
            const value = await AsyncStorage.getItem('@jwt_token')
            if(value !== null) {
                // value previously stored
                console.log("value",value)
            }
        } catch(e) {
            // error reading value
        }
    }



    useEffect(()=>{
        console.log("Tasks screen")
        console.log("token on screen",getData())
    },[])
    return(
      <ScrollView>
        <SafeAreaView style={{flex : 1}}>
            <View style={{flexDirection: "row", justifyContent:"space-evenly"}}>
                <TouchableOpacity style={styles.circle2} onPress={() => navigation.navigate('YourProfile')}>
                    <Image 
                        style={{ height:60,
                                 width:60,
                                 borderRadius:30,                               
                                 }}
                        source={require("../assets/Ava.png")} 
                     />
                     <Text style={styles.txt5}>You</Text> 
                </TouchableOpacity>
                <TouchableOpacity style={styles.circle2} onPress={() => navigation.navigate('Tasks')}>
                <View style={{paddingLeft: 18 , paddingTop:18}} >
                <Image 
                        style={{ height:20,
                                 width:23,                              
                                 }}
                        source={require("../assets/task.png")}
                     />
                     </View>
                    <Text style={styles.txt6} onPress={() => navigation.navigate('Tasks')}>Tasks</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.circle2} onPress={() => navigation.navigate('alert')}>
                <View style={{paddingLeft: 18 , paddingTop:16}}>
                <Image 
                        style={{ height:20,
                                 width:20,                              
                                 }}
                        source={require("../assets/Bell.png")} 
                     />
                     </View>
                    <Text style={styles.txt7}>Alerts</Text>
                   
                </TouchableOpacity>
            </View>
  
            <TouchableOpacity>
                          <Text style={styles.txt11} onPress={() => setModalOpen(false)} >x</Text>
            </TouchableOpacity>
            <RNPickerSelect
               placeholder={{ label: "Select", value: null }}
               placeholderTextColor="red"
                 onValueChange={(value) => console.log(value)}
                 items={[
                     { label: "Home", value: "home" },
                     { label: "Office", value: "Office"},
                 ]}
             />
   
            <TouchableOpacity style={styles.box1} onPress={() => navigation.navigate('taskView')}>
            <View >
                <Text style={styles.txt1}>TODAY 5:30 PM</Text>
                <Text style={styles.txt2}>TASK 1</Text>
                <Text style={styles.txt4}>NAME OF EMPLOYEE ASSIGNED</Text>
                
            </View>
                <View style={styles.flag}>

                </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.box2} onPress={() => navigation.navigate('taskView')}>
            <View  >
                <Text style={styles.txt1}>TODAY 5:30 PM</Text>
                <Text style={styles.txt2}>TASK 2</Text>
                <Text style={styles.txt4}>NAME OF EMPLOYEE ASSIGNED</Text>

            </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.box3} onPress={() => navigation.navigate('taskView')}>
            <View >
                <Text style={styles.txt1}>TODAY 5:30 PM</Text>
                <Text style={styles.txt2}>Task 3</Text>
                <Text style={styles.txt4}>NAME OF EMPLOYEE ASSIGNED</Text>
            </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.circle} onPress={() => setModalOpen(true)}>
            
                <View >
                    <View >
                    <Modal  transparent={true} visible={modalOpen} animationType="fade">
                    <BlurView
                        blurType='light'
                        style={styles.contentWrap}>
                      <View style={styles.modalView}>
                      <TouchableOpacity>
                          <Text style={styles.txt10} onPress={() => setModalOpen(false)} >x</Text>
                      </TouchableOpacity>
                      <Text style={styles.txt8} >What do you want to do? </Text> 
                      <View style={{flexDirection:"column", paddingLeft :35, paddingTop: 40 ,}}>
                                <TouchableOpacity onPress={() => navigation.navigate('AddNewTask')}>
                                   <View style={styles.btn}>
                                      <Text style={styles.txt9}>
                                          ADD
                                      </Text>
                                   </View>
                                 </TouchableOpacity>
                                 <TouchableOpacity style={{paddingTop: 20}} onPress={() =>navigation.navigate('modifyTask')}>
                                   <View style={styles.btn1} >
                                      <Text style={styles.txt9}>
                                          MODIFY
                                      </Text>
                                   </View>
                                 </TouchableOpacity>
                                 <TouchableOpacity style={{paddingTop: 20}} onPress={() =>navigation.navigate('deleteTask')}>
                                   <View style={styles.btn2}>
                                      <Text style={styles.txt9}>
                                          DELETE
                                      </Text>
                                   </View>
                                 </TouchableOpacity>

                      </View>
                      
                      </View>
                      </BlurView>
                    </Modal>
                    </View>                             
                    <Text style={styles.txt3} > + </Text>
                  
                </View>
              
            </TouchableOpacity>       
        </SafeAreaView>
        </ScrollView>
    )
}



const styles = StyleSheet.create({
    box1: {
      backgroundColor: '#d47fa6',
      height:200,
      width:"100%",
      marginTop:30,
      elevation:3,
      
    },
    box2: {
      backgroundColor: '#52912e',
      height:200,
      width:500,
      elevation:3,
  
        
      },
    box3: {
      backgroundColor: '#241332',
      height:200,
      width:500,
      elevation:3,
    },
      circle: {
        backgroundColor: 'white',
        height:50,
        width:50,
        borderRadius:30,
        elevation:3,
        marginTop:-28,
        alignSelf:"flex-end",
        alignItems:"center",
        justifyContent:"center",
      },
      txt1: {
        color: '#f1f0f2',
        fontSize: 10,
        paddingTop:20,
        paddingLeft: 15,
      },
      txt2: {
        color: 'white',
        fontSize: 24,
        paddingTop:10,
        paddingLeft: 15,
        fontWeight:"bold"
      },
      txt3: {
        fontSize: 25,
        fontWeight:"600"
      },
      circle2: {
        backgroundColor: 'white',
        height:55,
        width:55,
        borderRadius:30,
        marginLeft:0,
        marginTop:78,
        elevation:3
      },
      txt4: {
        color: '#f1f0f2',
        fontSize: 10,
        paddingTop:60,
        paddingLeft: 15,
      },
      txt5: {
        color: '#9599b3',
        fontSize: 13,
        paddingLeft:16,
        fontWeight:"bold",
        paddingTop: 2,
      },
      txt6: {
        color: '#9599b3',
        fontSize: 13,
        paddingTop: 20,
        paddingLeft:12,
        fontWeight:"bold"
      },
      txt7: {
        color: '#9599b3',
        fontSize: 13,
        paddingTop: 20,
        paddingLeft:12,
        fontWeight:"bold"
      },
      txt8: {
        color: 'white',
        fontSize: 24,
        paddingTop: 10,
        paddingLeft:24,
        fontWeight:"bold"
      },
      modalView: {
        width: 327,
        height:355,
        borderWidth:1,
        borderRadius:10,
        backgroundColor:"#241332"
      },
      contentWrap: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    btn:{
      width:246,
      height:44,
      borderTopLeftRadius:30,
      borderTopRightRadius:30,
      borderBottomLeftRadius:30,
      borderBottomRightRadius:30,
      backgroundColor:"#8A56AC",
      elevation:5,
    },
    btn1:{
      width:246,
      height:44,
      borderTopLeftRadius:30,
      borderTopRightRadius:30,
      borderBottomLeftRadius:30,
      borderBottomRightRadius:30,
      backgroundColor:"#D47FA6",
      elevation:5,
    },
    btn2:{
      width:246,
      height:44,
      borderTopLeftRadius:30,
      borderTopRightRadius:30,
      borderBottomLeftRadius:30,
      borderBottomRightRadius:30,
      backgroundColor:"#998FA2",
      elevation:5,
    },
    txt9: {
      color: 'white',
      fontSize: 14,
      paddingTop: 10,
      paddingLeft:100,
      fontWeight:"bold"
    },
    txt10: {
      color: 'white',
      fontSize: 24,
      paddingTop: 10,
      paddingLeft:20,
      fontWeight:"bold"
    },
    txt11: {
      paddingTop:24,
      color: 'black',
      fontSize: 20,
      justifyContent:"center",
      alignSelf:"center",
      fontWeight:"200",
      elevation:5
    },
  });