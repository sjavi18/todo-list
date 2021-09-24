import React, { useState } from 'react'
import { KeyboardAvoidingView, Platform, StyleSheet, TextInput, TouchableOpacity, View } from 'react-native'
import { MaterialIcons } from "@expo/vector-icons";

export interface TaskInputInterface {
    addTask (value: string) : void,

}


export const TaskInput = (props: TaskInputInterface) => {
    const {addTask} = props
    const [taskInput, setTaskInput] = useState('')

    const handleAddTask = (value: string) => {
        addTask(value)
        setTaskInput('')
    }

    return (
        <KeyboardAvoidingView
        behavior={Platform.OS === "ios"? "padding": "height"}
        style={stylesTaskInput.container}
        >
            <TextInput style={stylesTaskInput.input} value={taskInput} onChangeText={text => setTaskInput(text)} placeholder={'Ingresa una tarea'} placeholderTextColor={'#ccc'}/>
            <TouchableOpacity onPress={() => handleAddTask(taskInput)}>
                <View style={stylesTaskInput.btn}>
                    <MaterialIcons name="keyboard-arrow-up" size={24} color="black" />
                </View>
            </TouchableOpacity>
        </KeyboardAvoidingView>
    )
}

export const stylesTaskInput = StyleSheet.create({
    container: {
        borderColor: '#fff',
        backgroundColor: '#354e77',
        borderWidth: 1,
        marginHorizontal: 20,
        borderRadius: 8,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        position: 'absolute',
        bottom: 20,
    },
    input: {
        color: '#fff',
        height: 50,
        flex: 1,
    },
    btn: {
        height: 30,
        width: 30,
        borderRadius: 4,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    }
})