for ( let i=0; i<=5; i++ ) {
    console.log( i )
}

for ( let o=-6; o<=5; o=o+3 ) {
    console.log(o);
}

for ( let m=10; m>0; m-- ) {
    console.log(m);
}

for ( let m=0; m<=60; m++ ) {
    console.log( m );
}

console.log('---------- LAIKAS');

for ( let h=0; h<=12; h++ ) {
    for ( let m=0; m<=60; m++ ) {
        console.log( h + ':' + m );
    }
}

console.log('---------- DIENOS');

const dienos = [31, 28, 31, 30, 31, 30, 31, 30, 31, 30, 31, 30];


for ( let m=0; m< 12; m++ ) {
    for ( let d=0; d<=[m]; d++ ) {
        console.log( m, + ':' + d );
    }
}