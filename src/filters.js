const searchFilter = ''

const getFilter = () => searchFilter

// when a user types into the serach field, this will run
const setFilter = (searchText) => {
    if (typeof searchText === 'string') {
        searchFIlter = searchText
    }
}

export { getFilter, setFilter }