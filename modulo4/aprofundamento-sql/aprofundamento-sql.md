# Exercios 1 

### Resposta: 

#### a.) ALTER TABLE Actor DROP COLUMN salary vai excluir colunas da tabela.

#### b.)ALTER TABLE Actor CHANGE gender sex VARCHAR(6); vai alterar o nome gender para sex.

#### c.)VARCHAR(255) vai alterar a quantidade de caracteres do varchar.

#### d.)

# Exercicios 2 

### Resposta: 

#### a.) UPDATE Actor set name = "Moacyr Franco" where id = "003";

#### b.) select upper(name)  as nome from Actor where  name = "Juliana Paes"

# Exercicio 3

### Resposta: 

#### a.) DELETE FROM Actor WHERE name = "Moacyr Franco";

#### b.) DELETE FROM Actor
WHERE
	gender = "male" AND
	salary > 300000;
 
 
 #### c.)SELECT COUNT(*) FROM Actor;
  
 SELECT


 
# Exercicio 4

### Resposta: 


#### a.) ELECT COUNT(*) FROM Actor;SELECT COUNT(*) FROM Actor WHERE gender = "female";
 
 #### b.) SELECT max(salary) from Actor;SELECT min(salary) from Actor;
 
 #### c.) SELECT max(SALARY) FROM Actor where gender = "female";
 
 #### d.) SELECT  sum(SALARY) FROM Actor;

 
# Exercicio 5

### Resposta: 

#### a.) vai retornar a quantidade de homens e mulheres.

#### b.) SELECT id, name FROM ActorORDER BY name DESC; 

#### C.) SELECT name from Actor order by name DESC;


#### D.) SELECT salary FROM Actor order by name desc limit 3

#### e.)SELECT AVG(salary), gender FROM Actor GROUP BY gender;

# Exercicio 6

### Resposta: 

#### A.) ALTER TABLE ACTOR ADD playing_limit_date DATE;

#### b.)ALTER TABLE Actor change salary salary float;

#### c.)UPDATE Actor SET playing_limit_date "2022-02-01" WHERE id = "004"

#### d.) DELETE FROM Actor WHERE id = "001" atualiza porem não mostra. 