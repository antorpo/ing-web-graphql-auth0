import { unstable_getServerSession } from "next-auth/next";
import { authOptions } from "./auth/[...nextauth]";


export default async (req, res) => {
  const session = await unstable_getServerSession(req, res, authOptions);
  if (session) {
    res.send({
      content:
        "Esto es contenido protegido, podrás acceder porque estas en una sesión válida."
    });
  } else {
    res.send({
      error:
        "Debes iniciar sesión para ver el contenido protegido en esta página."
    });
  }
};
