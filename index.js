function receivesAFunction(spy) {
    return spy();
}

receivesAFunction(function(){return 'abc'});



function returnsANamedFunction() {
    return  function razzled(){return 'razzled'};
}

returnsANamedFunction();
const fn = returnsANamedFunction();
fn();

function returnsAnAnonymousFunction() {

    return function() {return 'you and your homie will be lined in chalk'}
}