import { useState } from "react"


const AddCategoryForm = ()=> {
    
    const[fields,setfields]= useState ({name:"",slug:""});

    const handleSubmit = (e)=> {
        e
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="">Nombre</label>
                <input type="text" name="name" value={fields.name}/>
            </div>
            <div>
                <label htmlFor="">Slug</label>
                <input type="text" />
            </div>
            <button>Agregar categoria</button>
        </form>
    );
}

export {AddCategoryForm};