import React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import { Table, Alert } from "reactstrap";

import { v4 as uuidv4 } from "uuid";

export default function Basket({ basket, setBasket, products }) {
  const onClickDelete = (id) => {
    if (basket.some((val) => val.id === id)) {
      if(basket.find((val) => val.id === id).piece===1)
      {
        let newBasket = basket.filter((vall)=>{
          return  vall.id!==id
       })
         setBasket(newBasket)
      }
      else{
        basket.find((val) => val.id === id).piece--;

        setBasket((basket) => [...basket]);
      } 
    } 
    console.log(basket);
  };
  return (
    <div>
      {basket.length > 0 ? (
        <Table>
          <thead>
            <tr>
              <th hidden>#</th>
              <th>Piece</th>
              <th>product name</th>
              <th>product price</th>
              <td>&nbsp;</td>
              <th>Total price</th>              
              <th></th>              
              
            </tr>
          </thead>
          <tbody>
            {console.log(basket)}
            {basket.map((event) => (
              <tr key={uuidv4()}>
                <th scope="row" hidden>
                  {event.id}
                </th>
                <td>{event.piece}</td>
                <td>{event.productName}</td>
                <td>{event.productPrice}$</td>
                <td>&nbsp;</td>
                <th>{event.productPrice * event.piece} $</th>
                <td><DeleteIcon onClick={()=>onClickDelete(event.id)} sx={{ color: "#B22222" }}/></td>
                
              </tr>
            ))}
          </tbody>
        </Table>
      ) : (
        <Alert color="danger">Sepetinizde ürün bulunmamaktadır !</Alert>
      )}
    </div>
  );
}
