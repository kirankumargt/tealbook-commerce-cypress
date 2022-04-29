export default class HeaderComponents{

    private static readonly Selectors={
        searchInput:'input[placeholder="Search"]'
    }

    static performSearch(searchText:string){
    cy.setText(this.Selectors.searchInput,`${searchText}{enter}`);
    }
}