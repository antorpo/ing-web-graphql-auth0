import prisma from "@config/prisma";
import { signToken } from "@utils/jwt.utils";
import { EjecutarConTry } from "@errors/errorhandler";
import { AplicacionError } from "@errors/aplicacionerror";
import { SucessCodes, ErrorCodes } from "@config/messages";

const generarTokenGraph = async (data: any) => {
  return await EjecutarConTry(async () => {
    const { id, email, isNewUser } = data;

    const clientRole = "1";

    if (isNewUser) {
      await actualizarRol(email, clientRole);
    } 

    const userObj = await obtenerUsuarioPorEmail(email);

    return {
      token: signToken({ userId: id, roleId: userObj?.roleId }),
      userId: id,
      roleId: userObj?.roleId,
    };
  }, SucessCodes.tokenGenerado);
};

const updateUser = async (data: any, auth: any) => {
  return await EjecutarConTry(async () => {
    const { userId, email, name } = data;

    if (auth === null) {
      throw new AplicacionError(
        ErrorCodes.excepcionTokenNulo.code,
        ErrorCodes.excepcionTokenNulo.message
      );
    }

    if (auth.roleId === "1" && auth.userId !== userId) {
      throw new AplicacionError(
        ErrorCodes.excepcionUsuarioActualizar.code,
        ErrorCodes.excepcionUsuarioActualizar.message
      );
    }

    // Actualizar usuario
    const updatedUser = await prisma.user.update({
      where: {
        id: userId,
      },
      data: {
        email,
        name,
        updatedAt: new Date(),
      },
    });

    return updatedUser;
  }, SucessCodes.usuarioActualizado);
};

const getUsers = async () => {
  return await EjecutarConTry(
    async () => await prisma.user.findMany(),
    SucessCodes.usuariosListado
  );
};

// Funciones privadas reutilizables
const obtenerUsuarioPorEmail = async (email: string) => {
  return await prisma.user.findUnique({
    where: {
      email,
    },
  });
};

const actualizarRol = async (email: string, rol: string) => {
  return await prisma.user.update({
    where: {
      email,
    },
    data: {
      roleId: rol,
    },
  });
};

export const UserService = {
  updateUser,
  getUsers,
  generarTokenGraph
};
