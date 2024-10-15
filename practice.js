class Freelancer {
    constructor(name, occupation, startingPrice){
        this.name = name;
        this.occupation = occupation;
        this.startingPrice = startingPrice;
    }
}
const freelancers = [
    {name: 'Jacobi', occupation: 'Dog Trainer', startingPrice: 365}
]

const freelancerArr = []
freelancerArr.push(new Freelancer('Bernie Bear', 'Dog', 100));
freelancerArr.push(new Freelancer('Luanne', 'Dog', 100));
freelancerArr.push(new Freelancer('Mr. Pickles', 'Dog', 100));
freelancerArr.push(new Freelancer('Reese Cup', 'Dog', 100));
freelancerArr.push(new Freelancer('Sock it to em Shadow', 'Dog', 100));
freelancerArr.push(new Freelancer('Hit em up Halo', 'Dog', 100));
freelancerArr.push(new Freelancer('Frische', 'Dog', 100));

let i = 0;


function updateAverage(){
let sum = freelancers.reduce((sum, free) => sum + free.startingPrice, 0);
    let average = sum / freelancers.length;
    average = Math.floor(average);
    const averageDisplay = document.querySelector("#averageStartingPrice");
    averageDisplay.innerText = average;
}


function render(){
    if(i == freelancerArr.length){
            clearInterval(addFreelancerIntervalId);
    }
    const table = document.querySelector('.table');
    const freelancerDiv = document.createElement('div');
    freelancerDiv.classList.add("freelancer");
    table.appendChild(freelancerDiv);
    const nameSpan = document.createElement('span');
    nameSpan.textContent = `${freelancerArr[i].name}`;
    const occupationSpan = document.createElement('span');
        occupationSpan.textContent = `${freelancerArr[i].occupation}`;
        const priceSpan = document.createElement('span');
        priceSpan.textContent = `$${freelancerArr[i].startingPrice}`;
    freelancerDiv.appendChild(nameSpan);
    freelancerDiv.appendChild(occupationSpan);
    freelancerDiv.appendChild(priceSpan);

freelancers.push(freelancerArr[i]);
    updateAverage();
}

const addFreelancerIntervalId = setInterval(() => {
    render();
    i++;
}, 1500);