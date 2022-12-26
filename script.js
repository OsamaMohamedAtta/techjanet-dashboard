let cartona = ''

async function getData(){
    const response = await fetch('https://kind-pink-anemone-tutu.cyclic.app/getAllOrders');
    const data = await response.json();
    const res = await fetch('https://kind-pink-anemone-tutu.cyclic.app/getAllVisitor');
    const visitor = await res.json();
    dispalyData(data.orders, visitor.visitor)
}

function dispalyData(allData, visitor){
    cartona = `<p>${visitor[0].number_of_visitors}</p>`
    for (let index = 0; index < allData.length; index++) {
        cartona += `<p style="font-size: 1.2rem;">${allData[index].full_name}</p>
        <div style="height: 2px; width: 100%; background-color: black;"></div>`
    }

    document.getElementById('container').innerHTML = cartona
}

getData()