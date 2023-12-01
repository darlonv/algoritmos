import java.util.HashSet;

public class Conjuntos {

    public static void main(String[] args) {

        HashSet<String> conjunto = new HashSet<String>();

        conjunto.add("Cascavel");
        conjunto.add("Cascavel");
        conjunto.add("Foz do Iguaçu");

        System.out.printf("tamanho: %d\n", conjunto.size());

        System.out.printf("Cascavel: %b\n",conjunto.contains("Cascavel"));
        System.out.printf("Três Barras do Paraná: %b\n",conjunto.contains("Três Barras do Paraná"));

        System.out.println("=======");
        for (String i : conjunto) {
            System.out.println(i);
        }
        System.out.println("=======");

    }
}

