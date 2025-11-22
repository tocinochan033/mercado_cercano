import { supabase } from "../../supabaseClient";

//registro de usuarios, pronto el de la empresa pero la cague y no puse algo en la base de datos que tendre que modificar un huevo
//help me please 😎
//actualizacion ya se implemento el registro de las empresas  HELLLL YEAHHHHH!!🔥🦅🔥🦅🦅🔥🦅🦅🦅🔥🦅🔥

//--------------------------------------------------------------------------------------------------------------------------
//registro de los usuarios (clientes normales)
export async function registerUser({
    email,
    password,
    nombre,
    apellido,
    telefono,
    descripcion
}) {
    try {
        //registrar en Supabase Auth
        const { data: authData, error: authError } = await supabase.auth.signUp({
            email,
            password
        });

        if (authError) throw authError;

        const userId = authData.user?.id;
        if (!userId) {
            throw new Error("El usuario debe confirmar su correo antes de continuar.");
        }

        //registrar datos en tabla
        const { error: rpcError } = await supabase.rpc("handle_new_user_signup", {
            new_user_id: userId,
            new_nombre: nombre,
            new_apellido: apellido,
            new_email: email,
            new_telefono: telefono,
            new_descripcion: descripcion
        });

        if (rpcError) throw rpcError;

        return { success: true, userId };

    } catch (error) {
        return { success: false, error };
    }
}

//--------------------------------------------------------------------------------------------------------------------------
//REGISTRO PARA LAS COMPAñIAS 

export async function registerCompany({
  nombre,
  descripcion,
  direccion,
  correo,
  contrasena
}) {
  try {
    const { data: authData, error: authError } = await supabase.auth.signUp({
      email: correo,
      password: contrasena
    });

    if (authError) {
      return { success: false, message: authError.message };
    }

    const userId = authData.user.id;

    const { error: dbError } = await supabase.from("locales").insert([
      {
        idlocal: userId,
        idrol: 1, // empresa
        nombre,
        descripcion,
        direccion,
        fecharegistro: new Date()
      }
    ]);

    if (dbError) {
      return { success: false, message: dbError.message };
    }

    return { success: true };
  } catch (err) {
    return { success: false, message: err.message };
  }
}


//--------------------------------------------------------------------------------------------------------------------------
//login de los usuarios (cliente/empresa)

export async function loginUser(email, password) {
  try {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password
    });

    if (error) throw error;

    return { success: true, user: data.user };

  } catch (err) {
    return { success: false, message: err.message };
  }
}
