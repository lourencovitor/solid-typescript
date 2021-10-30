/**
 * Liskov substitution principle (Principio da substituição de Liskov)
  Se para cada objeto o1 do tipo S há um objeto o2 do tipo T de forma que, para todos
  os programas P definidos em termos de T, o comportamento de P é inalterado quando o1 é
  substituído por o2 então S é um subtipo de T.

  Mais simples: subtipos precisam ser substituiveis por seus tipos de base
  Mais simples ainda: se meu programa espera um Animal, algo do tipo Cachorro (que herda de animal)
  deve servir como qualquer outro Animal.
 */

import { Messaging } from './services/messaging';
import { Order } from './classes/order';
import { Persistency } from './services/persistency';
import { Product } from './classes/product';
import { ShoppingCart } from './classes/shopping-cart';
import { NoDiscount } from './classes/discount';

// const fiftyPercentDiscount = new FiftyPercentDiscount();
// const tenPercentDiscount = new TenPercentDiscount();
const noDiscount = new NoDiscount();
const shoppingCart = new ShoppingCart(noDiscount);
const messaging = new Messaging();
const persistency = new Persistency();
const order = new Order(shoppingCart, messaging, persistency);

shoppingCart.addItem(new Product('Camiseta', 49.9));
shoppingCart.addItem(new Product('Caderno', 9.9));
shoppingCart.addItem(new Product('Lápis', 1.59));

console.log(shoppingCart.items);
console.log(shoppingCart.total());
console.log(shoppingCart.totalWithDiscount());
console.log(order.orderStatus);
order.checkout();
console.log(order.orderStatus);
