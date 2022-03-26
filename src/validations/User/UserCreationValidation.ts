import * as yup from "yup"

const UserCreationValidation = yup.object().shape({

    body: yup.object().shape({
        name: yup.string().required("Informe seu nome."),
        email: yup.string()
                .email("Informe um e-mail válido")
                .required("Informe seu e-mail"),
        password: yup.string()
                    .required("Informe sua senha")
                    .min(6,"Senha mínima de 6 digitos"),
        passwordConfirmation: yup.string()
                                .required("Informe a confirmação de senha")
                                .oneOf([yup.ref("password"), null], "As senhas não conferem")
    
    }),
     /*params: yup.object({
        todo
      }),
      query: yup.object({
        todo
      }),
      */
      

    
})

export {UserCreationValidation}
