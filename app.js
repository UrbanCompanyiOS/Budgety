
// BudgetController
var BudgetController = (function () {

    //...

})();


// UIController
var UIController = (function () {

    //...

})();


// Global App Controller
var Controller = (function (budgetController, uiController) {

    document.querySelector('.add__btn').addEventListener('click', function () {

        //...

    });

    document.addEventListener('keypress', function (event) {
        if (event.code === 'Enter') {
            //...
        }
    });

})(BudgetController, UIController);
