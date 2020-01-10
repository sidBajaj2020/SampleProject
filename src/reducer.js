const initialState = {
    loggedIn: false, 
    userName: undefined,
    kanyeQuote: "Short ribs beef turducken, pork chop tri-tip capicola pork belly meatloaf chicken ", 
    singlePlayDateProfiles: [
        {
            url: "https://pbs.twimg.com/profile_images/288477152/Bart_Simpson_400x400.png",
            name: "Bart Simpson", 
            hobbies: "Skateboarding, Watching Television"
        }, 
        {
            url: "https://upload.wikimedia.org/wikipedia/en/1/10/Winniethepooh.png",
            name: "Winnie the Pooh", 
            hobbies: "Hiking, Lazing, Sleeping"
        }, 
        {
            url: "https://i.pinimg.com/originals/a1/69/4e/a1694edeb4ea2f957bd461e60e05d292.png", 
            name: "Dalmation", 
            hobbies: "Playing fetch, Walking"
        }, 
        {
            url: "https://i.pinimg.com/originals/a1/69/4e/a1694edeb4ea2f957bd461e60e05d292.png", 
            name: "Dalmation", 
            hobbies: "Playing fetch, Walking"
        }, 
        {
            url: "https://pbs.twimg.com/profile_images/288477152/Bart_Simpson_400x400.png",
            name: "Bart Simpson", 
            hobbies: "Skateboarding, Watching Television"
        }, 
        {
            url: "https://upload.wikimedia.org/wikipedia/en/1/10/Winniethepooh.png",
            name: "Winnie the Pooh", 
            hobbies: "Hiking, Lazing, Sleeping"
        }, 
    ], 
    groupPlayDateProfiles: [
        {
            url: "https://pmcvariety.files.wordpress.com/2013/10/mighty-morphin-power-rangers.jpg?w=1000", 
            name: "Power Rangers", 
            hobbies: "Fighting Evil"
        }, 
        {
            url: "https://images-na.ssl-images-amazon.com/images/I/811KEbZlORL.png", 
            name: "Mystery Incorporated", 
            hobbies: "Debunking hauntings"
        }, 
        {
            url: "https://m.media-amazon.com/images/M/MV5BMDk3ODcxOWMtZmFmOC00MDMzLWExNTctYmM4MmQyNjNiOTYzXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_UY268_CR9,0,182,268_AL_.jpg", 
            name: "Kids Next Door", 
            hobbies: "Emancipating Kids from Adult Tyranny"
        }, 
        {
            url: "https://images-na.ssl-images-amazon.com/images/I/811KEbZlORL.png", 
            name: "Mystery Incorporated", 
            hobbies: "Debunking hauntings"
        }, 
        {
            url: "https://m.media-amazon.com/images/M/MV5BMDk3ODcxOWMtZmFmOC00MDMzLWExNTctYmM4MmQyNjNiOTYzXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_UY268_CR9,0,182,268_AL_.jpg", 
            name: "Kids Next Door", 
            hobbies: "Emancipating Kids from Adult Tyranny"
        }, 
        {
            url: "https://pmcvariety.files.wordpress.com/2013/10/mighty-morphin-power-rangers.jpg?w=1000", 
            name: "Power Rangers", 
            hobbies: "Fighting Evil"
        }
    ], 
    supervisorsAvailable: [
        {
            url: "https://upload.wikimedia.org/wikipedia/en/2/21/Web_of_Spider-Man_Vol_1_129-1.png", 
            name: "Spider Man", 
            hobbies: "Photography"
        }, 
        {
            url: "https://upload.wikimedia.org/wikipedia/en/2/21/Web_of_Spider-Man_Vol_1_129-1.png", 
            name: "Spider Man", 
            hobbies: "Rock Climbing"
        }, 
        {
            url: "https://upload.wikimedia.org/wikipedia/en/2/21/Web_of_Spider-Man_Vol_1_129-1.png", 
            name: "Spider Man", 
            hobbies: "Role Playing"
        }
    ]
}; 

export default function (state = initialState, action){
    if (action.type === 'LOGIN_USER'){
        return {...state, loggedIn: true, userName:action.userName}
    } else if (action.type === 'LOGOUT_USER'){
        return {...state, loggedIn: false, userName: undefined}
    } else if (action.type === 'GENERATE_NEW_QUOTE'){
        return {...state, kanyeQuote: action.quote}
    }
    return state; 
}