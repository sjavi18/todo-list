import React, { createRef } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Alert } from "react-native"
import { MaterialIcons } from "@expo/vector-icons"
import ActionSheet from "react-native-actions-sheet"
import { stylesTaskInput } from './TaskInput';

export interface TaskItemInterface {
    taskIdx: number,
    taskTxt: string,
    taskDelete(e: any): void,
    addTask(e: any): void,
    taskInput: string,
    handleAddTask(e: string): void
    setTaskInput: any
}

const actionSheetRef: any = createRef();

export const TaskItem = (props: TaskItemInterface) => {
    let actionSheet;
    return (
        <View style={styles.container}>
            <View style={styles.idxContainer}>
                <Text style={styles.idx}>{props.taskIdx}</Text>
            </View>
            <View style={styles.taskContainer}>
                <Text style={styles.task}>{props.taskTxt}</Text>
                <TouchableOpacity onPress={() => {
                    actionSheetRef.current?.setModalVisible();
                }}>
                    <MaterialIcons name="more-vert" size={28} color='#fff'> </MaterialIcons>
                </TouchableOpacity>
            </View>

            <ActionSheet ref={actionSheetRef}>
                <View style={{ height: "20%" }}>
                    <View style={stylesTaskInput.container}>
                        <TextInput style={stylesTaskInput.input} value={props.taskInput} onChangeText={text => props.setTaskInput(text)} placeholderTextColor={'#ccc'} />
                        <TouchableOpacity onPress={() => props.handleAddTask(props.taskInput)}>
                            <View style={stylesTaskInput.btn}>
                                <MaterialIcons name="keyboard-arrow-up" size={24} color="black" />
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={{height:100, justifyContent:'center', alignItems:'center', flexDirection: 'row'}}>
                        <TouchableOpacity style={{}} onPress={() => props.taskDelete(props.taskIdx)}>
                            <MaterialIcons name="delete-forever" size={48} color='black'> </MaterialIcons>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => {
                        }}>
                            <MaterialIcons name="event" size={48} color='black'> </MaterialIcons>
                        </TouchableOpacity>
                    </View>
                </View>

            </ActionSheet>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginHorizontal: 20,
    },
    idxContainer: {
        backgroundColor: '#334464',
        borderRadius: 8,
        marginRight: 10,
        alignItems: 'center',
        justifyContent: 'center',
        width: 50,
        height: 50
    },
    idx: {
        color: '#fff',
        fontSize: 20
    },
    taskContainer: {
        backgroundColor: '#334464',
        borderRadius: 8,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        flex: 1,
        paddingHorizontal: 10,
        paddingVertical: 5,
        minHeight: 50
    },
    task: {
        color: '#fff',
        width: '90%',
        fontSize: 18
    },
    actions: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: 200
    }
})
