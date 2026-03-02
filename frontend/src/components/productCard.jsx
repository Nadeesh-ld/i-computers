export default function ProductCard(props) {
    console.log(props);

    return (
        <div className="bg-red-500 border border-black">
            <h1 className="text-white text-xl">{props.name}</h1>
            <img src={props.image} alt="Image" />
            <p>LKR {props.price}</p>
            <button>Add to Cart</button>
        </div>
    )
}
