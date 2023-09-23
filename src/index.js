const validJSON = '{"name": "Mango", "age": 3}';
const invalidJSON ='{eror}';

function checkValid(obj) {
    try { 
        return JSON.parse(obj);

    } catch(error) {
        console.log('eror')
    }
}

checkValid(validJSON)
checkValid(invalidJSON)