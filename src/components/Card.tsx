import type { TPlant } from "../data/plants"

interface ICard {
    plant: TPlant
}

const Card = ({ plant }: ICard) => {
    return (
        <div className="bg-foreground rounded-lg p-4 sm:p-6 shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col space-y-2">
            <h3 className="text-lg font-semibold">{plant.name}</h3>
            <p className="text-sm text-gray-700 leading-relaxed">{plant.description}</p>
        </div>
    )
}

export default Card
