# API semelhante ao Trello 

### Pré-Reqisitos
Nosso primeiro desafio do programa de bolsas, será a criação de uma API cuja funcionalidade assemelha-se ao trello ou a um bloco de notas

##

*A API consiste em gerenciar 4 rotas*

- Rotas

&nbsp;
**POST para cadastrar os dados**
&nbsp;

**GET para consultar os dados**
&nbsp;

**PUT para atualizar os dados**
&nbsp;

**DELETE para deletar os dados**

- Os Campos abaixo

|campos       | exemplo                                               |
| :---:       |  :---:                                                |
|title        | "fuxo de mercadorias"                                 |
|description  |    10                                                 |
|createdAt    |"2021-12-20"                                           |
|updatedAt    |"2021-12-20"                                           |
|task         |[title, taskRelevance, completed, createdAt, updateAt] |

##

```bash
# para baixar a aplicação é necessario clonar usando o git bash
git clone https://github.com/washington-wj/api-agenda.git

# antes de rodar a aplicação atualize as bibliotecas
npm update

# para rodar a aplicação
npm start
``` 