class Lista:
    lista = []

    def append(self, valor):
        self.lista.append(valor)

    def inserir(self, valor, posicao):
        self.lista.insert(posicao, valor)

    def retirar(self, posicao):
        return self.lista.pop(posicao)

    def tamanho(self):
        return len(self.lista)

    def vazia(self):
        if self.tamanho() == 0:
            return True
        return False

    def print(self):
        print(self.lista)

class Fila:


l1 = Lista()
l1.append(10)
l1.append(16)
l1.inserir(8, 1)
l1.print()
print(l1.tamanho())
print(l1.vazia())
print(l1.retirar(0))
l1.print()
