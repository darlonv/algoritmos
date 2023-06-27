import java.util.Scanner;

public class Hanoi {

    public static void hanoi(int n, char origem, char destino, char auxiliar) {
        if (n == 1) {
            System.out.printf("Mova o disco %d de %c para %c.\n", n, origem, destino);
        } else {
            hanoi(n - 1, origem, auxiliar, destino);
            System.out.printf("Mova o disco %d de %c para %c.\n", n, origem, destino);
            hanoi(n - 1, auxiliar, destino, origem);
        }
    }

    public static void hanoiMain() {
        int n;
        Scanner sc = new Scanner(System.in);
        System.out.println("Quantidade discos: ");
        n = sc.nextInt();
        sc.close();
        hanoi(n, 'A', 'C', 'B');
    }

    public static void main(String[] args) {

        hanoiMain();
    }
}