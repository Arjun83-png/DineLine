let dropdown = document.querySelectorAll(".dropdown select");

for (let i of dropdown) {
    for (let country in countryList) {
        let option = document.createElement("option");
        option.innerText = country;
        option.value = country;
        i.append(option);
    };
    i.addEventListener("change", (event) => {
        updateFlag(event.target);
    } )
};

const updateFlag = (element) => {
    let country = element.value;
    let country_code = countryList[country];
    let source = `https://flagsapi.com/${country_code}/flat/64.png`;
    let image = element.parentElement.parentElement.querySelector("img");
    image.src = source;
}

const convert = async() => {
    let amount = document.querySelector("input").value;
    let current_value = document.querySelector(".from select");
    let to = document.querySelector(".to select");
    let url = `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${current_value.value.toLowerCase()}/${to.value.toLowerCase()}.json`;
    let fetch = await fetch(url);
    response = await fetch.json();
    get_data = response[to.value.toLowerCase()];
    let message = document.querySelector(".message");
    new_amount = amount * get_data;
    message.innerText = `${amount}${current_value} = ${new_amount}${to}`;
};

button = document.querySelector("button");

button.addEventListener("click", () =>{
    convert();
});