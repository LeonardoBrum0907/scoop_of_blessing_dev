const Input = ({ label, placeholder, ...props }) => {
    return (
        <div className="mb-4">
            {/* Label */}
            <label className="block text-yellow-400 text-sm font-bold mb-2">
                {label}
            </label>

            {/* Input */}
            <input
                type="text"
                placeholder={placeholder}
                className="shadow appearance-none border rounded-xl w-full py-4 px-3 text-gray-700 bg-yellow-50 leading-tight focus:outline-none focus:shadow-outline"
                {...props}
            />
        </div>
    )
}

export default Input