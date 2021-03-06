﻿# Validador de CPF

## Índice

* [1. Resumo](#1-resumo)  
* [2. Método](#2-método)
* [3. Referências](#4-referências)

***

## 1. Resumo

O CPF, cadastro de pessoa física, é um número de registro único mantido pela Receita Federal destinado a pessoas naturais do Brasil.
  
É composto de 11 dígitos decimais, onde o penúltimo dígito corresponde a região fiscal do portador e os últimos dois dígitos são verificadores de validação que garatem a veracidade e unicidade do CPF.

***
## 2. Método
***

A validação de um dado número de CPF pode ser reduzida em duas etapas, a primeira é realziada a partir dos 9 primeiros dígitos e resulta na validação do primeiro dígito verificador e a segunda realizada com os 10 primeiros dígitos resulta na validação do segundo dígito verificador.  

Tomando por exemplo o número 123.456.789-09, será um número valido se os dígitos verificadores satisfazerem as seguintes condições:  

* O dígito verificador *__xi__* é igual ao resto da divisão do produto escalar do vertor formado pelos n primeiros dígitos com vetor das n posições em ordem descrecente pela fração (11/10); 

* Os dígitos são representados apenas entre 0 e 9, portanto se o resto da divisão for igual 10 ou 11, assumira o valor como 0;

ou seja, para o número 123.456.789-09 temos os vetores  
 *__v1__* = (1, 2, 3, 4, 5, 6, 7, 8, 9) e *__u1__* = (10, 9, 8, 7, 6, 5, 4, 3, 2)  

 Podemos facilitar o entendimento observando a tabela a seguir:

||||||||||||
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
|*__v1__*|1|2|3|4|5|6|7|8|9|
|*__u1__*|10|9|8|7|6|5|4|3|2|
|*__vi__* x *__ui__*|10|18|24|28|30|30|28|24|18|

O produto escalar dos vetores *__v1__* e *__u1__* é a soma de todos os (*__vi__* x *__ui__*), igual a 210.

E o valor esperado para o primeiro dígito verificador, *__x1__* é o resto da divisão (210 x 10)/11, *__x1__* = 10 que pela definição  será considerado 0.

O valor obtido é igual ao primeiro dígito verificador, garantindo sua validade.

#### *__Observe que se o valor obtido fosse diferente do dígito verificador o passo seguinte não seria necessário, e o CPF seria inválido__*

 O mesmo se repete para o segundo dígito verificador, porem agora os vetores são *__v2__* e *__u2__*:

  *__v2__* = (1, 2, 3, 4, 5, 6, 7, 8, 9, 0) e *__u2__* = (11, 10, 9, 8, 7, 6, 5, 4, 3, 2)  

||||||||||||
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
|*__v2__*|1|2|3|4|5|6|7|8|9|**0**|
|*__u2__*|**11**|10|9|8|7|6|5|4|3|2|
|*__vi__* x *__ui__*|11|20|27|32|35|36|35|32|27|0|

O produto escalar dos vetores *__v2__* e *__u2__* é a  soma de todos os (*__vi__* x *__ui__*), e é igual  235

e o valor esperado para o primeiro dígito verificador, *__x2__* é o resto da divisão (235 x 10)/11, *__x2__* = 9.

*__O número de CPF do exemplo é um número válido.__*

## 3. Referências
***

A Receita Federal disponibiliza uma versão genérica do código para validar números de CPF, consulte em:

[Código fonte da Receita Federal](http://www.receita.fazenda.gov.br/aplicacoes/atcta/cpf/funcoes.js)

***


[Voltar ao topo](#índice) 
