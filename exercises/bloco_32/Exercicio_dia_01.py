import math

# Exercício 1: Crie uma função que receba dois números e retorne o maior deles.


def biggest_number(a, b):
    if a > b:
        return a

    return b


print(biggest_number(10, 100))

# Exercício 2: Calcule a média aritmética dos valores contidos em uma lista.


def average_of_list(list):
    return sum(list) / len(list)


print(average_of_list([1, 2, 3, 4]))

# Exercício 3: Faça um programa que, dado um valor n qualquer, tal que n > 1 ,
# imprima na tela um quadrado feito de asteriscos de lado de tamanho n.


def print_squares(n):
    for i in range(n):
        print("*" * n)


print(print_squares(5))

# Exercício 4: Crie uma função que receba uma lista de nomes e retorne o nome
# com a  maior quantidade de caracteres. Por exemplo, para
# ["José", "Lucas", "Nádia", "Fernanda", "Cairo", "Joana"]
# , o retorno deve ser "Fernanda" .


def larger_name(list_of_names):
    largest_name = {"name": "", "size": 0}
    for name in list_of_names:
        if len(name) > largest_name["size"]:
            largest_name["name"] = name
            largest_name["size"] = len(name)

    return largest_name["name"]


print(larger_name(["José", "Lucas", "Nádia", "Fernanda", "Cairo", "Joana"]))
# better implemented Trybe
# def find_biggest_name(names):
#     biggest_name = names[0]
#     for name in names:
#         if len(name) > len(biggest_name):
#             biggest_name = name
#     return biggest_name


# Exercício 5: Considere que a cobertura da tinta é de 1 litro para cada 3
# metros quadrados e que a tinta é vendida em latas de 18 litros, que custam
# R$ 80,00. Crie uma função que retorne dois valores em uma tupla contendo a
# quantidade de latas de tinta a serem compradas e o preço total a partir do
# tamanho de uma parede(em m²).


def paint_costs(area):
    can_price = 80
    required_liters = area / 3
    required_cans = required_liters // 18
    if required_liters % 18:
        required_cans += 1
    return required_cans, required_cans * can_price


def paint_costs_2(area):
    can_price = 80
    required_liters = area / 3
    required_cans = math.ceil(required_liters / 18)
    return required_cans, required_cans * can_price


# Exercício 6: Crie uma função que receba os três lado de um triângulo e
# informe qual o tipo de triângulo formado ou "não é triangulo" , caso não seja
# possível formar um triângulo.
#   Três lados formam um triângulo quando a soma de quaisquer dois lados for
#     maior que o terceiro;
#   Triângulo Equilátero: três lados iguais;
#   Triângulo Isósceles: quaisquer dois lados iguais;
#   Triângulo Escaleno: três lados diferentes.


def type_of_triangle(side1, side2, side3):
    is_triangle = (
        side1 + side2 > side3
        and side2 + side3 > side1
        and side1 + side3 > side2
    )
    if not is_triangle:
        return "não é triângulo"
    elif side1 == side2 == side3:
        return "equilátero"
    elif side1 == side2 or side2 == side3 or side1 == side3:
        return "isósceles"
    else:
        return "escaleno"


# Bônus
# Exercício 1: Dada uma lista, descubra o menor elemento. Por exemplo,
# [5, 9, 3, 19, 70, 8, 100, 2, 35, 27] deve retornar 2.


def minimum(numbers):
    smaller = numbers[0]
    for number in numbers:
        if number < smaller:
            smaller = number
    return smaller


print(minimum([5, 9, 3, 19, 70, 8, 100, 2, 35, 27]))
# Exercício 2: Faça um programa que, dado um valor n qualquer, tal que n > 1 ,
# imprima na tela um triângulo retângulo com n asteriscos de base. Por exemplo,
# para n = 5 o triângulo terá 5 asteriscos na base:


def draw_triangle(n):
    for row in range(1, n + 1):
        print(row * "*")


# Exercício 3: Crie uma função que receba um número inteiro N e retorne o
# somatório de todos os números de 1 até N . Por exemplo, para N = 5 , o valor
# esperado será 15.


def summation(limit):
    total = 0
    for number in range(1, limit + 1):
        total += number
    return total


# Exercício 4: Um posto está vendendo combustíveis com a seguinte tabela de
# descontos:
#   Álcool:
#     - Até 20 litros, desconto de 3% por litro;
#     - Acima de 20 litros, desconto de 5% por litro.
#   Gasolina:
#     - Até 20 litros, desconto de 4% por litro;
#     - Acima de 20 litros, desconto de 6% por litro.
# Escreva uma função que receba o número de litros vendidos, o tipo de
# combustível (codificado da seguinte forma: A - álcool, G - gasolina), e
# retorne o valor a ser pago pelo cliente, sabendo-se que o preço do litro
# da gasolina é R$ 2,50, e o preço do litro do álcool é R$ 1,90.


def fuel_price(type, liters):
    if type == "A":
        price = 1.90
        discount = 0.03
        if liters > 20:
            discount = 0.05
    elif type == "G":
        price = 2.50
        discount = 0.04
        if liters > 20:
            discount = 0.06
    total = price * liters
    total -= total * discount
    return total
