import mongoose from 'mongoose';


export const ConnectDB = async () => {
  await mongoose.connect(
    'mongodb+srv://hassaineray:0000@cluster0.jw5uzvp.mongodb.net/todo-app'
  )
  console.log('DB Connected')
  
}


