import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert, FlatList } from 'react-native';
import { Participant } from '../../components/Participant';
import { styles } from './styles';

export function Home() {
  const partipant =
   ['pedro']
  function handleParticipantAdd(){
    if(partipant.includes('pedro')){
      return Alert.alert("Participant already Exists", "ja existe um partipante na lista com este nome")
    } 
  }

  function handleParticipantRemove(name: string){
    Alert.alert("Remover", `Deseja remover o partipante ${name}?`, [
      {
        text: 'Sim',
        onPress: () => Alert.alert("Deletado!")
      },
      {
        text: 'nao',
        style: 'cancel'
      }
    ])    
  }
  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Nome do Evento </Text>
      <Text style={styles.eventDate}>Sexta, 4 de Novembro de 2022.</Text>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Nome do Participante"
          placeholderTextColor={"#6b6b6b"}
        />

        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={partipant}
        keyExtractor = {item => item}
        renderItem = {({item}) => (
          <Participant
                key={item} 
                name={item}
                onRemove={() => handleParticipantRemove(item)}
            />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent = {()=>(
          <Text style={styles.ListEmptyText}>
            Ninguem chegou no evento ainda? Adicione partipantes a sua lista
            de presenca.
          </Text>
        )}
      />

    </View>
  );
}
