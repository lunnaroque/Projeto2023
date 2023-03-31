import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CarrinhoScreen from './components/CarrinhoScreen';
import PedidosScreen from './components/PedidosScreen';
import ProdutosScreen from './components/ProdutosScreen';
import Context from './Context';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <Context>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ color, size }) => {
              if (route.name === 'Produtos') {
                return <Ionicons name='home' size={size} color={color} />;
              } else if (route.name === 'Carrinho') {
                return <Ionicons name='plus' size={size} color={color} />;
              }
            },
            tabBarInactiveTintColor: 'gray',
            tabBarActiveTintColor: 'dodgerblue',
          })}>
           <Tab.Screen name="Inicial"  component={ProdutosScreen} />
          <Tab.Screen name="Carrinho" component={CarrinhoScreen} />
          <Tab.Screen name="Pedidos" component={PedidosScreen} options={{tabBarStyle: { display: "none" }, tabBarButton: () => null }}/>
        </Tab.Navigator>
      </NavigationContainer>
    </Context>
  );

}