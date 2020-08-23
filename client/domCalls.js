const {api} = require('./api');

const tryThis = async ()=>{
    const data = await api.getFriendsList();
    addPostToForm();
    data.forEach(ele=>{
        let parent = document.getElementById('flexForLeft');
        let child = document.createElement('div');
        child.className = "personElement";
        child.id = `${ele.id}`;
        child.textContent = `${ele.name}`;
        child.appendChild(buttonDown(ele));
        child.appendChild(ratingThingy(ele));
        child.appendChild(buttonUp(ele));
        child.appendChild(xbuttonMaker(ele.id));
        parent.appendChild(child);
    });
}

const ratingThingy = ({id, rating}) =>{
    let child = document.createElement('button');
    child.disabled = true;
    child.id = `${id}_rating`;
    child.textContent = rating;
    return child; 
}

const buttonUp = ({id}) =>{
    let child = document.createElement('button');
    child.textContent = '-';
    child.addEventListener('click',()=>{
        var editText = document.getElementById(`${id}_rating`).textContent;
        if((editText)>0){
            //a better way to do this would be to minus and then do a get request to get the new rating to make sure it updated in db properly
            document.getElementById(`${id}_rating`).textContent = +editText - 1;
            api.putRating(id,-1);
        }
    })
    return child; 
}

const buttonDown = ({id}) =>{
    let child = document.createElement('button');
    child.textContent = '+';
    child.addEventListener('click',()=>{
        var editText = document.getElementById(`${id}_rating`).textContent;
        if((editText)<10){
            document.getElementById(`${id}_rating`).textContent = +editText + 1;
            api.putRating(id,+1);
        }
    })
    return child; 
}

const addPostToForm = () =>{
    const getValue = document.getElementById('addFriends');
    const getSubmit = document.getElementById('submitButton');
    getSubmit.addEventListener('click',()=>{
        api.postUser(5);
    })
}

const xbuttonMaker = (personID)=>{
    let child = document.createElement('button');
    child.textContent = 'x';
    child.addEventListener('click', async ()=>{
        api.deleteUser(personID);
        document.getElementById(personID).parentNode.removeChild(document.getElementById(personID));
    })
    return child;
}


module.exports = {tryThis};