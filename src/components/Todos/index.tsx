import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import Ionicons from '@expo/vector-icons/Ionicons';

type Props = {
  title: string
  onRemove: () => void
  onSelect: () => void
  completed: boolean
}

export function Todos({ title, onRemove, onSelect, completed }: Props) { 

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.check} onPress={onSelect}>
        <Ionicons name="checkmark-circle-outline" size={24} color={completed ? '#5E60CE' : '#808080'} />
      </TouchableOpacity>
      { completed ?
        <Text style={styles.todosTextDone}>
          {title}
        </Text> :
        <Text style={styles.todosText}>
          {title}
        </Text>
      }
      <TouchableOpacity style={styles.check} onPress={onRemove}>
        <Ionicons name="trash-outline" size={24} color="#808080" />
      </TouchableOpacity>
    </View>
  )
}