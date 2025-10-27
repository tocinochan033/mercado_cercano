// src/supabaseClient.js

//EL API DONDE SE CONECTA CON LA BASE DE DATOS DE SUPABASE. 
//TENGO ENTENTENDIDO QUE YA NO OCUPAS REALIZAR NINGUNA MODIFICACION
//ASI QUE NO TIENENE QUE TOCAR NADA DE AQUI, YA TODA LA CHAMBA SE REALIZO
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

export const supabase = createClient(supabaseUrl, supabaseAnonKey)