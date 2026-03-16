const fs = require("fs");
const restaurant = []

const images = ["zomaimg1", "zomaimg2", "zomaimg3", "zomaimg4", "zomaimg5", "zomaimg6", "zomaimg7", "zomaimg8", "zomaimg9", "zomaimg10"]
const restaurantNames = [
    "The Hungry Fork",
    "Spice Avenue",
    "Urban Tadka",
    "Flavor Street",
    "The Golden Plate",
    "Taste Junction",
    "Royal Bites",
    "The Food Lounge",
    "Masala Magic",
    "Fork & Flame",
    "Desi Delights",
    "Saffron Kitchen",
    "The Cozy Spoon",
    "Street Feast",
    "Curry & Cravings",
    "The Rustic Table",
    "Bite Bliss",
    "Urban Grill House",
    "Aroma Restaurant",
    "The Midnight Diner"
];
const foodTypes = [
    "Italian",
    "Indian",
    "Chinese",
    "Mexican",
    "Thai",
    "Fast Food",
    "Street Food",
    "Seafood",
    "Continental",
    "Desserts"
];

const naviMumbaiLocations = [
    "Vashi",
    "Nerul",
    "Belapur",
    "Kharghar",
    "Panvel",
    "Airoli",
    "Ghansoli",
    "Kopar Khairane",
    "Sanpada",
    "Turbhe"
];

for (let i = 0; i < 100; i++) {
    const obj = {}
    obj["image"] = images[Math.floor(Math.random() * 10)]
    obj["name"] = restaurantNames[Math.floor(Math.random() * 20)]
    obj["rating"] = (Math.random() * 5 + 1).toFixed(1);
    obj["foodType"] = foodTypes[Math.floor(Math.random() * 10)]
    obj["priceForTwo"] = Math.floor(Math.random() * 2401 + 100)
    obj["Location"] = naviMumbaiLocations[Math.floor(Math.random() * 10)]
    obj["distanceFromCustomerHouse"] = (Math.random() * 10 + 1).toFixed(1)
    obj["offers"] = Math.floor(Math.random() * 30)
    obj["alcohol"] = Math.random() > 0.7;
    obj["restaurantOpenTime"] = Math.floor(Math.random() * 24)
    obj["restaurantCloseTime"] = (obj["restaurantOpenTime"] + 12) % 24

    restaurant.push(obj)
}
const jsonData = JSON.stringify(restaurant, null, 2);

fs.writeFile("restaurant.json", jsonData, (err) => {
  if(err) console.log(err);
  else console.log("JSON file created with 100 restaurants!");
});










// json file creating commands 
// starting line 
// const fs = require("fs");
// ending line 
// const jsonData = JSON.stringify(restaurant, null, 4);
// fs.writeFileSync('arrayData.json', jsonData, 'utf8')