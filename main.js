draw_quick_data_set = ["'aircraft carrier','airplane','alarm clock','ambulance','angel','animal_migration','ant','anvil','apple','arm','asparagus','axe','backpack','banana','bandage','barn','baseball','basket','basketball','bat','bathtub','beach','bear','beard','bed','bee','belt','bicycle','binoculars','bird','blackberry','book','boomerang','bottlecap','bowtie','bracelet','brain','bread','bridge','broom','bucket','bulldozer','bus','bush','butterfly','cactus','cake','calculator','calendar','camel','camera','campfire','candle','cannon','car','carrot','castle','cat','cell phone','chair','church','circle','clock','cloud','coffee cup','compass','computer','cookie','cooler','cow','crab','crayon','crocodile','crown','cruise ship','cup','diamond','dog','dolphin','donut','door','dragon','drums','duck','dumbbell','ear','elbow','elephant','envelope','eraser','eye','eyeglasses','face','fan','feather','fence','finger','fish','flamingo','flashlight','flip flops','floor_lamp','flower','foot','fork','frog','garden','garden_hose','giraffe','golf_club','grapes','grass','guitar','burger','hammer','hand','hat','headphones','hedgehog','helicopter','helmet','hexagon','hockey_puck','hockey_stick','horse','hospital','hot_air_balloon','hotdog','house','hurricane','ice_cream','jacket','jail','kangaroo','key','keyboard','knee','knife','ladder','lantern','laptop','leaf','leg','light_bulb','lighter','lighthouse','lightning','line','lion','lipstick','lollipop','mailbox','map','marker','matches','mermaid','microphone','microwave','monkey','moon','mosquito','motorbike','mountain','mouse','moustache','mouth','mushroom','nail','necklace','nose','ocean','octagon','octopus','onion','oven','owl','paintbrush','paint_can','palm_tree','panda','pants','paper_clip','parachute','parrot','passport','peanut','pear','peas','pencil','penguin','piano','photo_frame','pig','pillow','pineapple','pizza','police_car','pond','pool','popsicle','postcard','potato','power_outlet','purse','rabbit','radio','rain','rainbow','remote_control','rhinoceros','rifle','river','roller_coaster','sailboat','sandwich','saw','school_bus','scissors','scorpion','screwdriver','see_saw','shark','sheep','shoe','shorts','shovel','sink','skateboard','skull','sleeping_bag','smiley face','snail','snake','snowflake','snowman','soccer_ball','sock','speedboat','spider','spoon','spreadsheet','square','squirrel','stairs','star','steak','tethoscope','stitches','stop_sign','stove','strawberry','streetlight','string_bean','submarine','suitcase','sun','swan','sweater','sword','syringe','table','teapot','teddy-bear','telephone','television','tent','The_Eiffel_Tower','The_Great_Wall_Of_China','The_Mona_Lisa','tiger','toaster','toe','toilet','tooth','toothbrush','toothpaste','tornado','tractor','traffic_light','train','tree','triangle','trombone','truck','trumpet','t-shirt','umbrella','underwear','van','vase','violin','washing machine','watermelon','waterslide','whale','wheel','wristwatch','yoga','zebra','zigzag'"];

random_no = Math.floor((Math.random()*quick_draw_data_set.length)+1)
console.log(quick_draw_data_set[random_number]);
sketch = quick_draw_data_set[random_number];
document.getElementById('sketch_name').innerHTML = 'Sketch To Be Drawn: ' + sketch;

timer_counter = 0;
timer_check = "";
drawn_sketch = "";
answer_holder = "";
score = 0;

function updateCanvas() {
    background("white");
    random_number = Math.floor((Math.random() * quick_draw_data_set.length + 1));
    console.log(quick_draw_data_set[random_number]);
    drawn_sketch = quick_draw_data_set[random_number];
    document.getElementById('sketch_name').innerHTML = 'Sketch To Be Drawn: ' + drawn_sketch;
}



function setup() {
    canvas  = createCanvas(280, 280);
    canvas.center();
    background("white");
    canvas.mouseReleased(classifyCanvas);
    synth = window.speechSynthesis
}

function clearCanvas() {

    background("white");
}

function preload() {
    classifier  = ml5.imageClassifier('DoodleNet');
}

function draw() {
    strokewight(10);
    stroke(0);
    if (mouseIsPressed){
    line(pmouseX,pmouseY,mouseX,mouseY);
    }
}

function classifyCanvas() {
    classifier.classify(canvas, gotResult);
}

check_sketch();

function check_sketch(){
   answer_holder = "set";
   score++;
   document.getElementById("score").innerHTML = "score=" + score;
}


function gotResult(error, results) {
    if (error) {
        console.error(error);
    }
    console.log(results);
    document.getElementById('label').innerHTML = 'Label: ' + results[0].label;

    document.getElementById('confidence').innerHTML = 'Confidence: ' + Math.round(results[0].confidence * 100) + '%';

    utterThis = new SpeechSynthesisUtterance(results[0].label);
    synth.speak(utterThis);

    Math.round(result[0],confidence*100)+'%'
}

