
interface ISearchField {
    onChange: (v: string) => void
    value: string
}

const SearchField = ({ onChange, value }: ISearchField) => {


    return (
        <input
            type="text"
            aria-label="Plant search field"
            placeholder="Monstera..."
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
    )
}

export default SearchField