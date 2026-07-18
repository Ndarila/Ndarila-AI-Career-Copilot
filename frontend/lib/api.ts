const API =
  process.env.NEXT_PUBLIC_API_URL ||
  "https://ndarila-ai-career-copilot.onrender.com";



// ----------------------
// Token Helper
// ----------------------

function getToken() {

  if (typeof window === "undefined") {
    return null;
  }


  return localStorage.getItem("token");

}





// ----------------------
// API Request Helper
// ----------------------

async function apiRequest(
  endpoint: string,
  options: RequestInit = {}
) {


  const token = getToken();



  const response = await fetch(
    `${API}${endpoint}`,
    {

      ...options,


      headers: {

        "Content-Type": "application/json",


        ...(token
          ? {
              Authorization:
              `Bearer ${token}`,
            }
          : {}),


        ...options.headers,

      },


    }
  );




  let data;


  try {

    data = await response.json();


  } catch {


    data = {};

  }




  if (!response.ok) {


    console.error(
      "API ERROR:",
      data
    );


    throw new Error(
      data.detail ||
      data.message ||
      "API request failed"
    );


  }



  return data;


}







// ----------------------
// Authentication
// ----------------------


export async function login(
  email:string,
  password:string
) {


  return apiRequest(
    "/api/auth/login",
    {

      method:"POST",


      body:JSON.stringify({

        email,

        password,

      }),

    }
  );


}








export async function register(
  username:string,
  email:string,
  password:string
) {


  return apiRequest(
    "/api/auth/register",
    {

      method:"POST",


      body:JSON.stringify({

        username,

        email,

        password,

      }),

    }
  );


}








// ----------------------
// Career AI
// ----------------------


export async function careerAI(
  question:string
) {


  return apiRequest(
    "/api/ai/career",
    {

      method:"POST",


      body:JSON.stringify({

        question,

      }),

    }
  );


}








// ----------------------
// Dashboard
// ----------------------


export async function getDashboardStats() {


  return apiRequest(
    "/api/dashboard/stats",
    {

      method:"GET",

    }
  );


}