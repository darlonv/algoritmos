# Listas

```javascript
LinkedList<Integer> valores = LinkedList<Integer>();
int i, k=100, passo=10;

i=0;
while(i<k){
    valores.add(i);
    i+=passo;
}

for(i=0;i<valores.size();i++){
    System.out.println(valores.get(i));
}

```