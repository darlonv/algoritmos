from dataclasses import dataclass

@dataclass
class Produto:
  descricao = ""
  lote = 0
  peso = 0.0

def registroProdutoParaString(prod):
    return f"{prod.lote}:{prod.peso}:{prod.descricao}"

#variáveis
prod_1 = Produto()
prod_2 = Produto()
prod_3 = Produto()

#definição dos valores a cada campo
prod_1.descricao = "leite"
prod_1.lote = 100
prod_1.peso = 0.750

prod_2.descricao = "chocolate"
prod_2.lote = 84
prod_3.peso = 0.150

prod_3.descricao = "agua mineral"
prod_3.lote = 502
prod_3.peso = 0.450

print(registroProdutoParaString(prod_1))
print(registroProdutoParaString(prod_2))
print(registroProdutoParaString(prod_3))

