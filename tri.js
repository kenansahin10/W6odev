class Nokta {
    constructor(x, y){
        this.x = x;
        this.y = y;
    };
}

class Ucgen {
    constructor(nokta1, nokta2, nokta3) {
        this.nokta1 = new Nokta(nokta1.x, nokta1.y);
        this.nokta2 = new Nokta(nokta2.x, nokta2.y);
        this.nokta3 = new Nokta(nokta3.x, nokta3.y);
    }; 

    ucgenCevreHesaplama=() => {
        let kenar1=Math.sqrt(((this.nokta2.x-this.nokta1.x)**2) + ((this.nokta2.y-this.nokta1.y)**2));
        let kenar2=Math.sqrt(((this.nokta3.x-this.nokta2.x)**2) + ((this.nokta3.y-this.nokta2.y)**2));
        let kenar3=Math.sqrt(((this.nokta3.x-this.nokta1.x)**2) + ((this.nokta3.y-this.nokta1.y)**2));
        return kenar1+kenar2+kenar3;
    };
    ucgenAlanHesaplama=() => {
        let k1 = this.nokta1;
        let k2 = this.nokta2;
        let k3 = this.nokta3;

        let alan = Math.abs(((k1.x*k2.y)+(k2.x*k3.y)+(k3.x*k1.y))-((k1.y*k2.x)+(k2.y*k3.x)+(k3.y*k1.x)))/2;
        return alan ;
    };
}   

let kose1 = new Nokta(1,1);
let kose2 = new Nokta(5,1);
let kose3 = new Nokta(5,4);
let ucgen = new Ucgen(kose1, kose2, kose3);
console.log(ucgen.ucgenCevreHesaplama());
console.log(ucgen.ucgenAlanHesaplama());

