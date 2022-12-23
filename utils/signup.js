import axios from 'axios';


async function signup(fullname,designation,orgainization,fathername,password,mobile,email,aadhar,dob){


    try{
        const r = await axios.post(`http://192.168.11.113:5001/api/register`,{
            fullname:fullname,
            designation:designation,
            orgainization:orgainization,
            fathername:fathername,
            password:password,
            mobile:mobile,
            email:email,
            aadhar:aadhar,
            dateofbirth:dob
        })

        return r.data
    }
    catch(e){
        console.log(e)
        if(e.response && e.response.data){
            return e.response.data
        }
        return false
    }
}

export default signup