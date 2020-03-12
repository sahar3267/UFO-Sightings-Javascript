const tableData = data
const tbody = d3.select('tbody')

function buildTable(data) {
    tbody.html('')  // Clear existing data

    data.forEach(row => {
        const currentRow = tbody.append('tr')  // append row
        Object.values(row).forEach(value => {
            const cell = currentRow.append('td')
            cell.text(value)
        })
    })
}

const handleClick = () => {
    d3.event.preventDefault()
    const city = d3.select('#City').property('value')

    const date = d3.select('#datetime').property('value')
    let filteredData = tableData;

    if (date){
        filteredData = filteredData.filter(row => row.datetime == date)
    }
    if (city){
        filteredData = filteredData.filter(row => row.city == city)
    }
    buildTable(filteredData)
}
buildTable(tableData)
d3.selectAll('#filter-btn').on('click', handleClick)
// buildTable(tableData)