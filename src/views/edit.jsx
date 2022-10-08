const React = require('react')
const Default = require('../components/Layout')

function Edit({ inventory }) {
    return (
        <Default>
            <h2>Edit a shoe</h2>
            <form action={`/inventory/${inventory.id}?_method=PUT`} method="POST">
                <label htmlFor="company">Company</label>
                <input
                    type="text"
                    name="company"
                    id="company"
                    required
                    defaultValue={inventory.company}
                />
                <label htmlFor="name">Name</label>
                <input
                    type="text"
                    name="name"
                    id="name"
                    required
                    defaultValue={inventory.name}
                />
                <label htmlFor="type">Type</label>
                <input
                    type="text"
                    name="type"
                    id="type"
                    required
                    defaultValue={inventory.type}
                />
                <label htmlFor="size">Size</label>
                <input
                    type="text"
                    name="size"
                    id="size"
                    required
                    defaultValue={inventory.size}
                />
                <label htmlFor="sku">SKU</label>
                <input
                    type="text"
                    name="sku"
                    id="sku"
                    required
                    defaultValue={inventory.sku}
                />
                <label htmlFor="qty">QTY</label>
                <input
                    type="Number"
                    name="qty"
                    id="qty"
                    defaultValue={inventory.qty}
                />
                <br />
                <input type="submit" />
            </form>
        </Default>
    )
}

module.exports = Edit