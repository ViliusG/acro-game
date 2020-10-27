var urlParams = new URLSearchParams(window.location.search);
var dificulty =  urlParams.get('dificulty')
var length =  urlParams.get('length')

var easy = [
    'armpit-sit',
    'back-bird',
    'bird',
    'boat',  //# bird grabs feet
    'folded leaf',
    'foot to shin',
    'hammock',
    'plank',  //# hand to hand, foot to foot at the same time
    'happy buddha',
    'reverse armpit-sit', 
    'reverse bird',
    'side backfly dancer',
    'side star',
    'shin to foot',
    'shoulder stand',
    'star',
    'stradle bat',
    'straddle throne',
    'table top on table top',  //# excersise thing
    'throne',
    'vishnus couch',
    'whale',
]
var medium = [
    'biceps stand',
    'bird on hand',
    'floating pashi',
    'foot to hand',
    'foot to foot',
    'flamingo',
    'free star',
    'free shoulder stand',
    'high foot to hand',
    'goofy star',
    'koala',
    'mercedes',
    'mono star',
    'reverse foot to hand',
    'reverse high foot to hand',
    'reverse shoulder stand',
    'reverse star',
    'reverse back bird',
    'table',  //# straddle bat, connect feet, base puts two hands on back to hold above oneself
    'table on foot',
    'throne on hand',
    'triceps stand',
    'titibasana',
    'w',  //# flyer takes ankles and sits with legs spread, base takes flyers but and bases in butt to hand, if base opens legs to the sides it looks like double v
]
var hard = [
    'biceps stand on hand',
    'croc',
    'hand to hand',
    'mono reverse star',
    'mono foot to shin',
    'mono shin to foot',
    'mono shoulder stand',
    'one foot to two hands',
    'reverse hand to hand',
]

switch(dificulty) {
  case 'easy':
  	poses = easy
    break;
  case 'medium':
  	poses = easy.concat(medium)
    break;
  case 'hard':
  	poses = easy.concat(medium.concat(hard))
} 

var list = document.getElementsByClassName("items");
for (i = 0; i < length; i++) {
	//generate random index for the poses list
	var index = Math.floor((Math.random() * poses.length));
	console.log(index)
	//create le element and add random pose to the list
	var li = document.createElement('li');
	li.appendChild(document.createTextNode(poses[index]));
	document.querySelector('ul').appendChild(li);
	poses.splice(index, 1);
} 

// for x in range(amount):
//     n = random.randint(0, len(poses)-1)
//     print(poses[n])
//     poses.pop(n)
