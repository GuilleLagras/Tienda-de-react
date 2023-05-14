import {useForm} from "react-hook-form";
import './formulario.css'




const Formulario = () => {

    const { register, formState : {errors} , watch, handleSubmit }= useForm();

    const onSubmit = (data)=> {
        console.log(data);
    }

    const incluirtelefono = watch('incluirtelefono');

    return(
        <div className="divForm">
            <h2>Formulario</h2>
            <form  className='formularioContainer' action="" onSubmit={handleSubmit (onSubmit)}>
                <div>
                    <label>Nombre</label>
                    <input type="text" {...register('nombre', {required:true} )} />
                    {errors.nombre?.type === 'required' && <p>El campo nombre es quererido</p>}
                </div>
                <div>
                    <label>Apellido</label>
                    <input type="text" {...register('apellido', {required:true})}/>
                    {errors.apellido?.type === 'required' && <p>El campo apellido es quererido</p>}
                </div>
                <div>
                    <label>Direccion</label>
                    <input type="text" {...register('direccion', {required:true})}/>
                    {errors.direccion?.type === 'required' && <p>El campo direccion es quererido</p>}
                </div>
                <div>
                    <label>Edad</label>
                    <input type="text" {...register('edad', {required:true})}/>
                    {errors.edad?.type === 'required' && <p>El campo Edad es quererido</p>}
                </div>
                <div>
                    <label>Incluir telefono?</label>
                    <input type="checkbox" {...register('incluirtelefono')}/>
                </div>
                {incluirtelefono && (
                    <div>
                    <label>telefono?</label>
                    <input type="text" {...register('telefono')}/>
                </div>
                )}
                
                <div>
                    <label>E-mail</label>
                    <input type="email" id="" {...register('email')}/>
                </div>
                <div>
                    <label>Pais</label>
                    <select  {...register('pais')}>
                        <option value="ar">Argentina</option>
                        <option value="ch">Chile</option>
                        <option value="br">Brasil</option>
                        <option value="cl">Colombia</option>
                        <option value="ve">Venezuela</option>
                    </select>
                </div>
                <input type="submit" value="Enviar" />
            </form>
        </div>
    );
}

export default Formulario;