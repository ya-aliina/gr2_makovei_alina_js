const canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

let score = 0;
let record = [0];
let level = 1;

// создаем объекты нашей игры
let gameWorld = {
    x: 0,
    y: 0,
    background: new Image(),
    ground: new Image(),
}

let column = {
    top: new Image(),
    bottom: new Image,
    spaceBetween: 115,
    position: [{
        x: canvas.width ,
        y: 0,
    }],
}

let bird = {
    img: new Image(),
    x: 450,
    y: 150,
    gravity: 1.5,
    moveUp() {
        this.y -= 25;
    }
}

//вставка изображений
gameWorld.background.src = 'img/background.jpg';
gameWorld.ground.src = 'img/ground.png';
column.top.src = 'img/tube_up.png';
column.bottom.src = 'img/tube_down.png';


function flyBird () {
    function doFist () {
        bird.img.src = 'img/bird-1.png';
    }
    function doSecond () {
        bird.img.src = 'img/bird_2.png';
    }
    function doThird () {
        bird.img.src = 'img/bird_3.png';
    }
    setInterval(() => doFist (), 100);
    setInterval(() => doSecond(), 200);
    setInterval(() => doThird(), 300);
}
flyBird ();

function checkCollision (bird, column, gameWorld) {
    for (let i = 0; i < column.position.length; i++) {

        if(bird.x + bird.img.width >= column.position[i].x
            && bird.x <= column.position[i].x + column.top.width
            && (bird.y <= column.position[i].y + column.top.height
                || bird.y + bird.img.height >= column.position[i].y + column.top.height + column.spaceBetween)
            || bird.y + bird.img.height >= canvas.height - gameWorld.ground.height) {

            if (isTheScoreARecord (score, record) ) {
                alert (`Поздравляем! Вы установили новый рекорд! Вас счет: ${record[record.length - 1]}.`)
            } else {
                alert(`Ваш счет: ${score}.`);
            }
            reset();
        }
    }
    return true;
}

function reset () {
    level = 1;
    bird.x = 450;
    bird.y = 150;
    score = 0;
    column.position = [{
        x: canvas.width ,
        y: 0,
    }];
}

function isTheScoreARecord (score, record) {
    if (score > record[record.length - 1]) {
        record.push(score);
        return true;
    }
    return false;
}

function goNextLevel (score, column) {
    if (score >= 5 && score <= 10) {
        level = 2;
        column.spaceBetween = 100;
    } else if  (score >= 11 && score <= 15) {
        level = 3;
        column.spaceBetween = 90;
    } else if (score >= 16 && score <= 20) {
        level = 3;
        column.spaceBetween = 90;
    } else if (score >= 21) {
        level = 4;
        column.spaceBetween = 80;
    }
}
//отклик при нажатии на любую клавишу, кнопку мыши или касание
document.addEventListener('keydown', () => bird.moveUp());
document.addEventListener('touchstart', () => bird.moveUp());
document.addEventListener('click', () => bird.moveUp());

//прорисовка
function render() {
    ctx.drawImage(gameWorld.background, gameWorld.x, gameWorld.y);

    for(let i = 0; i < column.position.length; i++) {

        ctx.drawImage(column.top, column.position[i].x, column.position[i].y);
        ctx.drawImage(column.bottom, column.position[i].x, column.position[i].y + column.top.height + column.spaceBetween);

        column.position[i].x--;

        checkCollision (bird, column, gameWorld);
        goNextLevel(score, column);

        if(column.position[i].x === 650) {
            column.position.push({
                x : canvas.width,
                y : Math.floor(Math.random() * column.top.height) - column.top.height,
            });
        }

        if(column.position[i].x === 460) {
            score++;
        }
        ctx.drawImage(bird.img, bird.x, bird.y);
        ctx.drawImage(gameWorld.ground, 0, canvas.height - gameWorld.ground.height);
    }

    bird.y += bird.gravity;

    ctx.fillStyle = "white";
    ctx.font = "24px Arial";
    ctx.fillText(`Счет: ${score}`, 10, canvas.height - 70);
    ctx.fillText(`Ваш рекорд: ${record[record.length - 1]}`, 10, canvas.height - 35);
    ctx.fillText(`Уровень: ${level}`, 400, canvas.height - 60);

    requestAnimationFrame(render);
}

gameWorld.background.onload = render;
