export default function Endpoints() {
  return (
    <div id="endpoints">
      <ul>
        <li>[POST] /register → Crear un usuario en la BBDD</li>
        <li>[POST] /login → Envío de datos para loguear</li>
        <li>[🔑][GET] /profile → Datos del usuario logueado</li>
      </ul>
    </div>
  );
}
