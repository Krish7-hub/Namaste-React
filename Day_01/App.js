import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHI7VaFIFhUnw-WPgBZwLwP0fP8vbSI9o1WA&s"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Cart</li>
          <li>Contact Us</li>
        </ul>
      </div>
    </div>
  );
};

// In React to style element inline you need to pass an js object inside {};

const styleCard = {
  backgroundColor: "#f0f0f0",
};

// Props is an object here

const ResturantCard = (props) => {
  // this is called destructing of Objects.
  const { resData } = props;

  const { name, category, rating, deliveryTime } = resData;

  return (
    <div className="res-card" style={styleCard}>
      <img
        className="res-logo"
        src="https://sukhis.com/app/uploads/2022/06/image3-1536x1026.jpg"
        alt="paneer-tikka"
      />
      <h3>{name}</h3>
      <h4>{category}</h4>
      <h4>{rating}</h4>
      <h4>{deliveryTime}</h4>
    </div>
  );
};

// Props -> known as property (If we need to pass data to some component dynamically we can use props.)
// Are just normal argument to a function.

const resList = [
  {
    id: 1,
    name: "Spice Garden",
    image: "/images/spice-garden.jpg",
    category: "North Indian, Punjabi",
    rating: 4.5,
    deliveryTime: "30-40 min",
    priceForTwo: "₹500",
    location: "Patna",
    offer: "20% OFF",
    menu: [
      { name: "Paneer Butter Masala", price: 220 },
      { name: "Butter Naan", price: 40 },
    ],
  },

  {
    id: 2,
    name: "Royal Biryani House",
    image: "/images/biryani.jpg",
    category: "Biryani, Mughlai",
    rating: 4.7,
    deliveryTime: "35-45 min",
    priceForTwo: "₹600",
    location: "Patna",
    offer: "Free Delivery",
    menu: [
      { name: "Chicken Biryani", price: 280 },
      { name: "Veg Biryani", price: 200 },
    ],
  },

  {
    id: 3,
    name: "Burger Station",
    image: "/images/burger.jpg",
    category: "Burger, Fast Food",
    rating: 4.2,
    deliveryTime: "20-30 min",
    priceForTwo: "₹350",
    location: "Kankarbagh",
    offer: "Buy 1 Get 1",
    menu: [
      { name: "Cheese Burger", price: 150 },
      { name: "French Fries", price: 90 },
    ],
  },

  {
    id: 4,
    name: "Dosa Corner",
    image: "/images/dosa.jpg",
    category: "South Indian",
    rating: 4.4,
    deliveryTime: "25-35 min",
    priceForTwo: "₹300",
    location: "Patna",
    offer: "10% OFF",
    menu: [
      { name: "Masala Dosa", price: 120 },
      { name: "Idli Sambar", price: 80 },
    ],
  },

  {
    id: 5,
    name: "The Pizza Hub",
    image: "/images/pizza.jpg",
    category: "Pizza, Italian",
    rating: 4.6,
    deliveryTime: "30 min",
    priceForTwo: "₹700",
    location: "Patna",
    offer: "25% OFF",
    menu: [
      { name: "Farmhouse Pizza", price: 350 },
      { name: "Garlic Bread", price: 150 },
    ],
  },

  {
    id: 6,
    name: "Cafe Coffee Day",
    image: "/images/cafe.jpg",
    category: "Cafe, Beverages",
    rating: 4.3,
    deliveryTime: "15-25 min",
    priceForTwo: "₹400",
    location: "Patna",
    offer: "Combo Offer",
    menu: [
      { name: "Cold Coffee", price: 120 },
      { name: "Sandwich", price: 160 },
    ],
  },

  {
    id: 7,
    name: "Tandoori Flames",
    image: "/images/tandoori.jpg",
    category: "Tandoor, Indian",
    rating: 4.8,
    deliveryTime: "40 min",
    priceForTwo: "₹800",
    location: "Patna",
    offer: "15% OFF",
    menu: [
      { name: "Chicken Tikka", price: 300 },
      { name: "Tandoori Roti", price: 30 },
    ],
  },

  {
    id: 8,
    name: "Chinese Wok",
    image: "/images/chinese.jpg",
    category: "Chinese, Asian",
    rating: 4.1,
    deliveryTime: "25 min",
    priceForTwo: "₹450",
    location: "Patna",
    offer: "Free Item",
    menu: [
      { name: "Hakka Noodles", price: 180 },
      { name: "Manchurian", price: 200 },
    ],
  },

  {
    id: 9,
    name: "Sweet Treats",
    image: "/images/sweets.jpg",
    category: "Desserts",
    rating: 4.6,
    deliveryTime: "20 min",
    priceForTwo: "₹250",
    location: "Patna",
    offer: "20% OFF",
    menu: [
      { name: "Chocolate Cake", price: 250 },
      { name: "Ice Cream", price: 100 },
    ],
  },

  {
    id: 10,
    name: "Food Junction",
    image: "/images/junction.jpg",
    category: "Multi Cuisine",
    rating: 4.4,
    deliveryTime: "35 min",
    priceForTwo: "₹650",
    location: "Patna",
    offer: "30% OFF",
    menu: [
      { name: "Thali", price: 250 },
      { name: "Paneer Roll", price: 120 },
    ],
  },

  {
    id: 11,
    name: "Street Food Corner",
    image: "/images/street.jpg",
    category: "Street Food",
    rating: 4.0,
    deliveryTime: "15 min",
    priceForTwo: "₹200",
    location: "Patna",
    offer: "Flat ₹50 OFF",
    menu: [
      { name: "Pani Puri", price: 50 },
      { name: "Chaat", price: 80 },
    ],
  },

  {
    id: 12,
    name: "Healthy Bowl",
    image: "/images/healthy.jpg",
    category: "Healthy Food",
    rating: 4.5,
    deliveryTime: "30 min",
    priceForTwo: "₹500",
    location: "Patna",
    offer: "15% OFF",
    menu: [
      { name: "Salad Bowl", price: 180 },
      { name: "Protein Bowl", price: 250 },
    ],
  },

  {
    id: 13,
    name: "Momo Magic",
    image: "/images/momo.jpg",
    category: "Chinese, Snacks",
    rating: 4.3,
    deliveryTime: "20 min",
    priceForTwo: "₹300",
    location: "Patna",
    offer: "Buy 2 Get 1",
    menu: [
      { name: "Veg Momos", price: 100 },
      { name: "Chicken Momos", price: 150 },
    ],
  },

  {
    id: 14,
    name: "Biryani Blues",
    image: "/images/blues.jpg",
    category: "Biryani",
    rating: 4.7,
    deliveryTime: "40 min",
    priceForTwo: "₹550",
    location: "Patna",
    offer: "20% OFF",
    menu: [
      { name: "Hyderabadi Biryani", price: 300 },
      { name: "Raita", price: 60 },
    ],
  },

  {
    id: 15,
    name: "Urban Cafe",
    image: "/images/urban.jpg",
    category: "Cafe, Snacks",
    rating: 4.2,
    deliveryTime: "25 min",
    priceForTwo: "₹350",
    location: "Patna",
    offer: "10% OFF",
    menu: [
      { name: "Pasta", price: 220 },
      { name: "Coffee", price: 100 },
    ],
  },
];

const Body = () => {
  return (
    <div className="Body">
      <div className="search-bar">Search</div>
      <div className="resturant-container">
        {resList.map((restaurant) => (
          <ResturantCard key={restaurant.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
