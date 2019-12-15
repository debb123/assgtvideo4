/* var hello = function(){
    document.getElementById("console").innerHTML="<p>Hello</p>";
} */
class Character{
    constructor(name,energy,id){
        this.name =name;
        this.energy = energy;
        this.id =id;
    }
    display = function(){
    document.getElementById(this.id).innerHTML=`<p> Name:${this.name} </p>`; 
    
    //display energy
    document.getElementById(this.id).innerHTML=`<p> Name:${this.name} <p> Energy: ${this.energy} </p>`;  
    
    }
    //we change the let newEnergy=opponent.energy - 20 to iHitPoints and add item to it

    attack = function(livePoints,item){

        let newEnergy = livePoints.energy - item.iHitPoints;
        livePoints.energy = newEnergy;
        livePoints.display();
        //document.getElementById(this.id).innerHTML=`<p> Energy:${this.energy}</p>`;
        //when toad is attacking
        //console.log(opponent);
        document.getElementById("console").innerHTML=`<p> ${this.name}  is attacking ${livePoints.name} with a ${item.iName} ${item.img}...</p>`;

        //print game over on the HTML console when energy = 0, but to continue for it to print you die for both.
        if(livePoints.energy == 0){
            document.getElementById(livePoints.id).innerHTML="<p> You die </p>";
            document.getElementById("console").innerHTML=`<p> Game Over </p>`;
        }

    }


}
const character1 = new Character("Tom",100,"c1");
const character2 = new Character("Jerry",100,"c2");

character1.display();
character2.display();

class Item{
    constructor(iName, iHitPoints, img){
        this.iName=iName;
        this.iHitPoints=iHitPoints;
        this.img=img;
    }

}
const item1 = new Item('Tombasket',20, '<img class="imgItem" src="img/tombasket.jpg">');
const item2 = new Item('Tomweapon',5, '<img class="imgItem" src="img/tomweapon.jpg">');
const item3 = new Item('Broomstick',10,'<img class="imgItem" src="img/broomstick.png">');







    


//we want to use these  items as random number
const items = [item1,item2,item3];
function selectItem(){
    let selection= Math.floor(Math.random()*3);
    return items[selection];
    //console.log(selection);
}
console.log(selectItem());

//reset function ---global

/*const reset = function(){
    character1.energy=100;
    character2.energy=100;
    document.getElementById("console").innerHTML=`<p>${character1.name}'s energy has been restored! <p>${character2.name}'s energy has been restored! </p>`;
    character1.display();
    character2.display();
}*/




