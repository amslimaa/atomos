import AdminJS from 'adminjs';
import { Database, Resource } from '@adminjs/prisma';
import { PrismaClient } from '@prisma/client';
import { DMMFClass } from '@prisma/client/runtime'

const prisma = new PrismaClient();

const dmmf = ((prisma as any)._dmmf as DMMFClass)

import AdminJSExpress from '@adminjs/express';

AdminJS.registerAdapter({ Database, Resource })

const contentParent = {
  name: 'Recursos',
  icon: 'User',
}


const adminJs = new AdminJS({
  resources: [{
    resource: { model: dmmf.modelMap.Colaborator, client: prisma },
    options: {parent: contentParent, 
      listProperties: [ 'cod', 'name', 'birth', 'cpf', 'clt', 'address','occupation', 'salt', 'coordinator' ]},
  },
   {
    resource: { model: dmmf.modelMap.Address, client: prisma },
    options: {parent: contentParent, listProperties: ['cep', 'street', 'number', 'Reference']},
  }, {
    resource: { model: dmmf.modelMap.Occupation, client: prisma },
    options: {parent: contentParent},
  }, {
    resource: { model: dmmf.modelMap.Sector, client: prisma },
    options: {parent: contentParent},
  }, {
    resource: { model: dmmf.modelMap.Record, client: prisma },
    options: {parent: contentParent},
  }, {
    resource: { model: dmmf.modelMap.User, client: prisma },
    options: {parent: contentParent},
  }
],
  databases: [],
  rootPath: '/admin',
  branding: {
    companyName: 'Cronos',
  }
  
  
})

const routerBro = AdminJSExpress.buildRouter(adminJs)

export {adminJs}
export {routerBro}