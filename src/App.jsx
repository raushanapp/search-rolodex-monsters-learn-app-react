import React, { Component } from "react";
import { CardList } from "./components/card-list/card-list-components";
import SearchBox from "./components/search-box/search-box.components";
class App extends Component {
    constructor() {
        super();
        this.state = {
            string: "Learn React",
            monsters: [],
            searchField:'',
        };
        // this.handleChange = this.handleChange.bind(this); instead of using arrow this peice of code getting removed

    }
    componentDidMount() {
        fetch('https://dummyjson.com/users')
            .then((response) => response.json())
            .then((users) => this.setState({ monsters: users }))
            .catch((err) => err);
    }
    //  arrow where the define rin itself that 
    handleChange = e => {
        this.setState({ searchField: e.target.value })
    }

    render() {
        const { monsters, searchField } = this.state;
        if (!monsters.users) return 
        const filterMonster = monsters && monsters?.users?.filter(
            (monster) => monster.username.toLowerCase().includes(searchField.toLowerCase())
        );
        return (
            <div className="App">
                <p style={{ justifyContent: "center", width: "100%", display: 'flex', fontSize: "2.5rem", fontFamily: "fantasy", fontWeight: "900" }}>Monster Rolodex</p>
                <div style={{ width: "100%", display: "flex", justifyContent: "center", alignItems: "center", height: "5rem" }}>
                    <SearchBox placeholder="search monster" handleOnChange={this.handleChange} />
                </div>
                <CardList monsters={filterMonster} />
            </div>
        )
    }
}
export default App;