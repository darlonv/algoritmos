from datetime import date
class Tempo:
    #atributos
    inicio = 0
    
    #métodos
    def __init__(self, val):
        self.inicio = date.today()

    def __str__(self):
        return str(self.inicio)
    
    def now(self):
        return str(date.today())

    def print(self):
        print(self.inicio)