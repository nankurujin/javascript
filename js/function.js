//朝のあいさつを出力する関数を定義する
const sayGoodMOrning = () => {
    console.log('おはようございます！');
    console.log('昨日はよく眠れましたか？');
    console.log('今日も一日頑張りましょう！');
}

//夜のあいさつを出力する関数を定義する
const sayGoodEvening = () => {
    console.log('こんばんは！');
    console.log('今日も一日お疲れさまでした。');
}

//無名関数で
const hello = function() {
    console.log('hello');
}

//朝のあいさつを出力する関数を呼び出す
sayGoodMOrning();

//夜のあいさつを出力する関数を呼び出す
sayGoodEvening();

//hello関数を呼び出す
hello();

//与えられた引数priceに送料を加算し、その値を出力する関数を定義する
const calculateToatal = (price) => {
    console.log(price + 500 + '円');
}

//関数を呼び出し、引数として購入金額を渡す
calculateToatal(1200);

//与えられた引数priceと引数shippingFeeを加算し、その値を出力する関数を定義する
const addTwoArguments = (price,shippingFee) => {
    console.log(price + shippingFee + '円');
}

//関数を呼び出し、引数として購入金額と送料を渡す
addTwoArguments(1200,500);

//与えられた引数numを2倍にし、その値を戻り値として返す関数を定義する
const double = (num)  => {
    return num * 2;
}

//関数の戻り値を出力する
console.log(double(30));

//定数を宣言する
//const userName = '侍太郎';

//定数の値を出力する
//console.log(userName);

//関数の中で定数を使う
const useVariable = () => {
    const userName = '侍太郎';
    console.log(userName)
}

//関数を呼び出す
useVariable();

//関数の中で宣言した定数を関数の外で使う
console.log(userName);