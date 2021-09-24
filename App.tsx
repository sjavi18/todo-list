
import React, { useState } from 'react';
import { Keyboard, ScrollView, StyleSheet, Text, View } from 'react-native';
import { TaskInput } from './src/components/TaskInput';
import { TaskItem } from './src/components/TaskItem';


export default function App() {
  const [tasks, setTasks] = useState<string[]>([])

  const addTask = (task: string) => {
    if (task === null) return
    setTasks([...tasks, task])
    Keyboard.dismiss()
  }

  const delTask = (delIdx: number) => {
    setTasks(tasks.filter((val: string, idx: number) => idx !== delIdx))
  }

  return (
    <View style={styles.container}>
      <Text style={styles.head}>
        LISTA DE TAREAS
      </Text>
      <ScrollView style={styles.scrollView}>
        {
          tasks.map((task: string, idx: number) => {
            return (
              <View key={idx} style={styles.taskContainer}>
                <TaskItem taskIdx={idx + 1} taskTxt={task} taskDelete= {() => delTask(idx)} addTask={addTask}/>
              </View>
            )
          })
        }
      </ScrollView>
      <TaskInput addTask={addTask}></TaskInput>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a233c'
  },
  head: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '600',
    marginTop: 70,
    marginBottom: 10,
    marginLeft: 20
  },
  scrollView: {
    marginBottom: 70,
  },
  taskContainer: {
    marginTop: 20,
  }
});
