import {useState, createContext} from 'react';

export const DataContext = createContext();

const Context = ({children}) => {
  let [nomeProduto, setNomeProduto] = useState(null);
  let [imagemProduto, setImagemProduto] = useState(null);
  let [produtos, setProdutos] = useState([]);

  return (
    <DataContext.Provider 
      value={{nomeProduto, setNomeProduto, imagemProduto, setImagemProduto, produtos,   setProdutos}}>
      {children} 
    </DataContext.Provider>
  );

}

export default Context;