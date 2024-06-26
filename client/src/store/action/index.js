import axios from 'axios';

const API_KEY='';
const BASE_URL='';

export const getWebQA = ()=>async dispatch =>{
  try {
    const result = await axios.get(`
    mongodb+srv://xuanduong01vn:xd123456@cluster0.rgrpavy.mongodb.net/webQA?retryWrites=true&w=majority&appName=Cluster0`
    );
    dispatch({type: GET_WEB_QA, payload:result.data.result});
  } catch (err) {
    console.log(err);
  }
}