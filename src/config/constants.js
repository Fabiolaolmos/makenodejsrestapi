const devConfig = { MONGO_URL: 'mongodb://localhost:27017/makenodejsrestapi-dev' };
const testConfig = { MONGO_URL: 'mongodb://localhost:27017/makenodejsrestapi-test' };
const prodConfig = { MONGO_URL: 'mongodb://localhost:27017/makenodejsrestapi-prod' };
// eslint-disable-next-line no-undef
const defaultConfig = { PORT: process.env.PORT || 3000 };
//La función envConfig(env) sirve para obtener la configuración donde estemos trabajando
function envConfig(env) {
  switch (env) {  // En esta parte indica donde se esta ejecutando
   case 'development':
      return devConfig;
    case 'test':  //codigo para entorno de prueba
      return testConfig;
    default:
      return prodConfig;
  }
}
export default {
  ...defaultConfig,
  // eslint-disable-next-line no-undef
  ...envConfig(process.env.NODE_ENV),
};
