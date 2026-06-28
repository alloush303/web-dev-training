
const fruitsArray = [
    'apple', 'apple', 'lemon', 'banana', 'watermelon',
    'kiwi', 'mango', 'apple', 'banana', 'lemon',
    'watermelon', 'kiwi', 'mango', 'apple', 'banana',
    'lemon', 'watermelon', 'kiwi', 'mango', 'apple',
    'banana', 'lemon', 'watermelon', 'kiwi', 'mango',
    'apple', 'banana', 'lemon', 'watermelon', 'kiwi',
    'mango', 'apple', 'banana', 'lemon', 'watermelon',
    'kiwi', 'mango', 'apple', 'banana', 'lemon',
    'watermelon', 'kiwi', 'mango', 'apple', 'banana',
    'lemon', 'watermelon', 'kiwi', 'mango', 'apple'
];

export const FruitsData = fruitsArray.map((fruitName, index) => {
    return {
        id: index + 1,
        name: fruitName,
        count: Math.floor(Math.random() * 10),
        imgUrl: `./public/imgs/${fruitName}.jpg`
    }

})




export default FruitsData