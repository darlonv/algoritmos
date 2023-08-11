import java.util.Scanner;

public class Vetores {

    public static void main(String[] args) {

        int[] idade;
        int i;
        int n = 4;

        idade = new int[n];

        for (i = 0; i < idade.length; i++) {
            System.out.printf("%d - %d\n", i, idade[i]);
        }
    }
}