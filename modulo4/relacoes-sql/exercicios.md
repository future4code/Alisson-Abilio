## EXERCÍCIO 1 <h1>

#### a)

A chave estrangeira é a referência de uma outra chave  em outra tabela.

#### b)

INSERT INTO Rating (id, comment, rate, movie_id)
VALUES (
"004",
"Ruim!",
1,
"004"
);

#### c)
Se não existe cheve
não é possivel criar.

#### d)

ALTER TABLE Movie DROP COLUMN rating;

#### e)


proibe de deletar ou atualizar uma linha de uma tabela  onde interfere diretamente em outra tabela 

## EXERCÍCIO 02 <h1>

#### a)
Relaciona a tabela de atores com a tabla de filmes.
#### b)
INSERT INTO MovieCast VALUES
('001','1'), ('002','1'), ('003','2'),
('004','2'), ('001','3'), ('002','4'),
('003','4'), ('004','5');

#### c)
Não adiciona ou atualiza  as chaves não sao compativeis .
#### d)
Não deletar  as chaves não sao compativeis .

## EXERCÍCIO 03 <h1>

#### a)
 ON junta as tabelas unificando
