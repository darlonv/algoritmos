import java.util.Scanner;

class Produto    {
    String descricao;
    int lote;
    float peso;
}

public class Registro {

    public static String registroProdutoParaString(Produto prod){
        return String.format("%d:%f:%s", prod.lote, prod.peso, prod.descricao);
    }

    public static void registro() {
        Produto prod = new Produto();
        prod.lote = 10;

        System.out.println(prod.lote);
        // Produto prod_1 = new Produto();
        // Produto prod_2 = new Produto();
        // Produto prod_3 = new Produto();
        // prod_1.descricao = "abc";
        // prod_1.lote = 1;
        // prod_1.peso = 2.0f;

        // System.out.println(prod_1.descricao);
        // System.out.println(registroProdutoParaString(prod_1));

        // prod_2.descricao = "def";
        // prod_2.lote = 1;
        // prod_2.peso = 2.0f;

        // System.out.println(prod_2.descricao);
        // System.out.println(registroProdutoParaString(prod_2));

    }

    public static void registroMain() {
        registro();
    }

    public static void main(String[] args) {
        registroMain();
    }
}