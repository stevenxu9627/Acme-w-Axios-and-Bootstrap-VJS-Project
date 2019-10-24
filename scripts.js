axios.get('https://acme-users-api-rev.herokuapp.com/api/companies')
.then(response => {
    const { data } = response;
    render(data);
    console.log(data);
})
.catch(ex => console.log('FailedgrabbingCompanies', ex.data));

const render = (company) => {
    const html=company.map(comp => {
        let ul = document.createElement('ul');
        let li = document.createElement('li');
        let results = document.querySelector('#results');
        const {id, name, phone, state, catchPhrase, createdAt, updatedAt} = comp;
        ul.classList.add('ul-container');
        li.classList.add('li-companies');
        id.innerHTML = id;
        name.innerHTML = name;
        phone.innerHTML = phone;
        state.innerHTML = state;
        catchPhrase.innerHTML = catchPhrase;
        createdAt.innerHTML = createdAt;
        updatedAt.innerHTML = updatedAt;
        li.append(id);
        ul.append(li);
        ul.append(li);
        
        results.appendChild(ul);
        console.log(id);
        console.log(name);
    });
    // document.querySelector('#results').innerHTML = html;
}