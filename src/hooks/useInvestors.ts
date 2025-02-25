import * as api from '@/services/api.service';

export function useInvestors() {



    const getAll = async () =>{
    try {
        const data = await api.default.getAll('investors');
     
      return data;
    } catch (error) {
        throw error;
    }
    }
    const get_by_id = async (id:string)=>{
        try {
            const data = await api.default.getById('investors',id);
            return data;
        } catch (error) {
            throw error;
        }
    }

    return {getAll,get_by_id}
}