# Quick Sort

```python
def partic_lomuto(entrada, idx_esq, idx_dir):
    pos_pivot = idx_esq
    pivot = entrada[pos_pivot]
    
    i = idx_esq
    for j in range(idx_esq+1, idx_dir+1):
        if entrada[j] <= pivot:
            i+=1
            entrada[i], entrada[j] = entrada[j], entrada[i]
        
    entrada[pos_pivot], entrada[i] = entrada[i], entrada[pos_pivot]
    pos_pivot = i
    return pos_pivot

def quick_sort_lomuto_interno(entrada, idx_esq, idx_dir):
    if idx_esq < idx_dir:
        pos_pivot = partic_lomuto(entrada, idx_esq, idx_dir)
        quick_sort_lomuto_interno(entrada, idx_esq, pos_pivot-1)
        quick_sort_lomuto_interno(entrada, pos_pivot+1, idx_dir )
    
def quick_sort_lomuto(entrada):
    entrada = entrada.copy()
    quick_sort_lomuto_interno(entrada, 0, len(entrada)-1)
    return entrada
```

```javascript
public class Ordenacao{
    public static void troca(int[] v, int a, int b){
        int tmp = v[a]
        v[a] = v[b];
        v[b] = tmp;
    }

    public static void quick_sort(int[] v){
        quick_sort_(v, 0, v.length-1);
    }

    public static void quick_sort_(int[] v, int ini, int fim){
        if (ini < fim){
            int pos_pivot = particionamento(v, ini, fim);
            quick_sort_(v, ini, pos_pivot -1);
            quick_sort_(v, pos_pivot+1, fim);
        }
    }

    public static int particionamento(int[] v, int ini, int fim){

    }
}

```

