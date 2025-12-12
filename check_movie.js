const mongoose = require('mongoose')

const uri =
  'mongodb+srv://mia618708_db_user:f55124114@cluster0.lfhircn.mongodb.net/TubesAPI?retryWrites=true&w=majority&appName=Cluster0'

async function checkMovie() {
  try {
    await mongoose.connect(uri)
    console.log('Connected to MongoDB')

    const Movie = mongoose.model('Movie', new mongoose.Schema({}, { strict: false }), 'movies')
    const movie = await Movie.findById('68f6e1f77ef521bff540f0cd')

    if (movie) {
      console.log('Movie found:', {
        _id: movie._id,
        title: movie.title,
        createdBy: movie.createdBy,
      })
    } else {
      console.log('Movie not found')
    }

    await mongoose.disconnect()
  } catch (error) {
    console.error('Error:', error)
  }
}

checkMovie()
