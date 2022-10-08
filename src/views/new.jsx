const React = require('react')
const Default = require('../components/Layout')

function New({ inventory }) {
    return (
        <Default>
            <h2>Add a new shoe</h2>
            <form action="/inventory" method="POST">
                <label htmlFor="company">Company</label>
                <input
                    type="text"
                    name="company"
                    id="company"
                    required
                />
                <label htmlFor="name">Name</label>
                <input
                    type="text"
                    name="name"
                    id="name"
                    required
                />
                <label htmlFor="type">Type</label>
                <input
                    type="text"
                    name="type"
                    id="type"
                    required
                />
                <label htmlFor="size">Size</label>
                <input
                    type="text"
                    name="size"
                    id="size"
                    required
                />
                <label htmlFor="sku">SKU</label>
                <input
                    type="text"
                    name="sku"
                    id="sku"
                    required
                />
                <label htmlFor="qty">QTY</label>
                <input
                    type="text"
                    name="qty"
                    id="qty"
                />
                <br />
                <input type="submit" />
            </form>
            <div className="backButton">
                <a href="/inventory"><button>Go back to the Home Page</button></a>
            </div>

        </Default>
    )
}

module.exports = New
