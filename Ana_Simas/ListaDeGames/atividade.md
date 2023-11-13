**1. O que é Node.js e por que é popular no desenvolvimento web?**

O Node.js é um ambiente de execução do código JavaScript do lado servidor 

**2. Qual é a diferença entre o Node.js e outras tecnologias de servidor, como o Apache?**

Ao contrário de outras tecnologias de servidor, que são baseadas em threads, o Node.js utiliza um modelo não bloqueante e orientado a eventos. Isso significa que ele pode lidar com várias solicitações simultâneas sem bloquear o fluxo de execução

**3. Como você inicia um projeto Node.js usando o npm?**

npm init -y

**4. O que é o Express.js e qual é o seu papel no desenvolvimento web com Node.js?**

O Express é um framework que possui um sistema de rotas, possibilita o tratamento de exceções e gerencia diferentes requisições HTTP com seus mais diversos verbos

**5. Explique o conceito de middleware no contexto do Express.js.**

Os middlewares são funções que podem tratar os inputs e outputs das rotas antes e ou depois que uma rota é processada, ou seja, criar um middleware que intercepta e verificar se uma requisição esta enviando um header específico e que caso o mesmo não esteja enviando o header ela retorne uma tela de erro para o usuário, negando a requisição de acessar uma determinada rota da aplicação, neste caso um middleware que trata uma pré-requisição. Pode criar um middleware que no final de cada resposta de uma rota, retorne também um header com metadados da resposta, por exemplo, headers de paginação de dados. Neste caso estamos criando um middleware de pós-requisição

**6. Como você roteia solicitações HTTP em um aplicativo Express?**

Encaminhamento da requisição para a rota definida e para a função específica de retorno

**7. O que é o middleware de análise de corpo (body-parser) e por que é útil em um aplicativo Express?**

É utilizado para analisar e extrair as informações do corpo da requisição

**8. Quais são os principais métodos HTTP e como eles são usados em rotas Express?**

GET (responder com uma informação solicitada), POST (enviar alguma informação), PUT (Atualizar uma informação), DELETE (remover uma informação)

**9. Como você lida com erros em um aplicativo Express?**

Defina funções de middleware de manipulação de erros da mesma forma que outras funções de middleware, exceto que funções de manipulação de erros possuem quatro argumentos ao invés de três: (err, req, res, next). Por exemplo:

**10. O que é uma API RESTful e como o Express pode ser usado para criar uma?**

Uma API RESTful (Application Programming Interface) é um conjunto de rotinas, protocolos e ferramentas para construir aplicações de software que expõem serviços a outras aplicações. O Express pode ser utilizado para executar as requisições nos modelos do protocolo RESTful