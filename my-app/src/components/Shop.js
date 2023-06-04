import React, {useState} from "react";
import burgerImage from "../images/front-view-burger-on-table.jpg"
import pizzaImage from "../images/top-view-of-mixed-pizza-with-tomato-black-olive-and-melted-cheese.jpg"
import sushiImage from "../images/sushi-rolls-with-cucumber-and-tobiko-caviar.jpg"
import wokImage from "../images/photo_2023-06-04_17-49-21.jpg"

export default function Shop() {
    const [selectedCategory, setSelectedCategory] = useState(null);

    const shops = [
        {id: 1, name: "Burgers"},
        {id: 2, name: "Pizza"},
        {id: 3, name: "Sushi"},
        {id: 4, name: "Wok"},
    ];

    const food = [
        {
            id: 1,
            name: "Beef burger",
            image: burgerImage,
            price: "$8",
            categoryId: 1,
        },
        {
            id: 2,
            name: "Beef burger",
            image: burgerImage,
            price: "$8",
            categoryId: 1,
        },
        {
            id: 3,
            name: "Beef burger",
            image: burgerImage,
            price: "$8",
            categoryId: 1,
        },
        {
            id: 4,
            name: "Pizza with tomato, black olives and melted cheese",
            image: pizzaImage,
            price: "$10",
            categoryId: 2,
        },
        {
            id: 5,
            name: "Pizza with tomato, black olives and melted cheese",
            image: pizzaImage,
            price: "$10",
            categoryId: 2,
        },
        {
            id: 6,
            name: "Pizza with tomato, black olives and melted cheese",
            image: pizzaImage,
            price: "$10",
            categoryId: 2,
        },
        {
            id: 7,
            name: "California roll",
            image: sushiImage,
            price: "$13",
            categoryId: 3,
        },
        {
            id: 8,
            name: "California roll",
            image: sushiImage,
            price: "$13",
            categoryId: 3,
        },
        {
            id: 9,
            name: "California roll",
            image: sushiImage,
            price: "$13",
            categoryId: 3,
        },
        {
            id: 10,
            name: "Noodles with chicken",
            image: wokImage,
            price: "$6",
            categoryId: 4,

        },
        {
            id: 11,
            name: "Noodles with chicken",
            image: wokImage,
            price: "$6",
            categoryId: 4,
        },
        {
            id: 12,
            name: "Noodles with chicken",
            image: wokImage,
            price: "$6",
            categoryId: 4,
        },
    ];

    const handleCategoryClick = (categoryId) => {
        setSelectedCategory(categoryId);
    };

    const filteredProducts = selectedCategory
        ? food.filter((product) => product.categoryId === selectedCategory)
        : food;

    return (
        <div className="flex flex-row bg-yellow-50">
            <div className="basis-1/4">
                <h2 className="p-1 text-green-700 font-semibold font-mono tracking-wider">Shops:</h2>
                <ul className="list-image-none mx-2 text-emerald-50">
                    {shops.map((item) => {
                        return <li
                            className="my-3 pl-3 py-4 border-transparent border-2 rounded-lg hover:cursor-pointer bg-green-500 hover:bg-green-700"
                            onClick={() => handleCategoryClick(item.id)} key={item.id}>{item.name}</li>
                    })}
                </ul>
            </div>
            <div className="p-8">
                <ul className="flex flex-row flex-wrap">
                    {filteredProducts.map((item) => {
                        return <li className="m-3 max-w-xs flex flex-col gap-2" key={item.id}>
                            <img className="object-contain max-w-xs max-h-80 border-transparent rounded-lg"
                                 src={item.image} alt=""/>
                            <div className="flex text-green-900">
                                <span>{item.name}</span>
                                <span className="grow text-right">{item.price}</span>
                            </div>
                            <button
                                className="rounded-full bg-green-500 px-2 py-1 hover:bg-green-700 text-emerald-50">Add
                                to Cart
                            </button>
                        </li>
                    })}
                </ul>
            </div>
        </div>
    )
}