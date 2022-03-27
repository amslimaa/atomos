import * as yup from "yup"

const SessionCreationValidation = yup.object().shape({

    body: yup.object().shape({
        email: yup.string()
                .email("Informe um e-mail válido")
                .required("Informe seu e-mail"),
        password: yup.string()
                    .required("Informe sua senha")
                    .min(6,"Senha mínima de 6 digitos"),
    }),
     /*params: yup.object({
        todo
      }),
      query: yup.object({
        todo
      }),
      */
      

    
})

export {SessionCreationValidation}
