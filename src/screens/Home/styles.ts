import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1a1a',
  },
  header: {
    backgroundColor: '#0d0d0d',
    height: 173,
    alignItems: 'center',
    justifyContent: 'center',
  },
  form: {
    width: '100%',
    height: 56,
    paddingHorizontal: 24 ,
    flexDirection: 'row',
    bottom: -28,

    position: 'absolute',
  },
  input: {
    flex: 1,
    marginRight: 12,
    backgroundColor: '#1f1e25',
    height: 56,
    borderWidth: 1,
    borderRadius: 6,
    color: '#fff',
    padding: 16,
    fontFamily: 'Inter_400Regular',
    fontSize: 16,
  },
  buttonText: {
    color: '#fff',
    fontSize: 24,
  },
  button: {
    width: 56,
    height: 56,
    borderRadius: 6,
    backgroundColor: '#1E6F9F',
    alignItems: 'center',
    justifyContent: 'center',
  },
  filter: {
    flexDirection: 'row',
    paddingHorizontal: 24,
    paddingTop: 55,
    paddingBottom: 20,
    justifyContent: 'space-between',
  },
  filterText: {
    fontSize: 14,
    fontFamily: 'Inter_700Bold', 
    color: '#4EA8DE',
    marginRight: 8,
  },
  filterTextCompleted: {
    fontSize: 14,
    fontFamily: 'Inter_700Bold', 
    color: '#8284FA',
    marginRight: 8,
  },
  counterBox: {
    backgroundColor: '#333333',
    borderRadius: 999,
    paddingVertical: 2,
    paddingHorizontal: 8,
  },
  counter: {
    color: '#FFF',
    fontFamily: 'Inter_700Bold',  
  },
  buttonFilter: {
    flexDirection: 'row',
  },
  listEmpty: {
    marginHorizontal: 24,
    padding:24,
    borderTopWidth: 1,
    borderColor: '#808080',
    alignItems: 'center',
  },
  listEmptyText: {
    fontFamily: 'Inter_400Regular',
    color: '#FFFFFF',
    textAlign: 'center',
    fontSize: 14,
  }
});
