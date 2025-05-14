let jokaa=
['Why donot skeletons skydive? They donot have the guts to do it.','Where do cucumbers go on date night? The salad bar.','Did you hear about the pine tree that got a timeout? It was being knotty.','What do you say to a cow that gets in your way? “Moooo-ve!”','I met a giant once. I did not know what to say, so I just used big words.','Did you hear about the dolphin romance? They really clicked.','A horse walks into a diner. The host says, “Hey!” The horse says, “You read my mind!”','How did people see in the dark during medieval times? They used knight lights.','Why are not there a lot of jokes about peaches? Because most of them are pit-iful.','What`s the best way to catch a squirrel? Act like a nut.','Did you hear about math book that got a therapist? It had a lot of problems.','Donald Trump:- I will create history tonight. \n Hillary Clinton:- No I will create history tonight. \n Narendra Modi:- Mitrooo.. (Friends, Guys,)','What do you call a cow with only two legs? Lean beef.','Why should not you play poker in the jungle? Too many cheetahs.','Did you hear about the cat that aced the test? It got a purr-fect score.','Why is the ocean so clean? It has mer-maids.','Why did the king go to the dentist? He needed a crown.','Did you hear about the archeologist who got fired? His career was in ruins.','I dont tell you a construction joke, but I am still working on it.','Why do not lions eat clowns? Because they taste funny.','Where do boats go when they are sick? To the dock-tor.','Did you hear about the ghost that joined a soccer team? It wanted to be a ghoulie.','Why did the potato leave the bar? All eyes were on him.','What do you get when you cross a guitar, drums and a car tire? A rubber band.']


// alert("Click on button and enjoy joke.")
function pitara(){
    let randomjok= Math.floor(Math.random()*(25));
    let a= jokaa[randomjok];
    document.getElementById('joke').innerHTML=a;
    
}


// addEventListener('click' , () =>  {
//     pitara();
// })