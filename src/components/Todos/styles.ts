import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#262626',
    maxWidth: "100%",
    marginHorizontal: 24,
    marginBottom: 8,
    padding:12,

    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#333',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  check: {
    marginRight: 12,
    borderRadius: 999,
    borderColor: '#4ea8de'
  },
  delete: { 
  },
  todosText: {
    width: '80%',
    color: '#fff',
    fontFamily: 'Inter_400Regular',
    fontSize: 14,
    lineHeight: 19,
  },
  todosTextDone: {
    width: '80%',
    color: '#444',
    fontFamily: 'Inter_400Regular',
    fontSize: 14,
    lineHeight: 19,
    textDecorationLine: 'line-through'
  }
})