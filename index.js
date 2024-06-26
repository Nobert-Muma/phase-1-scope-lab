// Write your solution in this file!

const leastFavoriteCustomer='Flur';
var customerName='bob';
var bestCustomer='not bob';
function upperCaseCustomerName() {
    console.log(customerName);
    console.log(customerName.toUpperCase());    
    //console.log(customerName);
}
upperCaseCustomerName();
function setBestCustomer() {
    //var bestCustomer='not bob';
    console.log(bestCustomer);
}
setBestCustomer();
function overwriteBestCustomer() {
    bestCustomer='maybe bob';
    return bestCustomer;
}
overwriteBestCustomer();
function changeLeastFavoriteCustomer() {
    leastFavoriteCustomer="nOBERT";
    console.log(leastFavoriteCustomer);
}
changeLeastFavoriteCustomer();
