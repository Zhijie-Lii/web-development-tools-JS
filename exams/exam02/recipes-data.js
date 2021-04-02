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
        title: "热干面",
        author: "下厨房-万万",
        ingredient: "150g fresh noodles, 2 spoons of seasame paste, 1 spoon of pepper oil",
        instruction: "热干面的步骤很简单，但面条煮的程度直接影响热干面好吃与否，不能太软，也不能太硬。芝麻酱要多多的才够味。再配以辣萝卜，酸豆角，榨菜丝等调味，最后来一碗米酒溜溜缝，这早过的，就完美了。",
        id: 2,
    },
    3 : {
        title: "milk oats",
        author: "me",
        ingredient: "milk and oats, oven maybe",
        instruction: "pour the milk, heat 30mins, drink.",
        id: 3,
    },
    4 : {
        title: "Homemade Croissants",
        author: "food network kitchen",
        ingredient: "4 cups unbleached all-purpose flour, plus more for dusting (see Cook's Note), 3/4 cup milk, 1/3 cup sugar, 1 tablespoon plus 1 teaspoon instant yeast, 1/4 teaspoons fine salt, 3 tablespoons unsalted butter, at room temperature, plus 1/2 sticks (10 ounces), chilled and cut into 1/2-inch pieces, 1 large egg",
        instruction: "When measuring flour, we spoon it into a dry measuring cup and level off excess. (Scooping directly from the bag compacts the flour, resulting in dry baked goods.)",
        id: 4,
    },
    5: {
        title: "Garlicky Lamb Chops",
        author: "LINDSAY FUNSTON",
        ingredient: "1/4 c. freshly chopped rosemary\
                    5 cloves garlic, minced kosher salt\
                    Freshly ground black pepper\
                    2 lb. small lamb chops, trimmed of fat\
                    1 tbsp. extra-virgin olive oil",
        instruction: "First, on a large plate, combine rosemary and garlic and season with salt and pepper. Press lamb chops into mixture and set aside.\
        Second, In a large skillet over medium heat, heat oil. Working in batches, cook lamb until nicely browned, about 3 to 4 minutes per side. Let rest 5 minutes before serving. ",
        id: 5, 
    },
    6 : {
        title: "U87",
        author: "Eason Chan",
        ingredient: "vocal",
        instruction: "Music is the key to heart.",
        id: 6,
    }
};

const getId = function() {
    let count= 0 ;
    for(key in recipesData){
        count++;
    }
    return ++count;
};

module.exports = {recipesData, getId};