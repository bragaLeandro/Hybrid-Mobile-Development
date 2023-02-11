import * as React from 'react';
import { Text, View} from 'react-native';

export default function ListaUsuarios({ users }) {

  const styles = {
    center: {
      marginTop: 120,
      width: 330,
      height: 200,
      backgroundColor: 'gray',
      textAlign: 'center',
    },
    textCenter: {
      marginTop: 60
    },
    background: {
      width: 330,
      backgroundColor: 'black',
      height: 500
    }
    
  }

  return (
    <View style={styles.background}>
      {Object.values(users).map(user => (
        <View key={user.id} style={styles.center}>
          <Text style={styles.textCenter}>Nome: {user.name}</Text>
          <Text>Faculdade: {user.university}</Text>
          <Text>Curso: {user.course}</Text>
          <Text>Turma: {user.universityClass}</Text>
          <Text>Idade: {user.age}</Text>
        </View>
      ))}
    </View>
  );
}