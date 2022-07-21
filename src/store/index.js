import { createStore } from "vuex";                      

                                                         
const store = createStore({                                 
state:{
    notes:[ ],
    selected:[],
    isEmpty:true,
    havaDurumu:
        {
            şehir:"",
            derece:0,
            tarih:"",
            seçilişehir:"",
            icon:"",
            iconName:""
        }
}                                                       
});                                                         
                                                         
export default store;                                         