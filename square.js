class Nokta {
    constructor(x, y){
        this.x = x;
        this.y = y;
    };
}

class Kare {
    constructor(nokta1, nokta2, nokta3, nokta4) {
        this.nokta1 = new Nokta(nokta1.x, nokta1.y);
        this.nokta2 = new Nokta(nokta2.x, nokta2.y);
        this.nokta3 = new Nokta(nokta3.x, nokta3.y);
        this.nokta4 = new Nokta(nokta4.x, nokta4.y);
    };

    kareCevreHesaplama=() => {
        let kenar1=Math.sqrt(((this.nokta2.x-this.nokta1.x)**2) + ((this.nokta2.y-this.nokta1.y)**2));
        let kenar2=Math.sqrt(((this.nokta3.x-this.nokta2.x)**2) + ((this.nokta3.y-this.nokta2.y)**2));
        let kenar3=Math.sqrt(((this.nokta4.x-this.nokta3.x)**2) + ((this.nokta4.y-this.nokta3.y)**2));
        let kenar4=Math.sqrt(((this.nokta4.x-this.nokta1.x)**2) + ((this.nokta4.y-this.nokta1.y)**2));
        return kenar1+kenar2+kenar3+kenar4;

    };
}

let kose1 = new Nokta(1,1);
let kose2 = new Nokta(4,1);
let kose3 = new Nokta(4,4);
let kose4 = new Nokta(1,4);
let kare = new Kare(kose1, kose2, kose3, kose4);

console.log(kare.kareCevreHesaplama());