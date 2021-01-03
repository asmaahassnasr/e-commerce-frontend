import React from "react";
import Layout from '../Core/Layout'
import {API} from '../config'

const Signup = () => {
    return (
            <Layout title=' SignUp Page' description="SignUp for our App">
               {API}
            </Layout>
    )
}

export default Signup;