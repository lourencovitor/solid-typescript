/**
 * Dependency inversion principle (Principio da inversão de dependência)
   módulos de alto nível não devem ser dependentes do módulos de baixo nível; ambos devem depender de abstrações.
   Detalhes devem depender das abstrações, não o inverso.

   Classes de baixo nível são classes que executam tarefas (os detalhes)
   Classes de alto nível são classes que gerenciam as classes de baixo nível
 */

import { Messaging } from './services/messaging';
import { Order } from './classes/order';
import { Persistency } from './services/persistency';
import { Product } from './classes/product';
import { ShoppingCart } from './classes/shopping-cart';
import { NoDiscount } from './classes/discount';
import { EnterpriseCustomer, IndividualCustomer } from './classes/customer';
import { MessagingProtocol } from './classes/interfaces/messaging-protocol';

// const fiftyPercentDiscount = new FiftyPercentDiscount();
// const tenPercentDiscount = new TenPercentDiscount();
const noDiscount = new NoDiscount();
const shoppingCart = new ShoppingCart(noDiscount);
const messaging = new Messaging();
const persistency = new Persistency();
// const individualCustomer = new IndividualCustomer(
//   'Vitor',
//   'Silva',
//   '1111111111',
// );
const enterpriseCustomer = new EnterpriseCustomer(
  'Empresa Gigante',
  '222222222',
);

class MessagingMock implements MessagingProtocol {
  sendMessage() {
    console.log('A mensagem foi enviada pelo MOCK');
  }
}

const messagingMock = new MessagingMock();

const order = new Order(
  shoppingCart,
  messagingMock,
  persistency,
  enterpriseCustomer,
);

shoppingCart.addItem(new Product('Camiseta', 49.9));
shoppingCart.addItem(new Product('Caderno', 9.9));
shoppingCart.addItem(new Product('Lápis', 1.59));

console.log(shoppingCart.items);
console.log(shoppingCart.total());
console.log(shoppingCart.totalWithDiscount());
console.log(order.orderStatus);
order.checkout();
console.log(order.orderStatus);
