const http = require('http');

const hostname = "localhost";
const port = 4000;
const men_data = [
   {
      id: "1",
      name: "Men's Shirt",
      brand: "Peter Land",
      price: 1200,
      color: "White",
      size: "L",
      category: "colothing"
   },
   {
      id: "2",
      name: "Men's watch",
      brand: "Rttt",
      price: 200,
      color: "blue",
      size: "m",
      category: "watch"
   },
   {
      id: "3",
      name: "Men's Pants",
      brand: "Peter Land",
      price: 800,
      color: "blue",
      size: "m",
      category: "colothing"
   },
   {
      id: "5",
      name: "Men's trimmer",
      brand: "Philips",
      price: 800,
      color: "black",
      size: "l",
      category: "trimmer"
   },
   {
      id: "6",
      name: "Men's sunglass",
      brand: "xyz",
      price: 1200,
      color: "black",
      size: "L",
      category: "spack"
   },
   {
      id: "7",
      name: "Men's Belt",
      brand: "KMB",
      price: 600,
      color: "black",
      size: "m",
      category: "Belt"
   },
   {
      id: "8",
      name: "Men's Bracelet",
      brand: "MKL",
      price: 700,
      color: "Silver",
      size: "m",
      category: "Bracelet"
   },
   {
      id: "9",
      name: "Men's Jacket",
      brand: "Addidas",
      price: 2000,
      color: "drack blue",
      size: "m",
      category: "clothing"
   },

   {
      id: "10",
      name: "Men's slipper",
      brand: "VVBN",
      price: 500,
      color: "drack blue",
      size: "7",
      category: "slipper"
   }

]

const women_data = [
   {
      id: "1",
      name: "women's Shirt",
      brand: "Peter Land",
      price: 1200,
      color: "pink",
      size: "L",
      category: "colothing"
   },
   {
      id: "2",
      name: "women's watch",
      brand: "Rttt",
      price: 200,
      color: "blue",
      size: "m",
      category: "watch"
   },
   {
      id: "3",
      name: "women's T-Shirt",
      brand: "Peter Land",
      price: 800,
      color: "blue",
      size: "m",
      category: "colothing"
   },
   {
      id: "5",
      name: "women's necklace",
      brand: "uio",
      price: 800,
      color: "black",
      size: "l",
      category: "necklece"
   },
   {
      id: "6",
      name: "women's sunglass",
      brand: "ptr",
      price: 1200,
      color: "black",
      size: "L",
      category: "spack"
   },
   {
      id: "7",
      name: "women's NailPaint",
      brand: "KMB",
      price: 600,
      color: "red",
      size: "m",
      category: "NailPaint"
   },
   {
      id: "8",
      name: "women's Bracelet",
      brand: "MKL",
      price: 700,
      color: "golden",
      size: "m",
      category: "Bracelet"
   },
   {
      id: "9",
      name: "women's Sari",
      brand: "bnm",
      price: 2000,
      color: "drack blue",
      size: "m",
      category: "clothing"
   },

   {
      id: "10",
      name: "women's slipper",
      brand: "BATA",
      price: 500,
      color: "drack blue",
      size: "7",
      category: "slipper"
   }

]
const server = http.createServer((req, res) => {

   if (req.url == '/') {
      res.statusCode = 200;
      res.setHeader("Content-Type", "application/json");
      res.write("Welcome to Men & Women Dummy Data");
      res.end();
   }
   else if (req.url == '/men') {
      res.statusCode = 200;
      res.setHeader("Content-Type", "application/json");
      res.write((JSON.stringify(men_data, null, 3)));
      res.end();
   }
   else if (req.url == '/women') {
      res.statusCode = 200;
      res.setHeader("Content-Type", "application/json");
      res.write(JSON.stringify(women_data, null, 3));
      res.end();
   }
   else {
      res.statusCode = 200;
      res.setHeader("Content-Type", "application/json");
      res.write("page not found");
      res.end();
   }
})

server.listen(port, () => {
   console.log(`Server running at ${hostname}:${port}`);
})