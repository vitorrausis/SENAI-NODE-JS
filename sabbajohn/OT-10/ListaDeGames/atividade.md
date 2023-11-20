# Atividade OT-05

* 1- Node é um _Runtime Exection_ Ambiente dp JavaScript construido em volta do V8 da Google Chrome. O mesmo ganhou muita popularidade devid a velocidade, eficiencia, possibilidade de reuso de código e a programação assíncrona. Além da enorme comunidade.

* 2- Diferente do Apache e outras ferramentas como o Django, o NodeJs segue um modelo de programação assíncrona e não bloqueante que usa um único Thread (EventLoop). Enquanto os outros trabalham de forma síncrona, onde cada requisição cria uma nova thread

* 3-  ```$ npm init -y ```
* 4- Express.Js é um framework web, utilizado para criar APIs RESTful.Facilitando o roteamento de URLs, solicitações e respostas HTTP, etc.

* 5- Middleware é o responsável por realizar operações intermediárias em solicitações HTTP antes que a rota final seja tratado. Como validação de dados, autorização, manipulação de sessões, logs, etc

* 6- O roteamento é feito através do método *app.use()* ou por metodos específicos de cada verbo HTTP. No seguinte formato.

    ```app.METHOD(path, callback)```

    ```
    app.get('/users', (req, res) => {
        res.send('Lista de usuários')
    }
    ```

* 7- O middleware body-parser é usado para analisar os dados do corpo da solicitação HTTP em um aplicativo Express. Ele permite que você acesse e manipule os dados enviados pelo cliente, como formulários HTML ou JSON.

* 8- Os principais métodos HTTP são:

    - GET: Usado para recuperar recursos existentes. Por exemplo, app.get('/users', callback)
    - POST: Usado para enviar dados e criar um novo recurso. Por exemplo, app.post('/users', callback)
    - PUT: Usado para atualizar um recurso existente com dados fornecidos. Por exemplo, app.put('/users/:id', callback)
    - DELETE: Usado para excluir um recurso existente. Por exemplo, app.delete('/users/:id', callback)

* 9- No Express, erros podem ser tratados usando middleware de tratamento de erros.
    ```
        app.use((err, req, res, next) => {
            // Lógica para tratar o erro
            res.status(500).send('Erro interno do servidor')
        })

    ```

* 10- Uma API RESTful é uma arquitetura de desenvolvimento web que segue os princípios do estilo arquitetural REST (Representational State Transfer). Ela permite que as aplicações se comuniquem por meio de solicitações HTTP, seguindo um conjunto predefinido de regras.

    O Express.js é frequentemente usado para criar APIs RESTful porque fornece uma estrutura flexível e fácil de usar para criar endpoints de API. Com o Express, podemos definir rotas que correspondem às solicitações HTTP e retornam os dados solicitados ou executam outras ações, como atualização ou exclusão de recursos.