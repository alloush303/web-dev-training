import FruitCard from "./FruitCard";

const fruitsArray = [
    'cherry', 'apple', 'lemon', 'banana', 'watermelon',
    'kiwi', 'mango', 'apricot', 'banana', 'lemon',
    'watermelon', 'kiwi', 'mango', 'apple', 'banana',
    'lemon', 'watermelon', 'cherry', 'kiwi', 'mango', 'apple',
    'banana', 'lemon', 'apricot', 'watermelon', 'kiwi', 'mango',
    'apple', 'banana', 'lemon', 'watermelon', 'kiwi',
    'mango', 'apple', 'banana', 'lemon', 'watermelon',
    'kiwi', 'mango', 'apple', 'banana', 'lemon',
    'watermelon', 'kiwi', 'mango', 'apple', 'banana',
    'lemon', 'watermelon', 'kiwi', 'mango', 'apple'
];
function FruitsData() {
    const FruitsData = fruitsArray.map((fruitItem, index) => {
        return {
            id: index + 1,
            name: fruitItem,
            count: Math.floor(Math.random() * 10),
            imgUrl: `./public/imgs/${fruitItem}.jpg`
        }
    })

    console.log(FruitsData)

    return (
        <section>
            <div className="container py-5">

                <h1>Fruits Store</h1>
                <div className="row pt-5 gap-2 gap-md-5">
                    {FruitsData.map(fruit => {
                        return (
                            <div key={fruit.id} className="box-card col-12 col-sm-3 ">
                                <FruitCard name={fruit.name} count={fruit.count} img={fruit.imgUrl} />

                            </div>

                        )
                    })}
                </div>
            </div>
        </section>

    )
}





export default FruitsData