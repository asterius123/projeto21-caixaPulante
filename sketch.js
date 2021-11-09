var tela;
var bloco1,bloco2,bloco3,bloco4;
var bola, bordas;
var musica;

function preload(){

}

function setup(){
    tela = createCanvas(870,600);

    bola = createSprite(random(20,750),100, 40,40);
    bola.shapeColor = rgb(255,255,255);

    bloco1 = createSprite(0,580,360,30);
    bloco1.shapeColor = "blue";

    //escreva o código para adicionar velocityX e velocityY
    bola.velocityX=2.5;
    bola.velocityY=2.5;

    bloco2 = createSprite(295,580,200,30);
    bloco2.shapeColor = "orange";

    //crie aqui mais dois blocos, ou seja, bloco3 e bloco4
    bloco3 = createSprite(515,580,200,30);
    bloco3.shapeColor = "green";

    bloco4 = createSprite(745,580,200,30);
    bloco4.shapeColor = "red";

    
    
}

function draw() {
    background(rgb(169,169,169));
    bordas=createEdgeSprites();
    bola.bounceOff(bordas);

    
    //escreva o código para a bola quicar no bloco1
    if(bloco1.isTouching(bola) && bola.bounceOff(bloco1)){
        bola.shapeColor = "blue";
        //escreva o código para definir velocityX e velocityY da bola como 0
        bola.scale = 1.5;
    }


    if(bloco2.isTouching(bola)&& bola.bounceOff(bloco3)){
        bola.shapeColor = "orange";
        bola.scale = 0.5;
    }

    //escreva o código para a bola quicar no bloco3
    if(bloco3.isTouching(bola) && bola.bounceOff(bloco3)){
        bola.shapeColor = "green";
        bola.scale = 0.5;

    }
    //escreva o código para a bola quicar no bloco4
    if(bloco4.isTouching(bola) && bola.bounceOff(bloco4)){
        bola.shapeColor = "red";
        bola.scale = 0.5;
    }
    drawSprites();
}