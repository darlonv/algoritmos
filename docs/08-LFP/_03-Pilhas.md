import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Pilhas


## Expressões utilizando notação pós-fixa

```javascript
import java.util.Stack;
class Posfixa{
    public static void main(String[] args) {
        Stack<Integer> pilha = new Stack<Integer>(); 
        int i, op1, op2, res;
        String valor = "50";

        String expressao = "5 2 +";
        String[] tokens = expressao.split(" ");

        for(i=0;i<tokens.length;i++){
            switch(tokens[i]){
                case "+":
                    if(pilha.empty()){System.out.println("Expressão inválida"); System.exit(1);}
                    op2 = pilha.pop();
                    if(pilha.empty()){System.out.println("Expressão inválida"); System.exit(1);}
                    op1 = pilha.pop();
                    pilha.push(op1 + op2);
                    break;
                case "-":
                    if(pilha.empty()){System.out.println("Expressão inválida"); System.exit(1);}
                    op2 = pilha.pop();
                    if(pilha.empty()){System.out.println("Expressão inválida"); System.exit(1);}
                    op1 = pilha.pop();
                    pilha.push(op1 - op2);
                    break;
                case "*":
                    if(pilha.empty()){System.out.println("Expressão inválida"); System.exit(1);}
                    op2 = pilha.pop();
                    if(pilha.empty()){System.out.println("Expressão inválida"); System.exit(1);}
                    op1 = pilha.pop();
                    pilha.push(op1 * op2);
                    break;
                default:
                    pilha.push(Integer.parseInt(tokens[i]));  
            }
        }

        if(pilha.empty()){System.out.println("Expressão inválida"); System.exit(1);}
        res = pilha.pop();

        if(!pilha.empty()){
            System.out.println("Expressão inválida!");
            System.exit(1);
        }

        System.out.println(res);
        
    }
}
```
