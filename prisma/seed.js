const bcrypt = require('bcryptjs')
const {PrismaClient} = require('@prisma/client')
const prisma = new PrismaClient()

const password = bcrypt.hashSync('123456')
const userData = [
  { firstName : 'Sarawut',lastName:'phanphala',
  address:'21/1 Village No. 11, Nonburi Subdistrict, Sahatsakhan District, Kalasin Province 46140 ',
   email: 'sarawutphan1@gmail.com',username:'wut332', password: password ,phone:'0837747652'  }

]

const run = async () => {
  await prisma.user.createMany({
    data : userData
  })
}

run()