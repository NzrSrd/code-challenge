import React from 'react';
import '../App.css';
import algoliasearch from 'algoliasearch/lite';
import { InstantSearch, SearchBox, Hits } from 'react-instantsearch-dom';
import ProductDisplay from "./ProductDisplay";

const Hit = ({hit}) => <ProductDisplay dataHits={hit} />;

const searchClient = algoliasearch(
    'latency',
    '6be0576ff61c053d5f9a3225e2a90f76'
);

class SearchField extends React.Component {
    render() {
        return(
            <InstantSearch
                searchClient={searchClient}
                indexName="ikea"
            >
                <header className="search-field">
                    <SearchBox translations={{placeholder: 'Search your product'}}
                    />
                </header>

                <Hits hitComponent={Hit} />

            </InstantSearch>
        )
    }
}

export default SearchField;