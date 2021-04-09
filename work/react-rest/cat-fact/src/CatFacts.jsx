import './App.css';

function CatFacts({ facts, start, size }) {
    // const formattedFacts = facts.slice(start, start+size).map( 
    //     (fact) => (<li key={fact}>{fact}</li>));
   
    const factList = facts.slice(start, start+size);
    const formattedFacts = [];
    for(const fact of factList) {
        formattedFacts.push(<li key={fact}>{fact}</li>);
    };

    let headerContent = '';

    if(facts) {
        headerContent = "Showing Cat Facts:"
    } else {
        headerContent = "0 fact loaded"
    }
    return(
        <div id="cat-facts">
        <p className="header">{headerContent} </p>
        <ol className="facts">{formattedFacts}</ol>
        </div>
    );
}
export default CatFacts;