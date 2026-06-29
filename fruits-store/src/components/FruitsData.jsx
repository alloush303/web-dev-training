import FruitCard from "./FruitCard";

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
function FruitsData() {
    const FruitsData = fruitsArray.map((fruitName, index) => {
        return {
            id: index + 1,
            name: fruitName,
            count: Math.floor(Math.random() * 10),
            imgUrl: `./public/imgs/${fruitName}.jpg`
        }
    })

    console.log(FruitsData)

    return (
        <section>
            <div className="container">

                <h1>Fruits Store</h1>
                <div className="row">
                    {FruitsData.map(fruit => {
                        return (
                            <div className="col-3 ">
                                <FruitCard key={fruit.id} name={fruit.name} count={fruit.count} img={fruit.imgUrl} />

                            </div>

                        )
                    })}
                </div>
            </div>
        </section>

    )
}





export default FruitsData