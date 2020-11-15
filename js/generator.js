class ViewModel {
    constructor() {
        this.lenghtValue = ko.observable(16).extend({
            digit: true
        }).extend({
            min: 1
        });;
        this.lowercaseValue = ko.observable(true);
        this.uppercaseValue = ko.observable(true);
        this.symbolsValue = ko.observable(true);
        this.numbersValue = ko.observable(true);
        this.resultValue = ko.observable();
    }
    generate() {

        let stringData = "";
        let length = this.lenghtValue();
        let lowerCase = this.lowercaseValue();
        let upperCase = this.uppercaseValue();
        let symbol = this.symbolsValue();
        let number = this.numbersValue();
        if (lowerCase + upperCase + symbol + number <= 0) {
            alert("Please select option!");
            return;
        }

        for (let i = 0; i < length; i++) {
            const randomValue = this.generater(0, 3);
            if (lowerCase && randomValue === 0) {
                stringData += this.generateRandomLowerCase();
            } else if (upperCase && randomValue === 1) {
                stringData += this.generateRandomUpperCase();
            } else if (symbol && randomValue === 2) {
                stringData += this.generateRandomSymbol();
            } else if (number && randomValue === 3) {
                stringData += this.generater(0, 9);
            } else {
                i--;
            }
        }
        this.resultValue(stringData);
    }
    generateRandomLowerCase() {
        return String.fromCharCode(this.generater(97, 122));
    }

    generateRandomUpperCase() {
        return String.fromCharCode(this.generater(65, 90));
    }

    generateRandomSymbol() {
        const symbols = "~*$%@#^&!?*'-=/,.{}()[]<>";
        return symbols[this.generater(0, symbols.length - 1)];
    }

    generater(min = 0, max = 1) {
        return Math.floor(Math.random() * (max + 1 - min) + min);
    }


}
