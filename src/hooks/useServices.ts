import * as api from '@/services/api.service';

export function useServices() {



    const getAll = async () =>{
    try {
        const data = await api.default.getAll('services');
     
      return data;
    } catch (error) {
        throw error;
    }
    }
    const get_by_id = async (id:string)=>{
        try {
            const data = await api.default.getById('services',id);
            return data;
        } catch (error) {
            throw error;
        }
    }

    return {getAll,get_by_id}
}