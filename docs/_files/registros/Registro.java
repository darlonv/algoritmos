import java.util.Scanner;


public class Registro {
    public static void registro() {
        Produto prod_1 = new Produto();
        Produto prod_2 = new Produto();
        Produto prod_3 = new Produto();
        prod_1.descricao = "abc";
        prod_1.lote = 1;
        prod_1.peso = 2.0f;

        System.out.println(prod_1.descricao);

        prod_2.descricao = "def";
        prod_2.lote = 1;
        prod_2.peso = 2.0f;

        System.out.println(prod_2.descricao);

    }

    public static void registroMain() {
        registro();
    }

    public static void main(String[] args) {

        registroMain();
    }
}