const compara2numeros = (n1, n2) => {
    if(n1 < n2) {
        console.log('O número ${n1} é menor que ${n2}');
    } else if(n1 === n2) {
        console.log('O número ${n1} é igual que ${n2}');
    } else{
        console.log('O número ${n1} é maior que ${n2}');
    }}
compara2numeros(20, 40)
compara2numeros(20, 20)
compara2numeros(20, 3)
