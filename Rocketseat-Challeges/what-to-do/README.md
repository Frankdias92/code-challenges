# What To Do - Aplicativo de Lista de Tarefas

O What To Do é uma aplicação web para gerenciamento de lista de tarefas, onde os usuários podem adicionar, editar, excluir e marcar tarefas como concluídas.

## Instalação

1. Clone o repositório para o seu ambiente local:

```bash
git clone https://github.com/Frankdias92/code-challenges.git
```

2. Instale as dependências do projeto:

```bash
npm install
```

3. Inicie o servidor de desenvolvimento:

```bash
npm start
```

## Uso

Após iniciar o servidor, acesse a aplicação em [http://localhost:5173](http://localhost:5173) no seu navegador.

### Recursos Principais:

- **Adicionar Tarefa:** Os usuários podem adicionar novas tarefas utilizando o botão "+".
- **Editar Tarefa:** Clicando em uma tarefa existente, os usuários podem editar o título e o conteúdo da tarefa.
- **Excluir Tarefa:** Os usuários podem excluir uma tarefa clicando no ícone de lixeira.
- **Marcar Tarefa Concluída:** Os usuários podem marcar uma tarefa como concluída clicando no ícone de marcação.

## Estrutura do Projeto

O projeto está estruturado da seguinte maneira:

```
what-to-do/
  ├── src/
  │   ├── components/
  │   │   ├── header.tsx
  │   │   ├── newNoteTask.tsx
  │   │   ├── noteTask.tsx
  │   │   └── ...
  │   ├── app.tsx
  │   └── ...
  ├── public/
  ├── package.json
  └── README.md
```

## Tecnologias Utilizadas

- React
- TypeScript
- Radix UI
- Lucide React
- Sonner (para notificações)

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir uma issue ou enviar uma solicitação de pull.

## Licença

Este projeto é licenciado sob a [Licença MIT](https://opensource.org/licenses/MIT).

## Autor

Nome do Autor - [@Frankdias92](https://github.com/Frankdias92)

## Créditos

#### À Escola Rocketseat e Equipe:

Gostaria de expressar à Escola Rocketseat e à sua incrível equipe por fornecerem recursos valiosos, suporte inestimável e inspiração constante ao longo do desenvolvimento deste projeto. Sem o apoio e a orientação excepcionais da Rocketseat e do Diego, este projeto não teria se tornado realidade.

Agradeço por:

Conteúdo de alta qualidade: Aprofundei meus conhecimentos e aprimorei minhas habilidades através dos cursos, tutoriais e materiais didáticos impecáveis da Rocketseat.
Comunidade vibrante: Encontrei suporte, colaboração e troca de experiências valiosas na comunidade engajada da Rocketseat, composta por alunos e profissionais talentosos.
Suporte personalizado: A equipe da Rocketseat se mostrou sempre disponível e pronta para solucionar dúvidas, oferecer orientação e solucionar problemas com presteza e profissionalismo.

À Autora do Design Original, Millena Martins:

Meus sinceros agradecimentos à talentosa Millena Martins pela criação do design original que serviu como base para este projeto. Sua criatividade, bom gosto e atenção aos detalhes resultaram em um design inspirador e de alta qualidade, que guiou e elevou meu trabalho.


Conclusão:

O sucesso deste projeto se deve, em grande parte, ao apoio fundamental da Escola Rocketseat, sua equipe dedicada, Diego, Mayk e à talentosa Millena Martins. Sou imensamente grato por suas contribuições inestimáveis e por tornarem este projeto uma realidade.

## Aprendezido com esse projeto

Durante o desenvolvimento do projeto "doWhat", foram adquiridos diversos conhecimentos e habilidades em diferentes áreas. Abaixo, destacam-se os principais aprendizados obtidos:

Desenvolvimento Frontend com React:

Aprofundei-me no uso do React para criar interfaces de usuário dinâmicas e interativas com tailwind.

Aprendi a criar e gerenciar componentes reutilizáveis, melhorando a organização e manutenção do código.

Integração de Bibliotecas Externas: 

Ganhei experiência na integração de bibliotecas de terceiros, como @radix-ui/react-dialog e lucide-react, para adicionar funcionalidades pré-construídas ao projeto.

Persistência de Dados com localStorage:

Implementei a persistência de dados utilizando o localStorage do navegador, permitindo que as tarefas fossem salvas localmente e recuperadas entre sessões.

Gerenciamento de Estado com Hooks:

Utilizei os hooks useState e useEffect para gerenciar o estado dos componentes, proporcionando uma experiência de usuário mais dinâmica e responsiva.

Acessibilidade e Usabilidade:

Explorei práticas de acessibilidade ao garantir que o projeto fosse acessível a uma ampla gama de usuários, incluindo a adição de descrições alternativas para ícones e o uso de elementos semânticos adequados.





## Preview

![Live]()

![Captura de tela da aplicação](./public/capa-doWhat.png)

---

