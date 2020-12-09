const giveError = () => {
    throw "Something went wrong!!!";
};

try {
    giveError();
} catch (err) {
    console.log("There was an issue and it is: " + err);
}
