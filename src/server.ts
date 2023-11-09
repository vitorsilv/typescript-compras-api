import { z } from 'zod'

const userSchema = z.object({
    name: z.string().min(3, {message: 'O nome precisa de 3 caracteres.'}),
    age: z.number().min(10, {message: 'Precisa ser mairo de 10 anos.'})
})

type User = z.infer<typeof userSchema>


function saveUserToDatabase(user: User){
    const { name, age } = userSchema.parse(user)

    console.log(name, age)
}

saveUserToDatabase({name: 'Leonardo', age: 9});