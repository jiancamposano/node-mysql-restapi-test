
import app from './app.js'

export const PORT = process.env.PORT || 3000;

app.listen(PORT);
console.log(`se esta ejecutando en el PUERTO ${PORT}` );
