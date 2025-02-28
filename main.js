// fetch("https://jsonplaceholder.typicode.com/todos");
//  then(response => response.json())
//     .then(data => {
//         data.map(item => {
//             const table = document.createElement('table');
//             table.className = 'table';
//             table.innerHTML = `
//                 <tr>
//                     <td>${item.id}</td>
//                     <td>${item.title}</td>
//                     <td>${item.completed}</td>
//                 </tr>
//             `;
//             wrapper.appendChild(table);
//         });

//         console.log(data);
//     });

// const wrapper = document.querySelector('.wrapper');
const wrapper = document.querySelector('.wrapper');

fetch('https://jsonplaceholder.typicode.com/todos')
    .then(response => response.json())
    .then(data => {
        data.forEach(item => {
            const table = document.createElement('table');
            table.className = 'table';
            table.innerHTML = `
                <tr>
                    <td>${item.id}</td>
                    <td>${item.title}</td>
                    <td class="${item.completed ? 'completed-true' : 'completed-false'}">
                        ${item.completed}
                    </td>
                </tr>
            `;
            wrapper.appendChild(table);
        });

        console.log(data);
    });
