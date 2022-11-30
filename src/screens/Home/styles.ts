import {StyleSheet} from 'react-native'

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#000',
      paddingLeft: 24,
      paddingRight: 24,
      paddingTop: 90
    },
    eventName:{
      fontSize: 20,
      fontWeight: 'bold',
      color: '#fdfcfe'
    },
    eventDate:{
      paddingTop: 10,
      paddingBottom: 10,
      fontSize: 10,
      color: '#ddd'
    },
    input:{
      flex: 1,
      height: 56,
      backgroundColor: '#1f1e25',
      borderRadius: 5,
      color: '#fDfcfe',
      padding: 16,
      fontSize: 20
    },
    buttonText:{
      color: '#fff',
      fontSize: 24
    },
    button:{
      width: 56,
      height: 56,
      borderRadius: 5,
      backgroundColor: '#31CF67',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    },
    form:{
      flexDirection: 'row',
      width: '100%',
      gap: 10,
      marginTop: 36,
      marginBottom: 42,
    },
    ListEmptyText:{
      color: '#fff',
      fontSize: 14,
      textAlign: 'center',
    }
  });