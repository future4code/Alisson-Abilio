#  Exercícios Introdução SQL

###  Exercício 1
a) CREATE TABLE está criando uma tabela ator.  
ID: varchar com o uma string de no máximo 255 caracteres.

NAME: do mesmo tipo do ID.

BIRTH_DATE do tipo DATE que representa uma data e gênero que é varchar também, porém com o máximo de 6 caracteres.

b) MOSTRAR BANCOS DE DADOS: este comando mostra todos os bancos de dados ou "esquemas" disponíveis.
MOSTRAR TABELAS: mostra todas as tabelas contidas nesta base de dados.

c) o comando DESCRIBE retorna todos os nomes, tipos e informações.


###  Exercício 2
a) INSERT INTO Ator (id, nome, salário, data_nascimento, sexo)
VALORES("002", "Glória Pires", 1200000, "1963-08-23", "feminino")

b) Código de erro: 1062. Entrada duplicada '002' para a chave 'PRIMARY'
Pois ele buscou o ID na tabela e viu que já havia alguém com o mesmo ID, por mais que
diferentes informações.

c) Código de erro: 1136. A contagem de colunas não corresponde à contagem de valores
linha 1.
A ferramenta buscou na matriz da tabela, colunas específicas, e como não encontrada coluna
tal para colocar informação tal, houve o erro.

###  INSERT INTO Ator (id, nome, salário, data_nascimento, sexo)
###  VALORES("003", "Fernanda Montenegro", 300000, "1929-10-19", "feminino");

d) Código de erro: 1364. O campo 'nome' não tem um valor padrão
A barra de ferramentascou como colunas, as únicas, exceto 'name', não foram encontradas também
um valor para acrescentar a tais colunas, daí o erro.

###  INSERT INTO Ator (id, nome, salário, data_nascimento, sexo)
###  VALORES("004", "Antônio Fagundes", 400000, "1949-04-18", "masculino");

e) Código de erro: 1292. Valor de dados incorretos: '1950' para a coluna 'birth_date' na linha 1
Como a coluna de dados de nascimento foi programada para receber apenas varchar, a mesma não pode receber números inteiros.

###  INSERT INTO Ator (id, nome, salário, data_nascimento, sexo)
###  VALORES("005", "Juliana Paes", 719333.33, "1979-03-26", "feminino");

###  Ecercício 3
a) 
###  SELECT id, nome, salário, data_nascimento, gênero do Ator WHERE gênero = "feminino";

b)
###  SELECIONE o salário do Ator WHERE name = "Tony Ramos";

c) como nehuma das entradas na tabela gender "invalid" ou gender que seja um valor válido, ele retornou null, pois não localizou nada.

d)
###  SELECT id, nome, salário do ator WHERE salário <= 500000;

e) Código de erro: 1054. Coluna desconhecida 'nome' na 'lista de campos'
Este erro ocorreu, pois não há um campo'nome' para a tabela, mas sim 'nome'.

###  SELECT id, nome do Ator WHERE id = "002";

###  Exercício 4
está verificando se há nomes que comecem com a ou j, ao mesmo tempo que a) tenha maior que 300000. Os parentes servem para separar as lógicas, se não o e seria incorporado aa pesquisa do J.

b)
###  SELECT * FROM Ator
###  ONDE nome NÃO É "A%" E salário > 350.000;

C)
###  SELECT * FROM Ator
###  WHERE (nome LIKE "%G%" OU nome LIKE "%g%");

d)
###  SELECT * FROM Ator
###  ONDE ((nome LIKE "%G%" OU nome LIKE "%g%") OU (nome LIKE "%A%" OU nome LIKE "%a%)"))
###  AND (salário ENTRE 350.000 E 600.000 );

