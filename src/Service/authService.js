import { supabase } from "../../supabaseClient";

//registro de usuarios, pronto el de la empresa pero la cague y no puse algo en la base de datos que tendre que modificar un huevo
//help me please 😎

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
