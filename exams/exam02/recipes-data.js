const recipesData = {
    1: {
        title: "Juicy Roasted Chicken",
        author: "RobinRockingBird",
        ingredient: "1 (3 pound) whole chicken ,salt and black pepper,\
        1 tablespoon onion powder, 1/2 cup divided margarine,  \
        1 stalk celery, leaves removed ",
        instruction: "Step 1: Preheat oven to 175 degrees C.\
        Step 2: Place in a roasting pan, and season generously inside and out with salt and pepper.\
        Step 3: Bake uncovered 1 hour and 15 minutes in the preheated oven",
        id: 1,
    },
    2: {
        title: "Taste of home",
        author: "me",
        ingredient: "500g noodles, a spoon of seasame paste, hot water",
        instruction: "boil it out",
        id: 2,
    },
    3 : {
        title: "milk oats",
        author: "anonymous",
        ingredient: "milk and oats, oven maybe",
        instruction: "pour the milk, heat.",
        id: 3,
    },
    4 : {
    
        title: "U77",
        author: "Eason",
        ingredient: "vocal",
        instruction: "Music is the key to heart.",
        id: 4,
    }
}


function getId() {
    let count= 0 ;
    for(key in recipesData){
        count++;
    }
    return ++count;
}

module.exports = {recipesData, getId};