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



