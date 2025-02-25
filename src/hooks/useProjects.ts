import * as api from '@/services/api.service';

export function useProjects() {
 


    const getAllProjects = async () =>{
    try {
        const projects = await api.default.getAll('projects');
  
      return projects;
    } catch (error) {
        throw error;
    }
    }
    const get_a_project = async (id:string)=>{
        try {
            const project = await api.default.getById('projects',id);
            return project;
        } catch (error) {
            throw error;
        }
    }

    return {getAllProjects,get_a_project}
}