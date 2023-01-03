var randomLoc = Math.floor(Math.random() * 5);
var location1 = randomLoc;
var location2 = location1 + 1;
var location3 = location2 + 1;
var guess;
var hits = 0;
var guesses = 0;
var isSunk = false;
var arrayHit = [];

while (isSunk == false) {
	guess = prompt("Привет! Это мини игра морской бой 😺 У тебя есть 7 ячеек по горизонтали (от нуля до шести). В них расположен 3-ёх палубный корабль врага. Тебе нужно потопить его за наименьшее количество попыток. Стреляй! (введи число 0-6):");
	if (guess < 0 || guess > 6) {
		alert("Неправильно ввел число😿 Нужно от 0 до 6");
	} else {
		guesses = guesses + 1;
		if (arrayHit.indexOf(guess) == -1) {
			if (guess == location1 || guess == location2 || guess == location3) {
				arrayHit.push(guess);
				alert("Попал");
				hits = hits + 1;
				if (hits == 3) {
				isSunk = true;
				alert("Попеда, враг потоплен🙀");
				}
			} else {
				alert("Мимо");
			}
		} else {
			alert("Сюда ты уже попал😾");
		}
	}
}

var stats = "Ты справился за " + guesses + " попыток😻 Твоя точность равна " + (3 / guesses);
alert(stats);
