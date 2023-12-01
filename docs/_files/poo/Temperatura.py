
class Temperatura:
    celcius = 0.0
    fahrenheit = 0.0
    kelvin = 0.0

    def __init__(self, val):
        self.celcius = val

    def __str__(self):
        return str(self.celcius)

    def __to_kelvin__(self):
        self.kelvin = self.celcius + 273.15
    
    def __to_fahrenheit__(self):
        self.fahrenheit = 32 + (9/5) * self.celcius
    
    def to_fahrenheit(self):
        self.__to_fahrenheit__()
        return self.fahrenheit
    
    def print_fahrenheit(self):
        self.__to_fahrenheit__()
        print(f'{self.fahrenheit} ºF')