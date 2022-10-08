const React = require('react')
const Default = require('../components/Layout')

function Show({ inventory }) {
    return (
        <Default>
            <h3>{inventory.company}</h3>
            <h3>{inventory.name}</h3>
            <h3>{inventory.type}</h3>
            <h3>{inventory.size}</h3>
            <h3>{inventory.sku}</h3>
            <h3>{inventory.qty}</h3>
            <form action={`/inventory/${inventory.id}?_method=DELETE`} method="POST">
                <input type='submit' value="DELETE" />
            </form>

            <li><a href="/HomePage">Home Page</a></li>
        </Default>
    )
}

module.exports = Show
