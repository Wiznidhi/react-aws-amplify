import { CognitoUserPool } from "amazon-cognito-identity-js";

 const poolData = {
     UserPoolId: "us-east-2_P3ZGjrRBS",
     ClientId: "7pd89t7rovknl4b8ou9oo58dpt"
 }
 
 export default new CognitoUserPool(poolData); 