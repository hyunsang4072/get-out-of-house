export default function Stats({ items }) {
    if (!items.length) {
        return (
            <p className='stats'>
                <em>
                    🗿🗿🗿Add items to your packing list 🗿🗿🗿
                </em>
            </p>
        );
    }

    const numItems = items.length;
    const numPacked = items.filter(item => item.packed).length;
    const percentage = (isNaN(numItems) || isNaN(numPacked)) ? 0 : Math.round((numPacked / numItems) * 100);

    return (
        <footer className='stats'>
            <em>
                {percentage === 100 ? "You're ready to GO!!! ✈️"
                    : `You have ${numItems} items on your list, and you already packed ${numPacked} (${percentage}%)`}
            </em>
        </footer>
    );
}
