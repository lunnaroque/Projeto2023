import { FlatList } from 'react-native';
import { Card, Paragraph, Button, List } from 'react-native-paper';
import { styles} from './Utilitarios';
import { useContext } from 'react';
import { DataContext } from '../Context';

const CarrinhoScreen = ({ navigation }) => {
  let { produtos, setProdutos} = useContext(DataContext);

  const excluirProduto = (index) => {
    let produto = produtos;
    produto = produto.filter((item) => item !== produto[index]);
    setProdutos(produto);
  };

  return (
    <Card style={styles.card}>
      <Card.Title title="Pedidos Realizados" />
      <Card.Content>
        {produtos.length ? (
          <FlatList
            data={produtos}
            renderItem={({ item, index }) => {
              return (
                <List.Accordion
                  title={item.nome}
                  left={(props) => <List.Icon icon="food" />}>
                  <List.Item
                    right={(props) => (
                      <Button
                        icon="delete"
                        mode="contained"
                        onPress={() => excluirProduto(index)}>
                        Excluir
                      </Button>
                    )}
                  />
                </List.Accordion>
              );
            }}
          />
        ) : (
          <Paragraph>Nenhum produto incluido!</Paragraph>
        )}
      </Card.Content>
    </Card>
  );
};

export default CarrinhoScreen;