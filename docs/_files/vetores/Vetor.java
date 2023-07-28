import java.util.Scanner;

public class Vetor {

    public static void main(String[] args) {

        int[] idade = {20, 22, 18, 40, 37, 20, 12, 65, 68, 40}; //armazena informações da idade de 10 pessoas,
        float [] altura = {1.62f, 1.10f,  0.23f, 1,80f, 1,42f,1.20f, 0.90f, 1.40f };  //armazena a altura de 8 pessoas
        boolean [] porta_aberta = {true, false, false, true};   //armazena informações sobre 4 portas
        int i;
        int n = 4;

        for (i = 0; i < n; i++) {
            System.out.printf("%d - %d\n", i, idade[i]);
        }
    }
}