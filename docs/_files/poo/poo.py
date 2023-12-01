

class Veiculo:
    cor = None
    marca = ""
    potencia = 0
    km = 0
    posicao = 0
    velocidade = 0
    direcao = 1 #1: frente -1: trás

    def dados(self):
        print(f'cor: {self.cor}')
        print(f'marca: {self.marca}')
        print(f'potencia: {self.potencia}')
        print(f'km: {self.km}')
        print(f'posicao: {self.posicao}')

    def andar(self):
        self.posicao += self.velocidade*self.direcao
        self.km += self.velocidade

    def inverter_direcao(self):
        self.direcao = self.direcao * -1


class Moto(Veiculo):
    num_rodas = 2

    def info(self):
        self.dados()
        print(f'num_rodas: {self.num_rodas}')

class Caminhao(Veiculo):
    cacamba = False
    carga_max = 0

    def info(self):
        self.dados()
        print(f'Possui caçamba: {self.cacamba}')
        print(f'Carga máxima: {self.carga_max}')



titan = Moto()
titan.velocidade = 100
titan.andar()
titan.andar()
titan.velocidade = 80
titan.inverter_direcao()
titan.andar()
titan.info()

# print('===')

# scania = Caminhao()
# scania.velocidade = 50
# scania.andar()
# scania.andar()
# scania.info()

