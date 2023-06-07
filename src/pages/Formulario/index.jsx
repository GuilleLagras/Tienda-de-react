import { useForm } from "react-hook-form";
import './formulario.css'




const Formulario = () => {

    const { register, formState: { errors }, watch, handleSubmit } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    }

    const incluirtelefono = watch('incluirtelefono');

    return (
        <div className="divForm">
            <h2>Formulario de registro</h2>
            <form className='formularioContainer' action="" onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <input type="text"  placeholder="Ingrese su nombre" className="labelForm" {...register('nombre', { required: true })} />
                    {errors.nombre?.type === 'required' && <p>El campo nombre es requerido</p>}
                </div>
                <div>
                    <input type="text" placeholder="Ingrese su Apellido" className="labelForm"{...register('apellido', { required: true })} />
                    {errors.apellido?.type === 'required' && <p>El campo apellido es requerido</p>}
                </div>
                <div>
                    <input type="text" placeholder="Ingrese su Direccion" className="labelForm" {...register('direccion', { required: true })} />
                    {errors.direccion?.type === 'required' && <p>El campo direccion es requerido</p>}
                </div>
                <div>
                    <input type="text" placeholder="Ingrese su edad" className="labelForm" {...register('edad', { required: true })} />
                    {errors.edad?.type === 'required' && <p>El campo Edad es requerido</p>}
                </div>
                <div>
                    <label className="formTelefono">Incluir telefono?</label>
                    <input type="checkbox" placeholder="Ingrese su Telefono" {...register('incluirtelefono')} />
                </div>
                {incluirtelefono && (
                    <div>
                        <input type="text" className="labelForm" placeholder="Ingrese su telefono"{...register('telefono')} />
                    </div>
                )}

                <div>
                    <input type="email" id="" className="labelForm" placeholder="Ingrese su E-mail"{...register('email')} />
                </div>
                <div>
                        <input type="password" className="labelForm" placeholder="Ingrese su contraseña"{...register('password')} />
                    </div>
                <div>
                    <label className="formPais">Seleccione su Pais</label>
                    <select className="labelForm"  {...register('pais')}>
                        <option value="ar">Argentina</option>
                        <option value="ch">Chile</option>
                        <option value="br">Brasil</option>
                        <option value="cl">Colombia</option>
                        <option value="ve">Venezuela</option>
                    </select>
                </div>
                <input type="submit" className="botonEnviar" value="Enviar" />
                <p>
                    <a href="#">¿Ya tienes una cuenta ?</a>
                </p>
            </form>
        </div>
    );
}

export default Formulario;