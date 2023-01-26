import React, { useState } from 'react';
import './gallery.css' 
import { products } from '../../data/products'
import { IProduct } from '../../models';
import Modal from '../modal/modal';

export default function Gallery({searchInput}:{searchInput:string}) {

  const [active, setActive] = useState(false);
  const [modalContent, setModalContent] = useState<any>([]);

  const filterLists = (search:string, list:IProduct[]) => {
  if (!search) {
      return list;
  }
  return list.filter(({tags,title}) =>
     (tags +' '+ title).toLowerCase().includes(search.toLowerCase()) 
  );
}
  return (
    <div className='container'>
      <Modal active={active} setActive={setActive} children={modalContent}/>
        {filterLists(searchInput, products).map((item) =>
           ( <div className='item__card' key={item.id}>
            <div>
            <img className='item__img' onClick={() => {setActive(true); setModalContent(item.data)}} src={item.image} alt={item.title}/>
            <div className='item__title'>{item.title}</div>
            <div className='item__price'>{item.price} ₽</div>
            <button className='item__btn' onClick={() => window.open(item.link)}>Купить</button>
            </div>
        </div>)
        )}
        
          
        </div>
  )
}
