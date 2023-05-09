/*Mini-Activity 1
    - Given a set of data, use splice to remove/delete the last two items in the array.
    let lakersPlayers = ["Lebron","Davis","Westbrook","Kobe","Shaq"];
    - Use splice to add 3 more items in the array from the position where we removed the items.
    - Display the array in the console. Screenshot and paste it in our canvas account	

let lakersPlayers = ["Lebron", "Davis", "Westbrook", "Kobe", "Shaq"];
lakersPlayers.splice(3, 2, "Stephen", "Luka", "Jordan");
console.log(lakersPlayers);
*/

/* 
Mini-Activity 2
    Given a set of data, use slice to copy the last two items in the array.
        let videoGameConsoles = ["PS4","PS5","Wii","Switch","Xbox","Xbox One"];
    Save the sliced portion of the array into a new variable:
        - microsoft
    use slice to copy the third and fourth item in the array	
    Save the sliced portion of the array into a new variable:
        -nintendo
    log both new arrays in the console.
    Display the array in the console. Screenshot and paste it in our canvas account	
*/
let videoGameConsoles = ["PS4", "PS5", "Wii", "Switch", "Xbox", "Xbox One"];
let microsoft = videoGameConsoles.slice(-2);
let nintendo = videoGameConsoles.slice(2, 4);
console.log(microsoft);
console.log(nintendo);