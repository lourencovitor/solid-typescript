<p align="center">
  <a href="https://github.com/lourencovitor/solid-typescript" rel="solid-typescript">
 <img width=500px height=200px src="https://hermes.digitalinnovation.one/articles/cover/1663cb80-1c8c-4ec8-9fcf-b918c34b8c99.png" alt="Project logo"></a>
</p>

<h3 align="center">solid-typescript</h3>

---

## 📝 Tabela de conteudo

- [S ingle Responsibility Principle](#s)

- [O pen/closed principle](#o)

- [L iskov substitution principle](#l)

- [I nterface segregation principle](#i)

- [D ependency inversion principle](#d)

---

## ✔ Single Responsibility Principle <a name = "s"></a>

<p align="center">
  <a href="" rel="noopener">
 <img width=1000px height=500px src="https://miro.medium.com/max/2000/1*P3oONz9Da3Tc1w97fMV73Q.png" alt="single responsability"></a>
</p>

"Este é o primeiro princípio do SOLID, um dos mais fáceis de entender e de aplicar.

"A class should have one, and only one, reason to change"
“Uma classe deve ter um, e apenas um, motivo para ser modificada”

Se uma classe só deve ter um motivo para ser modificada, certamente ela só deve ter uma única responsabilidade, logo:

Cada responsabilidade deve ser uma classe, porque uma responsabilidade é um eixo de mudança."

<a href="https://github.com/lourencovitor/solid-typescript/tree/master/src/srp">EXEMPLO SRP</a>

---

## ✔ Open/closed principle <a name = "o"></a>

<p align="center">
  <a href="" rel="noopener">
 <img width=1000px height=400px src="https://miro.medium.com/max/2000/1*0MtFBmm6L2WVM04qCJOZPQ.png" alt="open/close principle"></a>
</p>

"Este é o segundo princípio do SOLID e certamente o princípio mais polêmico, desconhecido e não utilizado.

Software entities (classes, modules, functions, etc.) should be open for
extension, but closed for modification
Entidades de software (classes, módulos, funções, etc) devem estar abertas para extensão, mas fechadas para modificação.

Software é evolutivo, raramente um software é feito uma vez e nunca mais será modificado. Sendo assim onde esse princípio tenta chegar?

Extensibilidade

É uma das chaves da orientação a objetos, quando um novo comportamento ou funcionalidade precisar ser adicionado é esperado que as existentes sejam estendidas e e não alteradas, assim o código original permanece intacto e confiável enquanto as novas são implementadas através de extensibilidade. Criar código extensível é uma responsabilidade do desenvolvedor maduro, utilizar design duradouro para um software de boa qualidade e manutenibilidade.

Abstração

Quando aprendemos sobre orientação a objetos com certeza ouvimos sobre abstração, é ela que permite que este princípio funcione. Se um software possui abstrações bem definidas logo ele estará aberto para extensão."

<a href="https://github.com/lourencovitor/solid-typescript/tree/master/src/ocp">EXEMPLO OCP</a>

---

## ✔ Liskov substitution principle <a name = "l"></a>

<p align="center">
  <a href="" rel="noopener">
 <img width=1000px height=600px src="https://miro.medium.com/max/2000/1*yKk2XKJaCLNlDxQMx1r55Q.png" alt="open/close principle"></a>
</p>

"O Princípio de Substituição de Liskov leva esse nome por ter sido criado por Barbara Liskov, em 1988. A definição formal de Liskov diz que:

“Se para cada objeto o1 do tipo S há um objeto o2 do tipo T de forma que, para todos os programas P definidos em termos de T, o comportamento de P é inalterado quando o1 é substituído por o2 então S é um subtipo de T”

Tal definição foi resumida e popularizada por Robert C. Martin (Uncle Bob), em seu livro “Agile Principles Patterns and Practices”, como:

“Classes derivadas devem poder ser substitutas de suas classes base”

Em outras palavras, toda e qualquer classe derivada deve poder ser usada como se fosse a classe base."

<a href="https://github.com/lourencovitor/solid-typescript/tree/master/src/lsp">EXEMPLO LSP</a>

---

## ✔ Interface segregation principle <a name = "i"></a>

<p align="center">
  <a href="" rel="noopener">
 <img width=800px height=400px src="https://miro.medium.com/max/5200/1*2hmyR9L43Vm64MYxj4Y89w.png" alt="open/close principle"></a>
</p>

"Princípio da Segregação da Interface — Uma classe não deve ser forçada a implementar interfaces e métodos que não irão utilizar.
Esse princípio basicamente diz que é melhor criar interfaces mais específicas ao invés de termos uma única interface genérica."

<a href="https://github.com/lourencovitor/solid-typescript/tree/master/src/isp">EXEMPLO ISP</a>

---

## ✔ Dependency inversion principle <a name = "d"></a>

<p align="center">
  <a href="" rel="noopener">
 <img width=800px height=400px src="https://miro.medium.com/max/2000/1*Qk8tDmjQlyvwKxNTfXIo0Q.png" alt="open/close principle"></a>
</p>

"Princípio da Inversão de Dependência — Dependa de abstrações e não de implementações.
De acordo com Uncle Bob, esse princípio pode ser definido da seguinte forma:

1. Módulos de alto nível não devem depender de módulos de baixo nível. Ambos devem depender da abstração.
2. Abstrações não devem depender de detalhes. Detalhes devem depender de abstrações.
   No contexto da programação orientada a objetos, é comum que as pessoas confundam a Inversão de Dependência com a Injeção de Dependência, porém são coisas distintas, mas que relacionam entre si com um proposito em comum, deixar o código desacoplado.
   Importante: Inversão de Dependência não é igual a Injeção de Dependência, fique ciente disso! A Inversão de Dependência é um princípio (Conceito) e a Injeção de Dependência é um padrão de projeto (Design Pattern)."

<a href="https://github.com/lourencovitor/solid-typescript/tree/master/src/dip">EXEMPLO DIP</a>
