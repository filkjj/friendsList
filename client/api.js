
const api = {

    getFriendsList : async () =>{
        const getJson = await fetch(`/api/friends`);
        return await getJson.json(); 
    },

    deleteUser : async (gotId) =>{
        const deleteRequest = await fetch(`/api/friends/${gotId}`,
            {method:'delete'}
        );
        
    },

    postUser : async (gotId) =>{
        const deleteRequest = await fetch(`/api/friends/${gotId}`,
            {method:'post'}
        );
    },

    putRating : async(gotId,passedNum) =>{
        const putRequest = await fetch(`/api/friends/${gotId}`,
            {method:'put',
            body:passedNum}
        );
    }

}

module.exports = { api };