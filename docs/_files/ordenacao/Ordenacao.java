public class Ordenacao{
    public static void vetorPrintInt(int[] v){
        int i;
        for(i=0;i<v.length;i++){
            System.out.printf("%d ", v[i]);
        }
        System.out.println();

    }

    public int[] merge_for(int[] va, int[] vb){
        int[] vc;
        int i=0, j=0, k=0, tamanho = va.length + vb.length;

        vc = new int[tamanho];

        while(k < tamanho){
            if( i < va.length && j < vb.length){
                if(va[i] <= vb[i]){
                    vc[k] = va[i];
                    i++;
                }else{
                    vc[k] = vb[j];
                    j++;
                }
            }else{
                if(i>=va.length){
                    vc[k] = vb[j];
                    j++;
                }else{
                    vc[k] = va[i];
                    i++;
                }

            }
            k++;
        }
        
        return vc;
    }

    public int[] merge(int[] va, int[] vb){
        int[] vc = new int[va.length + vb.length];
        int i=0, j=0, k=0;

        while(i < va.length && j < vb.length){
            if(va[i] <= vb[i]){
                vc[k] = va[i];
                i++;
            }else{
                vc[k] = vb[j];
                j++;
            }
            k++;
        }

        while(i < va.length){
            vc[k] = va[i];
            i++;
            k++;
        }

        while(j < vb.length){
            vc[k] = vb[j];
            j++;
            k++;
        }
        
        return vc;
    }

    public static int[] copiaVetor_int(v, int ini, int fim){
        int[] saida = new int[fim-ini];
        int i, k=0;
        for(i=ini;i<=fim;i++){
            saida[k] = v[i];
            k++;
        }
        return saida;
    }

    public static int[] mergeSort_(int[] v, int ini, int fim){
        int meio;
        int[] esq, dir;
        if(v.length <=1 ){
            return v;
        }

        meio = (ini+fim) / 2;
        esq = copiaVetor_int(v, ini, meio-1)
        dir = copiaVetor_int(v, meio, fim)

        

        

    }

    public static int[] countingSort(int[] v){
        int[] saida = new int[v.length];
        int[] count;
        int i, idx;

        if(v.length > 0){
            int max = v[0];
            for(i=1;i<v.length;i++){
                if(v[i] > max){
                    max = v[i];
                }
            }
            count = new int[max+1];

            for(i=0;i<count.length;i++){
                count[i] = 0;
            }

            for(i=0;i<v.length;i++){
                count[v[i]] +=1;
            }
            vetorPrintInt(count);

            for(i=1;i<count.length;i++){
                count[i] = count[i]+count[i-1];
            }
            vetorPrintInt(count);

            for(i=v.length-1;i>=0;i--){
                idx = count[v[i]]-1;
                count[v[i]]--;
                saida[idx] = v[i];
            }
            vetorPrintInt(count);
        }
        
        return saida;
    }

    // public static int[] countingSortAt(int[] v, int pos){
    //     int[] saida = new int[v.length];
    //     int[] count = new int[10];
    //     int i, val, val_pos, idx;

    //     if(v.length > 0){
    //         for(i=0;i<count.length;i++){
    //             count[i] = 0;
    //         }

    //         for(i=0;i<v.length;i++){
    //             val = v[i];
    //             val_pos = getValPos_int(val, pos);
    //             count[val_pos] +=1;
    //         }
    //         vetorPrintInt(count);

    //         for(i=1;i<count.length;i++){
    //             count[i] = count[i]+count[i-1];
    //         }
    //         vetorPrintInt(count);

    //         for(i=v.length-1;i>=0;i--){
    //             val = v[i];
    //             val_pos = getValPos_int(val, pos);

    //             idx = count[val_pos]-1;
    //             count[val_pos]--;
    //             saida[idx] = v[i];
    //         }
    //         vetorPrintInt(count);
    //     }
        
    //     return saida;
    // }


    public static int getValPos_int(int val, int pos){
        return (int) (val % (int) Math.pow(10, pos+1)) / (int) Math.pow(10,pos);
    }

    public static int[] countingSortPos(int[] v, int pos){
        int[] saida = new int[v.length];
        int[] count = new int[10];
        int i, val, val_pos;

        for(i=0;i<v.length;i++){
            count[getValPos_int(v[i],pos)]++;
        }

        for(i=1;i<count.length;i++){
            count[i]+=count[i-1];
        }

        for(i=v.length-1;i>=0;i--){
            val = v[i];
            val_pos = getValPos_int(val, pos);
            count[val_pos]--;
            saida[count[val_pos]] = val;

        }


        return saida;
    }

    public static void main(String[] args){
        int i;
        
        // int x = 345;
        // int p = 15;
        // System.out.printf("%d - %d - %d\n", x, p, getValPos_int(x,p));

        int[] v = {42, 36, 26, 44, 31, 55};
        vetorPrintInt(radixSort(v));
        // vetorPrintInt(v);
        // int[] v_sorted = countingSortPos(v,0);
        // vetorPrintInt(v_sorted);
        // v_sorted = countingSortPos(v_sorted,1);
        // vetorPrintInt(v_sorted);

        
    }

    public static int[] radixSort(int[] v){
        int max, i, n, pos;
        String max_str;

        if(v.length <=1){
            return v;
        }

        max = v[0];
        for(i=1;i<v.length;i++){
            if(v[i]>max){
                max = v[i];
            }
        }

        max_str = max + "";
        n = max_str.length();

        for(pos=0;pos<n;pos++){
            v = countingSortPos(v,pos);
        }

        return v;
    }
}