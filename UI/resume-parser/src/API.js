export const  AuthLogin = (username,password)=>{return `http://127.0.0.1:8000/Login?username=${username}&password=${password}`}

export const  AuthRegister = (firstName,lastName,UserName,password)=>
{return `http://127.0.0.1:8000/Register?FirstName=${firstName}&LastName=${lastName}&UserName=${UserName}&Password=${password}`}

export const  AuthCheckUser = (keyword)=>
{return `http://127.0.0.1:8000/CheckUsers?keyword=${keyword}`}

