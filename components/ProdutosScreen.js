import { ScrollView, Image} from 'react-native';
import { Card, Button, Title } from 'react-native-paper';
import { styles }  from './Utilitarios';
import { useContext } from 'react';
import { DataContext } from '../Context';

function TelaInicial({ navigation }) {
  const { setNomeProduto, setImagemProduto } =
    useContext(DataContext);

  const pedir = (nomeProduto, imagemProduto) => {
    setNomeProduto(nomeProduto);
    setImagemProduto(require(imagemProduto));
    navigation.navigate('Pedidos');
  };

  return (
    <ScrollView style={styles.scrolview}>

      <Card style={styles.card}>
        <Card.Content>
          <Image source={require('../assets/ragu.jpg')} style={styles.image} />
        </Card.Content>
         <Card.Title title="Ragu de Maminha" subtitle="Com purê de mandioquinha"/>
        <Card.Actions>
          <Button icon="plus" mode="contained"
            onPress={() => pedir('Ragu de Maminha', '../assets/ragu.jpg')}>
            Pedir
          </Button>
        </Card.Actions>
      </Card>

      <Card style={styles.card}>
        <Card.Content>
          <Image source={require('../assets/moqueca.jpg')} style={styles.image} />
        </Card.Content>
         <Card.Title title="Moqueca" subtitle="Com arroz negro" />
        <Card.Actions>
          <Button icon="plus" mode="contained"
            onPress={() => pedir('Moqueca', '../assets/moqueca.jpg')}>
            Pedir
          </Button>
        </Card.Actions>
      </Card>

      <Card style={styles.card}>
        <Card.Content>
          <Image source={require('../assets/frango.jpg')} style={styles.image} />
        </Card.Content>
         <Card.Title title="Peito de frango" subtitle="Com arroz integral"/>
        <Card.Actions>
          <Button icon="plus" mode="contained"
            onPress={() => pedir('Frango', '../assets/frango.jpg')}>
            Pedir
          </Button>
        </Card.Actions>
      </Card>
    </ScrollView>
  );
}

export default TelaInicial;


