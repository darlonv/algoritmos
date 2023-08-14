import java.util.Scanner;

public class Matrizes {

    public static void main(String[] args) {

        int[][] idade = { { 1, 2, 3 }, { 4, 5, 6 } };
        int i;
        int j;

        for (i = 0; i < 2; i++) {
            for (j = 0; j < 3; j++) {
                System.out.printf("%d ", idade[i][j]);
            }
            System.out.println("");
        }

        int[][] teste = null;

        int l = 3;
        int c = 3;
        int counter = 0;

        // teste = new int[l][c];

        if (teste == null) {
            System.out.println("Matriz não alocada");
        } else {
            System.out.println("Matriz alocada");
        }

        teste = new int[l][c];

        if (teste == null) {
            System.out.println("Matriz não alocada");
        } else {
            System.out.println("Matriz alocada");
        }

        for (i = 0; i < l; i++) {
            for (j = 0; j < c; j++) {
                teste[i][j] = ++counter;
            }
        }

        for (i = 0; i < l; i++) {
            for (j = 0; j < c; j++) {
                System.out.printf("%d ", teste[i][j]);
            }
            System.out.println();
        }

    }
}