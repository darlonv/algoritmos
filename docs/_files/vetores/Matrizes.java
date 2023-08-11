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

    }
}