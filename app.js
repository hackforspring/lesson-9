$(() => {

	//ランダムな0~100の数
	//0~100までの数値にしたいので、Math.randon() * 101にしています
	//101の部分を変えると0~好きな数までの範囲にできます
	const RandNum = Math.floor(Math.random() * 101);
	var InputNum = 0;
	var tries = 0;


	var InputText = $('#input');
	var EnterButton = $('#enter');
	var message = $('#message');
	var $tries = $('#tries');

	EnterButton.on('click', function () {
		tries++;
		$tries.html('入力回数: ' + tries);
		//console.log('clicked');
    	//文字列を整数の型に変換します
    	//小数点がある場合は小数の部分を無視します
		InputNum = parseInt(InputText.val());

		//NaN (Not a Number、数字でない)がInputNumに入った時の処理
		if (isNaN(InputNum)) {
			message.html('ちゃんと数を入力して!!');
			message.css('color', 'red');
		}
		//同じ数だった場合
		if (InputNum == RandNum) {
			message.html('正解!! おめでとう!');
			message.css('color', 'green');

        //入力した数のほうが大きかった場合
		} else if (InputNum > RandNum) {
			message.html('もっと小さいよ');
			message.css('color', 'blue');

		//入力した数のほうが小さかった場合
		} else if (InputNum < RandNum) {
			message.html('もっと大きいよ');
			message.css('color', 'purple');
		}

	});
})
