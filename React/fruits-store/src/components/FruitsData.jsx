import FruitCard from "./FruitCard";

const fruitsArray = [
    'cherry', 'apple', 'apple', 'lemon', 'banana', 'watermelon',
    'kiwi', 'mango', 'apricot', 'banana', 'lemon',
    'watermelon', 'kiwi', 'mango', 'apple', 'banana',
    'lemon', 'watermelon', 'cherry', 'kiwi', 'mango', 'apple',
    'banana', 'lemon', 'apricot', 'watermelon', 'kiwi', 'mango',
    'apple', 'apricot', 'watermelon', 'kiwi',
    'mango', 'apricot', 'banana', 'watermelon', 'lemon',
    'kiwi', 'apricot', 'apple', 'banana', 'lemon',
    'watermelon', 'kiwi', 'mango', 'apple', 'banana',
    'lemon', 'watermelon', 'kiwi', 'mango', 'apple'
];
function FruitsData() {
    const fruitCount = fruitsArray.reduce((count, currenItem) => {
        count[currenItem] = (count[currenItem] || 0) + 1;
        return count

    }, {})
    console.log(fruitCount)


    const FruitsData = Object.entries(fruitCount).map(([name, count], index) => {
        return {
            id: index + 1,
            name: name,
            count: count,
            imgUrl: `./public/imgs/${name}.jpg`
        }
    })

    console.log(Object.entries(fruitCount))

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