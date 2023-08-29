import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

public class Data {
    // Obtém a diferença entre segundos entre duas datas
    static long tempoEmSegundos(String _data_inicio, String _data_fim) {
        Date data_ini, data_fim;
        SimpleDateFormat data_parse;
        long tempo_milissegundos, tempo_segundos = 0;
        
        //Utiliza um objeto SimpleDateFormat, com o formato dos dados de entrada
        data_parse = new SimpleDateFormat("dd-MM-yyyy HH:mm:ss");

        try{
                //Cria os objetos do tipo Date, já convertidos pelo SimpleDateFormat
                data_ini = data_parse.parse(_data_inicio);
                data_fim = data_parse.parse(_data_fim);

                //Calcula a diferença entre as datas em milisegundos
                tempo_milissegundos = data_fim.getTime() - data_ini.getTime();

                //A partir dos milissegundos, calcula a diferença em segundos
                tempo_segundos = tempo_milissegundos/1000;
        }
        catch (ParseException e) {
            e.printStackTrace();
        }

        return tempo_segundos;

    }

    static long tempoEmDias(String data_inicio, String data_fim) {

        //Obtém a diferença em segundos
        long tempo_segundos = tempoEmSegundos(data_inicio, data_fim);

        //Converte os segundos para dias
        long tempo_dias = tempo_segundos / (60 * 60 * 24);

        return tempo_dias;
    }

    public static void dataMain() {
        // Data e hora iniciais
        String start_date = "28-08-2023 19:00:00";

        // Data e hora finais
        String end_date = "29-08-2023 19:11:00";

        // Teste
        System.out.printf("Tempo em segundos: %d segundos\n", tempoEmSegundos(start_date, end_date));
        System.out.printf("Tempo em dias    : %d dias\n", tempoEmDias(start_date, end_date));
    }

    public static void main(String[] args) {

        dataMain();
    }
}