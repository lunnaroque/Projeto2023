import { Image, Dimensions } from 'react-native';
import { Card, Button, Title, TextInput } from 'react-native-paper';
import { styles} from './Utilitarios';
import { useContext} from 'react';
import { DataContext } from '../Context';

const PedidosScreen = ( {navigation} ) => {
  let { nomeProduto, setNomeProduto, 
        imagemProduto, setImagemProduto, produtos, setProdutos} = useContext(DataContext);


  const confirmarPedido = () => {
      let produto = produtos;
      produto.push({nome: nomeProduto});
      setProdutos(produtos);
      setNomeProduto(null);
      setImagemProduto(null);
      navigation.navigate('Carrinho');
  }

  return (
    <Card style={styles.card}>
      <Card.Title title={nomeProduto} />
      <Card.Content>
        <Image source={imagemProduto} style={styles.image}/>
      </Card.Content>
      <Card.Actions>
        <Button icon="arrow-left" mode="outlined" onPress={() => navigation.navigate('Inicial')} style={styles.button}>
          Voltar
        </Button>
        <Button icon="check" mode="contained" onPress={() => confirmarPedido()} style={styles.button}>
          Confirmar 
        </Button>
      </Card.Actions>
    </Card>
  );
};

export default PedidosScreen;
