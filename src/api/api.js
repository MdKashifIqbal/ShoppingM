const BASE_URL = "http://localhost:3000/api";



export function signUpApi(userDetails){
     fetch(`${BASE_URL}/signup`, {
      method: "POST",
      body: JSON.stringify(userDetails),
      headers: {
        "Content-Type": "application/json",
      },
    })
}

export async function loginApi(userDetails){
    try {
        const res =  await fetch(`${BASE_URL}/login`,{
            method:"POST",
            body:JSON.stringify(userDetails),
            headers:{
                "Content-Type":"application/json"
            }
        })
        const data = await res.json()
        return data
    } catch (error) {
        return error.message
    }
}


