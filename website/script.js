const {body}  = document;

function changeBackground(number) {
    
    // Reset css class for body
    body.className = ''
    // console.log(number)
    switch (number) {
        case '1':
            body.classList.add('bg-1');
            // console.log(1)
            break;
        case '2':
            body.classList.add('bg-2');
            // console.log(2)
            break;
        case '3':
            body.classList.add('bg-3');
            // console.log(3)
            break;
        default:
            break
    }
}
