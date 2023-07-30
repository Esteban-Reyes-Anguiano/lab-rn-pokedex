import { StyleSheet } from 'react-native';
import { theme } from './Themes';

export default StyleSheet.create({
  input: {
    width: '100%',
    height: 50, // Aumentamos el tamaño del input
    borderWidth: 2, // Hacemos el borde más grueso
    borderColor: theme.colors.primary, // Utilizamos un color más llamativo para el borde
    borderRadius: 10, // Hacemos las esquinas más redondeadas
    paddingHorizontal: 12, // Aumentamos el espacio horizontal interno
    marginBottom: 24, // Aumentamos el espacio entre inputs y otros elementos
    fontSize: 16, // Aumentamos el tamaño del texto dentro del input
    color: theme.colors.text, // Cambiamos el color del texto del input
  },
  listContainer: {
    width: '100%',
  },
  pokeball: {
    position: 'absolute',
    top: -50,
    left: 100,
    transform: [{rotate: '50deg'}],
  },
});
